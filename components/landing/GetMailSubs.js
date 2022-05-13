import MailSubscribe from "../common/MailSubscribe";
import Waves from "../../assets/img/waves.svg"
import Image from "next/image";
const GetMailSubs = () => {
    return (
        <div className="bg-gray-50 relative my-20 p-10 sm:p-32">
            <span className="absolute left-0 top-0">
                <Image src={Waves} alt="Waves" />

            </span>

            <div className="flex flex-col items-center text-center max-w-7xl mx-auto">
                <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
                    Subscribe to our newsletter
                </h2>
                <p className="mt-3 max-w-3xl text-lg text-gray-500 mb-5">
                    Subscribe to our newsletter for useful tips on creating outstanding resumes, finding and applying that dream
                    job and more. </p>
                <div className="">
                    <MailSubscribe />
                </div>
            </div>
        </div>
    )
};

export default GetMailSubs;
