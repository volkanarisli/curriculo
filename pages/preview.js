import Barn from "../components/resumes/Barn"
import Modern from "../components/resumes/Modern"
import Classic from "../components/resumes/Classic"
import { useResumeInfo } from "../context/ResumeInfo";


import Head from "next/head";

import { useEffect } from "react"
import { useRouter } from "next/router";
import { useUser } from "../context/UserInfo";




const Preview = () => {
    const { resumeTemplateId } = useResumeInfo()
    const { user } = useUser()
    const router = useRouter()

    useEffect(() => {
        if (!user) router.push('/login')
    }, [user, router])
    const templateConfig = {
        0: <Barn />,
        1: <Modern />,
        2: <Classic />
    }
    const download = async () => {
        // Router.push('/api/generatePdf')
        // await axios.get('/api/generatePdf')
        const view = document.getElementById("design");
        // const exportPDF = document.getElementById("export-pdf");
        html2pdf(view);
    }
    return (
        <div className="flex flex-col justify-center items-center">
            <Head><script src="https://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js" defer></script></Head>
            <button className="bg-indigo-100 text-indigo-700 py-3 sm:min-w-lg rounded-md my-5" onClick={download}>Download</button>
            <div className="flex justify-center mt-10 mb-10">
                <div id="design" className="max-w-4xl">
                    {templateConfig[resumeTemplateId]}
                </div>

            </div>
        </div>
    )

}


export default Preview