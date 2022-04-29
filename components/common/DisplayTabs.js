
import { colors, classNames } from "../../utils/helpers"
const DisplayTabs = ({ tabs, selectedTab, updateTab }) => {

    return (
        <div className="max-w-xl mx-auto flex justify-between">
            {
                tabs.map(({ bgColor, Icon, header }, index) => (
                    <div key={index}>
                        <div className={classNames("flex flex-col items-center hover:scale-110 transition cursor-pointer p-3",
                            (selectedTab === index) && 'scale-110 rounded shadow-xl shadow-blue-300')}
                            onClick={() => updateTab(index)}
                        >
                            <div className={`flex items-center justify-center mb-2 ${colors[bgColor]} h-16 w-16 rounded text-white`}>
                                <Icon className="h-7 w-7" />
                            </div>
                            <span className="text-xs text-center text-gray-600 w-24">{header}</span>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default DisplayTabs