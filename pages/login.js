import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { useUser } from '../context/UserInfo'
import Image from "next/image"
import Link from "next/link"
import ProjectManagement from "../assets/img/ProjectManagement.svg"
import { isEmail } from 'validator';
import UserInput from "../components/common/UserInput"
import ErrorAlert from "../components/common/ErrorAlert"



const Login = () => {
    const { loginUser, user } = useUser()
    const router = useRouter()
    useEffect(() => {
        if (user) router.push('/')
    }, [user, router])

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    })
    const [hasError, setHasError] = useState({ ...userInfo })
    const [startValidating, setStartValidate] = useState(false)
    const isFormValid = (obj) => {
        return Object.values(obj).every(value => !value) && Object.values(userInfo).every(value => value)
    }
    const onInputChange = ({ key, value, nativeEvent }) => {
        if (key === "email" && nativeEvent === "deleteContentBackward") setStartValidate(true)
        setUserInfo({ ...userInfo, ...{ [key]: value } })
    }
    const signUser = async () => {
        if (!isFormValid(hasError)) return
        const { message, status } = await loginUser(userInfo)
        if (message) {
            setHasError({ ...hasError, general: message })
        }

    }
    useEffect(() => {
        if (!startValidating) return
        if (isEmail(userInfo.email)) {
            setHasError({ email: '' })
        } else {
            setHasError({ email: 'Invalid email address.' })
        }
    }, [userInfo, startValidating])
    return (
        <>
            <div className="flex flex-col sm:flex-row items-center min-h-90vh">
                <div className="hidden lg:flex justify-center w-1/2 bg-blue-700 min-h-inherit">
                    <Image src={ProjectManagement} alt="Login" />
                </div>
                <div className="flex flex-col items-center justify-center py-12 px-0 sm:w-1/2 sm:px-6 lg:flex-none lg:px-20 xl:px-24 h-full">
                    <div className="min-w-72 max-w-sm lg:w-96">
                        <div className="flex flex-col justify-center items-center mb-20">
                            <Image src="/logo.svg" alt="Logo" height="80" width="80" />
                            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Welcome Back!</h2>
                        </div>
                        {
                            hasError.general &&
                            <div>
                                <ErrorAlert text={hasError.general} />
                            </div>
                        }
                        <div className="mt-8">
                            <div className="mt-6">
                                <div className="space-y-6">
                                    <div>
                                        <UserInput onInputChange={e => onInputChange({ key: e.target.name, value: e.target.value, nativeEvent: e.nativeEvent.inputType })}
                                            hasError={hasError}
                                            name="email"
                                            type="email"
                                            input="text"
                                            label="Email"
                                            placeholder="Enter Your Email"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <UserInput onInputChange={e => onInputChange({ key: e.target.name, value: e.target.value, nativeEvent: e.nativeEvent.inputType })}
                                            hasError={hasError}
                                            name="password"
                                            type="password"
                                            input="password"
                                            label="Password"
                                            placeholder="Enter Password"
                                            showPasswordRules={false}
                                        />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <input
                                                id="remember-me"
                                                name="remember-me"
                                                type="checkbox"
                                                className="h-4 w-4 text-blue-600 focus:ring-blue-400 border-gray-300 rounded"
                                            />
                                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                                Remember me
                                            </label>
                                        </div>

                                        <div className="text-sm">
                                            <Link href="/reset-password">
                                                <a className="font-medium text-blue-600 hover:text-blue-400">
                                                    Forgot your password?
                                                </a>
                                            </Link>

                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            onClick={signUser}
                                            className={`w-full flex justify-center
                                            py-2 px-4 border border-transparent rounded-md shadow-sm
                                            text-sm font-medium text-white bg-blue-600 hover:bg-blue-600
                                            ${isFormValid(hasError) && 'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400'}
                                            ${!isFormValid(hasError) && 'opacity-50 cursor-not-allowed'}`}
                                        >
                                            Sign in
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-5">
                        <p className="text-gray-400">
                            Don’t have an account yet?
                            <span className="text-blue-700 ml-2 hover:underline">
                                <Link href="/register"><a>Sign Up</a></Link>
                            </span>
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Login