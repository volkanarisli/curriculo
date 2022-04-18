import { getServiceSupabase } from '../../utils/supabase';
const supabase = getServiceSupabase();
import { openai } from '../../utils/openai';


const handler = async (req, res) => {
    const { user } = await supabase.auth.api.getUserByCookie(req)
    const { data: profile } = await supabase
        .from('profile')
        .select('*')
        .eq('id', user.id)
        .single()
    if (!user || !profile.is_subscribed) {
        return res.status(401).send("You are not authorized to call this API")
    }
    const { description } = req.body;
    const prompt = `
    Generate a cover letter for me for the given job description,
    Description: ${description}
    Cover Letter:`
    const { data: { choices } } = await openai.createCompletion("text-davinci-001", {
        prompt,
        temperature: 1,
        max_tokens: 800,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
    res.status(200).json({ response: choices[0]?.text })
}

export default handler;