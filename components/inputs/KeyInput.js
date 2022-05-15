import {
    allKeywords, getGivenNumberKeywordsFromArray,
    shuffleArray,
    getRandomValue,
    classNames
} from "../../utils/helpers";
import { useEffect, useState } from "react";
import { PlusIcon, CheckIcon, XIcon } from "@heroicons/react/solid";
import UserInput from "../common/UserInput";
import Divider from "../common/Divider";

const KeyInput = ({ onInputChange, value, setHasError, hasError, index, isTryout }) => {
    const [selectedKeywords, setSelectedKeywords] = useState([]);
    const [displayedKeywords, setDisplayedKeywords] = useState([]);
    const [usersKeywords, setUsersKeywords] = useState([]);
    const [customKeyword, setCustomKeywords] = useState('');

    const addKeyword = (index, selectedKeyword) => {
        if (isTryout) return
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
        }, 500)
    }
    const hoverKeyword = (index, isHovered) => {
        let tempHoveredKeywords = [...displayedKeywords];
        tempHoveredKeywords[index].hovered = isHovered;
        setDisplayedKeywords(tempHoveredKeywords);
    }
    const hoverUsersKeywords = (index, selectedKeyword) => {
        let tempHoveredUsersKeywords = [...usersKeywords];
        tempHoveredUsersKeywords[index].hovered = !selectedKeyword.hovered;
        setUsersKeywords(tempHoveredUsersKeywords);
    }
    const toggleKeyword = (selectedKeywordName, add, isCustom) => {
        if (!selectedKeywordName) return
        if (isTryout) return
        if (add) {
            if (index + 1) {
                if (value?.[index].includes(selectedKeywordName)) {
                    return setHasError({ customKeyword: 'Keyword already exists' })
                }
            } else {
                if (value?.includes(selectedKeywordName)) {
                    return setHasError({ customKeyword: 'Keyword already exists' })
                }
            }

            setHasError({ customKeyword: '' })
            if (index + 1) {
                onInputChange((prevState) => ({
                    ...prevState,
                    [index]: [...prevState[index], selectedKeywordName],
                    [index + 1]: []
                }))
            } else {
                onInputChange((prevState) => [...prevState, selectedKeywordName])
            }

            if (isCustom) setCustomKeywords('')
        } else {

            if (index + 1) {
                onInputChange((prevState) => ({
                    ...prevState,
                    [index]: prevState[index].filter(keyword => keyword !== selectedKeywordName)
                }))
            } else {
                onInputChange((prevState) => prevState.filter(keyword => keyword !== selectedKeywordName))
            }

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
                selected: false,
                hovered: false
            }
        })
        setDisplayedKeywords(shuffleArray(keywordsObjectArray));
    }, [selectedKeywords]);
    useEffect(() => {
        let tempValues
        if (index + 1) {
            tempValues = value?.[index].map((item) => {
                return {
                    name: item,
                    hovered: false
                }
            })
        } else {
            tempValues = value?.map((item) => {
                return {
                    name: item,
                    hovered: false
                }
            })
        }

        setUsersKeywords(tempValues);
    }, [value, index])
    return (
        <div className="flex flex-col">
            {
                !isTryout &&
                <div className={classNames("flex flex-wrap mb-3 mt-3", isTryout && 'cursor-not-allowed')}>
                    {
                        displayedKeywords?.map((eachKeyword, index) => {
                            return (
                                <div key={index}
                                    onClick={() => addKeyword(index, eachKeyword)}
                                    onMouseEnter={() => {
                                        if (isTryout) return
                                        hoverKeyword(index, true)
                                    }}
                                    onMouseLeave={() => {
                                        if (isTryout) return
                                        hoverKeyword(index, false)
                                    }}
                                    className={classNames('flex items-center border border-gray-300  group cursor-pointer shadow-sm text-xs rounded py-2 px-3 mr-3 mt-2  transition duration-150 hover:bg-blue-600',
                                        eachKeyword.selected && 'bg-blue-600')
                                    }>
                                    <p className={`mr-2 group-hover:text-white ${eachKeyword.selected ? 'text-white' : 'text-gray-700 '}`}>
                                        {eachKeyword.name}
                                    </p>
                                    <div>
                                        {
                                            eachKeyword.hovered || eachKeyword.selected ?
                                                <CheckIcon className="w-4 h-4 text-white" /> :
                                                <PlusIcon className="w-4 h-4 text-gray-400" />
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            }

            {
                usersKeywords?.length > 0 &&
                <Divider className="mb-3">
                    <p className="px-2 bg-white text-sm text-gray-500">Selected</p>
                </Divider>
            }

            <div className="flex flex-wrap mb-4">

                {
                    usersKeywords?.map((item, index) => {
                        return (
                            <div key={index}
                                onClick={() => toggleKeyword(item.name, false)}
                                onMouseEnter={() => {
                                    if (isTryout) return
                                    hoverUsersKeywords(index, item)
                                }
                                }
                                onMouseLeave={() => {
                                    if (isTryout) return
                                    hoverUsersKeywords(index, item)
                                }}
                                className={classNames("flex items-center border  border-gray-300 cursor-pointer shadow-sm text-xs rounded py-2 px-3 mr-3 mt-2  transition-colors duration-150  bg-blue-600",
                                    !isTryout && 'hover:bg-red-700')}
                            >
                                <p className="mr-2 text-white">
                                    {item.name}
                                </p>
                                <div>
                                    {
                                        item.hovered ?
                                            <XIcon className="w-4 h-4 text-white" /> :
                                            <CheckIcon className="w-4 h-4 text-white" />

                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {
                !isTryout &&
                <div className="max-w-sm">
                    <div className="flex">
                        <span className="w-full mr-2">
                            <UserInput onInputChange={e => setCustomKeywords(e.target.value)}
                                value={customKeyword}
                                hasError={hasError}
                                name="customKeyword"
                                type="text"
                                input="text"
                                placeholder="Add Keyword"
                            >
                                <p className="text-2xs text-gray-700 mb-1 font-semibold absolute -top-4">What do you bring to the table? Write your own keywords.</p>

                            </UserInput>
                        </span>


                        <button onClick={() => toggleKeyword(customKeyword, true, true)}
                            className="flex items-center justify-center w-30 px-3 text-base font-medium rounded-md text-white bg-blue-600">
                            Add
                        </button>


                    </div>

                </div>
            }
        </div>
    )
}

export default KeyInput