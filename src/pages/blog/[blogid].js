import React, { useEffect, useState } from "react";
import blogData from "../../components/lib/blogData";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import Image from "next/image";
import ScrollSpy from "react-scrollspy-navigation";
import ScrollspyNav from "react-scrollspy-nav";
import Head from "next/head";
import Link from "next/link";
import DateConversion from "@/helper/DateConversion";
import BuildYourResume from "@/components/pagesComp/BuildYourResume";
import BlogNewCard from "@/components/Blog/BlogNewCard";
import { PrimaryBtn } from "@/components/shared/Buttons";
import objectsImage from "@/assets/images/OBJECTS.png";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import LandingLayout from "@/components/Layouts/LandingLayout";
import TwoOverlappingLayout from "@/components/Layouts/TwoOverlappingLayout";
import SingleBlogLayout from "@/components/Layouts/SingleBlogLayout";

export const getServerSideProps = async ({ params }) => {
  const res = await fetch(
    // `https://api.slingacademy.com/v1/sample-data/blog-posts/${params.blogid}`
    `https://d2fa6tipx2eq6v.cloudfront.net/public/blogs/${params.blogid}`
  );
  const data = await res.json();
  if (!data.status) {
    return {
      notFound: true,
    };
  }

  if (!data) {
    return {
      notFound: true,
    };
  }

  if (!data.data) {
    return {
      notFound: true,
    };
  }

  if (data.data.status === "0") {
    return {
      notFound: true,
    };
  }

  return {
    props: { data: data.data }, // will be passed to the page component as props
  };
};

// export async function getStaticProps({ params }) {
//   const res = await fetch(
//     // `https://api.slingacademy.com/v1/sample-data/blog-posts/${params.blogid}`
//     `https://d2fa6tipx2eq6v.cloudfront.net/public/blogs/${params.blogid}`
//   );
//   const data = await res.json();
//   if (!data.status) {
//     return {
//       notFound: true,
//     };
//   }

//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }

//   if (!data.data) {
//     return {
//       notFound: true,
//     };
//   }
//   if (data.data.status === "0") {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { data: data.data }, // will be passed to the page component as props
//     revalidate: 60, // Re-generate the page after 60 seconds
//   };
// }

// export async function getStaticPaths() {
//   const res = await fetch(
//     // `https://api.slingacademy.com/v1/sample-data/blog-posts/${params.blogid}`
//     `https://d2fa6tipx2eq6v.cloudfront.net/public/blogs`
//   );
//   const data = await res.json();
//   const paths = data?.data?.map((post) => {
//     return {
//       params: {
//         blogid: `${post.id}`,
//       },
//     };
//   });
//   return {
//     paths,
//     // fallback: "blocking",
//     fallback: true,
//   };
// }

function SingleBlog(props) {
  const { data } = props;
  const [allBlogs, setAllBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(50);
  const [belowBlogs, setBelowBlogs] = useState([]);
  const [imageLoading, setImageLoading] = useState(true);
  const getAllBlogs = async () => {
    try {
      const res = await fetch(
        // "https://api.slingacademy.com/v1/sample-data/blog-posts"
        "https://d2fa6tipx2eq6v.cloudfront.net/public/blogs"
      );
      const result = await res.json();
      setAllBlogs(result.data.rows);
      setIndex(0);
    } catch (error) {}
  };
  useEffect(() => {
    setLoading(true);
    getAllBlogs();
    setLoading(false);
  }, []);

  useEffect(() => {
    const reqBlogs = allBlogs?.filter((blog) => {
      // return blog.id != router.query.blogid;
      return blog.slug != router.query.blogid;
    });
    const tempBlogs = [];
    for (let i = index; i < Math.min(index + 2, reqBlogs.length); i++) {
      tempBlogs.push(reqBlogs[i]);
    }
    setBelowBlogs(tempBlogs);
  }, [index]);
  const router = useRouter();

  useEffect(() => {
    setImageLoading(true);
  }, [data?.image]);

  return (
    <LandingLayout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />

        <title>{data?.title}</title>
        {/* <meta name="title" content={data?.title} /> */}
        <meta name="description" content={data?.summary} />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://www.careerai.io/blogs/${data?.slug}`}
        />
        <meta property="og:title" content={data?.title} />
        <meta property="og:description" content={data?.summary} />
        <meta property="og:image" content={`${data?.pImage}`} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://www.careerai.io/blogs/${data?.slug}`}
        />
        <meta property="twitter:title" content={data?.title} />
        <meta property="twitter:description" content={data?.summary} />
        <meta property="twitter:image" content={`${data?.pImage}`} />
      </Head>
      <SingleBlogLayout
        title={data?.title}
        name={data?.author}
        date={DateConversion(data?.publishedAt)}
        image="#"
        singleblog
      >
        <div className="singleblog">
          <div className="blogbanner">
            <img
              src={
                data?.image
                  ? data?.image
                  : "https://www.shoutmeloud.com/wp-content/uploads/2020/05/blog.jpg"
              }
              loading="lazy"
              width={1220}
              height={455}
              onLoad={() => {
                setImageLoading(false);
              }}
              alt={data?.title}
            />
            {/* {imageLoading && (
              <div className="image-loader skeleton-image"></div>
            )} */}
            {/* <PreloadImage src={data?.image} lazy /> */}
          </div>
          <div className="content">
            {/* {data?.content} */}
            <div className="content-left">
              {data.toc.length ? (
                <>
                  <div
                    className="cl-top"
                    style={{ color: "black", fontWeight: "bold" }}
                  >
                    Table of Contents
                  </div>
                  <div className="cl-line">
                    <div className="cl-line-inner"></div>
                  </div>

                  <div className="cl-btns">
                    <ScrollspyNav
                      scrollTargetIds={data.toc.map((e) => e.id)}
                      activeNavClass="is-active"
                      scrollDuration="10"
                      offset={-80}
                    >
                      {data.toc.map((e) => {
                        return (
                          <a href={`#${e.id}`} className="cl-btn">
                            {e.title}
                          </a>
                        );
                      })}
                    </ScrollspyNav>
                  </div>
                </>
              ) : (
                ""
              )}
              <div className="cl-bottom">
                {/* <Image src={objectsImage} width={177} height={181} /> */}
                <img src="/images/OBJECTS.png" alt="build your resume" />
                <div className="clb-title">Build your resume now</div>
                <div className="clb-p">
                  {/* Empower your job search with CareerAI's AI-driven resume
                  builder. Craft a winning CV and secure your dream job today! */}
                  Create a standout CV with CareerAI's AI-driven resume builder.
                </div>
                <a href="https://app.careerai.io/free-trial">
                  <PrimaryBtn text="build my resume" />
                </a>
              </div>
            </div>
            <div
              className="content-right"
              dangerouslySetInnerHTML={{ __html: data?.content }}
            ></div>
          </div>
          <section className="continue-reading-section">
            <div className="crs-top">
              <div className="crs-top-left">
                <h2>Continue Reading</h2>
                <p>
                  Explore additional suggested readings to secure the job you've
                  always envisioned.
                </p>
              </div>
              <div className="crs-top-right">
                <div
                  className="left-btn"
                  onClick={() => {
                    if (!(index - 2 < 0)) {
                      setIndex(index - 2);
                    }
                  }}
                >
                  <FeatherIcon icon="chevron-left" />
                </div>
                <div
                  className="right-btn"
                  onClick={() => {
                    if (!(index + 2 > allBlogs.length - 2)) {
                      setIndex(index + 2);
                    }
                  }}
                >
                  <FeatherIcon icon="chevron-right" />
                </div>
              </div>
            </div>
            <div className="cr-list">
              {/* {!loading &&
              allBlogs?.map((e, i) => {
                if (e.id != router.query.blogid && i <= 2) {
                  console.log(allBlogs, i);
                  return (
                    <Link className="cr-item" href={`/blogs/${e.id}`}>
                      <div className="cr-image">
                        <img src={e.image} alt="" />
                      </div>
                      <h3>{e.title}</h3>
                      <div className="author">{e.author}</div>
                      <div className="date">
                        {DateConversion(e.publishedAt)}
                      </div>
                    </Link>
                  );
                }
              })} */}
              {/* {!loading &&
                allBlogs
                  ?.filter((blog) => {
                    return blog.id != router.query.blogid;
                  })
                  .splice(index, 2)
                  .map((e, i) => {
                    if (e.id != router.query.blogid && i <= 1) {
                      return <BlogNewCard data={e} />;
                    }
                  })} */}
              {!loading &&
                belowBlogs.map((e) => {
                  return <BlogNewCard data={e} />;
                })}
            </div>
            <BuildYourResume />
          </section>
          <div style={{ height: "44px" }}></div>
        </div>
      </SingleBlogLayout>
    </LandingLayout>
  );
}

export default SingleBlog;
