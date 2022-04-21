import axios from "axios"

const handler = async (req, res) => {
    const { sub_id, plan_id } = req.body
    const { data: { success, response, error } } = await axios.post(`${process.env.PADDLE_API_URL}2.0/subscription/users/update`, {
        vendor_id: process.env.PADDLE_VENDOR_ID,
        vendor_auth_code: process.env.PADDLE_API_AUTH_CODE,
        subscription_id: sub_id,
        plan_id: plan_id,
        prorate: false
    })
    if (success) {
        res.status(200).send({ success: true, message: response })

    } else {
        res.status(444).send({ success: false })
    }

}

export default handler