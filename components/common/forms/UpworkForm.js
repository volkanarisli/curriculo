import UserInput from "../../common/UserInput"
import { useState, useEffect } from "react"
import { DuplicateIcon, ClipboardIcon } from "@heroicons/react/outline"
import { copyText } from "../../../utils/helpers"
import axios from "axios"
const UpworkForm = () => {
    const [jobDescription, setJobDescription] = useState("")
    const [proposalLetter, setProposalLetter] = useState("")
    const [keywords, setKeywords] = useState([])
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
        setHasError({ jobDescription: '' })
        const { data } = await axios.post('/api/getProposalLetter', { description: jobDescription, keywords })
        setProposalLetter(data.response.trim())
    }

    useEffect(() => {

    }, [])

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
            <div>
                <div className="flex flex-col relative">
                    <UserInput onInputChange={handleJobDescription}
                        value={jobDescription}
                        name="jobDescription"
                        type="textarea"
                        input="textarea"
                        placeholder="Gig Description From Upwork"
                        hasError={hasError}
                        className="border rounded h-64 px-3 py-1 placeholder:text-sm placeholder:whitespace-normal"
                    />
                    <span className="text-xs text-gray-500 mt-3">
                        Copy and paste the description of the gig you are applying for.
                    </span>
                    <ClipboardIcon
                        title="Paste Clipboard"
                        onClick={pasteClipbaord}
                        className="h-5 w-5 text-gray-500 absolute right-2 top-2 hover:scale-125 cursor-pointer" />
                </div>
                <div className="mt-5">
                    <span className="text-large text-gray-500">
                        Select/Add the keywords that requiered on the Job Description.
                    </span>
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
            <button
                onClick={getDesc}
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
                    className="border rounded h-64 px-3 py-1 placeholder:text-sm placeholder:whitespace-normal"
                />
                <DuplicateIcon
                    title="Paste Clipboard"
                    onClick={() => copyText(proposalLetter)}
                    className="h-5 w-5 text-gray-500 absolute right-2 top-2 hover:scale-125 cursor-pointer" />
            </div>

        </div>
    )
}

export default UpworkForm