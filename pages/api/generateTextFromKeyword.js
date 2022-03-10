import { Configuration, OpenAIApi } from 'openai'
import { supabase } from '../../utils/supabase';

const handler = async (req, res) => {
    const { user } = await supabase.auth.api.getUserByCookie(req)
    if (!user) {
        return res.status(401).send("You are not authorized to call this API")
    }
    const { prompt } = req.body
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    // const prompt = `Create a description for each of your jobs\n\n${req.body.keyword}`
    const { data: { choices } } = await openai.createCompletion("text-davinci-001", {
        prompt,
        temperature: 0,
        max_tokens: 200,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
    res.status(200).json({ response: choices[0].text })

}

export default handler;