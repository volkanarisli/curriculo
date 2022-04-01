import {
    personalSkillsKeyWords, technicalSkillsKeyWords,
    phrasesForDesc, getGivenNumberKeywordsFromArray,
    shuffleArray,
    getRandomValue

} from "../../utils/helpers";
import { useEffect, useState } from "react";
import { PlusIcon, CheckIcon } from "@heroicons/react/solid";
import UserInput from "../common/UserInput";
const allKeywords = [
    personalSkillsKeyWords,
    technicalSkillsKeyWords,
    phrasesForDesc
]
const KeyInput = ({ onInputChange, value }) => {
    const [selectedKeywords, setSelectedKeywords] = useState([]);
    const [displayedKeywords, setDisplayedKeywords] = useState([]);
    const [customKeyword, setCustomKeywords] = useState('');
    const addKeyword = (index, selectedKeyword) => {
        let tempDisplayedKeywords = [...displayedKeywords];
        tempDisplayedKeywords[index].selected = !selectedKeyword.selected
        setDisplayedKeywords(tempDisplayedKeywords);
        toggleKeyword(selectedKeyword.name, tempDisplayedKeywords[index].selected);
        setTimeout(() => {
            setDisplayedKeywords((prevState) => prevState.filter(keyword => keyword !== selectedKeyword));
            const newKeyWord = {
                name: getRandomValue(getRandomValue(allKeywords)),
                selected: false
            }
            setDisplayedKeywords((prevState) => [...prevState, newKeyWord]);
        }, 1000)
    }
    const toggleKeyword = (selectedKeywordName, add) => {
        if (add) {
            onInputChange((prevState) => [...prevState, selectedKeywordName])
        } else {
            onInputChange((prevState) => prevState.filter(keyword => keyword !== selectedKeywordName))
        }
    }

    useEffect(() => {
        allKeywords.forEach((eachKeywords) => {
            let keywordsFromTopic = getGivenNumberKeywordsFromArray(eachKeywords, 3);
            setSelectedKeywords((prevState) => [...prevState, ...keywordsFromTopic]);
        })
    }, []);
    useEffect(() => {
        let keywordsObjectArray = selectedKeywords.map((eachKeyword) => {
            return {
                name: eachKeyword,
                selected: false
            }
        })
        setDisplayedKeywords(shuffleArray(keywordsObjectArray));
    }, [selectedKeywords]);
    useEffect(() => {
        console.log(value)
    }, [value])
    return (
        <div className="flex flex-col space-y-2">
            <div className="flex flex-wrap mb-2 mt-3">
                {
                    displayedKeywords?.map((eachKeyword, index) => {
                        return (
                            <div key={index}
                                onClick={() => addKeyword(index, eachKeyword)}
                                className={`flex items-center border border-gray-300
                                group cursor-pointer shadow-sm text-xs rounded py-2 px-3 mr-3 mt-2
                            transition duration-150 hover:bg-blue-600
                            ${eachKeyword.selected && 'bg-blue-600'}`
                                }>
                                <p className={`mr-2 group-hover:text-white ${eachKeyword.selected ? 'text-white' : 'text-gray-700 '}`}>
                                    {eachKeyword.name}
                                </p>
                                <div>
                                    {
                                        eachKeyword.selected ?
                                            <CheckIcon className="w-4 h-4 text-white" /> :
                                            <PlusIcon className="w-4 h-4 text-gray-400" />
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="flex flex-wrap">
                {
                    value.map((item, index) => {
                        return (
                            <div key={index}
                                onClick={() => toggleKeyword(item, false)}
                                className="flex items-center border hover:bg-red-700 border-gray-300
                            cursor-pointer shadow-sm text-xs rounded py-2 px-3 mr-3 mt-2
                            transition-colors duration-150
                            bg-blue-600">
                                <p className="mr-2 text-white">
                                    {item}
                                </p>
                                <div>
                                    <CheckIcon className="w-4 h-4 text-white" />
                                </div>
                            </div>
                        )
                    })
                }


            </div>
            <div className="max-w-xs mt-2">
                <UserInput onInputChange={e => setCustomKeywords(e.target.value)}
                    value={customKeyword}
                    name="customKeyword"
                    type="text"
                    input="text"

                    placeholder="Time Travel"
                >
                    <p className="text-2xs text-gray-700 mb-1 font-semibold">What do you bring to the table? Write your own keyword.</p>
                </UserInput>
            </div>
        </div>
    )
}

export default KeyInput