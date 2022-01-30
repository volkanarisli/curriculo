import Barn from "../components/resumes/Barn"
import Modern from "../components/resumes/Modern"
import Classic from "../components/resumes/Classic"
import { useResumeInfo } from "../context/ResumeInfo";
import axios from "axios";
import Router from "next/router";





const FullPage = () => {
    const { setResumeTeplateId } = useResumeInfo()

    const templateConfig = {
        0: <Barn />,
        1: <Modern />,
        2: <Classic />
    }
    const download = async () => {
        // Router.push('/api/generatePdf')
        // await axios.get('/api/generatePdf')
    }
    return (
        <div>
            <div className="flex justify-center">
                <div id="design" className="max-w-4xl">
                    {templateConfig[0]}
                </div>
            </div>
        </div>
    )

}


export default FullPage