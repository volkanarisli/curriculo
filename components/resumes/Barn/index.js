import Bio from './components/Bio'
import Education from './components/Education'
import Experience from './components/Experience'
import { useResumeInfo } from "../../../context/ResumeInfo";




const Barn = () => {
    const { allResumeData: { about, contact, educationHistory, experiences } } = useResumeInfo()

    return (
        <div className="w-4xl border border-y-lime-200 p-10">
            <div className="mb-10">
                <Bio about={about} contact={contact} />
            </div>
            <Experience experiences={experiences} />
            <Education educationHistory={educationHistory} />

        </div>

    )
};

export default Barn;
