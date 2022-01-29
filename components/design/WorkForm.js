import { useResumeInfo } from "../../context/ResumeInfo";

const WorkForm = () => {
    const { resume, setResume } = useResumeInfo();
    return (
        <div>
            <div className="flex w-100">
                <div className="flex flex-col w-1/2 pr-3">
                    <span className="mb-2">Company</span>
                    <input className="border rounded h-10 p-3" type="text" />
                </div>
                <div className="flex flex-col w-1/2 pr-3">
                    <span className="mb-2">Title</span>
                    <input className="border rounded h-10 p-3" type="text" />
                </div>
            </div>
        </div>
    )
};

export default WorkForm;
