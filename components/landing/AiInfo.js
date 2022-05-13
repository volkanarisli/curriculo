import Image from "next/image";
import { MailIcon, LightningBoltIcon, ChartBarIcon, CheckIcon } from "@heroicons/react/outline";
import Fast from "../../assets/img/Fast.svg";
import Rich from "../../assets/img/Rich.svg";
import { classNames, isOddNumber } from "../../utils/helpers";
import Link from "next/link";


import UserFriendly from "../../assets/img/UserFriendly.svg";


const AiInfo = () => {
    const persons = [
        {
            Icon: MailIcon,
            header: 'Faster application process',
            subHeader: 'Whether you are applying for a job or a freelance gig, we got you covered.',
            image: Fast,
            points: [
                'Save tens of hours building resumes.',
                'Write cover letters with ease just in seconds.',
                'Get ahead of 75% of the applicants.'
            ]
        },
        {
            Icon: LightningBoltIcon,
            header: 'Richer content and bigger impact',
            subHeader: 'Each section of your resume plays an important part in getting you interviewed. Leaving out necessary information can cause potential employers to miss your strengths and overlook your candidacy.',
            image: Rich,
            points: [
                'Professionally crafted resumes found jobs within 90 days.',
                'Candidates who hire professional resume writers are 32% more likely to find jobs.',
                'With AI-supported content generation, you can save time up to 85%.'
            ]
        },
        {
            Icon: ChartBarIcon,
            header: 'User-friendly and effective builder',
            subHeader: 'Resume writing is easier now than ever before with our AI-generated text, resume design templates, and more. Just fill in your details, and let us take care of the hard work.',
            image: UserFriendly,
            points: [
                'Expanding resume tempate library.',
                'Easy-to-use builder and generator interface.',
                'Pre-written skill sets, user-friendly UI and more!'
            ]
        }
    ]
    return (
        <div className="max-w-6xl mx-auto px-5">
            <div className="text-center flex flex-col items-center gap-3 mb-20">
                <span className="text-blue-700 font-semibold" id="benefits">Benefits</span>
                <span className="text-gray-900 text-3xl font-semibold">Job applications made easy</span>
                <span className="text-gray-500 text-sm max-w-md"> Powerful job application tools to help you stand out in the industry with the help of a well-trained AI. Trusted by over 5,000 users.</span>
            </div>

            <section>
                {
                    persons.map(({ Icon, image, header, points, subHeader }, index) => (
                        <div key={index} className={classNames('flex sm:justify-between flex-col md:flex-row', isOddNumber(index) && 'md:flex-row-reverse')}>
                            <div className="flex flex-col">
                                <div className="rounded-full bg-blue-50 h-20 w-20 mb-4 flex items-center justify-center">
                                    <div className="rounded-full bg-blue-400 h-12 w-12 my-auto mx-auto flex items-center justify-center">
                                        <span className="text-white">
                                            <Icon className="h-6 w-6" />
                                        </span>
                                    </div>
                                </div>
                                <span className="text-xl text-gray-900 font-semibold mb-3">
                                    {header}
                                </span>
                                <span className="text-gray-500 max-w-md">
                                    {subHeader}
                                </span>
                                <div className="flex flex-col gap-3 mt-5">
                                    {
                                        points.map((point, index) => (
                                            <div key={index} className="flex items-center gap-2">
                                                <span className="bg-blue-200 text-white h-6 w-6 mr-2 flex items-center justify-center rounded-full">
                                                    <CheckIcon />
                                                </span>
                                                <span className="text-gray-500 max-w-xs">{point}</span>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div>
                                <Image src={image} alt={header} />
                            </div>

                        </div>
                    ))
                }

            </section>
            <div className="bg-blue-50 flex flex-col sm:flex-row justify-between rounded p-8 sm:p-16">
                <div className="flex flex-col mb-10 text-center sm:text-base sm:mb-0">
                    <span className="text-blue-900 text-2xl font-semibold mb-3">Get started now and save tens of hours.</span>
                    <span className="text-blue-700">
                        Join over 5,000+ users already applying with Curriculo.
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        className="flex items-center justify-center w-30 px-3 py-2 text-base font-medium rounded-md text-gray-500 bg-white border border-gray-500 flex-grow">
                        Learn more
                    </button>
                    <Link href="/register">
                        <a
                            className="flex items-center justify-center w-30 px-3 py-2 text-base font-medium rounded-md text-white bg-gradient flex-grow">
                            Get Started
                        </a>
                    </Link>

                </div>
            </div>
        </div>
    )
};

export default AiInfo;
