const InfoArea = ({ header, text }) => {
  return (
    <div className="flex flex-col gap-1 bg-indigo-50 border rounded border-indigo-200 w-full p-3">
      <span className="text-indigo-900 text-sm">
        {header}
      </span>
      <span className="text-sm text-blue-500">
        {text}
      </span>
    </div>
  )
}

export default InfoArea