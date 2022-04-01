

const Experience = ({ educationHistory }) => {
    return (
        <div>
            <span className="text-xs">Education</span>
            {
                educationHistory?.map((item, index) => (
                    <div key={index} className="mb-7">
                        <div className="flex mb-5">
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
