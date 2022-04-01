

const Experience = ({ experiences }) => {
    return (
        <div>
            <span className="text-2xs font-bold">Work Experiences</span>
            {
                experiences?.map((item, index) => (
                    <div key={index} className="mb-3">
                        <div className="flex mb-2">
                            <span>{item.company}</span>
                            •
                            <span>{item.title}</span>
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
