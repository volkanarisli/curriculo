import UserInput from "../components/common/UserInput"
import { useState, useEffect } from "react"
import { isStrongPassword } from 'validator';
import { useUser } from '../context/UserInfo'
import ErrorAlert from "../components/common/ErrorAlert"
import Image from "next/image";
import PasswordRecovery from "../assets/img/PasswordRecovery.svg"
import { useRouter } from "next/router";
import { CheckCircleIcon } from "@heroicons/react/outline";

const UpdatePassword = () => {
    const router = useRouter()
    const { logout, user } = useUser()
    const accessToken = router.query.at
    const { updatePasswordWithAccessToken } = useUser()

    const [userInfo, setUserInfo] = useState({
        password: '',
    })
    const [hasError, setHasError] = useState({ ...userInfo })
    const [startValidating, setStartValidate] = useState(false)
    const [passwordSend, setPasswordSend] = useState(false)
    const isFormValid = (obj) => {
        return Object.values(obj).every(value => !value) &&
            Object.values(userInfo).every(value => value) &&
            isStrongPassword(userInfo.password)
    }
    const onInputChange = ({ key, value }) => {
        setStartValidate(true)
        setUserInfo({ ...userInfo, ...{ [key]: value } })
    }
    const updatePassword = async () => {
        if (!isFormValid(hasError)) return
        const { error } = await updatePasswordWithAccessToken(accessToken, userInfo.password)
        if (error) {
            return setHasError({ ...hasError, general: error.message })
        }
        setPasswordSend(true)
    }
    const redirectToLogin = async () => {
        await logout()
        router.push('/login')
    }
    useEffect(() => {
        if (!accessToken) {
            return router.push('/')
        }
        return () => {
            (async () => await logout())()
        };
    }, [accessToken, router, logout])
    useEffect(() => {
        if (!startValidating) return
        if (isStrongPassword(userInfo.password)) {
            setHasError({ password: '' })
        } else {
            setHasError({ password: 'Not Strong Enough' })
        }
    }, [userInfo, startValidating])
    const passwordForm = (
        <div className="space-y-4 min-w-72 max-w-sm lg:w-96">
            <div className="flex flex-col justify-center items-center mb-10">
                <Image src="/logo.svg" alt="Logo" height="80" width="80" />
                <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Reset the Password</h2>

            </div>
            <UserInput onInputChange={e => onInputChange({ key: e.target.name, value: e.target.value, nativeEvent: e.nativeEvent.inputType })}
                hasError={hasError}
                name="password"
                type="password"
                input="password"
                label="New Password"
                showPasswordRules={true}
            />

            <button
                onClick={updatePassword}
                className={`w-full flex justify-center
                                    py-2 px-4 border border-transparent rounded-md shadow-sm
                                    text-sm font-medium text-white bg-blue-600 hover:bg-blue-600
                                    ${isFormValid(hasError) && 'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400'}
                                    ${!isFormValid(hasError) && 'opacity-50 cursor-not-allowed'}`}
            >
                Update Password
            </button>
            {
                hasError.general &&
                <div>
                    <ErrorAlert text={hasError.general} />
                </div>
            }
        </div>

    )

    const passwordSuccess = (
        <>
            <div className="flex flex-col items-center space-y-3">
                <CheckCircleIcon className="w-12 h-12 text-blue-700" />
                <h1 className="text-2xl font-bold">Password Reset!.</h1>
                <p className="text-gray-400 text-xs mt-10">Welcome Back.
                    <a className="text-blue-700 cursor-pointer hover:underline" onClick={redirectToLogin}>Click here to Login</a>
                </p>
            </div>
        </>
    )

    return (
        <div className="flex flex-col sm:flex-row items-center min-h-90vh">
            <div className="hidden lg:flex justify-center w-1/2 bg-blue-700 min-h-inherit">
                <Image src={PasswordRecovery} alt="Login" />
            </div>
            <div className="flex flex-col items-center justify-center py-12 px-0 sm:w-1/2 sm:px-6 lg:flex-none lg:px-20 xl:px-24 h-full">
                <div className="min-w-72 max-w-sm lg:w-96">
                    <div className="flex justify-center">
                        {
                            passwordSend ?
                                passwordSuccess :
                                passwordForm
                        }
                    </div>
                </div>

            </div>

        </div>
    )
}

export default UpdatePassword