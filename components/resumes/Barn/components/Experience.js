

const Experience = ({ experiences }) => {
    return (
        <div>
            <span className="text-lg font-bold">Work Experiences</span>
            {
                experiences?.map((item, index) => (
                    <div key={index} className="mb-7">
                        <div className="flex mb-5 items-center leading-tight">
                            <span className="font-bold text-base">{item.company}</span>
                            •
                            <span className="font-bold text-base">{item.title}</span>
                        </div>
                        <div className="text-base">
                            {item.desc}
                        </div>

                    </div>
                ))
            }
        </div>
    )
};

export default Experience;
