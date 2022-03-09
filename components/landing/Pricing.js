/* eslint-disable react/no-unknown-property */


const Pricing = () => {
    const prices = [
        {
            name: ' 7-Day Trial',
            price: '2.5',
            advantage: 'Good fit if you are applying for just one company or just updating your resume.',
            features: [
                'Unlimited Downloads',
                'GPT-3 powered descriptions and summaries',
                'Access to all templates',
                'Auto-renews after 7 days for $9'
            ]
        },
        {
            name: '3 months',
            price: '20',
            advantage: 'This plan is a great fit when you are applying for multiple companies.',
            features: [
                'Unlimited Downloads',
                'GPT-3 powered descriptions and summaries',
                'Access to all templates',
                'Auto-renews after 3 months'
            ]
        },

    ]
    return (
        <div className="bg-blue-600 sm:rounded-2xl max-w-7xl mx-auto">
            <div className="pt-12 sm:pt-16 lg:pt-24">
                <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto space-y-2 lg:max-w-none">
                        <h2 className="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">
                            Pricing
                        </h2>
                        <p className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
                            Straight Forward Pricing
                        </p>
                        <p className="text-xl text-gray-300">
                            No hidden costs, we promise.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
                <div className="relative">
                    <div className="absolute inset-0 h-3/4 bg-blue-600"></div>
                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
                            {
                                prices.map((item, index) => (
                                    <div key={index} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                                        <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                                            <div>
                                                <h3
                                                    className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-100 text-blue-500"
                                                    id="tier-standard">
                                                    {item.name}
                                                </h3>
                                            </div>
                                            <div className="mt-4 flex items-baseline text-6xl font-extrabold">
                                                ${item.price}
                                                <span className="ml-1 text-2xl font-medium text-gray-500">
                                                    /mo
                                                </span>
                                            </div>
                                            <p className="mt-5 text-lg text-gray-500">
                                                {item.advantage}
                                            </p>
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                                            <ul role="list" className="space-y-4">
                                                {
                                                    item.features.map((item, index) => (
                                                        <li key={`li+${index}`} className="flex items-start">
                                                            <div className="flex-shrink-0">

                                                                <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                    viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                                </svg>
                                                            </div>
                                                            <p className="ml-3 text-base text-gray-700">
                                                                {item}
                                                            </p>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                            <div className="rounded-md shadow">
                                                <a href="#"
                                                    className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-indigo-900"
                                                    aria-describedby="tier-standard">
                                                    Get started
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="mt-4 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">

                </div>
            </div>
        </div>
    )
};

export default Pricing;
