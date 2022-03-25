import { useEffect, useState } from "react";
import { useResumeInfo } from "../../context/ResumeInfo";
import axios from "axios";

const InputGroup = ({ index, experience, getDesc, setInput }) => {

    return (
        <div>
            <span className="text-2xl font-bold mb-4">{index + 1}. Education</span>
            <div className="flex w-100 mb-3">
                <div className="flex flex-col w-1/2 pr-3">
                    <span className="mb-2">School</span>
                    <input className="border rounded h-10 p-3" type="text" placeholder="Harvard..." name="school" value={experience.school} onChange={({ target: { value, name } }) => setInput(
                        {
                            experinceKey: index,
                            value,
                            name
                        })
                    }
                    />
                </div>
                <div className="flex flex-col w-1/2 pr-3">
                    <span className="mb-2">Degree</span>
                    <input className="border rounded h-10 p-3" type="text" placeholder="Graduate..." name="degree" value={experience.degree} onChange={({ target: { value, name } }) => setInput(
                        {
                            experinceKey: index,
                            value,
                            name
                        })
                    } />

                </div>
            </div>
            <div className="flex w-100 mb-14">
                <div className="flex flex-col w-full pr-3">
                    <span className="mb-2">Keywords</span>
                    <div className="relative">
                        <input className="border rounded h-12 p-3 w-full" type="text" placeholder="Science and stuff...." name="keywords" value={experience.keywords} onChange={({ target: { value, name } }) => setInput(
                            {
                                experinceKey: index,
                                value,
                                name
                            })
                        } />
                        <button onClick={() => getDesc(index)} className="absolute right-1 mt-2 z-10 bg-indigo-100 text-blue-600 p-2 rounded-lg text-sm">Save and Generate</button>
                    </div>
                    <span className="text-xs text-gray-500">Start with <b>Responsible for </b>and enter keywords related with your job. Seperate them with commas.</span>
                </div>
            </div>
            <div className="flex w-100 mb-16">
                <div className="flex flex-col w-full pr-3">
                    <span className="mb-2">Description of a Job</span>
                    <textarea className="border rounded h-28 px-3 py-1 placeholder:text-sm placeholder:whitespace-normal" name="desc" value={experience.desc} placeholder="Responsible for A/B tests - designing and conducting experiments to test the efficacy of different changes/improvements, analyzing the results, and making decisions based on those results." onChange={({ target: { value, name } }) => setInput(
                        {
                            experinceKey: index,
                            value,
                            name
                        })
                    } />
                    <span className="text-xs text-gray-500">You can edit it directly above and head over to next step when you are done! </span>
                </div>
            </div>
        </div>
    )
}

const EducationForm = () => {
    const { educationHistory, setEducationHistory } = useResumeInfo();

    const setInput = (value) => {

        const experience = {
            id: value.experinceKey,
            [value.name]: value.value
        }
        // if (experience[value.name] === educationHistory[value.experinceKey][value.name]) return
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
        } else {
            setEducationHistory([...educationHistory, { id: educationHistory.length }])
        }

    }
    const getDesc = async (index) => {
        const prompt = `Create a resume education summary: I am ${educationHistory[index].degree},${educationHistory[index].school}, ${educationHistory[index].keywords} summary:`
        // console.log(prompt)
        const { data } = await axios.post('/api/generateTextFromKeyword', { prompt })
        setInput({
            experinceKey: index,
            value: data.response,
            name: 'desc'
        })
        setEducationHistory([...educationHistory])

    }



    return (
        <>
            {
                educationHistory.map((item, index) => (
                    <InputGroup key={index} index={index} experience={item} getDesc={(e) => getDesc(e)} setInput={(e) => setInput(e)} />
                ))
            }

            <div className="bottom-10 mt-10 w-full">
                <button onClick={addNewExperience}
                    className="bg-white text-blue-600 border border-blue-600 py-3 sm:min-w-lg rounded-md w-full">
                    Add Education
                </button>
            </div>
        </>
    )
};

export default EducationForm;
