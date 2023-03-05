import Post from "../components/Events/Post";
import useGetPosts from "../hooks/useGetPosts";

const EventsLayout = () => {
  const posts = useGetPosts();

  return (
    <>
      <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            {posts.map((v: any, ind) => (
              <Post {...v} key={ind} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default EventsLayout;
