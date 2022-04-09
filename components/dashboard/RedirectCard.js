import Link from "next/link"
const Redirectcard = ({ href, header, info, Icon, bgColor, badge, disabled }) => {

    const colors = {
        blue: 'bg-blue-500',
        pink: 'bg-pink-500',
        orange: 'bg-orange-500',
        green: 'bg-upwork',
        red: 'bg-red-500',
        yellow: 'bg-rose-300',
        purple: 'bg-purple-700',
        dark_green:'bg-green-700'
    }
    const badges = {
        beta: {
            text: "Beta",
            text_color: "text-yellow-800",
            bg_color: "bg-yellow-100"
        },
        comingsoon: {
            text: "Coming Soon",
            text_color: "text-white",
            bg_color: "bg-gray-900"
        }
    }
    const isDisabled = ['comingsoon'].includes(badge) || disabled

    return (
        <Link href={isDisabled ? '' : href}>
            <a className={`flex items-stretch px-3 py-4 transition rounded ${!isDisabled && 'hover:shadow-xl hover:-translate-y-2 h-28'}
            ${isDisabled && 'cursor-not-allowed'}`}>
                <div className="flex flex-col items-center relative mr-4">
                    <div className={`flex items-center justify-center ${colors[bgColor]} h-16 w-16 rounded text-white`}>
                        <Icon className="h-7 w-7" />
                    </div>
                    {
                        badge &&
                        <span className={`flex justify-center absolute px-2.5 py-0.5 rounded-full text-2xs font-medium top-14 whitespace-nowrap shadow-lg ${badges[badge].text_color} ${badges[badge].bg_color}`}>
                            {badges[badge].text}
                        </span>
                    }
                </div >
                <div className="flex flex-col text-sm max-w-3xs">
                    <span className="text-gray-900 mb-1">
                        {header}  →
                    </span>
                    <span className="text-gray-500">
                        {info}
                    </span>
                </div>
            </a >
        </Link>
    )
}

export default Redirectcard