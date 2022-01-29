
import { useState } from "react";
import { useResumeInfo } from "../../context/ResumeInfo";
import axios from "axios";

const AboutForm = () => {
    const { setContact } = useResumeInfo()
    const [formData, setFormData] = useState({})
    const updateData = (e, propertyName) => {

        setFormData({ ...formData, [propertyName]: e })
    }
    const getDesc = async (index) => {
        const { data } = await axios.post('/api/generateTextFromKeyword', { keyword: formData.keywords })
        updateData(data.response, 'desc')

        setContact({ ...formData, desc: data.response })

    }

    return (
        <>
            <div>
                <div className="flex w-100 mb-3">
                    <div className="flex flex-col w-1/2 pr-3">
                        <span className="mb-2">First Name</span>
                        <input className="border rounded h-10 p-3" onChange={(e) => updateData(e.target.value, 'firstName')} type="text" placeholder="John" />
                    </div>
                    <div className="flex flex-col w-1/2 pr-3">
                        <span className="mb-2">Last Name</span>
                        <input className="border rounded h-10 p-3" onChange={(e) => updateData(e.target.value, 'lastName')} type="text" placeholder="Doe" name="lastName" />

                    </div>
                </div>
                <div className="flex w-100 mb-3">
                    <div className="flex flex-col w-1/2 pr-3">
                        <span className="mb-2">Current Title</span>
                        <input className="border rounded h-10 p-3" onChange={(e) => updateData(e.target.value, 'title')} type="text" placeholder="Bond... James Bond" name="title" />
                    </div>
                    <div className="flex flex-col w-1/2 pr-3">
                        <span className="mb-2">Location</span>
                        <input className="border rounded h-10 p-3" onChange={(e) => updateData(e.target.value, 'location')} type="text" placeholder="London" name="location" />

                    </div>
                </div>
                <div className="flex w-100 mb-14">
                    <div className="flex flex-col w-full pr-3">
                        <span className="mb-2">Keywords</span>
                        <div className="relative">
                            <input className="border rounded h-12 p-3 w-full" type="text" onChange={(e) => updateData(e.target.value, 'keywords')} placeholder="Science and stuff...." name="keywords" />
                            <button onClick={() => getDesc()} className="absolute right-1 mt-2 z-10 bg-indigo-100 text-indigo-700 p-2 rounded-lg text-sm">Save and Generate</button>
                        </div>
                        <span className="text-xs text-gray-500">Start with <b>Responsible for </b>and enter keywords related with your job. Seperate them with commas.</span>
                    </div>
                </div>
                <div className="flex w-100 mb-16">
                    <div className="flex flex-col w-full pr-3">
                        <span className="mb-2">Description of a Job</span>
                        <input className="border rounded h-20 px-3 py-1 placeholder:text-sm placeholder:whitespace-normal" type="textarea" name="desc" value={formData.desc} placeholder="Responsible for A/B tests - designing and conducting experiments to test the efficacy of different changes/improvements, analyzing the results, and making decisions based on those results." />
                        {/* <span className="text-xs text-gray-500">You can edit it directly above and head over to next step when you are done! </span> */}
                    </div>
                </div>
            </div>
        </>
    )
};

export default AboutForm;
