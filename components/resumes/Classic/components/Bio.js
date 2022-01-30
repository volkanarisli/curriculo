const Bio = ({ contact }) => {
    return (
        <div>
            <div className="flex flex-col mb-5">
                <span className="text-2xl mb-2 font-bold">{`${contact.firstName} ${contact.lastName}`}</span>

                <div className="flex text-sm">
                    <span >{`${contact.location}`}</span>
                    <span className="mx-2">•</span>

                    <span >{`${contact.title}`}</span>
                    <span className="mx-2">•</span>

                    <span >{`${contact.email}`}</span>
                    <span className="mx-2">•</span>
                    <span>{`${contact.number}`}</span>

                </div>
            </div>
            <div className="max-w-4xl text-sm text-gray-500">
                {`${contact.desc}`}
            </div>
        </div>
    )
};

export default Bio;

