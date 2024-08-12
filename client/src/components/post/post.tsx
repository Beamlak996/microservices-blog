import { CommentCreate } from "../comments/comment-create"
import { CommentList } from "../comments/comment-list"



export const Post = ({data}: any) => {
    return (
        <div className="border rounded-md p-4 w-fit bg-blue-50 h-fit" >
          <div className="flex flex-col gap-4" >
            <h1 className="text-lg font-[700]" >{data.title}</h1>
            <CommentList comments={data.comments} />
            <CommentCreate postId={data.id} />
          </div>
        </div>
    )
}  