import { classNames } from "../../../../utils/helpers";


const Experience = ({ experiences, print }) => {
    return (
        <div>
            <span className={classNames("mb-2", print ? "text-2xl" : "text-xs")}>Work Experiences</span>
            {
                experiences?.map((item, index) => (
                    <div key={index} className="mb-7">
                        <div className={classNames("flex mb-1", print ? "text-xl" : "text-2xs")}>
                            <span>{item.company}</span>
                            •
                            <span>{item.title}</span>
                        </div>
                        <div className={classNames(print ? "text-lg" : "text-2xs")}>
                            {item.desc}
                        </div>

                    </div>
                ))
            }
        </div>
    )
};

export default Experience;
