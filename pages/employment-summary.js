import WorkForm from "../components/common/forms/WorkForm"
import InfoAlert from "../components/common/InfoAlert"
import Image from "next/image";
import ResumeInfoProvider from '../context/ResumeInfo'
import Link from "next/link";
import { useState, useEffect } from "react"
import { useRouter } from "next/router";
import { useUser } from "../context/UserInfo";



const EmploymentSummary = () => {
  const { user, userNotSubscribed } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (!user) return router.push('/login')
    if (userNotSubscribed) return router.push('/dashboard')
  }, [user, userNotSubscribed, router])
  return (
    <ResumeInfoProvider>
      <div className="mt-8">
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
            Job Summary
          </span>
          <span className="text-sm text-gray-400 text-center mb-3">
            You are now few steps ahead of landing your dream job, really.
          </span>
          <InfoAlert header="Few Notes on Job Summary" text="Job descriptions on your resume show prospective employers what you have accomplished in your previous positions and provide a synopsis of your experience and skills. A well writen job summary will help get your resume noticed and selected for interviews." />
        </div>
        <div className="flex flex-col justify-center container sm:max-w-2xl sm:mx-auto">
          <WorkForm name={user?.user_metadata.name} surname={user?.user_metadata.surname} email={user?.email} />
        </div>
      </div>
    </ResumeInfoProvider>
  )
}

export default EmploymentSummary