import { addEmailToTheList, getEmails } from '../../utils/notion'

const handler = async (req, res) => {
    const emails = await getEmails();
    const isMailExist = emails.includes(req.body.email)
    if (isMailExist) {
        res.status(200).send({ success: false, message: 'Email already exist' })
        return
    }
    const response = addEmailToTheList(req.body.email)
    res.status(200).send({ success: true, message: response })
}

export default handler


