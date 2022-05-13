import Image from "next/image";
import Link from "next/link";
import FourOFour from '../assets/img/404.svg'
import { useUser } from '../context/UserInfo'



const Custom404 = () => {
    const { user } = useUser()

    return (
        <div className="flex flex-col justify-center items-center p-3 mt-40">
            <Image src={FourOFour} alt='404' width="" height="" />
            <div className="flex flex-col gap-7">
                <span className="text-xl text-center text-gray-500">You are now few steps ahead of landing your dream job, really.</span>
                <Link href={user ? '/dashboard' : '/'}>
                    <a className="w-full flex items-center justify-center py-3 px-5 border border-transparent text-base font-medium rounded-md text-blue-900 hover:text-white bg-indigo-200 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                        {
                            user ? 'Back to Dashboard' : 'Back to Landing Page'
                        }
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Custom404;