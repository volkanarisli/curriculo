/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import Link from "next/link";
import { CheckIcon } from "@heroicons/react/outline";
const Pricing = ({ plans }) => {
    const [pricingPlans, setPricingPlans] = useState(plans.map((plan, index) => {
        return {
            ...plan,
            points: index === 0 ? ['Unlimited resume and letters', 'Premium resume templates', 'Unlimited downloads']
                : ['Unlimited resume and letters', 'Premium resume templates', 'Unlimited downloads', 'Unlimited downloads', '7/24 Prioritized support', ' Save up to 34%'],
        };
    }));
    const multiplyEnum = {
        25651: 1,
        25652: 2,
        25653: 4,
        25654: 12
    }
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center text-center px-1 mb-20">
                <span className="text-blue-700 mb-2">Pricing Plans</span>
                <span className="text-blue-900 text-4xl font-semibold">
                    Save time while paying less
                </span>
            </div>
            <div className="flex justify-center flex-wrap gap-6" suppressHydrationWarning={true}>
                {
                    pricingPlans.map((plan, index) => (
                        <div key={index} className="flex flex-col items-center border-2 border-gray-100 rounded-lg px-8 pt-10 pb-44 relative">
                            <div className="flex flex-col items-center w-36 mb-5">
                                <span className="text-lg text-blue-600">{plan.name}</span>
                                <span className="text-4xl font-semibold">
                                    ${plan.recurring_price.USD}
                                </span>
                            </div>
                            <div className="flex flex-col gap-2 text-gray-600">
                                {
                                    plan.points.map((point, index) => (
                                        <div key={index} className="flex items-center">
                                            <span className="bg-blue-200 text-white h-6 w-6 mr-2 flex items-center justify-center rounded-full">
                                                <CheckIcon />
                                            </span>
                                            {point}
                                        </div>
                                    ))
                                }
                            </div>

                            <div className="flex justify-center bg-gray-100 absolute bottom-0 p-10 w-full">
                                <Link href="/register">
                                    <a className="px-3 py-2 text-center font-medium rounded-md text-white bg-gradient w-full my-2">
                                        Get Started
                                    </a>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div >
    )
};

export default Pricing;
