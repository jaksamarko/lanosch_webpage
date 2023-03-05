import { useEffect, useState } from "react";
import { BlogPost } from "../interfaces/blogPost.interface";

function useGetPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch(`${(import.meta as any).env.VITE_BACKEND}api/posts`)
      .then((res) => res.json())
      .then((post) => {
        console.log("Hook");
        console.log(post.data);
        setPosts(post.data);
      });
  }, []);

  return posts;
}

export default useGetPosts;
