

const Bio = ({ contact }) => {
    return (
        <div>
            <div className="flex flex-col items-center mb-5">
                <span className="text-base mb-2 font-bold">{`${contact.firstName} ${contact.lastName}`}</span>
                <span className="mb-3 text-base">{`${contact.location}`}</span>
                <div className="flex">
                    <span className="mr-5 text-base">{`${contact.email}`}</span>
                    <span className="text-base">{`${contact.number}`}</span>

                </div>
            </div>
            <div className="max-w-4xl text-gray-500 text-base">
                {`${contact.desc}`}
            </div>
        </div>
    )
};

export default Bio;
