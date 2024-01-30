import BlogCard from "@/components/Blog/BlogCard";
import LandingLayout from "@/components/Layouts/LandingLayout";
import TwoOverlappingLayout from "@/components/Layouts/TwoOverlappingLayout";
import React, { useEffect, useState } from "react";
import dotted from "../../assets/images/blog/dotted.svg";
import Image from "next/image";
import blogData from "../../components/lib/blogData";
import Head from "next/head";
import DateConversion from "@/helper/DateConversion";

function BlogIndex(props) {
  // console.log(blogData);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const getAllBlogs = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        // "https://api.slingacademy.com/v1/sample-data/blog-posts"
        "https://d2fa6tipx2eq6v.cloudfront.net/public/blogs"
      );
      const result = await res.json();
      setBlogs(result.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    setLoading(true);
    getAllBlogs();
  }, []);

  console.log(blogs);
  // export const getServerSideProps
  return (
    <LandingLayout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />

        <title>Blog - CareerAI</title>
        <meta name="title" content="Blog - CareerAI" />
        <meta
          name="description"
          content="Build professional resumes quickly and easily with our online resume builder. Choose from customizable templates, enter your details, and generate a polished CV. Download in PDF format. Get started today!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.careerai.io/" />
        <meta property="og:title" content="Blog - CareerAI" />
        <meta
          property="og:description"
          content="Build professional resumes quickly and easily with our online resume builder. Choose from customizable templates, enter your details, and generate a polished CV. Download in PDF format. Get started today!"
        />
        <meta
          property="og:image"
          content="https://www.careerai.io/images/seo.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.careerai.io/" />
        <meta property="twitter:title" content="Blog - CareerAI" />
        <meta
          property="twitter:description"
          content="Build professional resumes quickly and easily with our online resume builder. Choose from customizable templates, enter your details, and generate a polished CV. Download in PDF format. Get started today!"
        />
        <meta
          property="twitter:image"
          content="https://www.careerai.io/images/seo.png"
        />
      </Head>
      <TwoOverlappingLayout title="Blogs">
        <div className="bloghome">
          {/* <h1>Blogs</h1> */}
          <div
            className="blogs-list"
            style={
              blogs.length < 3
                ? { display: "flex", justifyContent: "center" }
                : {}
            }
          >
            <div className="dotted-bg">
              <Image src={dotted} alt="dotted" />
            </div>
            {/* <BlogCard link="/blog/single" />
            <BlogCard link="/blog/single" />
            <BlogCard link="/blog/single" />
            <BlogCard link="/blog/single" />
            <BlogCard link="/blog/single" />
            <BlogCard link="/blog/single" /> */}
            {!loading && blogs.length
              ? blogs?.map((e) => {
                  return (
                    <BlogCard
                      title={e.title}
                      description={e.summary}
                      link={`/blogs/${e.id}`}
                      image={e.pImage}
                      authorName={e.author}
                      date={DateConversion(e.publishedAt)}
                    />
                  );
                })
              : ""}
            {loading && (
              <>
                <BlogCard loading />
                <BlogCard loading />
                <BlogCard loading />
              </>
            )}
          </div>
        </div>
      </TwoOverlappingLayout>
    </LandingLayout>
  );
}

export default BlogIndex;
