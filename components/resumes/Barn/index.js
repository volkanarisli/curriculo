import Bio from './components/Bio'
import Education from './components/Education'
import Experience from './components/Experience'
import { useResumeInfo } from "../../../context/ResumeInfo";




const Barn = ({ print }) => {
    const { allResumeData: { about, contact, educationHistory, experiences } } = useResumeInfo()
    return (
        <div className={`border  min-h-preview-a4 bg-barn-background font-roboto-mono p-10 ${print ? 'w-a4 h-a4' : 'w-mobile-preview-a4 sm:w-desktop-preview-a4'}`}>
            <div className="mb-10">
                <Bio about={about} contact={contact} print={print} />
            </div>
            <Experience experiences={experiences} print={print} />
            <Education educationHistory={educationHistory} print={print} />

        </div>

    )
};

export default Barn;
