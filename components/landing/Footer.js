import Image from "next/image";
import Link from "next/link";
import Twitter from "../../assets/img/twitter.svg"
import Instagram from "../../assets/img/instagram.svg"
import Tiktok from "../../assets/img/tiktok.svg"




const Footer = () => {
    return (
        <>
            <footer className="flex flex-col gap-20 items-center my-20">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                    <div className="flex flex-col items-center mb-10">
                        <Image src="/logomark.svg" alt="Logo" width="150" height="50" />
                        <div className="flex gap-3">
                            <Link href="https://twitter.com/CurriculoCV">
                                <a className="bg-blue-50 flex items-center justify-center w-10 h-10 rounded-lg">
                                    <Image src={Twitter} alt="Twitter" />
                                </a>
                            </Link>
                            <Link href="https://www.instagram.com/curriculoresume">
                                <a className="bg-blue-50 flex items-center justify-center w-10 h-10 rounded-lg">
                                    <Image src={Instagram} alt="Instagram" />
                                </a>
                            </Link>
                            <Link href="https://www.tiktok.com/@curriculoresume">
                                <a className="bg-blue-50 flex items-center justify-center w-10 h-10 rounded-lg">
                                    <Image src={Tiktok} alt="Tiktok" />
                                </a>
                            </Link>
                        </div>
                        <div className="pl-2 text-gray-500 mt-2 text-sm">
                            Follow us on social media.
                        </div>
                    </div>
                    <div className="flex flex-col items-center mb-10">
                        <div className="flex flex-col">
                            <span className="font-semibold text-black mb-3">Discover</span>
                            <Link href="/blog">
                                <a className="text-gray-500 mb-2">
                                    Blog
                                </a>
                            </Link>
                            <Link href="/terms">
                                <a className="text-gray-500 mb-2">
                                    Terms Of Service
                                </a>
                            </Link>
                            <Link href="/terms">
                                <a className="text-gray-500 mb-2">
                                    Privacy Policy
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col items-center mb-10">
                        <div className="flex flex-col">
                            <span className="font-semibold text-black mb-3">Links</span>
                            <Link href="https://twitter.com/curriculoresume">
                                <a className="text-gray-500 mb-2">
                                    Twitter
                                </a>
                            </Link>
                            <Link href="https://www.instagram.com/curriculoresume">
                                <a className="text-gray-500 mb-2">
                                    Instagram
                                </a>
                            </Link>
                            <Link href="https://www.tiktok.com/@curriculoresume">
                                <a className="text-gray-500 mb-2">
                                    Tiktok
                                </a>
                            </Link>
                            <Link href="https://wwww.linkedin.com/in/curriculoresume">
                                <a className="text-gray-500 mb-2">
                                    Linkedin
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex flex-col">
                            <span className="font-semibold text-black mb-3">Get In Touch</span>
                            <Link href="/blog">
                                <a className="text-gray-500 mb-2">
                                    hi@curriculo.design
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <p className="mt-8 text-center text-base text-gray-400 mb-10">
                    &copy; 2022 Curriculo Inc. Made with love 🚀
                </p>
            </footer>

        </>
    )
};

export default Footer;
