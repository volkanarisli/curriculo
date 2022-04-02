import { supabase } from '../../utils/supabase';
import { openai } from '../../utils/openai';
import {
    allKeywordsWithTitles,
    getDifferenceBetweenArrays,
    getDifferenceBetweenDatesAsYear
} from '../../utils/helpers';

const handler = async (req, res) => {
    const { user } = await supabase.auth.api.getUserByCookie(req)
    if (!user) {
        return res.status(401).send("You are not authorized to call this API")
    }
    const { keywords, experience, isBulletPoint } = req.body;
    console.log({ keywords, experience, isBulletPoint })
    let workingTime = getDifferenceBetweenDatesAsYear(new Date(experience.startDate), (experience.endDate ? new Date(experience.endDate) : new Date()))
    console.log(workingTime)
    let chosenKeywords = [];
    let techicalSkillsAsText = '';
    let socialSkillsAsText = '';
    keywords.forEach(usersKeyword => {
        Object.entries(allKeywordsWithTitles).forEach(([key, value], index) => {
            if (value.includes(usersKeyword)) {
                if (key === 'technicalSkillsKeyWords') {
                    techicalSkillsAsText += `${usersKeyword},`
                } else {
                    socialSkillsAsText += `${usersKeyword},`
                }
                chosenKeywords = [...chosenKeywords, usersKeyword]
            }
        });
    });
    const customSkills = getDifferenceBetweenArrays(keywords, chosenKeywords)

    customSkills.forEach(customSkill => {
        techicalSkillsAsText += `${customSkill},`
    })
    const prompt = `Create a ${isBulletPoint ? ' bullet point' : 'brief'} employment history to a employee who has been working for
                    ${experience.company} for ${workingTime} years, who is ${socialSkillsAsText}
                     with technical skillset of ${techicalSkillsAsText} summary:`

    console.log(prompt)

    const { data: { choices } } = await openai.createCompletion("text-davinci-001", {
        prompt,
        temperature: 1,
        max_tokens: keywords.length > 8 ? 500 : 300,
        top_p: 0.5,
        frequency_penalty: 0,
        presence_penalty: 0,
    });

    res.status(200).json({ response: choices[0]?.text })
    // res.status(200).json({ response: 'deneme' })


}

export default handler;