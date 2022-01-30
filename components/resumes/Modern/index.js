import Bio from './components/Bio'
import Education from './components/Education'
import Experience from './components/Experience'
import { useResumeInfo } from "../../../context/ResumeInfo";




const Modern = () => {
    const { allResumeData: { about, contact, educationHistory, experiences } } = useResumeInfo()

    return (
        <div className="w-4xl border bg-Modern-background font-roboto-mono p-10">
            <div className="mb-10">
                <Bio about={about} contact={contact} />
            </div>
            <div className="mb-10">
                <Experience experiences={experiences} />
            </div>
            <div className="mb-10">
                <Education educationHistory={educationHistory} />

            </div>


        </div>

    )
};

export default Modern;
