import TextInput from "../inputs/TextInput"
import PasswordInput from "../inputs/PasswordInput"


const inputEnum = {
    text: (props) => <TextInput {...props} />,
    password: (props) => <PasswordInput {...props} />
}

const UserInput = (props) => {

    return (
        <div className="flex flex-col w-full relative">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                {props.label}
            </label>
            {
                inputEnum[props.input](props)
            }
            {
                props.hasError[props.name] &&
                <div className="text-xs text-red-500 mt-1 absolute -bottom-4">
                    {props.hasError[props.name]}
                </div>
            }
        </div>
    )
}

export default UserInput