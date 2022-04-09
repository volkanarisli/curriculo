import UpworkForm from "../components/common/forms/UpworkForm"
import InfoAlert from "../components/common/InfoAlert"
import Image from "next/image";
import ResumeInfoProvider from '../context/ResumeInfo'
import Link from "next/link";
import { useState, useEffect } from "react"
import { useRouter } from "next/router";
import { useUser } from "../context/UserInfo";



const UpworkProposalLetter = () => {
    const { user } = useUser()
    const router = useRouter()

    useEffect(() => {
        if (!user) router.push('/login')
    }, [user, router])
    return (
        <ResumeInfoProvider>
            <div className="mt-8 mb-16">
                <Link href='/dashboard'>
                    <a className="flex items-center justify-center py-3 px-5 border border-transparent text-base font-medium rounded-md text-indigo-900 bg-indigo-50 border-indigo-200 absolute sm:left-8 left-2">
                        ←
                        <span className="sm:block sm:ml-2 hidden">
                            Back to Dashboard
                        </span>
                    </a>
                </Link>
                <div className="flex flex-col justify-center items-center sm:max-w-3xl mx-auto mb-10 px-5">
                    <span className="mb-6">
                        <Image src="/logo.svg" alt='Logo' width="50" height="50" />
                    </span>
                    <span className="text-gray-600 mb-1 text-3xl font-semibold">
                        Upwork Proposal Letter
                    </span>
                    <span className="text-sm text-gray-400 text-center mb-3">
                        You are about to work with best clients, really.
                    </span>
                    <InfoAlert header="Few Notes on Upwork Proposal Letter" text="Every client wants to know why they should pick you for their project over any other freelancer that applies. A single project can attract 5 to 50+ proposals from freelancers. If you want to stand out among the crowd, a well-crafted proposal may be just what you need." />
                </div>
                <div className="flex flex-col justify-center container sm:max-w-2xl sm:mx-auto">
                    <UpworkForm />
                </div>
            </div>
        </ResumeInfoProvider>
    )
}

export default UpworkProposalLetter