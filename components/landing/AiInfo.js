import Image from "next/image";

const AiInfo = () => {
    const persons = [
        {
            company: {
                name: 'Tuple',
                src: 'https://tailwindui.com/img/logos/tuple-logo-gray-400.svg'
            },
            testimonial: ' Responsible for A/B tests - designing and conducting experiments to test the efficacy of different changes/improvements, analyzing the results, and making decisions based on those results. ',
            person: {
                name: 'This Woman Doest Not Exist',
                title: 'Ceo',
                city: 'Kryptonite',
                src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
            }
        },
        {
            company: {
                name: 'Workcation',
                src: 'https://tailwindui.com/img/logos/workcation-logo-gray-400.svg'
            },
            testimonial: 'I am a software engineer with experience in a variety of languages and platforms. I have a strong focus on front-end development but am also proficient in back-end technologies. I have a proven track record in leadership.',
            person: {
                name: 'This Man Doest Not Exist',
                title: 'Ceo',
                city: 'Earth 616',
                src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
            }
        }
    ]
    return (
        <>
            <div className="lg:text-center mb-10">

                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    GPT-3 in the Works
                </p>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                    World’s most powerful inhuman being is here to help you land that dream job! Fill in the empty fields, write down
                    the keywords and ta-da! </p>
            </div>
            <section className="bg-indigo-800 sm:rounded-2xl max-w-7xl mx-auto">
                <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8">
                    {
                        persons.map((item, index) => (
                            <div key={index}
                                className={`py-12 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-10 md:pr-0 md:border-indigo-900 lg:pr-16  ${index % 2 === 0 && "md:border-r"}`}>
                                <div className="md:flex-shrink-0">
                                    <Image className="h-12" src={item.company.src} alt={item.company.name} width="105" height="48" />
                                </div>
                                <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
                                    <div className="relative text-lg font-medium text-white md:flex-grow">
                                        <svg className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-blue-500"
                                            fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                                            <path
                                                d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                        </svg>
                                        <p className="relative">
                                            {item.testimonial} </p>
                                    </div>
                                    <footer className="mt-8">
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                                                <Image className="h-12 w-12 rounded-full"
                                                    src={item.person.src}
                                                    alt=""
                                                    height="48"
                                                    width="48" />
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-base font-medium text-white">{item.person.name}</div>
                                                <div className="text-base font-medium text-indigo-200">{item.person.title}, {item.person.city}</div>
                                            </div>
                                        </div>
                                    </footer>
                                </blockquote>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
};

export default AiInfo;
