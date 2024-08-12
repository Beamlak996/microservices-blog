import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import axios from "axios"

export const CommentCreate = ({ postId }: { postId: string }) => {
  const [content, setContent] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
        const res = await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
            content
        })

        console.log(res)

    } catch (error) {
        console.log("Something went wrong", error)
    } finally {
      setContent('')
    }
  }

  return (
    <div className="mt-4 w-full">
      <h2 className="text-md font-normal">New comment</h2>
      <form className="space-y-6 mt-2" onSubmit={handleSubmit} >
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Content</p>
          <Input value={content} onChange={(e)=>setContent(e.target.value)} />
        </div>
        <div className="w-full flex items-center justify-end">
          <Button type="submit" >Create</Button>
        </div>
      </form>
    </div>
  );
};
