import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ele1 from "../../assets/images/ele1.svg";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const TStar = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="17"
      viewBox="0 0 18 17"
      fill="none"
    >
      <path
        d="M9 1L11.472 6.008L17 6.816L13 10.712L13.944 16.216L9 13.616L4.056 16.216L5 10.712L1 6.816L6.528 6.008L9 1Z"
        fill="#FFB400"
        stroke="#FFB400"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const TestimonialCard = (props) => {
  const { name, image, content, rating, time } = props;
  function timeAgo(createdAt) {
    const currentDate = new Date();
    const createdDate = new Date(createdAt);
    const timeDifference = currentDate - createdDate;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return days === 1 ? "1 day ago" : days + " days ago";
    } else if (hours > 0) {
      return hours === 1 ? "1 hour ago" : hours + " hours ago";
    } else if (minutes > 0) {
      return minutes === 1 ? "1 minute ago" : minutes + " minutes ago";
    } else {
      return seconds <= 1 ? "just now" : seconds + " seconds ago";
    }
  }

  return (
    <div
      className="testimonial__card"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="1000"
      data-aos-easing="ease"
    >
      <div className="tc-top">
        <div className="tc-star">
          {rating &&
            [...Array(Number(rating))].map(() => {
              return <TStar />;
            })}
        </div>
        {/* <div className="tc-bold">It's Incredible</div> */}
        <div className="tc-content">
          {content.trim().length ? `“${content}”` : ``}
        </div>
      </div>
      <div className="tc-bottom">
        <div className="tcc-left">
          <div className="tc-left">
            <img src={image} />
          </div>
          <div className="tc-right">
            <div className="tcr-top">{name}</div>
            <div className="tcr-bottom">Product Manager </div>
          </div>
        </div>
        <div className="tcc-date">{timeAgo(time)}</div>
      </div>
    </div>
  );
};

function Testimonial(props) {
  const [data, setData] = useState([]);
  const [feedbackData, setFeedbackData] = useState([]);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1200, min: 804 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 804, min: 0 },
      items: 1,
    },
  };
  const getData = async () => {
    try {
      const req = await fetch(
        "https://d2fa6tipx2eq6v.cloudfront.net/public/feedbacks"
      );
      const result = await req.json();

      if (result.status === "success" && result.data.length) {
        setData(result.data);
      }
    } catch (error) { }
  };
  const getFeedBackData = async () => {
    try {
      const req = await fetch(
        "https://d2fa6tipx2eq6v.cloudfront.net/public/feedbackDetail"
      );
      const result = await req.json();

      if (result.status === "success" && result.data.length) {
        setFeedbackData(result.data);
      }
    } catch (error) { }
  };
  useEffect(() => {
    getData();
    getFeedBackData();
  }, []);
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
        >
          <path
            d="M1 13L7 7L1 1"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
        >
          <path
            d="M7 13L1 7L7 1"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1070,
        settings: {
          slidesToShow: 2,

          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      <section className="testimonial__section">
        <Image src={ele1} className="ts-tofix" />
        <div
          className="testi-sec-top"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease"
        >
          <TStar /> <span>{feedbackData?.avg} out of 5</span> based on {feedbackData?.totalitem} reviews
        </div>
        <h2
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease"
        >
          What users say about our resume builder
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease"
        >
          Here are some testimonials from our user after using CareerAI to
          manage their resume, cover letter, and job search.
        </p>
        {/* <div className="testimonial-row">
        {data?.map((e, i) => {
          if (i < 3)
            return (
              <TestimonialCard
                image={e.userImage}
                name={e.userName}
                content={e.text}
                rating={e.rating}
              />
            );
        })}
      </div> */}
      </section>
      <div className="testimonial__section__bottom">
        {/* <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          // removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {data?.map((e) => {
            return (
              <TestimonialCard
                image={e.userImage}
                name={e.userName}
                content={e.text}
                rating={e.rating}
                time={e.createdAt}
              />
            );
          })}
          {data?.map((e) => {
            return (
              <TestimonialCard
                image={e.userImage}
                name={e.userName}
                content={e.text}
                rating={e.rating}
                time={e.createdAt}
              />
            );
          })}
        </Carousel> */}

        <Slider {...settings}>
          {data?.map((e) => {
            return (
              <TestimonialCard
                image={e.userImage}
                name={e.userName}
                content={e.text}
                rating={e.rating}
                time={e.createdAt}
              />
            );
          })}
          {data?.map((e) => {
            return (
              <TestimonialCard
                image={e.userImage}
                name={e.userName}
                content={e.text}
                rating={e.rating}
                time={e.createdAt}
              />
            );
          })}
          {data?.map((e) => {
            return (
              <TestimonialCard
                image={e.userImage}
                name={e.userName}
                content={e.text}
                rating={e.rating}
                time={e.createdAt}
              />
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default Testimonial;
