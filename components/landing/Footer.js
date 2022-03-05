import Image from "next/image";
import Link from "next/link";


const Footer = () => {
    return (
        <>

            <div className="bg-indigo-700 sm:rounded-2xl max-w-7xl mx-auto">
                <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        <span className="block">Are you ready to stay one step ahead?</span>
                    </h2>
                    <p className="mt-4 text-lg leading-6 text-indigo-200">Start building your Curriculo resume right now—and get one step
                        closer to your dream job.</p>
                    <Link href="/design">
                        <a className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto">
                            Get Started
                        </a>
                    </Link>


                </div>
            </div>


            <footer className="bg-white">
                <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                    <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
                        <div className="px-5 py-2">
                            <Link href="/terms">
                                <a className="text-base text-gray-500 hover:text-gray-900">
                                    Privacy Policy
                                </a>
                            </Link>
                        </div>

                        <div className="px-5 py-2">
                            <Link href="/terms#terms">
                                <a className="text-base text-gray-500 hover:text-gray-900">
                                    Terms and Conditions
                                </a>
                            </Link>
                        </div>
                    </nav>

                    <Link href="/">
                        <a className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Twitter</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                        </a>
                    </Link>



                </div>
                <p className="mt-8 text-center text-base text-gray-400 mb-10">
                    &copy; 2022 Curriculo Inc. Made with love 🚀
                </p>
            </footer>

        </>
    )
};

export default Footer;
