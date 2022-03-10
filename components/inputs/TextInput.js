

const TextInput = ({ onInputChange, name, hasError, type, placeholder }) => {
    return (
        <input id="email-address" onChange={onInputChange} name={name} type={type} autoComplete={type}
            className={"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
                + (hasError[name] && ' border-red-500')}
            placeholder={placeholder} />
    )
}

export default TextInput