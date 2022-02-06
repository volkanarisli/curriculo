import MailSubscribe from "../common/MailSubscribe";

const GetMailSubs = () => {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:py-32 lg:px-8 lg:flex lg:items-center">
                <div className="lg:w-0 lg:flex-1">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Job application tips straight into your inbox.
                    </h2>
                    <p className="mt-3 max-w-3xl text-lg text-gray-500">
                        Subscribe to our newsletter for useful tips on creating outstanding resumes, finding and applying that dream
                        job and more. </p>
                </div>
                <div className="mt-8 lg:mt-0 lg:ml-8">
                    <MailSubscribe />
                </div>
            </div>
        </div>
    )
};

export default GetMailSubs;
