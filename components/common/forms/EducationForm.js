import { useEffect, useState } from "react";
import { useResumeInfo } from "../../../context/ResumeInfo";
import UserInput from "../../common/UserInput";
import axios from "axios";
import { PlusIcon, XIcon } from "@heroicons/react/solid";

const InputGroup = ({ index,
    experience,
    setInputForm,
    removeExperience, keywords, setKeywords,
    hasError, setHasError, isBulletPoint, setIsBulletPoint, getDesc, nthExpreience, isResumeBuilder, isLoading }) => {

    return (
        <div>
            <div className="flex justify-between items-center ">
                <span className="text-2xl font-bold mb-4">{isResumeBuilder && `${nthExpreience + 1}.`} Education</span>
                {
                    isResumeBuilder &&
                    <span onClick={() => removeExperience(index)}
                        className="flex items-center justify-center group h-7 w-7 rounded-full bg-white hover:bg-red-700 cursor-pointer" title="Remove Experience">
                        <XIcon className="h-5 w-5 text-red-600 group-hover:text-white" />
                    </span>
                }
            </div>
            <div className="flex mb-3">
                <div className="flex flex-col w-1/2 pr-3">
                    <UserInput className="border rounded h-10 p-3"
                        type="text"
                        input="text"
                        label="School or Course etc."
                        placeholder="Harvard University"
                        name="school"
                        value={experience.school || ''}
                        onInputChange={({ target: { value, name } }) => setInputForm(
                            {
                                experinceKey: index,
                                value,
                                name
                            })
                        }
                    />
                </div>
                <div className="flex flex-col w-1/2 pr-3">
                    <UserInput className="border rounded h-10 p-3"
                        input="text"
                        type="text"
                        label="Degree or Certification etc."
                        placeholder="Science"
                        name="degree"
                        value={experience.degree || ''}
                        onInputChange={({ target: { value, name } }) => setInputForm(
                            {
                                experinceKey: index,
                                value,
                                name
                            })
                        } />

                </div>
            </div>
            <div className="flex mb-3">
                <div className="flex flex-col w-1/2 pr-3">
                    <UserInput className="border rounded h-10 p-3"
                        type="date"
                        input="date"
                        label="Start Year"
                        placeholder="2020"
                        name="startDate"
                        value={experience.startDate || ''}
                        onInputChange={({ target: { value, name } }) => {
                            setInputForm(
                                {
                                    experinceKey: index,
                                    value,
                                    name
                                })
                        }
                        }
                    />
                </div>
                <div className="flex flex-col w-1/2 pr-3">
                    <UserInput className="border rounded h-10 p-3"
                        input="date"
                        type="date"
                        label="End Year"
                        placeholder="2022"
                        name="endDate"
                        value={experience.endDate || ''}
                        onInputChange={({ target: { value, name } }) => {
                            setInputForm(
                                {
                                    experinceKey: index,
                                    value,
                                    name
                                })
                        }
                        } />

                </div>
            </div>
            {
                isResumeBuilder &&
                <>

                    <div className="flex flex-col">
                        <div className="flex pr-3 mb-3">

                            <UserInput className="border rounded h-10 p-3"
                                type="text"
                                input="text"
                                label="Country"
                                placeholder="Turkey"
                                name="country"
                                value={experience.country || ''}
                                onInputChange={({ target: { value, name } }) => {
                                    setInputForm(
                                        {
                                            experinceKey: index,
                                            value,
                                            name
                                        })
                                }
                                }
                            />
                        </div>
                        <div className="flex flex-col pr-3">
                            <UserInput className="border rounded h-10 p-3"
                                input="text"
                                type="text"
                                label="City"
                                placeholder="İstanbul"
                                name="city"
                                value={experience.city || ''}
                                onInputChange={({ target: { value, name } }) => {
                                    setInputForm(
                                        {
                                            experinceKey: index,
                                            value,
                                            name
                                        })
                                }
                                } />

                        </div>
                    </div>
                </>

            }
            <div className="flex mb-14 mt-3">
                <div className="flex flex-col w-full pr-3">

                    <span className="mb-1 text-xl text-gray-900 font-semibold">Education</span>
                    <span className="mb-1 text-sm text-gray-500">Select adjectives that describes your Educational experience best.
                        Mention your role, experience, things you have accomplished and best skills. AI carry on the rest. Remember more is better.</span>
                    <UserInput onInputChange={setKeywords}
                        value={keywords}
                        index={index}
                        name="keys"
                        type="keys"
                        input="keys"
                        label="Examples"
                        hasError={hasError}
                        setHasError={setHasError}
                    />
                    <span className="mt-2">
                        <UserInput onInputChange={setIsBulletPoint}
                            value={isBulletPoint}
                            name="isBulletPoint"
                            type="toggle"
                            input="toggle"
                            label="Should description be bullet point?"
                            hasError={hasError}
                            setHasError={setHasError}
                        />
                    </span>

                </div>
            </div>
            <div className="flex items-stretch w-full mb-4">
                <button
                    onClick={() => getDesc(index, experience)}
                    className="flex items-center justify-center w-30 px-3 py-2 text-base font-medium rounded-md text-white bg-blue-600 flex-grow">
                    Generate Summary
                </button>
            </div>
            <div className="flex w-100 mb-16">
                <div className="flex flex-col w-full pr-3">
                    <span className="mb-2">Description of a Job</span>
                    <UserInput onInputChange={({ target: { value, name } }) => setInputForm(
                        {
                            experinceKey: index,
                            value,
                            name
                        })}
                        value={experience.desc}
                        name="desc"
                        type="textarea"
                        input="textarea"
                        placeholder="Responsible for A/B tests - designing and conducting experiments to test the efficacy of different changes/improvements, analyzing the results, and making decisions based on those results."
                        className="border rounded h-40 w-full px-3 py-1 placeholder:text-sm placeholder:whitespace-normal"
                        isLoading={isLoading}
                    />
                    <span className="text-xs text-gray-500">You can edit it directly above and head over to next step when you are done! </span>
                </div>
            </div>
        </div>
    )
}

const EducationForm = ({ isResumeBuilder }) => {
    const { educationHistory, setEducationHistory } = useResumeInfo();
    const [keywords, setKeywords] = useState({ 0: [] })
    const [isBulletPoint, setIsBulletPoint] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [hasError, setHasError] = useState({ customKeyword: '' })
    const setInput = (value) => {
        const experience = {
            id: value.experinceKey,
            [value.name]: value.value
        }
        const indexOfExperience = educationHistory.findIndex(item => item.id === experience.id)
        if (indexOfExperience > -1) {
            let newArr = educationHistory
            newArr[indexOfExperience] = { ...newArr[indexOfExperience], ...experience }
            setEducationHistory([...newArr])
        } else {
            setEducationHistory([experience, ...educationHistory])
        }
    }
    const addNewExperience = () => {
        if (!educationHistory) {
            setEducationHistory([{ id: 0 }])
            setKeywords({ 0: [] })
        } else {
            setEducationHistory([...educationHistory, { id: educationHistory.length }])
            setKeywords(prevState => ({ ...prevState, [educationHistory.length]: [] }))
        }

    }
    const removeExperience = (index) => {
        const newArr = educationHistory.filter((item) => item.id !== index)
        setEducationHistory([...newArr])
    }
    const getDesc = async (index, experience) => {
        if (keywords[index].length <= 2) {
            return setHasError({ customKeyword: 'You should add at least 3 keywords about you' })
        }
        setIsLoading(true)
        const { data } = await axios.post('/api/getEducationalSummary', { experience, keywords: keywords[index], isBulletPoint })
        setIsLoading(false)
        setInput({
            experinceKey: index,
            value: data.response.trim(),
            name: 'desc'
        })
    }

    useEffect(() => {
        if (isResumeBuilder) return
        setEducationHistory([{ id: 0 }])
        setKeywords({ 0: [] })
    }, [isResumeBuilder, setEducationHistory])

    return (
        <>
            {
                educationHistory.map((item, index) => (
                    <InputGroup key={index}
                        index={item.id}
                        nthExpreience={index}
                        experience={item}
                        setInputForm={setInput}
                        removeExperience={removeExperience}
                        setKeywords={setKeywords}
                        keywords={keywords}
                        hasError={hasError}
                        setHasError={setHasError}
                        isBulletPoint={isBulletPoint}
                        setIsBulletPoint={setIsBulletPoint}
                        getDesc={getDesc}
                        isResumeBuilder={isResumeBuilder}
                        isLoading={isLoading}
                    />

                ))
            }

            {
                isResumeBuilder &&
                <div className="bottom-10 mt-10 w-full">
                    <button onClick={addNewExperience}
                        className="text-blue-600 flex items-center max-w-fit py-3 px-2 rounded-md w-full transition hover:-translate-y-1 hover:shadow flex-grow-0">
                        <PlusIcon className="h-6 w-6 mr-2" />
                        Educational Experience
                    </button>
                </div>
            }
        </>
    )
};

export default EducationForm;
