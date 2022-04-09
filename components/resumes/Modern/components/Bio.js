import { classNames } from "../../../../utils/helpers";


const Bio = ({ contact, print }) => {
    return (
        <div>
            <div className="flex flex-col items-end mb-5">
                <span className={classNames("mb-1 font-bold", print ? "text-2xl" : "text-xs")}>{`${contact.firstName} ${contact.lastName}`}</span>
                <span className={classNames("mb-3", print ? "text-2xl" : "text-xs")}>{`${contact.location}`}</span>
                <div className={classNames("flex", print ? "text-2xl" : "text-xs")}>
                    <span className="mr-3">{`${contact.email}`}</span>
                    <span>{`${contact.number}`}</span>

                </div>
            </div>
            <div className={classNames("max-w-4xl text-gray-700", print ? "text-xl" : "text-xs")}>
                {`${contact.desc}`}
            </div>
        </div>
    )
};

export default Bio;
