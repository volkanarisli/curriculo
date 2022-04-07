import React from 'react'
import { useState, useEffect } from "react"
import { useRouter } from "next/router";
import { useUser } from "../context/UserInfo";
import Redirectcard from '../components/dashboard/RedirectCard';
import Divider from '../components/common/Divider';

import { ViewListIcon, PaperClipIcon } from '@heroicons/react/solid'
import { UserCircleIcon, AcademicCapIcon, CogIcon } from '@heroicons/react/outline'
import LogoIcon from '../components/common/icons/LogoIcon';
import UpworkIcon from '../components/common/icons/UpworkIcon';

const Dashboard = () => {
    const { user } = useUser()
    const router = useRouter()

    const [userName, setUserName] = useState('')

    const featureCards = [
        {
            href: "/design",
            header: 'Create a Resume',
            info: 'Create an AI-supported outstanding resume.',
            bgColor: 'pink',
            badge: 'beta',
            Icon: LogoIcon
        },
        {
            href: "/design",
            header: 'Cover Letter',
            info: 'Create a cover letter to show what you can bring to the team.',
            bgColor: 'orange',
            Icon: PaperClipIcon
        }, {
            href: "/",
            header: 'Motivational Letter',
            info: 'Create a motivational letter to enchance your application.',
            bgColor: 'blue',
            badge: 'comingsoon',
            Icon: AcademicCapIcon
        },
        {
            href: "/design",
            header: 'Upwork Proposal Letter',
            info: 'Create a proposal letter to land your next freelance job.',
            bgColor: 'green',
            Icon: UpworkIcon
        },
        {
            href: "/design",
            header: 'Professional Summary',
            info: 'Create a professional summary to enchance your resume.',
            bgColor: 'red',
            Icon: UserCircleIcon
        },
        {
            href: "/design",
            header: 'Job Summary',
            info: 'Create a job summary to show of your area of expertise.',
            bgColor: 'yellow',
            Icon: ViewListIcon
        }
    ]
    const personalCards = [
        {
            href: "/settings",
            header: 'Account Settings',
            info: 'Preferences, Subscriptions and other details.',
            bgColor: 'purple',
            Icon: CogIcon
        }
    ]
    useEffect(() => {
        if (!user) return router.push('/login')
        setUserName(user?.user_metadata?.name)
    }, [user, router])


    return (
        <div className="container sm:max-w-3xl mx-auto mt-10">
            <div className="flex flex-col gap-1">
                <span className="text-lg text-gray-900">Get a Head Start in Your Career </span>
                <span className="text-sm text-gray-400">Hello {userName}, Let’s build your career together 🔖</span>
            </div>
            <div className="flex justify-center my-3">
                <div className="flex flex-col justify-center">
                    <Divider className="my-3" />
                    <div className="flex justify-center">
                        <div className="flex justify-between flex-wrap max-w-3xl">
                            {featureCards.map((card, index) => <Redirectcard key={index} {...card} />)}
                        </div>
                    </div>
                    <Divider className="my-3" />
                    <div className="">
                        <div className="flex flex-wrap max-w-3xl">
                            {personalCards.map((card, index) => <Redirectcard key={index} {...card} />)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard