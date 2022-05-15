const ImportantAlert = ({ header, text }) => {
    return (
        <div className="flex flex-col gap-1 bg-yellow-50  rounded border-yellow-500 border-2 w-full p-3">
            <span className="text-gray-800 text-sm">
                {header}
            </span>
            <span className="text-sm text-yellow-800">
                {text}
            </span>
        </div>
    )
}

export default ImportantAlert