import Image from "next/image";


const LogoCloud = () => {
    const companies = [
        {
            name: 'Tuple',
            src: 'https://tailwindui.com/img/logos/tuple-logo-gray-400.svg'
        },
        {
            name: 'Mirage',
            src: 'https://tailwindui.com/img/logos/mirage-logo-gray-400.svg'
        },
        {
            name: 'StaticKit',
            src: 'https://tailwindui.com/img/logos/statickit-logo-gray-400.svg'
        },
        {
            name: 'Transistor',
            src: 'https://tailwindui.com/img/logos/transistor-logo-gray-400.svg'
        },
        {
            name: 'Workcation',
            src: 'https://tailwindui.com/img/logos/workcation-logo-gray-400.svg'
        }

    ]
    return (
        <div className="">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
                    Find Jobs at Companies Like
                </p>
                <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                    {
                        companies.map((item, index) => (
                            <div key={index}
                                className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                                <Image className="h-12" src={item.src} alt={item.name} width="150" height="50" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
};

export default LogoCloud;
