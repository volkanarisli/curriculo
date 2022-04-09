import { classNames } from "../../../../utils/helpers";

const Bio = ({ contact, print }) => {
    return (
        <div>
            <div className={classNames("flex flex-col items-center mb-2")}>
                <span className={classNames(print ? "text-4xl mb-5 font-bold" : "text-2xs mb-1 font-bold")}>
                    {`${contact.firstName} ${contact.lastName}`}
                </span>
                <span className={classNames(print ? "text-2xl mb-3" : "mb-1 text-2xs")}>{`${contact.location}`}</span>
                <div className="flex">
                    <span className={classNames(print ? "text-2xl mr-3" : "text-2xs mr-1")}>{`${contact.email}`}</span>
                    <span className={classNames(print ? "text-2xl" : "text-2xs")}>{`${contact.number}`}</span>

                </div>
            </div>
            <div className={classNames("max-w-7xl text-gray-500", print ? "text-xl" : "text-2xs")}>
                {`${contact.desc}`}
            </div>
        </div>
    )
};

export default Bio;
