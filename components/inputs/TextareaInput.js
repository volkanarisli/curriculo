

const TextareaInput = ({ onInputChange, name, type, placeholder, value, className }) => {
    return (
        <textarea className={className}
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onInputChange}
        />
    )
}

export default TextareaInput