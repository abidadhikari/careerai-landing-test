import LandingLayout from "@/components/Layouts/LandingLayout";
import TwoOverlappingLayout from "@/components/Layouts/TwoOverlappingLayout";
import React, { useEffect, useState } from "react";
import blogData from "../../components/lib/blogData";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

// export const getServerSideProps = async ({ params }) => {
//   const data = blogData;
//   console.log(data);
//   if (!data.length) {
//     return {
//       notFound: true,
//     };
//   }

//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { data: data }, // will be passed to the page component as props
//   };
// };
export async function getStaticProps({ params }) {
  // const router = useRouter();
  // const slug = router.query.blogslug;
  const slug = params.blogslug;

  const blog = blogData.filter((e) => {
    return e.slug === slug;
  });
  return { props: { blogList: JSON.stringify(blog) } };
}

export function getStaticPaths() {
  const data = blogData;
  const paths = data.map((post) => {
    return {
      params: {
        blogslug: `${post.slug}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

function SingleBlog(props) {
  const { data, blogList } = props;
  const [blog, setBlog] = useState({
    title: "",
    content: "",
    image: { cover: "", thumbnail: "" },
    author: { name: "" },
    meta_description: "",
  });

  const router = useRouter();
  let singleBlog = JSON.parse(blogList);
  singleBlog = singleBlog[0];
  // console.log("single blog:::", singleBlog);

  useEffect(() => {
    // console.log(params);
    if (router.query.blogslug) {
      const slug = router.query.blogslug;
      const tempBlog = blogData.filter((e) => {
        return e.slug === slug;
      });
      setBlog(tempBlog[0]);
    }
  }, [router.query.blogslug]);
  // console.log(singleBlog);
  // console.log(JSON.parse(blogList).title);
  return (
    <LandingLayout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />

        <title>{singleBlog?.title}</title>
        {/* <meta name="title" content={singleBlog?.title} /> */}
        <meta name="description" content={singleBlog?.meta_description} />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://www.careerai.io/${singleBlog?.slug}`}
        />
        <meta property="og:title" content={singleBlog?.title} />
        <meta
          property="og:description"
          content={singleBlog?.meta_description}
        />
        <meta
          property="og:image"
          content={`https://careerai.io/${singleBlog?.image.thumbnail}`}
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://www.careerai.io/${singleBlog?.slug}`}
        />
        <meta property="twitter:title" content={singleBlog?.title} />
        <meta
          property="twitter:description"
          content={singleBlog?.meta_description}
        />
        <meta
          property="twitter:image"
          content={`https://careerai.io/${singleBlog?.image.thumbnail}`}
        />
      </Head>
      <TwoOverlappingLayout
        title={singleBlog?.title}
        name={singleBlog?.author.name}
        date={singleBlog?.date?.updated}
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
            <img src={singleBlog?.image.cover} width={1220} height={455} />
          </div>
          <div
            className="content-old"
            dangerouslySetInnerHTML={{ __html: singleBlog?.content }}
          >
            {/* {singleBlog?.content} */}
          </div>
        </div>
        <section className="continue-reading-section">
          <h2>Continue Reading</h2>
          <p>
            Explore additional suggested readings to secure the job you've
            always envisioned.
          </p>
          <div className="cr-list">
            {blogData.map((e) => {
              if (e.slug !== router.query.blogslug) {
                return (
                  <Link className="cr-item" href={`/blog/${e.slug}`}>
                    <div className="cr-image">
                      <img src={e.image.thumbnail} alt="" />
                    </div>
                    <h3>{e.title}</h3>
                    <div className="author">{e.author.name}</div>
                    <div className="date">{e.date.updated}</div>
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
