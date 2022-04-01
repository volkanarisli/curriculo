import { personalSkillsKeyWords, technicalSkillsKeyWords, phrasesForDesc } from "../../utils/helpers";
import { useEffect, useState } from "react";

const KeyInput = () => {
    const allKeywords = [
        personalSkillsKeyWords,
        technicalSkillsKeyWords,
        phrasesForDesc
    ]
    const getRandomValue = (arr) => {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    };
    const getGivenKeywordsFromArray = (arr, numberOfkKeywords) => {
        let temp = [];
        for (let i = 0; i < numberOfkKeywords; i++) {
            let randomValue = getRandomValue(arr);
            if (temp.includes(randomValue)) {
                i--;
                continue;
            }
            temp.push(randomValue);
        }
        return temp;
    }
    const [keywords, setKeywords] = useState([]);
    useEffect(() => {
        allKeywords.forEach((keywords) => {
            let keywordsFromTopic = getGivenKeywordsFromArray(keywords, 3);
            setKeywords((prevState) => [...prevState, ...keywordsFromTopic]);
        })
    }, []);
    return (
        <div>KeyInput</div>
    )
}

export default KeyInput