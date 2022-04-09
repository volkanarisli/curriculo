import Bio from './components/Bio'
import Education from './components/Education'
import Experience from './components/Experience'
import { useResumeInfo } from "../../../context/ResumeInfo";
import gradientAlt from "../../../assets/img/Gradientalt.svg"
import gradientUst from "../../../assets/img/gradientust.svg"
import Image from 'next/image';
import { classNames } from '../../../utils/helpers';






const Modern = ({ print }) => {
    const { allResumeData: { about, contact, educationHistory, experiences } } = useResumeInfo()
    // w-a4 min-h-a4
    return (
        <div className={classNames('overflow-hidden -z-20  min-h-preview-a4 bg-white font-roboto-mono p-10 relative', print ? 'w-a4' : 'w-mobile-preview-a4 sm:w-desktop-preview-a4')}>
            <div className="absolute -z-10 left-0 top-0 -ml-52 -mt-44">
                <Image src={gradientAlt} alt="gradient" className="rounded-lg filter blur-xl" height={print ? "1000" : "700"} width={print ? "1000" : "700"} />
            </div>
            <div className="mb-10">
                <Bio about={about} contact={contact} print={print} />
            </div>
            <div className="mb-10">
                <Experience experiences={experiences} print={print} />
            </div>
            <div className="mb-10">
                <Education educationHistory={educationHistory} print={print} />

            </div>
        </div>

    )
};

export default Modern;
