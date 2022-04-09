import { classNames } from "../../../../utils/helpers";


const Bio = ({ contact, print }) => {
    return (
        <div>
            <div className="flex flex-col mb-2">
                <span className={classNames("mb-1 font-bold", print ? "text-2xl" : "text-base")}>{`${contact?.firstName} ${contact?.lastName}`}</span>

                <div className={classNames("flex", print ? "text-xl" : "text-sm")}>
                    <span >{`${contact.location}`}</span>

                    {
                        contact.currentTitle &&
                        <>
                            <span className="mx-1">•</span>
                            <span >{`${contact.currentTitle}`}</span>

                        </>

                    }
                    {
                        contact.email &&
                        <>
                            <span className="mx-1">•</span>
                            <span >{`${contact.email}`}</span>
                        </>

                    }
                    {
                        contact.number &&
                        <>
                            <span className="mx-1">•</span>
                            <span>{`${contact.number}`}</span>
                        </>

                    }
                </div>
            </div>
            <div className={classNames("max-w-4xl text-gray-500", print ? "text-1xl" : "text-sm")}>
                {`${contact.desc}`}
            </div>
        </div>
    )
};

export default Bio;

