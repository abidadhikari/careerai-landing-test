import LandingLayout from "@/components/Layouts/LandingLayout";
import TwoOverlappingLayout from "@/components/Layouts/TwoOverlappingLayout";
import React, { useEffect, useState } from "react";
import blogData from "../../components/lib/blogData";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import DateConversion from "@/helper/DateConversion";

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
  const getAllBlogs = async () => {
    try {
      const res = await fetch(
        // "https://api.slingacademy.com/v1/sample-data/blog-posts"
        "https://d2fa6tipx2eq6v.cloudfront.net/public/blogs"
      );
      const result = await res.json();
      setAllBlogs(result.data);
    } catch (error) {}
  };
  useEffect(() => {
    setLoading(true);
    getAllBlogs();
    setLoading(false);
  }, []);

  const router = useRouter();

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
          content={`https://www.careerai.io/blogs/${data?.id}`}
        />
        <meta property="og:title" content={data?.title} />
        <meta property="og:description" content={data?.summary} />
        <meta property="og:image" content={`${data?.pImage}`} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://www.careerai.io/blogs/${data?.id}`}
        />
        <meta property="twitter:title" content={data?.title} />
        <meta property="twitter:description" content={data?.summary} />
        <meta property="twitter:image" content={`${data?.pImage}`} />
      </Head>
      <TwoOverlappingLayout
        title={data?.title}
        name={data?.author}
        date={DateConversion(data?.publishedAt)}
        image="#"
        singleblog
      >
        <div className="singleblog">
          {/* <div className="blogdetail">
            <div className="bd-left">
              <h1>Migrating to Linear 101</h1>
            </div>
            <div className="bd-right">
              <div className="bdr-left">.</div>
              <div className="bdr-right">
                <div className="bdrr-top">Phoenix Baker</div>
                <div className="bdrr-bottom">19 Jan 2022</div>
              </div>
            </div>
          </div> */}
          <div className="blogbanner">
            <img
              src={
                data?.image
                  ? data?.image
                  : "https://www.shoutmeloud.com/wp-content/uploads/2020/05/blog.jpg"
              }
              width={1220}
              height={455}
            />
          </div>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: data?.content }}
          >
            {/* {data?.content} */}
          </div>
        </div>
        <section className="continue-reading-section">
          <h2>Continue Reading</h2>
          <p>
            Explore additional suggested readings to secure the job you've
            always envisioned.
          </p>
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
            {!loading &&
              allBlogs
                ?.filter((blog) => {
                  return blog.id != router.query.blogid;
                })
                .map((e, i) => {
                  if (e.id != router.query.blogid && i <= 2) {
                    return (
                      <Link className="cr-item" href={`/blogs/${e.id}`}>
                        <div className="cr-image">
                          <img src={e.pImage} alt="" />
                        </div>
                        <h3>{e.title}</h3>
                        <div className="author">{e.author}</div>
                        <div className="date">
                          {DateConversion(e.publishedAt)}
                        </div>
                      </Link>
                    );
                  }
                })}
          </div>
        </section>
      </TwoOverlappingLayout>
    </LandingLayout>
  );
}

export default SingleBlog;
