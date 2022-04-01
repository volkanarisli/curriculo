
import { useState, useEffect } from "react";
import { useResumeInfo } from "../../../context/ResumeInfo";
import { useUser } from "../../../context/UserInfo";
import axios from "axios";
import UserInput from "../../common/UserInput"



const AboutForm = ({ name, surname, email }) => {
    const { contact, setContact } = useResumeInfo()
    const [keywords, setKeywords] = useState([])
    const updateData = (e, propertyName) => {
        setContact({ ...contact, [propertyName]: e })
    }

    const getDesc = async (index) => {
        const prompt = `Create a personal summary from my social and technical skillset ${contact.keywords},${contact.title} summary:`
        const { data } = await axios.post('/api/generateTextFromKeyword', { prompt })
        updateData(data.response, 'desc')
        setContact({ ...contact, desc: data.response })
    }
    useEffect(() => {
        //set on page initial info
        setContact((prevState) => ({
            ...prevState,
            'firstName': name,
            'lastName': surname,
            'email': email
        }))

    }, [setContact, name, surname, email])

    return (
        <>
            <div>
                <div className="flex flex-col mb-6">
                    <span className="text-xl text-gray-900 mb-1">
                        Personal Information
                    </span>
                    <span className="test-sm text-gray-500">
                        Use a permanent address where you can receive mail.
                    </span>
                </div>
                <div className="mb-10">

                    <div className="flex flex-col pr-3 space-y-3 w-full">
                        <div className="flex">
                            <div className="flex flex-col w-1/2 pr-3">
                                <UserInput onInputChange={e => updateData(e.target.value, e.target.name)}
                                    value={contact?.firstName}
                                    name="firstName"
                                    type="text"
                                    input="text"
                                    label="First Name"
                                    placeholder="Jane"
                                />
                            </div>
                            <div className="flex flex-col w-1/2 pr-3">
                                <UserInput onInputChange={e => updateData(e.target.value, e.target.name)}
                                    value={contact?.lastName}
                                    name="lastName"
                                    type="text"
                                    input="text"
                                    label="Last Name"
                                    placeholder="Jane"
                                />

                            </div>
                        </div>
                        <UserInput onInputChange={e => updateData(e.target.value, e.target.name)}
                            value={contact?.title}
                            name="title"
                            type="text"
                            input="text"
                            label="Desired Job Title"
                            placeholder="Bond... James Bond"
                        />
                        <UserInput onInputChange={e => updateData(e.target.value, e.target.name)}
                            value={contact?.email}
                            name="email"
                            type="text"
                            input="text"
                            label="Email"
                            placeholder="Bond... James Bond"
                        />
                        <UserInput onInputChange={e => updateData(e.target.value, e.target.name)}
                            value={contact?.location}
                            name="location"
                            type="text"
                            input="text"
                            label="Location"
                            placeholder="İstanbul"
                        />
                    </div>
                </div>
                <div className="flex mb-14">
                    <div className="flex flex-col w-full pr-3">
                        <span className="mb-1 text-xl text-gray-900">Professional Summary</span>
                        <span className="mb-1 text-sm text-gray-500">Select adjectives that describes you best. Mention your role, experience and best skills. AI carry on the rest. Remember more is better.</span>
                        <div>
                            <UserInput onInputChange={setKeywords}
                                value={keywords}
                                name="keys"
                                type="keys"
                                input="keys"
                                label="Examples"
                            />
                        </div>
                        {/* <span className="text-xs text-gray-500">Start with <b>Responsible for </b>and enter keywords related with your job. Seperate them with commas.</span> */}
                    </div>
                </div>
                <div className="flex w-100 mb-16">
                    <div className="flex flex-col w-full pr-3">
                        <span className="mb-2">Description of a Job</span>
                        <textarea className="border rounded h-28 px-3 py-1 placeholder:text-sm placeholder:whitespace-normal" type="textarea" name="desc" value={contact.desc}
                            placeholder="Responsible for A/B tests - designing and conducting experiments to test the efficacy of different changes/improvements, analyzing the results, and making decisions based on those results."
                            onChange={(e) => updateData(e.target.value, 'desc')}
                        />
                        <span className="text-xs text-gray-500">You can edit it directly above and head over to next step when you are done! </span>
                    </div>
                </div>
            </div>
        </>
    )
};

export default AboutForm;
