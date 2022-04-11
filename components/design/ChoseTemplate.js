import Image from "next/image"
import BarnPreview from "../../assets/img/ResumePreview/Barn.jpg"
import ModernPreview from "../../assets/img/ResumePreview/Modern.jpg"
import ClassicPreview from "../../assets/img/ResumePreview/Classic.jpg"
const ChoseTemplate = ({ selectTemplate }) => {
    const cvTemplates = [
        {
            id: 0,
            name: 'barn',
            source: BarnPreview,
        },
        {
            id: 1,
            name: 'modern',
            source: ModernPreview,

        },
        {
            id: 2,
            name: 'classic',
            source: ClassicPreview,
        },
    ]

    return (
        <div className="flex flex-col justify-center items-center bg-blue-600">
            <div className="flex flex-col items-center mt-3">
                <div className="mb-1">
                    <Image src="/logo.svg" alt='Logo' width="50" height="50" />
                </div>
                <div className="text-white flex flex-col justify-center items-center">
                    <div className="text-2xl font-semibold">
                        Chose Template
                    </div>
                    <span className="text-sm max-w-sm text-center">
                        Here comes the most challenging part of Curriculo. You have to choose between many designs that you like.
                    </span>
                </div>
            </div>

            <div className="flex flex-wrap gap-10 justify-center mt-10">
                {
                    cvTemplates.map((item, index) => (
                        <div className="overflow-scroll hover:scale-110 transition cursor-pointer" key={index}
                            onClick={() => selectTemplate(index)}>
                            <Image src={item.source} alt={item.name} width="300" height="420" className="object-scale-down" />
                        </div>
                    ))
                }
            </div>



        </div>
    )
}


export default ChoseTemplate