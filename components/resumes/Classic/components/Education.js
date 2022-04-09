import { classNames } from "../../../../utils/helpers";


const Experience = ({ educationHistory, print }) => {
    return (
        <div>
            <span className={classNames("font-bold", print ? "text-xl" : "text-sm")}>Education</span>
            {
                educationHistory?.map((item, index) => (
                    <div key={index} className={classNames("mb-1", print ? "text-xl" : "text-xs")}>
                        <div className="flex mb-1">
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
        </div >
    )
};

export default Experience;
