import Image from "next/image";
import Link from "next/link";
import React from "react";

import blogcover from "../../assets/images/blog/blogcover.svg";
import DateConversion from "@/helper/DateConversion";

function BlogCard(props) {
  const { link, image, title, description, date, authorName, loading } = props;
  return (
    <>
      {loading ? (
        <>
          <div className="blogcard ">
            <a href="#">
              <div
                className="blogimage_wrapper skeleton-box"
                style={{ width: "100%" }}
              ></div>
              <div className="blogtext">
                <h2 style={{ width: "50%" }} className="skeleton-box"></h2>
                <p className="skeleton-box"></p>
                <p className="skeleton-box"></p>
                <p className="skeleton-box"></p>
              </div>
            </a>
          </div>
        </>
      ) : (
        <div className="blogcard" data-label="Test">
          <Link href={link}>
            <div className="blogimage_wrapper">
              <img
                src={
                  image
                    ? image
                    : "https://www.shoutmeloud.com/wp-content/uploads/2020/05/blog.jpg"
                }
                alt="blog image"
                width={349}
                height={240}
              />
            </div>
            <div className="blogtext">
              <h2>{title}</h2>
              <p>{description}</p>
              <div className="blogauthor">
                {/* <div className="ba-left">.</div> */}
                <div className="ba-right">
                  <div className="bar-top">{authorName}</div>
                  <div className="bar-bottom">{date}</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      )}
    </>
  );
}

export default BlogCard;
