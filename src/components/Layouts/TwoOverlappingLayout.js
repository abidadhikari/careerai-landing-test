import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Image from "next/image";
import React from "react";
import fhImage from "../../assets/images/banele.svg";

function TwoOverlappingLayout(props) {
  const { children, title, title2, name, date, image, singleblog } = props;
  // if (typeof window !== "undefined") {
  //   // browser code

  //   window.addEventListener("scroll", (e) => {
  //     const height =
  //       window.pageYOffset ||
  //       (document.documentElement || document.body.parentNode || document.body)
  //         .scrollTop;
  //     if (singleblog) {
  //       if (document.querySelector(".totop")) {
  //         if (height > 300) {
  //           document.querySelector(".totop").style.display = "grid";
  //         } else {
  //           document.querySelector(".totop").style.display = "none";
  //         }
  //       }
  //     }
  //   });
  // }
  return (
    <div className="twooverlappinglayout">
      <div
        className="to-1"
        style={{ marginBottom: title?.length > 35 ? "80px" : "0" }}
      >
        <div
          className="todetail"
          style={
            !name && !date
              ? {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }
              : {}
          }
        >
          <Image src={fhImage} className="fh-img" />
          <div className="td-left">
            <h1
              data-aos="fade-up"
              data-aos-delay="250"
              data-aos-duration="1000"
              data-aos-easing="ease"
            >
              {title} <span>{title2}</span>
            </h1>
          </div>
          {name && date && (
            <div className="td-right">
              {/* <div className="tdr-left">.</div> */}
              <div
                className="tdr-right"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
                data-aos-easing="ease"
              >
                {/* <div className="tdrr-top">{name}</div>
                <div className="tdrr-bottom">{date}</div> */}
                Published on {date}. By {name}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="to-2">
        <div
          className={singleblog ? `to-content single-to-content` : "to-content"}
        >
          {children}
        </div>
      </div>
      {/* {singleblog && (
        <div
          className="totop"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <FeatherIcon icon="chevron-up" />
        </div>
      )} */}
    </div>
  );
}

export default TwoOverlappingLayout;
