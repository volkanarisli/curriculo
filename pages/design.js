import WorkForm from "../components/design/forms/WorkForm"
import EducationForm from "../components/design/forms/EducationForm"
import AboutForm from "../components/design/forms/AboutForm"
import Preview from "../components/design/Preview"
import Logo from "../assets/img/logomark.svg"
import Image from "next/image"
import ResumeInfoProvider from '../context/ResumeInfo'
import { useState, useEffect } from "react"
import { useRouter } from "next/router";
import { useUser } from "../context/UserInfo";

const Design = () => {
    const { user } = useUser()
    const router = useRouter()
    useEffect(() => {
        if (!user) router.push('/login')
    }, [user, router])
    const currentForms = [
        // (props) => <AboutForm {...props} />,
        // (props) => <WorkForm  {...props} />,
        (props) => <EducationForm {...props} />,
    ]

    return (
        <ResumeInfoProvider>
            <div className="flex flex-col sm:flex-row min-h-90vh max-h-screen">
                <div className="mb-10 w-1/2 px-20 overflow-y-auto">
                    <div className="flex flex-col justify-center items-center mb-20">
                        <span className="mb-6">
                            <Image src="/logo.svg" alt='Logo' width="50" height="50" />
                        </span>
                        <span className="text-gray-600 mb-1 text-3xl">
                            Outstanding Resume
                        </span>
                        <span className="text-sm text-gray-400">
                            You are now few steps ahead of landing your dream job, really.
                        </span>

                    </div>
                    <div className="container mx-auto">
                        {

                            // currentFormEnum[currentTab]()
                            currentForms.map((form, index) => (
                                <div className="flex flex-col space-y-4" key={index}>
                                    {form({ name: user?.user_metadata.name, surname: user?.user_metadata.surname, email: user?.email })}
                                </div>
                            ))
                        }
                    </div>

                </div>
                <div className="sm:w-1/2 bg-blue-600">
                    <Preview />
                </div>
            </div>
        </ResumeInfoProvider>

    )
}


export default Design