import BlogCard from "@/components/Blog/BlogCard";
import FeatherIcon from "feather-icons-react";
import LandingLayout from "@/components/Layouts/LandingLayout";
import TwoOverlappingLayout from "@/components/Layouts/TwoOverlappingLayout";
import React, { useEffect, useState, useContext } from "react";
import dotted from "../../assets/images/blog/dotted.svg";
import Image from "next/image";
import blogData from "../../components/lib/blogData";
import Head from "next/head";
import DateConversion from "@/helper/DateConversion";
import ForLayout from "@/components/Layouts/ForLayout";
import BlogNewCard from "@/components/Blog/BlogNewCard";
import BuildYourResume from "@/components/pagesComp/BuildYourResume";
import Link from "next/link";
import ResponsivePagination from "react-responsive-pagination";
import { MyContext } from "@/context/MyContext";
// import notFoundImage from "/images/notfound.png";

function BlogIndex(props) {
  // console.log(blogData);
  const [allBlogs, setAllBlogs] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [activeLabel, setActiveLabel] = useState("all");
  const [isNew, setIsNew] = useState(true);
  const [allLoading, setAllLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  // const [currentPage, setCurrentPage] = useState(1);
  // const { currentPage, setCurrentPage } = props;
  const { currentPage, setCurrentPage } = useContext(MyContext);
  const size = 4;

  function handlePageChange(page) {
    setCurrentPage(page);
    // ... do something with `page`
  }
  useEffect(() => {
    getBlogs();
  }, [currentPage]);

  const getAllBlogs = async () => {
    setAllLoading(true);
    try {
      const res = await fetch(
        // "https://api.slingacademy.com/v1/sample-data/blog-posts"
        `https://d2fa6tipx2eq6v.cloudfront.net/public/blogs`
      );
      const result = await res.json();
      setAllBlogs(result.data.rows);
      setTotalItems(result.data.totalItems);
      setAllLoading(false);
    } catch (error) {
      setAllLoading(false);
    }
  };

  const getBlogs = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        // "https://api.slingacademy.com/v1/sample-data/blog-posts"
        `https://d2fa6tipx2eq6v.cloudfront.net/public/blogs?page=${currentPage}&size=${size}`
      );
      const result = await res.json();
      console.log("My blogs result ", currentPage, size, result);
      setBlogs(result.data.rows);
      setTotalItems(result.data.totalItems);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    setTotalPages(Math.ceil(totalItems / size));
  }, [totalItems]);

  useEffect(() => {
    setLoading(true);
    setAllLoading(true);
    getAllBlogs();
    getBlogs();
  }, []);

  useEffect(() => {
    if (activeLabel == "all" && searchText.trim().length === 0) {
      setFilter(false);
    } else {
      setFilter(true);
      let temp = allBlogs;
      if (searchText.trim().length !== 0) {
        temp = temp.filter((item) =>
          item.title.toLowerCase().includes(searchText.trim().toLowerCase())
        );
      }
      if (activeLabel !== "all") {
        temp = temp.filter((item) => {
          return item.blogCategory === activeLabel;
        });
      }
      setFilteredBlogs(temp);
    }
  }, [activeLabel, searchText]);

  const clearFilter = () => {
    setActiveLabel("all");
    setSearchText("");
    setFilter(false);
  };

  const labelsList = [
    { name: "All Blogs", value: "all" },
    { name: "Cover Letter", value: "cover-letter" },
    { name: "Job Interview", value: "job-interview" },
    { name: "Resume Help", value: "resume-help" },
    { name: "Career Advice", value: "career-advice" },
    { name: "Job Search", value: "job-search" },
    { name: "Personal Development", value: "personal-development" },
  ];
  // console.log(blogs);
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
      <ForLayout
        h1="Blogs"
        p="Discover expert resume-building tips at CareerAI. Our blog offers the latest insights for job seekers. Craft a winning CV and land your dream job. Explore now!"
        btnText="BUILD MY RESUME"
        btnLink="https://app.careerai.io/free-trial"
      >
        <div className="new-blog-home my-width ">
          {!allLoading && (
            <>
              <div className="nbh-search-section">
                <button type="button" className="openbtn" onClick={() => {}}>
                  <FeatherIcon icon="search" />
                </button>
                <input
                  type="text"
                  placeholder="Search in blog"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
              </div>
              <div className="nbh-labels-list">
                {labelsList.map((e, i) => {
                  return (
                    <button
                      type="button"
                      className={
                        activeLabel === e.value ? "label-btn-active" : ""
                      }
                      onClick={() => setActiveLabel(e.value)}
                    >
                      {e.name}
                    </button>
                  );
                })}
              </div>

              {!filter && (
                <>
                  {allBlogs.length && (
                    <Link
                      href={`/blog/${allBlogs[0].slug}`}
                      className="top-post"
                    >
                      <div className="left">
                        <img src={allBlogs[0].pImage} />
                      </div>
                      <div className="right">
                        <h2>{allBlogs[0].title}</h2>
                        <p>{allBlogs[0].summary}</p>
                        <div>Read more &gt; </div>
                      </div>
                    </Link>
                  )}
                </>
              )}

              {filter && (
                <>
                  <div className="filter-top">
                    Search : {searchText}{" "}
                    <div className="ft-label">
                      {activeLabel.replace("-", " ").toUpperCase()}
                    </div>{" "}
                    <button onClick={clearFilter}>Clear</button>
                  </div>
                  {filteredBlogs.length ? (
                    <>
                      <div className="bottom-posts">
                        {filteredBlogs.map((e) => {
                          return <BlogNewCard id={e.slug} data={e} />;
                        })}
                      </div>
                    </>
                  ) : (
                    <div className="blogs-not-found">
                      <img src="/images/notfound.png" />
                      <p>No results</p>
                    </div>
                  )}
                </>
              )}
              {/* <div className="blogs-pagination">pagination</div> */}
            </>
          )}

          {!filter && (
            <>
              <div className="bottom-posts-toggle-wrapper">
                <button
                  className={isNew ? "bptw-active" : ""}
                  onClick={() => setIsNew(true)}
                >
                  Newest Posts
                </button>
                <button
                  className={!isNew ? "bptw-active" : ""}
                  onClick={() => setIsNew(false)}
                >
                  Popular Posts
                </button>
              </div>
            </>
          )}
          {!loading && !filter && (
            <>
              <div className="bottom-posts">
                {blogs &&
                  blogs.map((e) => {
                    // if (e.id !== blogs[0].id)
                    return <BlogNewCard id={e.slug} data={e} />;
                  })}
              </div>
            </>
          )}
          {/* commenting this as no changes is seen here */}
          {/* {loading && !filter && (
            <>
              <div className="bottom-posts">
                {[...Array(size)].map((e) => {
                  // if (e.id !== blogs[0].id)
                  return <BlogNewCard loading />;
                })}
              </div>
            </>
          )} */}

          {!filter && (
            <ResponsivePagination
              total={totalPages}
              current={currentPage}
              onPageChange={(page) => handlePageChange(page)}
              previousLabel="Previous"
              nextLabel="Next"
            />
          )}
          <BuildYourResume />
        </div>
      </ForLayout>
    </LandingLayout>
  );
}

export default BlogIndex;
