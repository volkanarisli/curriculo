
import { classNames } from "../../utils/helpers"
const DisplayTabs = ({ tabs, selectedTab, updateTab }) => {
    const colors = {
        blue: 'bg-blue-500',
        pink: 'bg-pink-500',
        orange: 'bg-orange-500',
        green: 'bg-upwork',
        red: 'bg-red-500',
        yellow: 'bg-rose-300',
        purple: 'bg-purple-700',
        dark_green: 'bg-green-700'
    }
    return (
        <div className="flex justify-between">
            {
                tabs.map(({ bgColor, Icon, header }, index) => (
                    <div key={index}>
                        <div className={classNames("flex flex-col items-center group  hover:border-b-4 hover:border-blue-600 transition cursor-pointer p-3",
                            (selectedTab === index) && 'text-blue-600 border-b-4 border-blue-600')}
                            onClick={() => updateTab(index)}
                        >
                            <span className={classNames("text-sm font-semibold text-center group-hover:text-blue-600 text-gray-600",
                                (selectedTab === index) && ' text-blue-600')}>{header}</span>
                        </div>
                    </div>
                ))
            }

        </div >
    )
}

export default DisplayTabs