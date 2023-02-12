import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EventArticle from "../components/Events/EventArticle";
import Footer from "../components/Footer";
import BackToTop from "../components/Misc/BackToTop";
import IconFacebook from "../components/Misc/IconFacebook";
import IconLinkedin from "../components/Misc/IconLinkedin";
import IconTwitter from "../components/Misc/IconTwitter";
import Navbar from "../components/Navbar";
import { default as posts } from "../data/pages.json";

const PostsLayout = ({}) => {
  const navigate = useNavigate();
  const page = useParams().page;
  const [pageHtml, setPageHtml] = useState("");
  useEffect(() => {
    console.log(page);
    if (!page) {
      navigate("/");
      return;
    }
    fetch(`http://localhost:3000/${decodeURIComponent(page)}.html`, {
      method: "get",
    })
      .then((response) => {
        return response.text();
      })
      .then((response) => {
        setPageHtml(response);
      });
    const post = posts.find(
      ({ path }) => path === `${encodeURIComponent(page)}`
    )!;
    if (!post?.path) {
      navigate("/404");
      return;
    }

    document.title = post.title;
  }, []);

  return (
    <>
      <Navbar />
      <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4">
              {/* <EventHeader/> */}
              <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4 lg:w-8/12">
                  <div>
                    <div dangerouslySetInnerHTML={{ __html: pageHtml }}></div>
                    <div className="-mx-4 mb-12 flex flex-wrap items-center">
                      <div className="w-full px-4 md:w-1/2">
                        <div
                          className="wow fadeInUp mb-8 flex flex-wrap items-center md:mb-0"
                          data-wow-delay=".1s"
                        >
                          {[].map((v, ind) => {
                            return (
                              <a
                                key={ind}
                                href="javascript:void(0)"
                                className="mr-2 mb-2 block rounded bg-primary bg-opacity-5 py-2 px-5 text-xs font-medium text-primary hover:bg-opacity-100 hover:text-white md:mr-4 lg:mr-2 xl:mr-4"
                              >
                                {v}
                              </a>
                            );
                          })}
                        </div>
                      </div>
                      <div className="w-full px-4 md:w-1/2">
                        <div
                          className="wow fadeInUp flex items-center md:justify-end"
                          data-wow-delay=".1s"
                        >
                          <span className="mr-5 text-sm font-medium text-body-color">
                            Osszd meg (és uralkodj)
                          </span>
                          <div className="flex items-center">
                            <IconFacebook
                              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                                window.location.href
                              )}`}
                              extraClass="mb-2 mr-4"
                            />
                            <IconTwitter href="" extraClass="mb-2 mr-4" />
                            <IconLinkedin href="" extraClass="mb-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full px-4 lg:w-4/12">
                  <div className="-mx-4 mb-8 flex flex-wrap">
                    <div className="w-full px-4">
                      <h2
                        className="wow fadeInUp relative pb-5 text-2xl font-semibold text-dark sm:text-[28px]"
                        data-wow-delay=".1s
                        "
                      >
                        További posztjaink
                      </h2>
                      <span className="mb-10 inline-block h-[2px] w-full bg-primary"></span>
                    </div>
                    {[]
                      .filter((v, i) => v.id !== postData!.id)
                      .map((v, ind) => {
                        return <EventArticle {...v} key={ind} />;
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <BackToTop />
    </>
  );
};

export default PostsLayout;
