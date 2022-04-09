
import { classNames } from "../../../../utils/helpers";


const Experience = ({ experiences, print }) => {
    return (
        <div>
            {experiences.length > 0 && <span className={classNames("font-bold", print ? "text-2xl" : "text-xs")}>Work Experiences</span>}
            {
                experiences?.map((item, index) => (
                    <div key={index} className="mb-3">
                        <div className={classNames("flex mb-2 items-center leading-tight", print ? "text-2xl" : "text-2xs")}>
                            <span className="font-bold ">{item.company}</span>
                            •
                            <span className="font-bold">{item.title}</span>
                        </div>
                        <div className={classNames(print ? "text-xl" : "text-xs")}>
                            {item.desc}
                        </div>

                    </div>
                ))
            }
        </div>
    )
};

export default Experience;
