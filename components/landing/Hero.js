
import Image from "next/image";
import Link from "next/link";
import LandingImage from "../../assets/img/landingheroes.svg"
import Arrow from "../../assets/img/Arrow.svg";
import TryNow from "../../assets/img/trynow.svg";

const Hero = () => {
    return (
        <div className="p-10">
            <div className="mt-36 max-w-4xl mx-auto px-4 flex flex-col items-center gap-4">
                <div className="text-center text-3xl md:text-6xl font-semibold">
                    <span className="underline decoration-blue-600 underline-offset-1">Be</span> in the Top 25%.<br />
                    75% of resumes are rejected by applicant tracking systems.
                </div>
                <div className="text-gray-700 text-center mb-14">
                    We help you stand out from the crowd by creating a resume and cover letter with the help of our trained AI and make your application unforgettable.
                </div>
                <div className="flex items-center relative">
                    <div className="flex absolute -left-32 sm:-left-60">
                        <Image src={TryNow} alt="Arrow Text" />
                        <Image src={Arrow} alt="Arrow" className="flip" />
                    </div>
                    <Link href="#action">
                        <a className="bg-gradient px-3 py-2 text-base font-medium rounded-md text-white bg-blue-600 my-2 max-w-max transition hover:scale-110">
                            See it in action
                        </a>
                    </Link>

                </div>

                <Image src={LandingImage} alt="Resume Heroes" />
            </div>
        </div>
    )
};

export default Hero;
