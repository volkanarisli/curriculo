import { useResumeInfo } from "../context/ResumeInfo";
import Logo from "../assets/img/logomark.svg"
import Image from "next/image"
import Barn from "../assets/img/Barn.jpg"
import Classic from "../assets/img/Classic.jpg"
import Modern from "../assets/img/Modern.jpg"
import Router from "next/router";


const ChoseTemplate = () => {
    const { setResumeTeplateId } = useResumeInfo()
    const cvTemplates = [
        {
            id: 0,
            name: 'barn',
            source: Barn,
        },
        {
            id: 1,
            name: 'modern',
            source: Modern,

        },
        {
            id: 2,
            name: 'classic',
            source: Classic,
        },
    ]
    const selectStyle = (item) => {
        setResumeTeplateId(item.id)
        Router.push('/preview')

    }
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="mb-7">
                <Image src={Logo} alt='Logo' width="250" height="100" />

            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="text-2xl">
                    Chose Template
                </div>
                <span className="text-sm max-w-sm text-center">
                    Here comes the most challenging part of Curriculo. You have to choose between many designs that you like.
                </span>

            </div>
            <div className="flex flex-wrap mt-10">
                {
                    cvTemplates.map((item, index) => {
                        return (
                            <div className="mx-5 border border-indigo-500 hover:scale-125 transition-all" key={index} onClick={() => selectStyle(item)}>

                                <Image className="bg-cover" src={item.source} alt='Logo' width="200" height="300" />

                            </div>
                        )
                    })
                }
            </div>



        </div>
    )
}


export default ChoseTemplate