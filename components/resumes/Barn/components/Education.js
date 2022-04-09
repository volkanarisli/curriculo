import { classNames } from "../../../../utils/helpers";


const Education = ({ educationHistory, print }) => {
    return (
        <div>
            {educationHistory.length > 0 && <span className={classNames("font-bold", print ? "text-2xl" : "text-xs")}>Education</span>}
            {
                educationHistory?.map((item, index) => (
                    <div key={index} className="mb-3">
                        <div className={classNames("flex mb-2 items-center leading-tight", print ? "text-xl" : "text-2xs")}>
                            <span className="font-bold">{item.degree}</span>
                            •
                            <span className="font-bold">{item.school}</span>
                        </div>
                        <div className={classNames(print ? "text-xl" : "text-2xs")}>
                            {item.desc}
                        </div>
                    </div>
                ))
            }
        </div>
    )
};

export default Education;
