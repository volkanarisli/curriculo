import UserInput from "../../common/UserInput"
import { useState, useEffect } from "react"
import { DuplicateIcon, ClipboardIcon } from "@heroicons/react/outline"
import { copyText, sampleProposalLetters, sampleUpworkJobsDesc, getRandomValue } from "../../../utils/helpers"
import { event } from "../../../utils/gtag";
import ImportantAlert from "../ImportantAlert"
import axios from "axios"
const UpworkForm = ({ isTryout }) => {
    const [jobDescription, setJobDescription] = useState("")
    const [proposalLetter, setProposalLetter] = useState("")
    const [keywords, setKeywords] = useState([])
    const [isLoading, setIsLoading] = useState(false)
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
            action: 'click',
            event_category: 'demo_events',
            event_label: 'upwork_form_tryout',
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
                <div className="mt-5">
                    {
                        !isTryout &&
                        <span className="text-large text-gray-500">
                            Select/Add the keywords that requiered on the Job Description.
                        </span>
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
            <button
                onClick={isTryout ? getDescWithTryOut : getDesc}
                className="px-3 py-2 text-base font-medium rounded-md text-white bg-blue-600 w-full my-7">
                Generate Proposal Letter
            </button>

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