
import { useState, useEffect } from "react";
import { useResumeInfo } from "../../../context/ResumeInfo";
import axios from "axios";
import UserInput from "../../common/UserInput"
const AboutForm = ({ name, surname, email, isResumeBuilder }) => {
    const { contact, setContact } = useResumeInfo()
    const [keywords, setKeywords] = useState([])
    const [hasError, setHasError] = useState({ customKeyword: '' })
    const updateData = (e, propertyName) => {
        // ()=> { ...contact, [propertyName]: e }
        setContact(prevState => ({ ...prevState, [propertyName]: e }))
    }
    const getDesc = async () => {
        if (keywords.length < 2) {
            return setHasError({ customKeyword: 'You should add at least 3 keywords about you' })
        }
        const { data } = await axios.post('/api/getProfessionalSummary', {
            keywords: keywords, title: contact.title
        })
        updateData(data.response.trim(), 'desc')
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
    useEffect(() => {
        setContact((prevState) => ({
            ...prevState,
            keywords
        }))
    }, [keywords, setContact])

    return (

        <div>
            <div className="flex flex-col mb-6">
                <span className="text-xl text-gray-900 mb-1">
                    Personal Information
                </span>
                {isResumeBuilder &&
                    <span className="test-sm text-gray-500">
                        Use a permanent address where you can receive mail.
                    </span>
                }

            </div>
            <div className="mb-10">

                <div className="flex flex-col pr-3 space-y-3 w-full">
                    {isResumeBuilder &&
                        <div className="flex justify-between space-x-2">
                            <div className="flex flex-col w-1/2">
                                <UserInput onInputChange={e => updateData(e.target.value, e.target.name)}
                                    value={contact?.firstName}
                                    name="firstName"
                                    type="text"
                                    input="text"
                                    label="First Name"
                                    placeholder="Jane"
                                />
                            </div>
                            <div className="flex flex-col w-1/2">
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

                    }

                    <UserInput onInputChange={e => updateData(e.target.value, e.target.name)}
                        value={contact?.title}
                        name="title"
                        type="text"
                        input="text"
                        label="Desired Job Title"
                        placeholder="Bond... James Bond"
                    />
                    {
                        isResumeBuilder &&
                        <>
                            <UserInput onInputChange={e => updateData(e.target.value, e.target.name)}
                                value={contact?.email}
                                name="email"
                                type="text"
                                input="text"
                                label="Email"
                                placeholder="Bond... James Bond"
                            />
                            <UserInput onInputChange={e => updateData(e.target.value, e.target.name)}
                                value={contact?.number}
                                name="number"
                                type="text"
                                input="text"
                                label="Phone Number"
                                placeholder="123456789"
                            />
                            <UserInput onInputChange={e => updateData(e.target.value, e.target.name)}
                                value={contact?.location}
                                name="location"
                                type="text"
                                input="text"
                                label="Location"
                                placeholder="İstanbul"
                            />
                        </>
                    }



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
                            hasError={hasError}
                            setHasError={setHasError}
                        />
                    </div>
                </div>
            </div>
            <div className="flex items-stretch w-full mb-4">
                <button
                    onClick={getDesc}
                    className="flex items-center justify-center w-30 px-3 py-2 text-base font-medium rounded-md text-white bg-blue-600 flex-grow">
                    Generate Summary
                </button>
            </div>
            <div className="flex w-100 mb-16">
                <div className="flex flex-col w-full pr-3">
                    <span className="mb-2">Professional Summary</span>
                    <UserInput onInputChange={(e) => updateData(e.target.value, e.target.name)}
                        value={contact.desc}
                        name="desc"
                        type="textarea"
                        input="textarea"
                        placeholder="Responsible for A/B tests - designing and conducting experiments to test the efficacy of different changes/improvements, analyzing the results, and making decisions based on those results."
                        className="border rounded h-40 px-3 py-1 placeholder:text-sm placeholder:whitespace-normal"
                    />
                    <span className="text-xs text-gray-500">You can edit it directly above and head over to next step when you are done! </span>
                </div>
            </div>
        </div>

    )
};

export default AboutForm;
