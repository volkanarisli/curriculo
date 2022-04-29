import UserInput from "../../common/UserInput"
import { useState, useEffect } from "react"
import { DuplicateIcon, ClipboardIcon } from "@heroicons/react/outline"
import { copyText, exportTextAsDocxFile, getRandomValue, sampleJobDesc, sampleCoverLetters } from "../../../utils/helpers"
import axios from "axios"
const CoverLetterForm = ({ isTryout }) => {
    const [jobDescription, setJobDescription] = useState("")
    const [proposalLetter, setProposalLetter] = useState("")
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
        const { data } = await axios.post('/api/getCoverLetter', { description: jobDescription })
        setIsLoading(false)
        setProposalLetter(data.response.trim())
    }
    const getDescWithTryOut = () => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            setProposalLetter(getRandomValue(sampleCoverLetters).trim())
        }, [1000])
    }

    return (
        <div>
            <div className="flex flex-col mb-8">
                <span className="text-gray-900 text-xl font-semibold mb-2">
                    Cover Letter
                </span>
                <span className="text-gray-400 text-sm">
                    Fill out the form to stand out among the crowd and get that job.
                </span>
            </div>
            <div>
                <div className="flex flex-col relative">
                    <UserInput onInputChange={handleJobDescription}
                        value={isTryout ? sampleJobDesc : jobDescription}
                        name="jobDescription"
                        type="textarea"
                        input="textarea"
                        placeholder="Job Description From Linkedin, Indeed, Glassdoor, etc"
                        hasError={hasError}
                        isTryout={isTryout}
                        className="border rounded h-64 w-full px-3 py-1 placeholder:text-sm placeholder:whitespace-normal"
                    />
                    <span className="text-xs text-gray-500 mt-3">
                        Copy and paste the description of the Job you are applying for.
                    </span>
                    {
                        !isTryout &&
                        <ClipboardIcon
                            title="Paste Clipboard"
                            onClick={pasteClipbaord}
                            className="h-5 w-5 text-gray-500 absolute right-2 top-2 hover:scale-125 cursor-pointer" />
                    }

                </div>
            </div>
            <button
                onClick={isTryout ? getDescWithTryOut : getDesc}
                className="px-3 py-2 text-base font-medium rounded-md text-white bg-blue-600 w-full my-7">
                Generate Cover Letter
            </button>

            <div className="relative">
                <UserInput onInputChange={(e) => setProposalLetter(e.target.value)}
                    value={proposalLetter}
                    name="proposalLetter"
                    type="textarea"
                    input="textarea"
                    placeholder="Generated Cover Letter"
                    hasError={hasError}
                    isLoading={isLoading}
                    isTryout={isTryout}
                    className="border rounded w-full h-64 px-3 py-1 placeholder:text-sm placeholder:whitespace-normal"
                />
                <span className="text-xs text-gray-500 mt-3">
                    Dont forget the edit, fine-tune your cover letter.
                </span>
                {
                    !isTryout &&
                    <DuplicateIcon
                        title="Paste Clipboard"
                        onClick={() => copyText(proposalLetter)}
                        className="h-5 w-5 text-gray-500 absolute right-2 top-2 hover:scale-125 cursor-pointer" />
                }

            </div>
            {
                !isTryout &&
                <button
                    onClick={() => exportTextAsDocxFile(proposalLetter)}
                    className="px-3 py-2 text-base font-medium rounded-md text-white bg-blue-600 w-2/3 my-7">
                    Export Cover Letter as .docx
                </button>
            }


        </div>
    )
}

export default CoverLetterForm