import { useEffect, useState } from "react";
import { BlogPost } from "../interfaces/blogPost.interface";
import jsonFetch from "../util/jsonFetch";
import replaceImageUrl from "../util/replaceImageUrl";

function useGetPost(id: string) {
  const [posts, setPosts] = useState<BlogPost>();

  useEffect(() => {
    jsonFetch(`/api/posts/${id}`, ({ data }: { data: BlogPost }) => {
      replaceImageUrl(data.attributes.header);
      setPosts(data);
    });
  }, []);

  return posts;
}

export default useGetPost;
