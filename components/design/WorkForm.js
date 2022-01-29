import { useResumeInfo } from "../../context/ResumeInfo";

const WorkForm = () => {
    const { resume, setResume } = useResumeInfo();
    return (
        <>
            <div>
                <div className="flex w-100 mb-3">
                    <div className="flex flex-col w-1/2 pr-3">
                        <span className="mb-2">Company</span>
                        <input className="border rounded h-10 p-3" type="text" placeholder="Netflix..."  />
                    </div>
                    <div className="flex flex-col w-1/2 pr-3">
                        <span className="mb-2">Title</span>
                        <input className="border rounded h-10 p-3" type="text" placeholder="Ceo..." />

                    </div>
                </div>
                <div className="flex w-100 mb-14">
                    <div className="flex flex-col w-full pr-3">
                        <span className="mb-2">Keywords</span>
                        <input className="border rounded h-10 p-3" type="text" placeholder="Responsible for all things design related, Leadership, Sales, Javascript, CSS..." />
                        <span className="text-xs text-gray-500">Start with <b>Responsible for </b>and enter keywords related with your job. Seperate them with commas.</span>
                    </div>
                </div>
                <div className="flex w-100 mb-16">
                    <div className="flex flex-col w-full pr-3">
                        <span className="mb-2">Description of a Job</span>
                        <input className="border rounded h-20 px-3 py-1 placeholder:text-sm placeholder:whitespace-normal" type="textarea" placeholder="Responsible for A/B tests - designing and conducting experiments to test the efficacy of different changes/improvements, analyzing the results, and making decisions based on those results." />
                        <span className="text-xs text-gray-500">You can edit it directly above and head over to next step when you are done! </span>
                    </div>
                </div>
            </div>
            <div className="bottom-10 mt-10 w-full">
                <button className="bg-white text-indigo-700 border border-indigo-700 py-3 sm:min-w-lg rounded-md w-full">
                    Add Experience
                </button>
            </div>
        </>
    )
};

export default WorkForm;
