

const Bio = ({ contact }) => {
    return (
        <div>
            <div className="flex flex-col items-center mb-2">
                <span className="text-2xs mb-1 font-bold">{`${contact.firstName} ${contact.lastName}`}</span>
                <span className="mb-1 text-2xs">{`${contact.location}`}</span>
                <div className="flex">
                    <span className="mr-2 text-2xs">{`${contact.email}`}</span>
                    <span className="text-2xs">{`${contact.number}`}</span>

                </div>
            </div>
            <div className="max-w-4xl text-gray-500 text-2xs">
                {`${contact.desc}`}
            </div>
        </div>
    )
};

export default Bio;
