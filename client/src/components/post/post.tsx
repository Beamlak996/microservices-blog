import { CommentCreate } from "../comments/comment-create"



export const Post = ({data}: any) => {
    return (
        <div className="border rounded-md p-4 w-fit bg-blue-100" >
          <div className="flex flex-col gap-4" >
            <h1 className="text-lg font-[700]" >{data.title}</h1>
            <CommentCreate postId={data.id} />
          </div>
        </div>
    )
}  