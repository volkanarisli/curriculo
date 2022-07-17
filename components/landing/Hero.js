import Image from "next/image";
import Link from "next/link";
import LandingImage from "../../assets/img/landingheroes.svg"
import Arrow from "../../assets/img/Arrow.svg";
import TryNow from "../../assets/img/trynow.svg";
import { event } from "../../utils/gtag";
import Typical from 'react-typical'


const Hero = () => {
    const heroWords = [
        'Cover Letter',
        2500,
        'Educational Summary',
        2500,
        'Resume',
        2500,
        'Professional Summary',
        2500,
        'Job Summary',
        2500,
    ]
    return (
        <div className="p-10">
            <div className="mt-10 max-w-4xl mx-auto px-4 flex flex-col items-center gap-4">
                <h1 className="text-center text-3xl md:text-6xl font-semibold">
                    Generate <br />
                    <span className="underline decoration-blue-600 underline-offset-1 transition">
                        <Typical
                            steps={heroWords}
                            loop={Infinity}
                            wrapper="span"
                        />
                    </span> <br />
                    in seconds!
                </h1>
                <div className="text-gray-700 text-center mb-14">
                    Bringing a little AI to your job hunt
                </div>
                <div className="flex items-center relative">
                    <div className="flex absolute -left-20 md:-left-32 ml-1 sm:-left-60 pointer-events-none">
                        <Image src={TryNow} alt="Arrow Text" />
                        <Image src={Arrow} alt="Arrow" className="flip" />
                    </div>
                    <Link href="#action">
                        <a className="bg-gradient px-16 py-3 text-base font-medium rounded-md text-white bg-blue-600 my-2 max-w-max transition hover:scale-110"
                            onClick={() => event({
                                event: "see_it_in_action",
                                action: 'click',
                                category: 'landing_events',
                                label: 'call_to_action',
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
