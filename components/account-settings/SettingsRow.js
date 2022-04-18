

const SettingsRow = ({ children, header, info }) => {
    return (
        <div className="flex justify-between">
            <div className="flex flex-col">
                <span className="text-lg text-gray-900">{header}</span>
                <span className="text-sm text-gray-500">{info}</span>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default SettingsRow