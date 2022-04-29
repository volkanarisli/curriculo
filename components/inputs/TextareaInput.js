import Loader from "../common/Loader"
import { classNames } from "../../utils/helpers"

const TextareaInput = ({ onInputChange, name, type, placeholder, value, className, isLoading, isTryout }) => {
    return (
        <div className={classNames("flex justify-center items-center", isTryout && 'select-none')}>
            <textarea className={className}
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onInputChange}
                readOnly={isTryout}
            />
            {
                isLoading && <Loader className="absolute" />
            }

        </div>
    )
}

export default TextareaInput