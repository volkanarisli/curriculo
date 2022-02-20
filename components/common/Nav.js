/* eslint-disable react/no-unknown-property */

import Image from "next/image";
import Link from "next/link";
import { useUser } from '../../context/UserInfo'
const Nav = () => {
    const { user, logout } = useUser()
    return (
        <div className="bg-white">
            <header>
                <div className="relative bg-white">
                    <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
                        <div className="flex justify-start lg:flex-1">
                            <Link href="/">
                                <a>
                                    <span className="sr-only">Curriculo</span>
                                    <Image className="h-8 w-14 sm:h-10" src="/logomark.svg" alt="logo" width="205" height="45" />
                                </a>
                            </Link>
                        </div>
                        <div className="-mr-2 -my-2 md:hidden">
                            <button type="button"
                                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                aria-expanded="false">
                                <span className="sr-only">Open menu</span>

                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                        <Link href="/design">
                            <a
                                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                                Get Started Now
                            </a>
                        </Link>
                        <div suppressHydrationWarning={true}>
                            {
                                process.browser &&
                                (
                                    user ?
                                        <a
                                            onClick={logout}
                                            className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                                            Logout
                                        </a>
                                        :
                                        <Link href="/login">
                                            <a
                                                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                                                Login
                                            </a>
                                        </Link>
                                )
                            }
                        </div>
                    </div>
                </div>

            </header>
        </div>
    )
};

export default Nav;
