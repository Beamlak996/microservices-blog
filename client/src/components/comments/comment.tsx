
export const Comment = ({data}: any) => {
    return (
        <div className="border border-blue-500 p-2 flex items-center gap-4 bg-blue-200">
            <div className="p-2 bg-blue-800 rounded-full" />
            {data.content}
        </div>
    )
}