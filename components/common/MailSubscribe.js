/* eslint-disable react/no-unknown-property */


const MailSubscribe = () => {
    return (
        < >
            <form className="sm:flex">
                <label for="email-address" className="sr-only">Email address</label>
                <input id="email-address" name="email-address" type="email" autocomplete="email" required
                    className="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs rounded-md"
                    placeholder="Enter your email" />
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <button type="submit"
                        className="w-full flex items-center justify-center py-3 px-5 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Notify me
                    </button>
                </div>
            </form>
            <p className="mt-3 text-sm text-gray-500">
                We care about the protection of your data. Read our
                <a href="#" className="font-medium underline">
                    Privacy Policy.
                </a>
            </p>
        </>
    )
};

export default MailSubscribe;
