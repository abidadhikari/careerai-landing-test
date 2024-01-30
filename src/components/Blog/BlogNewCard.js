import DateConversion from "@/helper/DateConversion";
import Link from "next/link";
import React from "react";

function BlogNewCard(props) {
  const { id, data, loading } = props;
  return (
    <>
      {loading && (
        <a href="#" className="blog-new-card bnc-loading ">
          <div className="bnc-upper">
            <div className="bnc-img skeleton"></div>

            <>
              <div className="bnc-label skeleton">GENERAL</div>
            </>

            <div className="bc-txt">
              <h2 className="skeleton"></h2>
              <p className="skeleton"></p>
              <p className="skeleton"></p>
              <p className="skeleton"></p>
            </div>
          </div>
          <div className="bnc-lower">
            {" "}
            <div className="line"></div>
            <div className="bnc-bottom">
              <div className="author"></div>
              <div className="date"></div>
            </div>
          </div>
        </a>
      )}
      {!loading && (
        <Link href={`/blog/${data.slug}`} className="blog-new-card">
          <div className="bnc-upper">
            <div className="bnc-img">
              <img src={data.pImage} />
            </div>

            {data.blogCategory ? (
              <>
                <div className="bnc-label">
                  {data.blogCategory.replace("-", " ").toUpperCase()}
                </div>
              </>
            ) : (
              <>
                {/* <div style={{ height: "29px", marginBottom: "18px" }}></div> */}
                <div className="bnc-label">GENERAL</div>
              </>
            )}
            <div className="bc-txt">
              <h2>{data.title}</h2>
              <p>{data.summary}</p>
            </div>
          </div>
          <div className="bnc-lower">
            {" "}
            <div className="line"></div>
            <div className="bnc-bottom">
              <div className="author">{data.author}</div>
              <div className="date">{DateConversion(data.publishedAt)}</div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
}

export default BlogNewCard;
