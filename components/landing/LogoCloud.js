import Image from "next/image";
import AirBnb from "../../assets/img/CompanyLogos/airbnb.svg"
import Figma from "../../assets/img/CompanyLogos/figma.svg"
import Google from "../../assets/img/CompanyLogos/google.svg"
// import Medium from "../../assets/img/CompanyLogos/medium.svg"
import Microsoft from "../../assets/img/CompanyLogos/microsoft.svg"
import Netflix from "../../assets/img/CompanyLogos/netflix.svg"
import Patreon from "../../assets/img/CompanyLogos/patreon.svg"
import Tiktok from "../../assets/img/CompanyLogos/tiktok.svg"
import Twitch from "../../assets/img/CompanyLogos/twitch.svg"

const LogoCloud = () => {
    const companies = [
        {
            name: 'Figma',
            src: Figma,
        },
        {
            name: 'Microsoft',
            src: Microsoft,
        },
        {
            name: 'AirBnb',
            src: AirBnb,
        },
        {
            name: 'Google',
            src: Google,
        },
        {
            name: 'Tiktok',
            src: Tiktok,
        },
        {
            name: 'Netflix',
            src: Netflix,
        },
        {
            name: 'Twitch',
            src: Twitch,
        },
        {
            name: 'Patreon',
            src: Patreon,
        }
    ]
    return (
        <div className="">
            <div className="flex flex-col items-center max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
                    Find jobs in your favorite company with Curriculo
                </p>
                <div className="mt-6 grid  grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-8">
                    {
                        companies.map((item, index) => (
                            <div key={index}
                                className="flex justify-center">
                                <Image className="h-12" src={item.src} alt={item.name} width="150" height="80" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
};

export default LogoCloud;
