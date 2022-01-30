import Bio from './components/Bio'
import Education from './components/Education'
import Experience from './components/Experience'
import { useResumeInfo } from "../../../context/ResumeInfo";




const Barn = () => {
    const { allResumeData: { about, contact, educationHistory, experiences } } = useResumeInfo()

    return (
        <div className="w-a4 min-h-a4 border bg-barn-background font-roboto-mono p-10">
            <div className="mb-10">
                <Bio about={about} contact={contact} />
            </div>
            <Experience experiences={experiences} />
            <Education educationHistory={educationHistory} />

        </div>

    )
};

export default Barn;
