import Link from "next/link"
const Redirectcard = ({ href, header, info, Icon, bgColor }) => {

    const colors = {
        blue: 'bg-blue-500',
        pink: 'bg-pink-500',
        orange: 'bg-orange-500',
        green: 'bg-upwork',
        red: 'bg-red-500',
        yellow: 'bg-rose-300'
    }

    return (
        <Link href={href}>
            <a className="flex items-stretch p-3 transition hover:shadow-xl hover:-translate-y-2 rounded">
                <div className={`flex items-center justify-center ${colors[bgColor]} h-16 w-16 rounded mr-4 text-white`}>
                    <Icon className="h-7 w-7" />
                </div>
                <div className="flex flex-col text-sm max-w-3xs">
                    <span className="text-gray-900 mb-1">
                        {header}  →
                    </span>
                    <span className="text-gray-500">
                        {info}
                    </span>
                </div>
            </a>
        </Link>
    )
}

export default Redirectcard