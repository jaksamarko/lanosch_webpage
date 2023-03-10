import { BlogPost } from "../../interfaces/blogPost.interface";
import style from "../../styles/post.module.css";

const Post = (data: BlogPost) => {
  const badges = data.attributes.tags.split(",");
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3" style={style}>
      <div className="wow fadeInUp group mb-10" data-wow-delay=".1s">
        <div className="mb-8 rounded overflow-hidden">
          <a href={`posts/${data.id}`} className="block">
            <img
              src={data.attributes.header.url || "/assets/images/nyitas_1.jpg"}
              className="w-full h-[270px] object-cover transition group-hover:rotate-6 group-hover:scale-125"
            />
          </a>
        </div>
        <div>
          {badges?.map((v, ind) => {
            return (
              <span
                key={ind}
                className="mr-3 mb-1 inline-block rounded bg-primary py-1 px-4 text-center text-xs font-semibold leading-loose text-white"
              >
                {v}
              </span>
            );
          })}
          <h3>
            <a
              href={`posts/${data.id}`}
              className="inline-block text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
            >
              {data.attributes.title}
            </a>
          </h3>
          <p className="text-base text-body-color -mt-3">
            {data.attributes.description || ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
