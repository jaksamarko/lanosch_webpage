import EventPost from "../components/Events/EventPost";
import Navbar from "../components/Navbar";
import { default as posts } from "../data/pages.json";

const EventsLayout = () => {
  return (
    <>
      <Navbar />
      <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            {posts.map((v, ind) => (
              <EventPost {...v} key={ind} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default EventsLayout;
