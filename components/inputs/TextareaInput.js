

const TextareaInput = ({ onInputChange, name, type, placeholder, value }) => {
    return (
        <textarea className="border rounded h-40 px-3 py-1 placeholder:text-sm placeholder:whitespace-normal"
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onInputChange}
        />
    )
}

export default TextareaInput