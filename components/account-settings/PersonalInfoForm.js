import UserInput from "../common/UserInput";
import { useState, useEffect } from "react";
import { useUser } from '../../context/UserInfo'
import { isStrongPassword } from 'validator';



const PersonalInfoForm = () => {
    const { user, updateUserPersonalInformation, sendUpdatePassword } = useUser()

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [hasError, setHasError] = useState({ password: '' })
    const [startValidating, setStartValidate] = useState({ password: '' })
    const [isUpdated, setIsUpdated] = useState(false);
    const [isPasswordUpdated, setIsPasswordUpdated] = useState(false);
    const onPasswordChange = (value) => {
        setStartValidate({ password: true })
        setNewPassword(value)
    }
    useEffect(() => {
        if (startValidating.password) {
            if (isStrongPassword(newPassword)) {
                setHasError({ password: '' })
            } else {
                setHasError({ password: 'Not Strong Enough' })
            }
        }
    }, [startValidating, newPassword])


    const updateUserInfo = async () => {
        const { success } = await updateUserPersonalInformation(
            {
                name: name || undefined,
                surname: surname || undefined
            }
        )
        if (success) setIsUpdated(success)
    }
    const updatePassword = async () => {
        if (hasError.password || !newPassword) return
        const data = await sendUpdatePassword(newPassword)
        if (data.success) setIsPasswordUpdated(true)
    }

    return (
        <div>
            <div className="flex gap-5">
                <div className="w-full">
                    <UserInput onInputChange={e => setName(e.target.value)}
                        value={name}
                        name="firstName"
                        type="text"
                        input="text"
                        label="First Name"
                        placeholder={user?.user_metadata?.name}
                    />
                </div>
                <div className="w-full">
                    <UserInput onInputChange={e => setSurname(e.target.value)}
                        value={surname}
                        name="surname"
                        type="text"
                        input="text"
                        label="Surname"
                        placeholder={user?.user_metadata?.surname}
                    />
                    {
                        isUpdated ?
                            <div className="px-3 py-2 text-base text-center font-medium rounded-md text-white bg-green-600 w-full my-2">
                                Updated
                            </div>
                            :
                            <button
                                onClick={updateUserInfo}
                                className="px-3 py-2 text-base font-medium rounded-md text-white bg-blue-600 w-full my-2">
                                Update Info
                            </button>
                    }
                </div>

            </div>
            <div className="w-full">
                <UserInput onInputChange={e => onPasswordChange(e.target.value, e.nativeEvent.inputType)}
                    value={newPassword}
                    hasError={hasError}
                    name="password"
                    type="password"
                    input="password"
                    label="Password"
                    placeholder="Enter Password"
                    showPasswordRules={true}
                />
                {
                    isPasswordUpdated ?
                        <div className="px-3 py-2 text-base text-center font-medium rounded-md text-white bg-green-600 w-full my-4">
                            Updated
                        </div>
                        :
                        <button
                            onClick={updatePassword}
                            className="px-3 py-2 text-base font-medium rounded-md text-white bg-blue-600 w-full my-4">
                            Update Password
                        </button>
                }
            </div>
        </div>
    )
}

export default PersonalInfoForm