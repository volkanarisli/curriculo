import { supabase } from '../../utils/supabase';
import { openai } from '../../utils/openai';


const handler = async (req, res) => {
    const { user } = await supabase.auth.api.getUserByCookie(req)
    if (!user) {
        return res.status(401).send("You are not authorized to call this API")
    }
    const { keywords, title } = req.body;

    const prompt = ``
    // const { data: { choices } } = await openai.createCompletion("text-davinci-001", {
    //     prompt,
    //     temperature: 0.7,
    //     max_tokens: 250,
    //     top_p: 1,
    //     frequency_penalty: 0,
    //     presence_penalty: 0,
    // });

    // res.status(200).json({ response: choices[0]?.text })
    res.status(200).json({ response: 'deneme' })


}

export default handler;