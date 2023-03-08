import { useEffect, useState } from "react";
import { BlogPost } from "../interfaces/blogPost.interface";
import jsonFetch from "../util/jsonFetch";
import replaceImageUrl from "../util/replaceImageUrl";

const fields = "&fields[0]=title&fields[1]=tags&fields[2]=description";

function useGetPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    jsonFetch(
      `/api/posts?populate=*${fields}`,
      ({ data }: { data: BlogPost[] }) => {
        data.forEach((post) => {
          replaceImageUrl(post.attributes.header);
        });
        setPosts(data);
      }
    );
  }, []);

  return posts;
}

export default useGetPosts;
