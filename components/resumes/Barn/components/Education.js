

const Education = ({ educationHistory }) => {
    return (
        <div>
            <span className="text-lg font-bold">Education</span>
            {
                educationHistory?.map((item, index) => (
                    <div key={index} className="mb-7">
                        <div className="flex mb-5 items-center leading-tight">
                            <span className="text-base font-bold">{item.degree}</span>
                            •
                            <span className="text-base font-bold">{item.school}</span>
                        </div>
                        <div className="text-lg">
                            {item.desc}
                        </div>

                    </div>
                ))
            }
        </div>
    )
};

export default Education;
