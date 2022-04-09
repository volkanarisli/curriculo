
import { classNames } from "../../../../utils/helpers";


const Experience = ({ experiences, print }) => {
    return (
        <div>
            <span className={classNames("font-bold", print ? "text-xl" : "text-sm")}>Work Experiences</span>
            {
                experiences?.map((item, index) => (
                    <div key={index} className={classNames("mb-3", print ? "text-xl" : "text-xs")}>
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
