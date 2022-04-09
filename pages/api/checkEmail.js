import { supabase } from "../../utils/supabase"

const handler = async (req, res) => {
    try {
        const { email } = req.query

        const { data } = await supabase
            .from('email')
            .select('*')
            .eq('email', email)
            .single()

        if (!data) {
            res.status(200).send({ emailExist: false })
        } else {
            res.status(200).send({ emailExist: true })
        }
    } catch (error) {
        res.status(400).send({ err: 'Error' })
    }
}

export default handler


