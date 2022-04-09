import { supabase } from '../../utils/supabase';
import { openai } from '../../utils/openai';


const handler = async (req, res) => {
    const { user } = await supabase.auth.api.getUserByCookie(req)
    if (!user) {
        return res.status(401).send("You are not authorized to call this API")
    }
    const { description, keywords } = req.body;

    let requieredSkilsAsText = '';

    keywords.forEach(keyword => {
        requieredSkilsAsText += `${keyword},`
    });
    const prompt = `
    Generate a proposal letter for me for this freelance job,
    Description: ${description}
    Requiered Skills:  ${requieredSkilsAsText}
    Proposal Letter:`
    const { data: { choices } } = await openai.createCompletion("text-davinci-001", {
        prompt,
        temperature: 1,
        max_tokens: 350,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
    res.status(200).json({ response: choices[0]?.text })
}

export default handler;