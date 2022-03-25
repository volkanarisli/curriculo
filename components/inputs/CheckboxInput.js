

const CheckboxInput = ({ onInputChange, name, hasError, type, placeholder, children, value }) => {
    return (
        <div className="flex items-center space-x-1">
            <input onChange={onInputChange} name={name} type={type} autoComplete={type}
                className="h-6 w-6 sm:h-4 sm:w-4 text-blue-600 focus:ring-blue-400 border-gray-300 rounded"
            />
            {children}
        </div>
    )
}

export default CheckboxInput