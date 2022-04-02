import TextInput from "../inputs/TextInput"
import PasswordInput from "../inputs/PasswordInput"
import CheckboxInput from "../inputs/CheckboxInput"
import SelectInput from "../inputs/SelectInput"
import KeyInput from "../inputs/KeyInput"
import TextareaInput from "../inputs/TextareaInput"
import DateInput from "../inputs/DateInput"
import ToggleInput from "../inputs/ToggleInput"

const inputEnum = {
    text: (props) => <TextInput {...props} />,
    password: (props) => <PasswordInput {...props} />,
    checkbox: (props) => <CheckboxInput {...props} />,
    select: (props) => <SelectInput {...props} />,
    keys: (props) => <KeyInput {...props} />,
    textarea: (props) => <TextareaInput {...props} />,
    date: (props) => <DateInput {...props} />,
    toggle: (props) => <ToggleInput {...props} />
}

const UserInput = ({ children, ...props }) => {

    return (
        <div className="flex flex-col w-full relative">
            {
                children ||
                <label className="block text-sm font-medium text-gray-700">
                    {props?.label}
                </label>
            }

            {
                inputEnum[props?.input](props)
            }
            {
                props?.hasError?.[props?.name] &&
                <div className="text-xs text-red-500 mt-1 absolute -bottom-4">
                    {props?.hasError?.[props?.name]}
                </div>
            }
        </div>
    )
}

export default UserInput