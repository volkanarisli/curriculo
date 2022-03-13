import { useState } from "react"
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid"


const PasswordInput = ({ onInputChange, name, hasError, type, placeholder, showPasswordRules }) => {
    const [passwordType, setPasswordType] = useState(type)

    const updateShowPassword = () => {
        if (passwordType === 'text') {
            setPasswordType('password')
        } else if (passwordType === 'password') {
            setPasswordType('text')
        }
    }
    return (
        <>
            <div className="mt-1 relative rounded-md shadow-sm">
                <input id="email-address" onChange={onInputChange} name={name} type={passwordType} autoComplete={type}
                    className={"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
                        + (hasError[name] && ' border-red-500')}
                    placeholder={placeholder} />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer" onClick={updateShowPassword}>
                    {
                        passwordType === 'password' ?
                            <EyeIcon className="h-4 w-4 text-gray-500 opacity-75" aria-hidden="true" /> :
                            <EyeOffIcon className="h-4 w-4 text-gray-500 opacity-75" aria-hidden="true" />
                    }
                </div>

            </div>
            {
                showPasswordRules && <span className="text-gray-400 text-xs">Password must contain at least 8 characters, 1 Lowercase, 1 Uppercase, 1 Number, 1 Symbol</span>
            }

        </>

    )
}

export default PasswordInput