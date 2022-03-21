import axios from "axios"
import { supabase } from "../../utils/supabase"

const handler = async (req, res) => {
    const { user } = await supabase.auth.api.getUserByCookie(req)
    if (!user) {
        return res.status(401).send("You are not authorized to call this API")
    }
    const { subscription_plan_id, paddle_user_id } = req.body
    try {
        const { data: { success, response } } = await axios.post(`${process.env.PADDLE_API_URL}2.0/subscription/users`, {
            vendor_id: process.env.PADDLE_VENDOR_ID,
            vendor_auth_code: process.env.PADDLE_API_AUTH_CODE,
            plan_id: subscription_plan_id
        })
        const data = response.find(item => item.user_id === Number(paddle_user_id))
        if (success) {
            res.status(200).send({ success, subscription_id: data?.subscription_id })
        } else {
            res.status(400).send({ success })
        }
    } catch (error) {
        res.status(400).send({ error })
    }
}

export default handler


