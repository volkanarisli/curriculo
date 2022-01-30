

const Bio = ({ contact }) => {
    return (
        <div>
            <div className="flex flex-col items-center mb-5">
                <span className="text-2xl mb-2 font-bold">{`${contact.firstName} ${contact.lastName}`}</span>
                <span className="mb-3">{`${contact.location}`}</span>
                <div className="flex">
                    <span className="mr-5">{`${contact.email}`}</span>
                    <span>{`${contact.phone}`}</span>

                </div>
            </div>
            <div className="max-w-4xl text-gray-500">
                {`${contact.desc}`}
            </div>
        </div>
    )
};

export default Bio;
