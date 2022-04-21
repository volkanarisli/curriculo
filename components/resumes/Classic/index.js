import Bio from './components/Bio'
import Education from './components/Education'
import Experience from './components/Experience'
import { useResumeInfo } from "../../../context/ResumeInfo";
import { classNames } from '../../../utils/helpers';




const Classic = ({ print }) => {
    const { allResumeData: { about, contact, educationHistory, experiences } } = useResumeInfo()
    return (
        <div className={classNames('overflow-hidden -z-20  min-h-preview-a4 bg-white font-roboto-mono p-10 relative', print ? 'w-a4' : 'w-mobile-preview-a4 sm:w-desktop-preview-a4')}>
            <div className="mb-10">
                <Bio about={about} contact={contact} print={print} />
            </div>
            <Experience experiences={experiences} print={print} />
            <Education educationHistory={educationHistory} print={print} />

        </div>

    )
};

export default Classic;
