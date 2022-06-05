import { useState } from "react"
import DisplayTabs from "../common/DisplayTabs"
import { PaperClipIcon } from '@heroicons/react/solid'
import UpworkIcon from "../common/icons/UpworkIcon"
import { UserCircleIcon } from '@heroicons/react/outline'
import AboutForm from "../common/forms/AboutForm"
import CoverLetterForm from "../common/forms/CoverLetterForm"
import UpworkForm from "../common/forms/UpworkForm"
import ResumeInfoProvider from "../../context/ResumeInfo"

const Tryout = () => {
    const tabs = [
        {
            href: "/cover-letter",
            header: 'Cover Letter Generator',
            info: 'Create a cover letter to show what you can bring to the team.',
            bgColor: 'orange',
            component: () => <CoverLetterForm {...{ isTryout: true }} />,
            Icon: PaperClipIcon
        },
        {
            href: "/upwork-proposal-letter",
            header: 'Upwork Proposal Letter Generator',
            info: 'Create a proposal letter to land your next freelance job.',
            bgColor: 'green',
            component: () => <UpworkForm {...{ isTryout: true }} />,
            Icon: UpworkIcon
        },
        {
            href: "/professional-summary",
            header: 'Professional Summary Generator',
            bgColor: 'red',
            component: () => <AboutForm {...{ isTryout: true }} />,
            Icon: UserCircleIcon
        },
    ]
    const [selectedTab, setSelectedTab] = useState(1)
    return (
        <ResumeInfoProvider>
            <div className="text-center flex flex-col items-center gap-3 mb-1 max-w-xl mx-auto">
                <span className="text-blue-700 font-semibold " id="demo">Demo</span>
                <span className="text-gray-900 text-3xl font-semibold">See Curriculo In Action</span>
                <p className="text-sm text-gray-500 p-3">
                    This demo is a great way to see how Curriculo can help you create killer cover letters and resume texts! You can&apos;t change the inputs, but that just means you can focus on the awesome results. Plus, you can&apos;t include or exclude anything personal, so this demo is the perfect way to understand how the process works.
                </p>
            </div>
            <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8" id="action">
                <div className="mb-5">
                    <DisplayTabs tabs={tabs} selectedTab={selectedTab} updateTab={setSelectedTab} />
                </div>
                <div>
                    {tabs[selectedTab].component()}
                </div>
            </div>
        </ResumeInfoProvider>
    )
}

export default Tryout