import { createContext, useState, useEffect, useContext } from "react";
import { supabase } from "../utils/supabase";
import { useRouter } from "next/router"
import axios from "axios";


const Context = createContext();

const Provider = ({ children }) => {
    const router = useRouter()

    const [user, setUser] = useState(supabase.auth.user())
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
    }, [])

    useEffect(() => {
        axios.post('/api/set-supabase-cookie', {
            event: user ? 'SIGNED_IN' : 'SIGNED_OUT',
            session: supabase.auth.session(),
        })
    }, [user])

    const loginUser = async (userInfo) => {
        const { user, session, error } = await supabase.auth.signIn(userInfo)
        // console.log({ user, session, error })
        if (!error) router.push('/')
    }
    const logout = async () => {
        const { error } = await supabase.auth.signOut()
        setUser(null)
        // console.log(error)
        if (!error) router.push('/')
    }

    const registerUser = async (userInfo) => {
        const { email, password, ...restInfo } = userInfo
        // console.log(restInfo)
        const { user, session, error } = await supabase.auth.signUp(
            {
                email,
                password

            },
            {
                data: restInfo
            }
        )
        console.table({ user, session, error })
        const today = new Date()
        const endDateOfSubscription = new Date()
        endDateOfSubscription.setDate(today.getDate() + 90)
        console.log(endDateOfSubscription)
        await supabase
            .from("profile")
            .update({
                is_subscribed: true,
                subscription_id: "123456",
                interval: "3 months",
                end_of_subscription: endDateOfSubscription,
                subscription_plan_id: "496197"
            })
            .eq("id", user.id)


        if (!error) router.push('/')
    }

    const exposed = {
        user,
        loginUser,
        logout,
        registerUser
    }


    return (
        <Context.Provider value={exposed}>
            {children}
        </Context.Provider>
    )

}

export const useUser = () => useContext(Context)

export default Provider