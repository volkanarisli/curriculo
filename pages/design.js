import WorkForm from "../components/common/forms/WorkForm"
import EducationForm from "../components/common/forms/EducationForm"
import AboutForm from "../components/common/forms/AboutForm"
import Preview from "../components/design/Preview"
import { isMobileDevice } from "../utils/helpers"
import Image from "next/image"
import ResumeInfoProvider from '../context/ResumeInfo'
import { useState, useEffect } from "react"
import { useRouter } from "next/router";
import { useUser } from "../context/UserInfo";
import Modal from "../components/common/Modal"
import Link from "next/link"

const Design = () => {
    const { user } = useUser()
    const router = useRouter()
    const [isMobile, setIsMobile] = useState()
    const [modalOpen, setModalOpen] = useState(false)
    useEffect(() => {
        if (!user) router.push('/login')
    }, [user, router])
    useEffect(() => {
        setIsMobile(isMobileDevice())
    }, [])
    const currentForms = [
        (props) => <AboutForm {...props} />,
        (props) => <WorkForm  {...props} />,
        (props) => <EducationForm {...props} />,
    ]

    return (
        <ResumeInfoProvider>
            <div className="flex flex-col relative lg:flex-row min-h-screen">
                <div className='mb-10 mt-2 px-6 overflow-y-auto sm:w-1/2 sm:px-20'>
                    <div className="flex flex-col justify-center items-center mb-10">
                        <span className="mb-6">
                            <Image src="/logo.svg" alt='Logo' width="50" height="50" />
                        </span>
                        <span className="text-gray-600 mb-1 text-3xl font-semibold">
                            Outstanding Resume
                        </span>
                        <span className="text-sm text-gray-400 text-center">
                            You are now few steps ahead of landing your dream job, really.
                        </span>
                        <Link href='/dashboard'>
                            <a className="flex items-center justify-center py-3 px-5 border border-transparent text-base font-medium rounded-md text-indigo-900 bg-indigo-50 border-indigo-200 absolute sm:left-8 top-1 left-2">
                                ←
                                <span className="sm:block sm:ml-2 hidden">
                                    Back to Dashboard
                                </span>
                            </a>
                        </Link>
                    </div>
                    <div className='flex flex-col justify-center sm:container sm:mx-auto'>
                        {
                            currentForms.map((form, index) => (
                                <div className="flex flex-col space-y-4" key={index}>
                                    {form({ name: user?.user_metadata.name, surname: user?.user_metadata.surname, email: user?.email, isResumeBuilder: true })}
                                </div>
                            ))
                        }
                    </div>

                </div>
                {
                    isMobile ?
                        <>
                            <div className="flex justify-center w-full fixed bottom-3 z-10">
                                <button className="rounded-full bg-blue-600 text-white py-3 px-4" onClick={() => setModalOpen(true)}>
                                    Preview Resume
                                </button>
                            </div>
                            <Modal open={modalOpen} setOpen={setModalOpen}>
                                <Preview />
                            </Modal>
                        </>
                        :
                        <div className="sm:w-1/2 bg-blue-600 z-10">
                            <Preview />
                        </div>

                }
            </div>
        </ResumeInfoProvider>

    )
}


export default Design