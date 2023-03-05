import { useEffect, useState } from "react";
import useGetPosts from "../hooks/useGetPosts";
import Post from "./Events/Post";

const Events = () => {
  const posts = useGetPosts();

  return (
    <section
      id="events"
      className="pt-20 pb-10 lg:pt-[120px] lg:pb-20 bg-[#f3f4fe]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          {Boolean(posts.length) &&
            posts.slice(0, 3).map((v: any, ind) => <Post {...v} key={v.id} />)}
        </div>
        <div className="flex justify-end">
          <a href="/posts">
            <button className="bg-primary hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded">
              Több
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Events;
