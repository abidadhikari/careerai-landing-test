import React from "react";
import Image from "next/image";
import fhImage from "../../assets/images/banele.svg";

function SingleBlogLayout(props) {
  const { children, title, title2, name, date, image, singleblog } = props;
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
              <div
                className="tdr-right"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
                data-aos-easing="ease"
              >
                Published on {date}. By {name}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="to-2">
        <div className="to-2-single">{children}</div>
      </div>
    </div>
  );
}

export default SingleBlogLayout;
