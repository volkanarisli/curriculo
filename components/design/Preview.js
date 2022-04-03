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
        <div className="flex flex-col justify-center items-center">
            <Head>
                <script src="https://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js" defer></script>
            </Head>
            <div className="relative">
                <div className="flex flex-col justify-center mt-10 mb-10">
                    <div id="design">
                        {templateConfig[resumeTemplateId]({ print: false })}
                    </div>
                    {downloading &&
                        <div className="block absolute top-0 -z-50" ref={resumeDesign}>
                            {templateConfig[resumeTemplateId]({ print: true })}
                        </div>
                    }
                    <div>
                        <button className="bg-indigo-100 text-blue-600 py-3 sm:min-w-lg rounded-md my-5"
                            onClick={download}>Download</button>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default Preview