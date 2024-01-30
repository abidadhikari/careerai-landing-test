import BlogCard from "@/components/Blog/BlogCard";
import LandingLayout from "@/components/Layouts/LandingLayout";
import TwoOverlappingLayout from "@/components/Layouts/TwoOverlappingLayout";
import React from "react";
import dotted from "../../assets/images/blog/dotted.svg";
import Image from "next/image";
import blogData from "../../components/lib/blogData";
import Head from "next/head";

function BlogIndex(props) {
  // console.log(blogData);
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
              blogData.length < 3
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
            {blogData.map((e) => {
              return (
                <BlogCard
                  title={e.title}
                  description={e.meta_description}
                  link={`/oldblog/${e.slug}`}
                  image={e.image.thumbnail}
                  authorName={e.author.name}
                  date={e.date.updated}
                />
              );
            })}
            {}
          </div>
        </div>
      </TwoOverlappingLayout>
    </LandingLayout>
  );
}

export default BlogIndex;
