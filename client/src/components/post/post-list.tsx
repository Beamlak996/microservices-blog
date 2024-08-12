import { useEffect, useState } from "react"
import axios from "axios"
import { Post } from "./post"


export const PostList = () => {
    const [posts, setPosts] = useState({})

    useEffect(()=> {
        const fetchPosts = async () => {
            try {
                const res = await axios.get("http://localhost:4000/posts");
                console.log(res.data);
                setPosts(res.data)
            } catch (error) {
                console.log("Something went wrong.", error)
            }   
        }
        fetchPosts()
    }, [posts])

    return (
      <>
        {Object.values(posts).length >= 0 ? (
          <div className="">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8"></div>
            {Object.values(posts).map((post: any) => (
              <Post key={post?.id} data={post} />
            ))}
          </div>
        ) : (
          <div className="text-muted-foreground text-sm">No posts created</div>
        )}
      </>
    );
}