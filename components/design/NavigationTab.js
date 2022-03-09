import { useState } from "react"
import Router from "next/router"


const NavigationTab = ({ tabs, currentTab, setTabFromNavigation }) => {
    const redirectToMainPage = () => {
        Router.push('/')
    }
    return (
        <div className="flex justify-center relative p-4">
            <div className="left-4 absolute py-1 px-1 rounded cursor-pointer hover:bg-gray-300" onClick={redirectToMainPage}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
            </div>

            {
                tabs.map((tab, key) => (
                    <div className="flex items-center" key={key}>
                        <span className={`mx-5 cursor-pointer py-1 px-3 rounded flex ${!tab.isSuccess && currentTab === key && 'hover:bg-gray-300'}
                         ${!tab.isSuccess && !(currentTab === key) && 'cursor-not-allowed'} ${tab.isSuccess && 'text-blue-600'}`}
                            onClick={() => setTabFromNavigation(key)}
                        >
                            {
                                tab.isSuccess &&
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-600 h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            }
                            {tab.title}
                        </span>
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

export default NavigationTab