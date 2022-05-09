
import Image from "next/image";
import Link from "next/link";
import LandingImage from "../../assets/img/landingheroes.svg"
const Hero = () => {
    return (
        <div className="bg-gradient p-10">
            <div className="mt-36 max-w-4xl mx-auto px-4 flex flex-col gap-4">
                <div className="text-center text-6xl font-semibold">
                    Structured interviews.<br />
                    Your new recruitment <br />
                    superpower.
                </div>
                <div className="text-gray-700 text-center mb-14">
                    Less bias. Better hires. Better candidate experience. Get started interviewing
                    the right way.
                </div>
                <Image src={LandingImage} alt="Resume Heroes" />
            </div>
        </div>
    )
};

export default Hero;
