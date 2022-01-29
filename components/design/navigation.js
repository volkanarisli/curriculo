import { useState } from "react"

const Navigation = ({ tabs }) => {
    return (
        <div className="flex justify-center relative p-4">
            <div className="left-4 absolute">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
            </div>

            {
                tabs.map((tab, key) => (
                    <div className="flex" key={key}>
                        <span className="mx-5 cursor-pointer">{tab.name}</span>
                        {
                            !(key === tabs.length - 1) &&
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        }

                    </div>

                ))
            }


        </div>
    )
}

export default Navigation