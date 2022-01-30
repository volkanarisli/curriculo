import { Configuration, OpenAIApi } from 'openai'

const handler = async (req, res) => {
    console.log(req.body)
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const prompt = `Create a description for each of your jobs\n\n${req.body.keyword}`
    const { data: { choices } } = await openai.createCompletion("text-davinci-001", {
        prompt,
        temperature: 0,
        max_tokens: 149,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
    res.status(200).json({ response: choices[0].text })

}

export default handler;