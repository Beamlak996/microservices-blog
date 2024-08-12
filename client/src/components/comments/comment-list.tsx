import axios from "axios"
import { useEffect, useState } from "react"
import { Comment } from "./comment"

export const CommentList = ({postId}: {postId: string}) => {
    const [comments, setComments] = useState([])

    useEffect(()=> {
        const fetchComments = async () => {
            try {
                const res = await axios.get(
                  `http://localhost:4001/posts/${postId}/comments`
                );
                setComments(res.data)
            } catch (error) {
                console.log("Something went wrong.", error)                
            }
        }
        fetchComments()
    }, [
        
    ])

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
