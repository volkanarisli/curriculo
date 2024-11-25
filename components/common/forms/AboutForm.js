
import { useState, useEffect } from "react";
import { useResumeInfo } from "../../../context/ResumeInfo";
import axios from "axios";
import UserInput from "../../common/UserInput"
import { getRandomValue, sampleProfessionalSummaries, sampleJobTitle, classNames, isMobileDevice } from "../../../utils/helpers";
import { event } from "../../../utils/gtag";
import Arrow from "../../../assets/img/Arrow.svg";
import Image from "next/image"
const AboutForm = ({ name, surname, email, isResumeBuilder, isTryout }) => {
    const { contact, setContact } = useResumeInfo()
    const [keywords, setKeywords] = useState([])
    const [hasError, setHasError] = useState({ customKeyword: '' })
    const [isLoading, setIsLoading] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        setIsMobile(isMobileDevice())
    })
    const updateData = (e, propertyName) => {
        setContact(prevState => ({ ...prevState, [propertyName]: e }))
    }
    const getDesc = async () => {
        if (keywords.length < 2) {
            return setHasError({ customKeyword: 'You should add at least 3 keywords about you' })
        }
        setIsLoading(true)
        const { data } = await axios.post('/api/getProfessionalSummary', {
            keywords: keywords, title: contact.currentTitle
        })
        setIsLoading(false)
        updateData(data.response.trim(), 'desc')
    }
    const getDescWithTryOut = () => {
        event({
            event: "demo_professional_summary",
            action: 'click',
            category: 'demo_events',
            label: 'professional_summary_tryout',
            value: 1,
        })
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            updateData(getRandomValue(sampleProfessionalSummaries).trim(), 'desc')
        }, [1000])
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
    useEffect(() => {
        if (isTryout) {
            setKeywords(['Ability to Listen', 'Networking Ability', 'Resiliency', 'Enthusiasm', 'Multitasking Skills', 'Communications Skills'])
        }
    }, [isTryout])

    return (

        <div>
            {isResumeBuilder &&
                <div className="flex flex-col mb-6">
                    <span className="text-xl text-gray-900 mb-1">
                        Personal Information
                    </span>

                    <span className="test-sm text-gray-500">
                        Use a permanent address where you can receive mail.
                    </span>
                </div>
            }
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
                    <span className="mb-1 text-xl text-gray-900 font-semibold">Professional Summary</span>
                    <span className="mb-1 text-sm text-gray-500">Select adjectives that describes you best. Mention your role, experience and best skills. AI carry on the rest. Remember more is better.</span>

                    <div className="relative">
                        {
                            (!isMobile && isTryout) &&
                            <div className="hidden lg:flex lg:flex-col absolute -top-5 -left-20 md:-left-44 ml-1 sm:-left-60 pointer-events-none">
                                <span className="-mr-10">
                                    <Image src={Arrow} alt="Arrow" className="flip" />
                                </span>
                                <span className="text-gray-500 text-sm absolute w-56 top-16 right-10 text-center font-mono">
                                    Input Area Where You type Your Job Title
                                </span>
                            </div>
                        }
                        <UserInput onInputChange={e => updateData(e.target.value, e.target.name)}
                            value={isTryout ? sampleJobTitle : contact?.currentTitle}
                            name="currentTitle"
                            type="text"
                            input="text"
                            label="Job Title"
                            placeholder="Job Title"
                        />
                    </div>

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

                    <div className="relative">
                        {
                            (!isMobile && isTryout) &&
                            <div className="hidden lg:flex lg:flex-col absolute top-10 -right-20 md:-right-44 ml-1 sm:-right-60 pointer-events-none">
                                <span className="">
                                    <Image src={Arrow} alt="Arrow" className="flip mirrorYAxis" />
                                </span>
                                <span className="text-gray-500 text-sm absolute w-56 -top-20 -right-24 text-center font-mono">
                                    Area Where You Can Add Keywords That Best Describes your both technical and non-technical skills
                                </span>
                            </div>
                        }
                        <UserInput onInputChange={setKeywords}
                            value={keywords}
                            name="keys"
                            type="keys"
                            input="keys"
                            label="Examples"
                            hasError={hasError}
                            isTryout={isTryout}
                            setHasError={setHasError}
                        />
                    </div>
                </div>
            </div>
            <div className="flex items-stretch w-full relative mb-4">
                {
                    (!isMobile && isTryout) &&
                    <div className="hidden lg:flex lg:flex-col absolute -top-10 -left-20 md:-left-44 ml-1 sm:-left-60 pointer-events-none">
                        <span className="-mr-10">
                            <Image src={Arrow} alt="Arrow" />
                        </span>
                        <span className="text-gray-500 text-sm absolute w-56 top-2 right-5 text-center font-mono">
                            You can try Curriculo out with pre-filled data.
                        </span>
                    </div>
                }
                <button
                    onClick={isTryout ? getDescWithTryOut : getDesc}
                    className={classNames("px-3 py-2 text-base font-medium rounded-md text-white bg-blue-600 w-full my-7", isTryout && 'animate-bounce hover:animate-none')}>
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
                        className="border rounded h-40 w-full px-3 py-1 placeholder:text-sm placeholder:whitespace-normal"
                        isTryout={isTryout}
                        isLoading={isLoading}
                    />
                    <span className="text-xs text-gray-500">You can edit it directly above and head over to next step when you are done! </span>
                </div>
            </div>
        </div>

    )
};

export default AboutForm;
