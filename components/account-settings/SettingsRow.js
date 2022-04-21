

const SettingsRow = ({ children, header, info }) => {
    return (
        <div className="flex flex-col sm:justify-between sm:flex-row">
            <div className="flex flex-col mb-2 sm:mb-0">
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