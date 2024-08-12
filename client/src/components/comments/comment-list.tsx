import { Comment } from "./comment"

export const CommentList = ({comments}: any) => {

    return (
        <div>
            {comments.length <= 0 ? (
                <div className="text-center text-sm text-muted-foreground" >
                    No comments.
                </div>
            ) : (
                <div className="flex flex-col gap-2" >
                    {comments.map((comment: any)=> (
                        <Comment data={comment} key={comment.id} />
                    ))}   
                </div>
            )}
        </div>
    )
}
