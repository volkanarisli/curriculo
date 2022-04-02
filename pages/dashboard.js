import React from 'react'
import { useState, useEffect } from "react"
import { useRouter } from "next/router";
import { useUser } from "../context/UserInfo";
import Redirectcard from '../components/dashboard/redirectcard';
import Divider from '../components/common/Divider';

import { ViewListIcon, PaperClipIcon } from '@heroicons/react/solid'
import { UserCircleIcon, AcademicCapIcon } from '@heroicons/react/outline'
import LogoIcon from '../components/common/icons/LogoIcon';
import UpworkIcon from '../components/common/icons/UpworkIcon';

const Dashboard = () => {
    const { user } = useUser()
    const router = useRouter()

    const cards = [
        {
            href: "/design",
            header: 'Create a Resume',
            info: 'Create an AI-supported outstanding resume.',
            bgColor: 'pink',
            Icon: LogoIcon
        },
        {
            href: "/design",
            header: 'Cover Letter',
            info: 'Create a cover letter to show what you can bring to the team.',
            bgColor: 'orange',

            Icon: PaperClipIcon
        }, {
            href: "/design",
            header: 'Motivational Letter',
            info: 'Create a motivational letter to enchance your application.',
            bgColor: 'blue',

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


    useEffect(() => {
        if (!user) router.push('/login')
    }, [user, router])


    return (
        <div className="container">
            Dashboard
            <div className="flex justify-center my-10">
                <div className="max-w-3xl flex flex-col justify-center">
                    <Divider className="my-3" />
                    <div className="flex justify-center">
                        <div className="flex justify-between flex-wrap max-w-3xl">
                            {cards.map((card, index) => <Redirectcard key={index} {...card} />)}
                        </div>
                    </div>
                    <Divider className="my-3" />
                </div>
            </div>
        </div>
    )
}

export default Dashboard