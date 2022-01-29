import NavigationTab from "../components/design/NavigationTab"
import WorkForm from "../components/design/WorkForm"
import EducationForm from "../components/design/EducationForm"
import AboutForm from "../components/design/AboutForm"
import ContactForm from "../components/design/ContactForm"
import Logo from "../assets/img/logomark.svg"
import Image from "next/image"


import { useState } from "react"
import Router from "next/router"

const Design = () => {
    const [tabs, setTabs] = useState([
        {
            name: 'work',
            title: 'Work',
            header: 'Let’s talk about your work experience.',
            desc: 'Tell us about your previous companies. Use keywords to describe your responsabilities.',
            isActive: true,
            isSuccess: false,
        },
        {
            name: 'education',
            title: 'Education',
            header: 'What about your education?',
            desc: 'How does your education history looks like? Where and what did you study? Use keywords to describe your experience.',
            isActive: false,
            isSuccess: false,
        },
        {
            name: 'about',
            title: 'About',
            header: 'Tell us a bit about yourself?',
            desc: "What's your name, what do you call yourself, where do you live?",
            isActive: false,
            isSuccess: false,
        },
        {
            name: 'contact',
            title: 'Contact',
            header: 'How Can Recruiters Reach You?',
            desc: 'How does your education history looks like? Where and what did you study? Use keywords to describe your experience.',
            isActive: false,
            isSuccess: false,
        },
    ])
    const [currentTab, setCurrentTab] = useState(0)

    const isLastPage = nextTabVal => nextTabVal > tabs.length


    const setTabFromNavigation = (key) => {
        if (!tabs[key].isSuccess && !(currentTab === key)) return
        setCurrentTab(key)
    }
    const nextTab = (currentTab, nextTabVal) => {

        if (isLastPage(nextTabVal + 1)) {
            Router.push('/choseTemplate')
            return;
        }
        let newArr = [...tabs]; // copying the old datas array
        newArr[currentTab].isSuccess = true;
        newArr[currentTab].isActive = false;
        setTabs(newArr)
        setCurrentTab(nextTabVal)
    }
    const currentFormEnum = {
        0: () => <WorkForm />,
        1: () => <EducationForm />,
        2: () => <AboutForm />,
        3: () => <ContactForm />
    }

    return (
        <div className="mb-10">
            <NavigationTab tabs={tabs} currentTab={currentTab} setTabFromNavigation={(key) => setTabFromNavigation(key)} />
            <div className="flex flex-col justify-center items-center my-10">
                <Image className="max-w-sm" src={Logo} alt='Logo' width="250" height="100" />
                <span className="text-2xl font-semibold text-gray-800 mb-3">
                    {tabs[currentTab].header}
                </span>
                <span className=" text-gray-500 max-w-md text-center">
                    {tabs[currentTab].desc}
                </span>
            </div>
            <div className="container mx-auto">
                {
                    currentFormEnum[currentTab]()
                }
                <div className="flex justify-center bottom-10 mt-10">
                    <button onClick={() => nextTab(currentTab, currentTab + 1)}
                        className="bg-indigo-100 text-indigo-700 py-3 sm:min-w-lg rounded-md">
                        Next Step
                    </button>
                </div>

            </div>

        </div>
    )
}


export default Design