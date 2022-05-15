/* eslint-disable react/no-unknown-property */

import Image from "next/image";
import Link from "next/link";
import { useUser } from '../../context/UserInfo'
import { isMobileDevice } from "../../utils/helpers";

const Nav = ({ hideLandinglinks }) => {
    const { user, logout } = useUser()

    const tabs = [
        {
            name: 'Products',
            scrollId: 'products',
        },
        {
            name: 'Benefits',
            scrollId: 'benefits',
        },
        {
            name: 'Demo',
            scrollId: 'demo',
        },
        {
            name: 'Blog',
            href: '/blog',
        }
    ]
    return (

        <header className="w-full">
            <div className="bg-white">
                <div className="flex relative justify-between items-center container mx-auto pt-5 pb-10 md:px-4 md:py-6 ">
                    <div className="w-40 scale-150">
                        <Link href="/">
                            <a>
                                <span className="sr-only">Curriculo</span>
                                <Image src="/logomark.svg" alt='Logo' width="150"  height="50"/>
                            </a>
                        </Link>
                    </div>
                    <div className="text-gray-700 flex w-full justify-between md:gap-3 absolute bottom-3 md:static md:justify-center items-center">
                        {
                            !hideLandinglinks &&
                            tabs.map(({ name, href, scrollId }, index) => (
                                <Link href={scrollId ? `#${scrollId}` : `/${href}`} key={index}>
                                    <a>
                                        <span className="">{name}</span>
                                    </a>
                                </Link>
                            ))
                        }
                    </div>
                    <div className="flex items-center md:w-40">
                        <Link href="/login">
                            <a
                                className="text-gray-700">
                                Login
                            </a>
                        </Link>
                        <Link href="/register">
                            <a
                                className="ml-6 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-600">
                                Sign Up
                            </a>
                        </Link>
                    </div>
                </div>
            </div>

        </header>

    )
};

export default Nav;
