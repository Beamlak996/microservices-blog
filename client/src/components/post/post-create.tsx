import axios from "axios";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";

export const PostCreate = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post("http://posts.com/posts/create", {
        title,
      });

    } catch (error) {
      console.log("Something went wrong.");
    } finally {
      setTitle("");
    }
  };

  return (
    <div className="">
      <div className="flex flex-col gap-8 border-2 rounded-md w-[500px] p-6 shadow-md">
        <h2 className="text-lg font-semibold">Create Post</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Title</p>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="w-full flex items-center justify-end">
            <Button type="submit" >Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
