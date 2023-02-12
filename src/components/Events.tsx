import EventPost from "./Events/EventPost";
import { default as posts } from "../data/pages.json";

const Events = () => {
  console.log(posts);
  return (
    <section
      id="events"
      className="pt-20 pb-10 lg:pt-[120px] lg:pb-20 bg-[#f3f4fe]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          {posts.slice(0, 3).map((v, ind) => (
            <EventPost {...v} key={v.path} />
          ))}
        </div>
        <div className="flex justify-end">
          <a href="/events">
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
