
import Image from "next/image";
import Link from "next/link";
import LandingImage from "../../assets/img/landingheroes.svg"
import Arrow from "../../assets/img/Arrow.svg";
import TryNow from "../../assets/img/trynow.svg";
import { event } from "../../utils/gtag";

const Hero = () => {
    return (
        <div className="p-10">
            <div className="mt-10 max-w-4xl mx-auto px-4 flex flex-col items-center gap-4">
                <h1 className="text-center text-3xl md:text-6xl font-semibold">
                    <span className="underline decoration-blue-600 underline-offset-1">Be</span> in the Top 25%.<br />
                    75% of resumes are rejected by applicant tracking systems.
                </h1>
                <div className="text-gray-700 text-center mb-14">
                    We help you stand out from the crowd by creating a resume and cover letter with the help of our trained AI and make your application unforgettable.
                </div>
                <div className="flex items-center relative">
                    <div className="flex absolute -left-20 md:-left-32 ml-1 sm:-left-60 pointer-events-none">
                        <Image src={TryNow} alt="Arrow Text" />
                        <Image src={Arrow} alt="Arrow" className="flip" />
                    </div>
                    <Link href="#action">
                        <a className="bg-gradient px-16 py-3 text-base font-medium rounded-md text-white bg-blue-600 my-2 max-w-max transition hover:scale-110"
                            onClick={() => event({
                                action: 'click',
                                event_category: 'landing_events',
                                event_label: 'call_to_action',
                                value: 1,
                            })}>
                            See It in Action
                        </a>
                    </Link>

                </div>

                <Image src={LandingImage} alt="Resume Heroes" />
            </div>
        </div >
    )
};

export default Hero;
