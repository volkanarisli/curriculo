

const Experience = ({ experiences }) => {
    return (
        <div>
            <span className="text-xs font-bold">Work Experiences</span>
            {
                experiences?.map((item, index) => (
                    <div key={index} className="mb-3">
                        <div className="flex mb-2 items-center leading-tight">
                            <span className="font-bold text-2xs">{item.company}</span>
                            •
                            <span className="font-bold text-2xs">{item.title}</span>
                        </div>
                        <div className="text-2xs">
                            {item.desc}
                        </div>

                    </div>
                ))
            }
        </div>
    )
};

export default Experience;
