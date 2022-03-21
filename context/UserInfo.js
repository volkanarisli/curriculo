import { createContext, useState, useEffect, useContext } from "react";
import { supabase } from "../utils/supabase";
import { useRouter } from "next/router"
import axios from "axios";


const Context = createContext();

const Provider = ({ children }) => {
    const router = useRouter()

    const [user, setUser] = useState(supabase.auth.user())
    const [cookie, setCookie] = useState(false)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const getUserProfile = async () => {
            const sessionUser = supabase.auth.user()
            if (sessionUser) {
                const { data: profile } = await supabase
                    .from('profile')
                    .select('*')
                    .eq('id', sessionUser.id)
                    .single()

                setUser({
                    ...sessionUser,
                    ...profile
                })
            }
        }
        getUserProfile()
        supabase.auth.onAuthStateChange(() => {
            getUserProfile()
        })
    }, [loading])

    useEffect(() => {
        (async () => {
            const session = await supabase.auth.session()
            await axios.post('/api/set-supabase-cookie', {
                event: user ? 'SIGNED_IN' : 'SIGNED_OUT',
                session
            })
            user && setCookie(true)
        })();
    }, [user])

    const loginUser = async (userInfo) => {
        const { user, session, error } = await supabase.auth.signIn(userInfo)
        if (!error) return router.push('/')
        else return error
    }
    const logout = async () => {
        if (!user) return
        const { error } = await supabase.auth.signOut()
        setUser(null)
        if (!error) router.push('/')
    }
    const checkIfAccountAlreadyExistAndOpenCheckout = async (userInfo, Paddle) => {
        setLoading(true)
        const { email, password, ...restInfo } = userInfo
        //Check if account already exist
        const { data: { emailExist } } = await axios.get('/api/checkEmail', { params: { email } })
        if (emailExist) {
            setLoading(false)
            return { message: 'Account Already Exist' }
        }
        Paddle.Checkout.open({
            product: userInfo.subscriptionInfo.id,
            email: email,
            successCallback: (paddleUser) => registerUser(userInfo, Paddle, paddleUser),
        });
        return {}
    }
    const registerUser = async (userInfo, Paddle, paddleUser) => {
        const { email, password, ...restInfo } = userInfo
        const { user: { id: paddleUserId } } = paddleUser
        const { user: signedUpUser, session, error } = await supabase.auth.signUp(
            {
                email,
                password

            },
            {
                data: restInfo
            }
        )
        if (error) return error
        await subscribeUser(restInfo, paddleUserId, signedUpUser.id)
    }
    const subscribeUser = async (restInfo, paddleUserId, userId) => {
        const { billing_period, billing_type, id, name } = restInfo.subscriptionInfo
        const monthDayEnum = {
            1: 30,
            3: 90,
            6: 180,
        }
        const yearDayEnum = {
            1: 360
        }
        const today = new Date()
        const endDateOfSubscription = new Date()
        const subscriptionSpan = () => {
            return billing_type === "month" ?
                monthDayEnum[billing_period] : yearDayEnum[billing_period]
        }
        endDateOfSubscription.setDate(today.getDate() + subscriptionSpan())
        const createUserProfile = await supabase
            .from("profile")
            .update({
                is_subscribed: true,
                paddle_user_id: paddleUserId,
                interval: name,
                end_of_subscription: endDateOfSubscription,
                subscription_plan_id: id
            })
            .eq("id", userId)
        setLoading(false)
        if (!createUserProfile.error) router.push('/')
    }
    const sendRenewPasswordEmail = async (email) => {
        const { data, error } = await supabase.auth.api
            .resetPasswordForEmail(email)
        if (error) return { error }
        else return data
    }
    const updatePasswordWithAccessToken = async (access_token, new_password) => {
        const { error, data } = await supabase.auth.api
            .updateUser(access_token, { password: new_password })
        if (error) return { error }
        else return data
    }
    const setSubscriptionIdOfUser = async () => {
        if (!user) return
        const { subscription_plan_id, paddle_user_id } = user || {};
        if (!cookie) return
        if (user.subscription_id) return
        const { data } = await axios.post('/api/getUserPaymentInfo', { subscription_plan_id, paddle_user_id })
        await supabase
            .from("profile")
            .update({
                subscription_id: data.subscription_id
            })
            .eq("id", user.id);
    }

    const exposed = {
        user,
        loading,
        cookie,
        loginUser,
        logout,
        registerUser,
        sendRenewPasswordEmail,
        updatePasswordWithAccessToken,
        checkIfAccountAlreadyExistAndOpenCheckout,
        setSubscriptionIdOfUser,
    }


    return (
        <Context.Provider value={exposed}>
            {children}
        </Context.Provider>
    )

}

export const useUser = () => useContext(Context)

export default Provider