import UserInput from "../components/common/UserInput"
import { useState, useEffect } from "react"
import { isEmail } from 'validator';
import { useUser } from '../context/UserInfo'
import ErrorAlert from "../components/common/ErrorAlert"
import Image from "next/image";
import PasswordRecovery from "../assets/img/PasswordRecovery.svg"
import { CheckCircleIcon } from "@heroicons/react/outline";


const ResetPassword = () => {
    const { sendRenewPasswordEmail } = useUser()

    const [userInfo, setUserInfo] = useState({
        email: '',
    })
    const [hasError, setHasError] = useState({ ...userInfo })
    const [startValidating, setStartValidate] = useState(false)
    const [emailSend, setEmailSend] = useState(false)
    const isFormValid = (obj) => {
        return Object.values(obj).every(value => !value) &&
            Object.values(userInfo).every(value => value) &&
            isEmail(userInfo.email)
    }
    const onInputChange = ({ key, value, nativeEvent }) => {
        if (key === "email" && nativeEvent === "deleteContentBackward") setStartValidate(true)
        setUserInfo({ ...userInfo, ...{ [key]: value } })
    }
    const sendMail = async () => {
        if (!isFormValid(hasError)) return
        const { error } = await sendRenewPasswordEmail(userInfo.email)
        if (error) {
            return setHasError({ ...hasError, general: error.message })
        }
        setEmailSend(true)
    }
    useEffect(() => {
        if (!startValidating) return
        if (isEmail(userInfo.email)) {
            setHasError({ email: '' })
        } else {
            setHasError({ email: 'Invalid email address.' })
        }
    }, [userInfo, startValidating])

    const emailForm = (
        <div className="space-y-4 min-w-72 max-w-sm lg:w-96">
            <div className="flex flex-col justify-center items-center mb-10">
                <Image src="/logo.svg" alt="Logo" height="80" width="80" />
                <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Reset Password</h2>
                <p className="text-sm text-gray-400 mb-5">No worries, it happens to best of us.</p>
                <p className="text-lg text-center">Enter your email and we’ll send you a link to reset your password.</p>
            </div>
            <UserInput onInputChange={e => onInputChange({ key: e.target.name, value: e.target.value, nativeEvent: e.nativeEvent.inputType })}
                hasError={hasError}
                name="email"
                type="email"
                input="text"
                label="Email"
                placeholder="Enter Your Email" />
            <button
                onClick={sendMail}
                className={`w-full flex justify-center
                                    py-2 px-4 border border-transparent rounded-md shadow-sm
                                    text-sm font-medium text-white bg-blue-600 hover:bg-blue-600
                                    ${isFormValid(hasError) && 'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400'}
                                    ${!isFormValid(hasError) && 'opacity-50 cursor-not-allowed'}`}
            >
                Send Mail
            </button>
            {
                hasError.general &&
                <div>
                    <ErrorAlert text={hasError.general} />
                </div>
            }
        </div>

    )

    const emailSuccess = (
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center space-y-3">
                <CheckCircleIcon className="w-12 h-12 text-blue-700" />
                <h1 className="text-2xl font-bold">Email sent! Check your inbox.</h1>
                <p className="text-gray-600">Follow the instructions and you will find the way!</p>
                <p className="text-gray-500">Check your registered email and click on the link we sent to reset your password.</p>
            </div>
            <p className="text-gray-400 text-xs mt-10">Please <a href="mailto:support@curriculo.design" className="text-blue-700 cursor-pointer hover:underline" >contact support</a>, if you no longer have access to your email.</p>
        </div>
    )
    return (

        <div className="flex flex-col sm:flex-row items-center min-h-90vh">
            <div className="hidden lg:flex justify-center w-1/2 bg-blue-700 min-h-inherit">
                <Image src={PasswordRecovery} alt="Recover" />
            </div>
            <div className="flex justify-center sm:w-1/2">
                {
                    emailSend ?
                        emailSuccess :
                        emailForm

                }
            </div>

        </div>
    )
}

export default ResetPassword