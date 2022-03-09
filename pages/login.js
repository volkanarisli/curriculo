import { useState, useEffect } from "react"
import { supabase } from "../utils/supabase"
import { useRouter } from "next/router"
import { useUser } from '../context/UserInfo'
import Image from "next/image"
import ProjectManagement from "../assets/img/ProjectManagement.svg"
import Logo from "../assets/img/logomark.svg"



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

    const onInputChange = ({ key, value }) => {
        setUserInfo({ ...userInfo, ...{ [key]: value } })
    }
    const signUser = () => {
        loginUser(userInfo)
    }
    return (
        <>
            <div className="flex flex-col sm:flex-row items-center min-h-90vh">
                <div className="hidden lg:flex justify-center w-1/2 bg-blue-700 min-h-inherit">
                    <Image src={ProjectManagement} alt="Login" />
                </div>
                <div className="flex flex-col justify-center py-12 px-4 sm:w-1/2 sm:px-6 lg:flex-none lg:px-20 xl:px-24 h-full">
                    <div className="mx-auto w-full max-w-sm lg:w-96">
                        <div className="flex flex-col justify-center items-center mb-20">
                            <Image src="/logo.svg" alt="Logo" height="80" width="80" />
                            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Welcome Back!</h2>
                        </div>

                        <div className="mt-8">
                            <div className="mt-6">
                                <div className="space-y-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                            Email address
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                onChange={e => onInputChange({ key: e.target.name, value: e.target.value })}
                                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                            Password
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                id="password"
                                                name="password"
                                                type="password"
                                                autoComplete="current-password"
                                                onChange={e => onInputChange({ key: e.target.name, value: e.target.value })}
                                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <input
                                                id="remember-me"
                                                name="remember-me"
                                                type="checkbox"
                                                className="h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                                            />
                                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                                Remember me
                                            </label>
                                        </div>

                                        <div className="text-sm">
                                            <a href="#" className="font-medium text-blue-500 hover:text-blue-400">
                                                Forgot your password?
                                            </a>
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            onClick={signUser}
                                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
                                        >
                                            Sign in
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Login