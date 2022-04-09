import Loader from "../common/Loader"

const TextareaInput = ({ onInputChange, name, type, placeholder, value, className, isLoading }) => {
    return (
        <div className="flex justify-center items-center">
            <textarea className={className}
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onInputChange}
            />
            {
                isLoading && <Loader className="absolute" />
            }

        </div>
    )
}

export default TextareaInput