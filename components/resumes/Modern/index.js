import Bio from './components/Bio'
import Education from './components/Education'
import Experience from './components/Experience'
import { useResumeInfo } from "../../../context/ResumeInfo";
import gradientAlt from "../../../assets/img/gradientAlt.svg"
import gradientUst from "../../../assets/img/gradientUst.svg"
import Image from 'next/image';





const Modern = () => {
    const { allResumeData: { about, contact, educationHistory, experiences } } = useResumeInfo()

    return (
        <div className="w-a4 min-h-a4 border bg-Modern-background font-roboto-mono p-10 relative overflow-hidden">
            <div className="absolute -z-10 left-0 top-0 -ml-52 -mt-44">
                <Image src={gradientUst} alt="gradient" height="700" width="700" />
            </div>
            <div className="mb-10">
                <Bio about={about} contact={contact} />
            </div>
            <div className="mb-10">
                <Experience experiences={experiences} />
            </div>
            <div className="mb-10">
                <Education educationHistory={educationHistory} />

            </div>
            <div className="absolute -z-10 right-0 bottom-0 -mr-52 -mb-44">
                <Image src={gradientAlt} alt="gradient" height="700" width="700" />
            </div>
        </div>

    )
};

export default Modern;
