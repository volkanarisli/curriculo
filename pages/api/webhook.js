import { getServiceSupabase } from '../../utils/supabase';
import axios from 'axios';

const supabase = getServiceSupabase();
const { verifyPaddleWebhook } = require('verify-paddle-webhook');

const PUBLIC_KEY = ['development', 'stage'].includes(process.env.ENV) ?
    `-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAu1bDgt6UtxhPV0q31gNu
W2QATTbtaTj6M4eRMSomqhbfhBJlw49rfGllYtKgPtPTFoPTwyybOKNhxfG9yPfN
v9B5VC1tfHBcguThmvGYcPYi3xiJ2XWJUohQfDYwGCdkNZqmBinrgjSY3hsXqsC6
/I9SIu6ao97KjiwLQQj6wcVldh8uUDB+/0YMBkbLlur/TASKxlkCY20ZS53Ht939
0/M5gAhP0atV5Ys8jyQKO63Miro129EsJbSwFTY2fOfSY20YthkNYNrcWHbKcAIa
cGThqcrEXWHGHHzvxT3YdnE0Rmx8LmO3sGObcw7DgBb1lPp5vIJPWYp/77EPPnGp
+X0WTaOvSjzKJ0CD5o+cKQciDsGrISnTGAT1g018X6iPfqddFkN9yNsJD+WJqJn8
cWBW3g9nnYF62OWwEKX9uHYRQMLg8ghoyiz10x+r+feSNOWgcMY1qKf+WTGXBj1o
28QbHNI4//8FBsUKyfoAJYvi3WTT3KsBh7Z4RUipoHAjdh/D+gsEOs1xiX5ArHLp
Ze6w/Hi2Mb5uZDDThSE3mzNFef7T3l5F52ntwJHwo+mcYl6ozp129ayuAzzfR8H0
bKz9hBl1lXVsIrc+7q/awaID830ytEgUs/FSlnw6pHWu++Tv1wEqbbbdyMKezZOz
T7dv+IstGHtRc+WhfD1f/10CAwEAAQ==
-----END PUBLIC KEY-----` :
    `-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA4NylAIN7NGAEBQx0B4td
3KR3iS5mF2uGdm8nJ+xGFjnOoOlav7zvJBhhD79YiK3qUy0xxn5OH5El8E5eBcmu
t5pYNSEAJdBJscAe0zHenSYaUPfxIEOGcBCbA6ovMuukd6GhUHH0uEVn0WaolND8
f+rSXPvSDFk20ryaCUZ+AO68YOCKtJ+LiJtWkSSxR4FPcMZV7Owxuqp/SdwfcOqs
uzrk9ZA7Km39gKOeySHUsFcz/0821HXGI5UeyhwMoHoNlB/jhiBGXzK+bgYXV9W/
jnQ9oh+VZeURjant5TfJGBPzK3sjRYWoF7523Y4Zo+ObApY5ZJqjGkBeGrNXWF7I
tF35pbUmPabgr0FmJR/M4hDarcuSnUkWrlETWs8+5NChDMmO5tRR7+LY2Od8rLzf
keXycxkiRrWIl6JFxctHvD3ZJTjXMBuuT4Pag0gqgePeNVotTuMKTfdMiFTG4CH+
JwmpTPeGVJK//mQg8ghP1H8d1bvrtKUFpn9a4J/Brk8PL34LmcdeigdYPzWIBEAb
22npgM/Jylz6/s86uIjhv4KLwxxvifKurGyaZkRaqG6u4ZvlV5usiLea7x3htl/1
4MCmVY6GwU8vPIkwkLCmsA+cRrOTdKC0nvU923lrjrwsff1gbyzmkzyMBmcvfpVL
tYXW/RyiBUzvUW3FPKTrRF0CAwEAAQ==
-----END PUBLIC KEY-----`


const isRequestValid = (paddleWebhookData) => {
    return verifyPaddleWebhook(PUBLIC_KEY, paddleWebhookData);
}
const subscriptionCreated = async (data, plans) => {

    //set update_url and cancel_url of user from supabase

    await supabase
        .from("profile")
        .update({
            subscription_id: data.subscription_id,
            update_url: data.update_url,
            cancel_url: data.cancel_url,
            end_of_subscription: new Date(data.next_bill_date),
        })
        .eq('paddle_user_id', data.user_id);


}
const subscriptionUpdated = async (data, plans) => {
    const planName = plans.find(item => item.id == data.subscription_plan_id).name;

    await supabase
        .from("profile")
        .update({
            interval: planName,
            subscription_plan_id: data.subscription_plan_id,
            end_of_subscription: new Date(data.next_bill_date),
            update_url: data.update_url,
            cancel_url: data.cancel_url,
        })
        .eq("paddle_user_id", data.user_id);

}
const subscriptionCancelled = async (data, plans) => {

    await supabase
        .from("profile")
        .update({
            interval: null,
            subscription_plan_id: null,
            end_of_subscription: new Date(data.cancellation_effective_date)
        })
        .eq("paddle_user_id", data.user_id);

}
const subscriptionPaymentSucceeded = async (data, plans) => {
    //update users info according to new payment detail
    const planName = plans.find(item => item.id == data.subscription_plan_id).name;
    await supabase
        .from("profile")
        .update({
            is_subscribed: true,
            subscription_plan_id: data.subscription_plan_id,
            interval: planName,
            end_of_subscription: new Date(data.next_bill_date),
            subscription_id: data.subscription_id,
        })
        .eq("paddle_user_id", data.user_id);


}
const subscriptionPaymentFailed = async (data, plans) => {
    if (data.attempt_number > 3) {
        await supabase
            .from("profile")
            .update({
                is_subscribed: false,
                interval: null,
                subscription_plan_id: null,
                end_of_subscription: null,
            })
            .eq("paddle_user_id", data.user_id);
    }
}
const webhookActionEnum = {
    subscription_created: (data, plans) => subscriptionCreated(data, plans),
    subscription_updated: (data, plans,) => subscriptionUpdated(data, plans),
    subscription_cancelled: (data, plans) => subscriptionCancelled(data, plans),
    subscription_payment_succeeded: (data, plans) => subscriptionPaymentSucceeded(data, plans),
    subscription_payment_failed: (data, plans) => subscriptionPaymentFailed(data, plans),
}
const handler = async (req, res) => {
    if (!isRequestValid(req.body)) {
        return res.status(404).send("Request is not valid");
    }
    const { data: { response } } = await axios.post(`${process.env.PADDLE_API_URL}2.0/subscription/plans`,
        {
            vendor_id: process.env.PADDLE_VENDOR_ID,
            vendor_auth_code: process.env.PADDLE_API_AUTH_CODE
        }
    );
    let isEmailExist = true;
    if (process.env.ENV !== 'stage') {
        try {
            const { data: { emailExist } } = await axios.get(`${process.env.DOMAIN}api/checkEmail`, { params: { email: req.body.email } })
            if (!emailExist) {
                return res.status(444).send({ success: false, response: "Email is not exist" });
            }
            isEmailExist = emailExist;
        } catch (error) {
            return res.status(444).send({ success: false })
        }
    }
    const { alert_name } = req.body;
    try {
        await webhookActionEnum[alert_name]?.(req.body, response);
    } catch (error) {
        return res.status(444).send({ success: false })
    }

    res.status(200).send({ success: true })

}

export default handler


