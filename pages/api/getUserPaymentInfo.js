import axios from "axios"

const handler = async (req, res) => {
    const { id } = req.query
    console.log(typeof id)
    try {
        const { data: { success, response } } = await axios.post(`${process.env.PADDLE_API_URL}2.0/subscription/users`, {
            vendor_id: process.env.PADDLE_VENDOR_ID,
            vendor_auth_code: process.env.PADDLE_API_AUTH_CODE
        })
        const { subscription_id } = response.find(item => item.user_id === Number(id))
        if (success) {
            res.status(200).send({ success, id: subscription_id })
        } else {
            res.status(400).send({ success })
        }
    } catch (error) {
        res.status(400).send({ error })
    }
}

export default handler


