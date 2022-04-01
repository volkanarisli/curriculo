

const Education = ({ educationHistory }) => {
    return (
        <div>
            <span className="text-xs font-bold">Education</span>
            {
                educationHistory?.map((item, index) => (
                    <div key={index} className="mb-3">
                        <div className="flex mb-2 items-center leading-tight">
                            <span className="text-2xs font-bold">{item.degree}</span>
                            •
                            <span className="text-2xs font-bold">{item.school}</span>
                        </div>
                        <div className="text-xs">
                            {item.desc}
                        </div>

                    </div>
                ))
            }
        </div>
    )
};

export default Education;
