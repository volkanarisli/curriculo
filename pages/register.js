import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { useUser } from '../context/UserInfo'
import Image from "next/image"
import Link from "next/link"
import SignUp from "../assets/img/SignUp.svg"
import { isEmail, isStrongPassword } from 'validator';
import UserInput from "../components/common/UserInput"
import ErrorAlert from "../components/common/ErrorAlert"
const Register = () => {
    const { registerUser, user } = useUser()
    const router = useRouter()
    useEffect(() => {
        if (user) router.push('/')
    }, [user, router])

    const [userInfo, setUserInfo] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        terms: false,
    })
    const [hasError, setHasError] = useState({ ...userInfo })
    const [startValidating, setStartValidate] = useState({ ...userInfo })
    const isFormValid = (obj) => {
        return Object.values(obj).every(value => !value) && Object.values(userInfo).every(value => value)
    }
    const onInputChange = ({ key, value, nativeEvent }) => {
        if (key === "email" && nativeEvent === "deleteContentBackward") setStartValidate({ email: true })
        if (key === "password") setStartValidate({ [key]: true })

        setUserInfo({ ...userInfo, ...{ [key]: value } })
    }
    const signUp = async () => {
        if (!isFormValid(hasError)) return
        const { message, status } = await registerUser(userInfo)
        if (message) {
            setHasError({ ...hasError, general: message })
        }

    }
    useEffect(() => {
        if (startValidating.email) {
            if (isEmail(userInfo.email)) {
                setHasError({ email: '' })
            } else {
                setHasError({ email: 'Invalid email address.' })
            }
        }
        if (startValidating.password) {
            if (isStrongPassword(userInfo.password)) {
                setHasError({ password: '' })
            } else {
                setHasError({ password: 'Not Strong Enough' })
            }
        }

    }, [userInfo, startValidating])
    return (
        <>
            <div className="flex flex-col sm:flex-row items-center min-h-90vh">
                <div className="hidden lg:flex justify-center w-1/2 bg-blue-700 min-h-inherit">
                    <Image src={SignUp} alt="Sign Up" />
                </div>
                <div className="flex flex-col items-center justify-center py-12 px-0 sm:w-1/2 sm:px-6 lg:flex-none lg:px-20 xl:px-24 h-full">
                    <div className="min-w-72 max-w-sm px-10 sm:px-0 lg:w-96">
                        <div className="flex flex-col justify-center items-center mb-10">
                            <Image src="/logo.svg" alt="Logo" height="80" width="80" />
                            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Let’s Get Started!</h2>
                            <p className="text-gray-400 text-sm mt-2 text-center">You are few clicks away from landing your dream job.</p>
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
                                    <div className="flex space-x-4">
                                        <UserInput onInputChange={e => onInputChange({ key: e.target.name, value: e.target.value, nativeEvent: e.nativeEvent.inputType })}
                                            hasError={hasError}
                                            name="name"
                                            type="text"
                                            input="text"
                                            label="Name"
                                            placeholder="Jane"
                                        />
                                        <UserInput onInputChange={e => onInputChange({ key: e.target.name, value: e.target.value, nativeEvent: e.nativeEvent.inputType })}
                                            hasError={hasError}
                                            name="surname"
                                            type="text"
                                            input="text"
                                            label="Surname"
                                            placeholder="Doe"
                                        />
                                    </div>
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
                                            showPasswordRules={true}
                                        />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <UserInput onInputChange={e => onInputChange({ key: e.target.name, value: e.target.checked, nativeEvent: e.nativeEvent.inputType })}
                                                hasError={hasError}
                                                name="terms"
                                                type="checkbox"
                                                input="checkbox"
                                                placeholder="Enter Password"
                                            >
                                                <p className="text-sm">I agree to the
                                                    <Link href="/terms#terms">
                                                        <a className="text-blue-700 hover:underline"> Terms of Service</a>
                                                    </Link> and
                                                    <Link href="/terms">
                                                        <a className="text-blue-700 hover:underline"> Privacy Policy.</a>
                                                    </Link>
                                                </p>
                                            </UserInput>
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            onClick={signUp}
                                            className={`w-full flex justify-center
                                            py-2 px-4 border border-transparent rounded-md shadow-sm
                                            text-sm font-medium text-white bg-blue-600 hover:bg-blue-600
                                            ${isFormValid(hasError) && 'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400'}
                                            ${!isFormValid(hasError) && 'opacity-50 cursor-not-allowed'}`}
                                        >
                                            Sign Up
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-5">
                        <p className="text-gray-400">
                            Do you have an account?
                            <span className="text-blue-700 ml-2 hover:underline">
                                <Link href="/login"><a>Sign In</a></Link>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Register