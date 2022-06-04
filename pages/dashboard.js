import React from 'react'
import { useState, useEffect } from "react"
import { useRouter } from "next/router";
import { useUser } from "../context/UserInfo";
import Redirectcard from '../components/dashboard/RedirectCard';
import Divider from '../components/common/Divider';
import Image from 'next/image';
import { ViewListIcon, PaperClipIcon } from '@heroicons/react/solid'
import { UserCircleIcon, AcademicCapIcon, CogIcon, PencilIcon, LogoutIcon } from '@heroicons/react/outline'
import LogoIcon from '../components/common/icons/LogoIcon';
import UpworkIcon from '../components/common/icons/UpworkIcon';
import Link from 'next/link';
import { isMobileDevice } from '../utils/helpers';



const Dashboard = () => {
    const { user, userNotSubscribed, logout } = useUser()
    const router = useRouter()
    const [userName, setUserName] = useState('')
    const [isClientSide, setIsClientSide] = useState(false)
    const featureCards = [
        {
            href: "/design",
            header: 'Create a Resume',
            info: 'Create an AI-supported outstanding resume.',
            bgColor: 'pink',
            badge: 'beta',
            disabled: userNotSubscribed,
            Icon: LogoIcon
        },
        {
            href: "/cover-letter",
            header: 'Cover Letter',
            info: 'Create a cover letter to show what you can bring to the team.',
            bgColor: 'orange',
            disabled: userNotSubscribed,
            Icon: PaperClipIcon
        },
        {
            href: "/employment-summary",
            header: 'Employment Summary',
            info: 'Create a Employment Summary to show what you have done and what you can bring to the team.',
            bgColor: 'yellow',
            disabled: userNotSubscribed,
            Icon: ViewListIcon
        },
        {
            href: "/upwork-proposal-letter",
            header: 'Upwork Proposal Letter',
            info: 'Create a proposal letter to land your next freelance job.',
            bgColor: 'green',
            disabled: userNotSubscribed,
            Icon: UpworkIcon
        },
        {
            href: "/professional-summary",
            header: 'Professional Summary',
            info: 'Create a professional summary to enchance your resume and show of your area of expertise.',
            bgColor: 'red',
            disabled: userNotSubscribed,
            Icon: UserCircleIcon
        },

        {
            href: "/",
            header: 'Motivational Letter',
            info: 'Create a motivational letter to enchance your application.',
            bgColor: 'blue',
            badge: 'comingsoon',
            disabled: true,
            Icon: AcademicCapIcon
        },
        {
            href: "/educational-summary",
            header: 'Educational Summary',
            info: 'Create a Educational Summary to show what you have learned in your education.',
            bgColor: 'dark_green',
            disabled: userNotSubscribed,
            Icon: PencilIcon
        }
    ]
    // const personalCards = [
    //     {
    //         href: "/account-settings",
    //         header: 'Account Settings',
    //         info: 'Preferences, Subscriptions and other details.',
    //         bgColor: 'purple',
    //         Icon: CogIcon
    //     }
    // ]
    useEffect(() => {
        if (!user) return router.push('/login')
        setUserName(user?.user_metadata?.name)
    }, [user, userNotSubscribed, router])
    useEffect(() => {
        setIsClientSide(true)
    });

    return (
        <div className="container sm:max-w-3xl mx-auto mt-5">
            <span className="flex justify-between items-center w-full mb-6">
                <Link href="/dashboard">
                    <a>
                        <Image src="/logomark.svg" alt='Logo' width="200" height="50" />
                    </a>
                </Link>
                <div className="flex md:gap-2">
                    <div onClick={() => router.push('/account-settings')} className="flex items-center cursor-pointer group">
                        <div className="rounded-full bg-purple-600 group-hover:bg-purple-400 px-2 py-2 mr-2">
                            <CogIcon className="h-5 w-5 text-white" />
                        </div>

                    </div>
                    <div onClick={logout} className="flex items-center cursor-pointer group">
                        <div className="rounded-full bg-red-600 group-hover:bg-red-400 px-2 py-2 mr-2">
                            <LogoutIcon className="h-5 w-5 text-white" />
                        </div>
                    </div>
                </div>
            </span>

            <div className="flex flex-col gap-1">
                <span className="text-lg text-gray-900">Get a Head Start in Your Career </span>
                <span className="text-sm text-gray-400">Hello {userName}, Let’s build your career together 🔖</span>
            </div>
            {
                (isClientSide && userNotSubscribed) &&
                <div className='flex flex-col'>
                    <span className="text-base text-gray-700">
                        Huh, it looks like you canceled your subscription or there&apos;s a billing problem 🥺
                    </span>
                    <span className="text-base text-gray-700">
                        You can update your payment info from Account Settings.
                    </span>
                </div>
            }
            <div className="flex justify-center my-3">
                <div className="flex flex-col justify-center">
                    <Divider className="my-3" />
                    <div className="flex justify-center">
                        <div className="flex justify-between flex-wrap max-w-3xl">
                            {featureCards.map((card, index) => <Redirectcard key={index} {...card} />)}
                        </div>
                    </div>
                    {/* <Divider className="my-3" />
                    <div className="">
                        <div className="flex flex-wrap max-w-3xl">
                            {personalCards.map((card, index) => <Redirectcard key={index} {...card} />)}
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Dashboard