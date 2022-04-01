import Bio from './components/Bio'
import Education from './components/Education'
import Experience from './components/Experience'
import { useResumeInfo } from "../../../context/ResumeInfo";




const Classic = () => {
    const { allResumeData: { about, contact, educationHistory, experiences } } = useResumeInfo()
    // w-a4 min-h-a4
    return (
        <div className=" border w-mobile-preview-a4 sm:w-desktop-preview-a4 min-h-preview-a4 bg-Classic-background font-roboto-mono p-10">
            <div className="mb-10">
                <Bio about={about} contact={contact} />
            </div>
            <Experience experiences={experiences} />
            <Education educationHistory={educationHistory} />

        </div>

    )
};

export default Classic;
