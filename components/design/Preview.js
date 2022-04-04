import Barn from "../resumes/Barn"
import Modern from "../resumes/Modern"
import Classic from "../resumes/Classic"
import { useResumeInfo } from "../../context/ResumeInfo";



import Head from "next/head";

import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/router";
import { useUser } from "../../context/UserInfo";

import { useReactToPrint } from 'react-to-print'



const Preview = () => {
    const { resumeTemplateId } = useResumeInfo()
    const { user } = useUser()
    const router = useRouter()
    const [downloading, setDownloading] = useState(false)
    const [changeTempalte, setChangeTemplate] = useState(false)
    const resumeDesign = useRef()
    useEffect(() => {
        if (!user) router.push('/login')
    }, [user, router])
    const templateConfig = {
        0: (props) => <Barn {...props} />,
        1: (props) => <Modern {...props} />,
        2: (props) => <Classic {...props} />
    }
    const exportDivAsPdf = useReactToPrint({
        documentTitle: 'my-new-cv',
        content: () => resumeDesign.current,
        onAfterPrint: () => { setDownloading(false) }
    })
    const download = async () => {
        setDownloading(true)
        setTimeout(async () => {
            await exportDivAsPdf()
        }, 1000)
    }

    return (
        <>
            {
                changeTempalte ?
                    <div>Deneme</div> :
                    <div className="bg-blue-600 sticky top-0">
                        <div className="flex flex-col justify-center items-center">
                            <div className="relative">
                                <div className="flex flex-col justify-center mt-10 mb-10 h-full">
                                    <div className="flex flex-col items-center mb-5 text-gray-100">
                                        <span className="mb-3 font-semibold text-3xl">
                                            Preview &#38; Download
                                        </span>
                                        <span className="max-w-lg text-center text-sm">
                                            Preview your resume before downloading it. Minor adjustments can make huge differences.
                                        </span>
                                    </div>
                                    <div id="design" className="mx-auto">
                                        {templateConfig[resumeTemplateId]({ print: false })}
                                    </div>
                                    <div className="flex space-x-5 items-stretch">
                                        <button className="bg-white text-blue-600 w-3/4 py-3 rounded-md my-5" onClick={() => setChangeTemplate(true)}>
                                            Change Tempalte
                                        </button>
                                        <button className="bg-white text-blue-600 w-1/4 py-3 rounded-md my-5"
                                            onClick={download}>
                                            Download PDF
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div >
                        {downloading &&
                            <div className="absolute">
                                <div className="bg-blue-600 w-full min-h-a4 z-10">
                                </div>
                                <div className="block absolute top-0 -z-50" ref={resumeDesign}>
                                    {templateConfig[resumeTemplateId]({ print: true })}
                                </div>
                            </div>
                        }
                    </div>
            }
        </>
    )

}


export default Preview