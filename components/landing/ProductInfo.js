/* eslint-disable react/no-unknown-property */
import { ViewListIcon, PaperClipIcon } from '@heroicons/react/solid'
import { UserCircleIcon, AcademicCapIcon, CogIcon, PencilIcon, LogoutIcon } from '@heroicons/react/outline'
import LogoIcon from '../../components/common/icons/LogoIcon';
import UpworkIcon from '../../components/common/icons/UpworkIcon';



const ProductInfo = () => {
    const infoCards = [
        {
            header: 'Resume Builder',
            info: 'Easily create a resume that will impress hiring managers and employers.',
            Icon: LogoIcon
        },
        {
            header: 'Cover Letter Generator',
            info: 'Write a cover letter within seconds with our AI-powered generator and be in the top 5% of applicants.',
            Icon: PaperClipIcon
        },
        {
            header: 'Upwork Proposal Letter Generator',
            info: 'Create a Employment Summary to show what you have done and what you can bring to the team.',
            Icon: UpworkIcon
        },
        {
            header: 'Employment Summary',
            info: 'Applying to a new job or a college can be a painful process. We are here to reduce the stress. With our generator, you can decrease the time spent up to 75%.',
            Icon: AcademicCapIcon
        },
        {
            header: 'Professional Summary',
            info: 'The professional summary can quickly highlights your relevant skills and experience. You can get ahead of thousands of applicants by using our generator.',
            Icon: UserCircleIcon
        },
        {
            header: 'Educational Summary',
            info: 'The educational summary can quickly highlights your educational experience. You can get ahead of thousands of applicants by using our generator.',
            Icon: PencilIcon
        }
    ]
    return (
        <div className="p-12 bg-white" id="products">
            <div className="flex flex-col items-center text-center max-w-xl mx-auto gap-2">
                <span className="text-blue-700 font-semibold">Products</span>
                <p className="text-2xl font-semibold text-gray-900">
                    All-in-one toolbox for job applications
                </p>
                <p className="text-sm text-gray-500">
                    Get started with our products and get your resume ready for the job market. We have a wide range of products to choose from.
                    Get ahead of thousands of applicants by using our generator.
                </p>
            </div>

            <div className="mt-10 mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center">
                    {
                        infoCards.map(({ header, Icon, info }, index) => (
                            <div key={index} className="flex flex-col items-center mb-5">
                                <div className="rounded-full bg-blue-50 h-20 w-20 mb-4 flex items-center justify-center">
                                    <div className="rounded-full bg-blue-400 h-12 w-12 my-auto mx-auto flex items-center justify-center">
                                        <span className="text-white">
                                            <Icon className="h-6 w-6" />
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-col max-w-sm text-center">
                                    <span className="text-xl text-gray-900 mb-2">{header}</span>
                                    <span className="text-gray-500">{info}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>

    )
};

export default ProductInfo;
