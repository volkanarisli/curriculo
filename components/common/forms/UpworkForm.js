import UserInput from "../../common/UserInput"
import { useState, useEffect } from "react"
import { DuplicateIcon, ClipboardIcon } from "@heroicons/react/outline"
import { copyText, sampleProposalLetters, sampleUpworkJobsDesc, getRandomValue, isMobileDevice, classNames } from "../../../utils/helpers"
import { event } from "../../../utils/gtag";
import ImportantAlert from "../ImportantAlert"
import Arrow from "../../../assets/img/Arrow.svg";
import Image from "next/image";

import axios from "axios"
const UpworkForm = ({ isTryout }) => {
    const [jobDescription, setJobDescription] = useState("")
    const [proposalLetter, setProposalLetter] = useState("")
    const [keywords, setKeywords] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        setIsMobile(isMobileDevice())
    })
    const handleJobDescription = (e) => {
        setJobDescription(e.target.value)
    }
    const pasteClipbaord = () => {
        navigator.clipboard.readText().then(text => {
            setJobDescription(prevValue => prevValue + text)
        })
    }
    const [hasError, setHasError] = useState({})
    const getDesc = async () => {
        if (!jobDescription) {
            return setHasError({ jobDescription: 'Description area should not be empty.' })
        }
        setIsLoading(true)
        setHasError({ jobDescription: '' })
        const { data } = await axios.post('/api/getProposalLetter', { description: jobDescription, keywords })
        setIsLoading(false)
        setProposalLetter(data.response.trim())
    }
    const getDescWithTryOut = () => {
        event({
            event: "demo_upwork",
            action: 'click',
            category: 'demo_events',
            label: 'upwork_form_tryout',
            value: 1,
        })
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            setProposalLetter(getRandomValue(sampleProposalLetters).trim())
        }, [1000])
    }

    useEffect(() => {
        if (isTryout) {
            setKeywords(['Web Design', ' Mockup', 'Wireframing', 'Responsive Design', 'Graphic Design', 'UserFlow', 'User Interface Design'])
        }
    }, [isTryout])
    return (
        <div>
            <div className="flex flex-col mb-8">
                <span className="text-gray-900 text-xl font-semibold mb-2">
                    Upwork Proposal Letter
                </span>
                <span className="text-gray-400 text-sm">
                    Fill out the form to stand out among the crowd and get that job.
                </span>
            </div>
            <div className="mb-5">
                <div className="flex flex-col relative">
                    {
                        (!isMobile && isTryout) &&
                        <div className="hidden lg:flex lg:flex-col absolute md:-left-48 ml-1 pointer-events-none">
                            <span className="-mr-10">
                                <Image src={Arrow} alt="Arrow" className="flip" />
                            </span>
                            <span className="text-gray-500 text-sm absolute w-56 top-16 right-10 text-center font-mono">
                                Textarea Where You Paste The Gig Description You Want To Get A Proposal For
                            </span>
                        </div>
                    }
                    <UserInput onInputChange={handleJobDescription}
                        value={isTryout ? sampleUpworkJobsDesc : jobDescription}
                        name="jobDescription"
                        type="textarea"
                        input="textarea"
                        placeholder="Gig Description From Upwork"
                        hasError={hasError}
                        isTryout={isTryout}
                        className="border rounded h-64 w-full px-3 py-1 placeholder:text-sm placeholder:whitespace-normal"
                    />
                    <span className="text-xs text-gray-500 mt-3">
                        Copy and paste the description of the gig you are applying for.
                    </span>
                    {
                        !isTryout &&
                        <ClipboardIcon
                            title="Paste Clipboard"
                            onClick={pasteClipbaord}
                            className="h-5 w-5 text-gray-500 absolute right-2 top-2 hover:scale-125 cursor-pointer" />
                    }

                </div>
                <div className="mt-5 relative">
                    {
                        !isTryout &&
                        <span className="text-large text-gray-500">
                            Select/Add the keywords that requiered on the Job Description.
                        </span>
                    }
                    {
                        (!isMobile && isTryout) &&
                        <div className="hidden lg:flex lg:flex-col absolute -right-20 md:-right-48 ml-1 sm:-right-60 pointer-events-none">
                            <span className="">
                                <Image src={Arrow} alt="Arrow" className="flip mirrorYAxis" />
                            </span>
                            <span className="text-gray-500 text-sm absolute w-56 -top-7 -right-24 text-center font-mono">
                                Area Where You Can Add Keywords that Requiered on the Gig Description
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
            {
                !isTryout &&
                <ImportantAlert header="Please Read Carefully Before Applying Jobs" text="Don't forget to check the generated proposal letter if it violates the Upwork community guidelines." />
            }
            <div className="relative">
                {
                    (!isMobile && isTryout) &&
                    <div className="hidden lg:flex lg:flex-col absolute -left-20 md:-left-48 ml-1 sm:-left-60 pointer-events-none">
                        <span className="-mr-10">
                            <Image src={Arrow} alt="Arrow" />
                        </span>
                        <span className="text-gray-500 absolute text-sm w-56 top-2 right-5 text-center font-mono">
                            You can try Curriculo out with pre-filled data.
                        </span>
                    </div>
                }
                <button
                    onClick={isTryout ? getDescWithTryOut : getDesc}
                    className={classNames("px-3 py-2 text-base font-medium rounded-md text-white bg-blue-600 w-full my-7", isTryout && 'animate-bounce hover:animate-none')}>
                    Generate Proposal Letter
                </button>
            </div>


            <div className="relative">
                <UserInput onInputChange={(e) => setProposalLetter(e.target.value)}
                    value={proposalLetter}
                    name="proposalLetter"
                    type="textarea"
                    input="textarea"
                    placeholder="Generated Proposal Letter"
                    hasError={hasError}
                    isLoading={isLoading}
                    isTryout={isTryout}
                    className="border rounded h-64 w-full px-3 py-1 placeholder:text-sm placeholder:whitespace-normal"
                />

                <span className="text-xs text-gray-500 mt-3">
                    Dont forget the edit, fine-tune your proposal letter.
                </span>
                {
                    !isTryout &&
                    <DuplicateIcon
                        title="Paste Clipboard"
                        onClick={() => copyText(proposalLetter)}
                        className="h-5 w-5 text-gray-500 absolute right-2 top-2 hover:scale-125 cursor-pointer" />
                }

            </div>

        </div>
    )
}

export default UpworkForm