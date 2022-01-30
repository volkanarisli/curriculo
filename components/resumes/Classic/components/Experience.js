

const Experience = ({ experiences }) => {
    return (
        <div>
            <span className="text-base font-bold">Work Experiences</span>
            {
                experiences?.map((item, index) => (
                    <div key={index} className="mb-7">
                        <div className="flex mb-5">
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
