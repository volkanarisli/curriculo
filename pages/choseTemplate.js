import Logo from "../assets/img/logomark.svg"
import Image from "next/image"
import Barn from "../assets/img/Barn.jpg"
import Classic from "../assets/img/Classic.jpg"
import Modern from "../assets/img/Modern.jpg"
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useUser } from "../context/UserInfo";



const ChoseTemplate = () => {
    // const { user } = useUser()
    // const router = useRouter()
    // const { setResumeTeplateId } = useResumeInfo()
    // const cvTemplates = [
    //     {
    //         id: 0,
    //         name: 'barn',
    //         source: Barn,
    //     },
    //     {
    //         id: 1,
    //         name: 'modern',
    //         source: Modern,

    //     },
    //     {
    //         id: 2,
    //         name: 'classic',
    //         source: Classic,
    //     },
    // ]
    // useEffect(() => {
    //     if (!user) router.push('/login')
    // }, [user, router])

    // const selectStyle = (item) => {
    //     setResumeTeplateId(item.id)
    //     router.push('/preview')
    // }
    // return (
    //     <div className="flex flex-col justify-center items-center">
    //         <div className="mb-7">
    //             <Image src={Logo} alt='Logo' width="250" height="100" />

    //         </div>
    //         <div className="flex flex-col justify-center items-center">
    //             <div className="text-2xl">
    //                 Chose Template
    //             </div>
    //             <span className="text-sm max-w-sm text-center">
    //                 Here comes the most challenging part of Curriculo. You have to choose between many designs that you like.
    //             </span>

    //         </div>
    //         <div className="flex flex-wrap mt-10">
    //             {
    //                 cvTemplates.map((item, index) => {
    //                     return (
    //                         <div className="mx-5 border border-blue-400 hover:scale-125 transition-all" key={index} onClick={() => selectStyle(item)}>

    //                             <Image className="bg-cover" src={item.source} alt='Logo' width="200" height="300" />

    //                         </div>
    //                     )
    //                 })
    //             }
    //         </div>



    //     </div>
    // )
}


export default ChoseTemplate