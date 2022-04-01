

const Experience = ({ educationHistory }) => {
    return (
        <div>
            <span className="text-xs font-bold">Education</span>
            {
                educationHistory?.map((item, index) => (
                    <div key={index} className="mb-1">
                        <div className="flex mb-1">
                            <span>{item.degree}</span>
                            •
                            <span>{item.school}</span>
                        </div>
                        <div >
                            {item.desc}
                        </div>

                    </div>
                ))
            }
        </div>
    )
};

export default Experience;
