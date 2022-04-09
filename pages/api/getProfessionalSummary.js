import { supabase } from '../../utils/supabase';
import { openai } from '../../utils/openai';
import {
    allKeywordsWithTitles,
    getDifferenceBetweenArrays
} from '../../utils/helpers';

const handler = async (req, res) => {
    const { user } = await supabase.auth.api.getUserByCookie(req)
    if (!user) {
        return res.status(401).send("You are not authorized to call this API")
    }
    const { keywords, title } = req.body;
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

    const prompt = `Create a Professional Summary for me, I am a ${title}, who is ${socialSkillsAsText} with technical skillset of ${techicalSkillsAsText} summary:`
    const { data: { choices } } = await openai.createCompletion("text-davinci-001", {
        prompt,
        temperature: 0.7,
        max_tokens: 250,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });

    res.status(200).json({ response: choices[0]?.text })

}

export default handler;