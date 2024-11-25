/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import axios from "axios";
import validator from 'validator';
import { BadgeCheckIcon } from '@heroicons/react/solid'
import Image from "next/image";
import Link from "next/link";


const MailSubscribe = () => {
    const [email, setEmail] = useState('');
    const [hasError, setHasError] = useState({
        has: false,
        message: ''
    });
    const [isSuccess, setIsSuccess] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const onInputChange = (e) => {
        setEmail(e.target.value)
    }

    const saveEmail = async () => {
        if (!email) {
            setHasError({ has: true, message: 'This field is required' })
            return
        } else if (!validator.isEmail(email)) {
            setHasError({ has: true, message: 'Invalid Email' })
            return
        }
        setHasError({ has: false, message: '' })
        setIsLoading(true)
        const { data: { success, message } } = await axios.post('/api/addEmailToTheList', { email })
        setIsLoading(false)
        if (!success) {
            setHasError({ has: true, message })
        } else {
            setIsSuccess(true)
        }
    }
    return (
        < >
            <div className="sm:flex">
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <div className="flex flex-col min-w-md relative">
                    <input id="email-address" onChange={onInputChange} name="email-address" type="email" autoComplete="email" required
                        className={"w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-blue-400 focus:border-blue-400 sm:max-w-xs rounded-md"
                            + (hasError.has && ' border-red-500')}
                        placeholder="Enter your email" />
                    {
                        hasError.has &&
                        <div className="text-xs text-red-500 mt-1 absolute -bottom-4">
                            {hasError.message}
                        </div>
                    }
                </div>

                <div className="mt-4 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    {
                        isSuccess ?
                            <div className="w-full flex items-center justify-center py-3 px-10 border border-transparent text-base font-medium rounded-md text-white bg-blue-600  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                                <BadgeCheckIcon className="h-6 w-5 text-white" />
                            </div> :
                            isLoading ?
                                <div className="w-full flex items-center justify-center py-3 px-9 border border-transparent text-base font-medium rounded-md text-white bg-blue-600  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                                    <Image className="animate-pulse" src="/logo.svg" alt="logo" width="25" height="25" />
                                </div> :
                                <button onClick={saveEmail}
                                    className="w-full flex items-center justify-center py-3 px-5 border border-transparent text-base font-medium rounded-md text-white bg-gradient hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                                    Notify me
                                </button>
                    }
                </div>
            </div>
            <p className="mt-3 text-sm text-gray-500">
                We care about the protection of your data. Read our
                <Link href="/terms">
                    <a className="font-medium underline">
                        Privacy Policy.
                    </a>
                </Link>

            </p>
        </>
    )
};

export default MailSubscribe;
