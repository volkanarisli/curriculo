import { classNames } from "../../../../utils/helpers";


const Experience = ({ educationHistory, print }) => {
    return (
        <div>
            <span className={classNames("mb-2", print ? "text-2xl" : "text-xs")}>Education</span>
            {
                educationHistory?.map((item, index) => (
                    <div key={index} className="mb-7">
                        <div className={classNames("flex mb-2", print ? "text-xl" : "text-2xs")}>
                            <span>{item.degree}</span>
                            •
                            <span>{item.school}</span>
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
