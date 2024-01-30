import React, { useEffect, useState } from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";

const ResumeCarousel = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => {};
  }, []);

  const Loader = () => {
    return (
      <div
        style={{
          height: "450px",
          width: "325px",
          backgroundColor: "aliceblue",
          borderRadius: "15px",
        }}
      />
    );
  };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  const CustomLeftArrow = ({ onClick }) => {
    return null;
  };
  const CarouselItem1 = () => {
    return (
      <div className="container">
        <div className="img_wrapper">
          {/* <Image
            src="/images/resumes/Santiago/Santiago_CandySky.png"
            alt="Description"
            width="450"
            height="450"
            // fill={true}
            priority
          /> */}
          {loading ? (
            <Loader />
          ) : (
            <Image
              height={320}
              width={459}
              src="/images/resumes/Santiago/Santiago_CandySky.png"
              alt="candy_sky"
            />
          )}
        </div>
        <div>Santiago</div>
      </div>
    );
  };
  const CarouselItem2 = () => {
    return (
      <div className="container">
        <div className="img_wrapper">
          {loading ? (
            <Loader />
          ) : (
            <Image
              height={320}
              width={459}
              src="/images/resumes/Mint/Mint_CreamyYellow.png"
              alt="creamy_yellow"
            />
          )}
        </div>
        <div>Mint</div>
      </div>
    );
  };
  const CarouselItem3 = () => {
    return (
      <div className="container">
        <div className="img_wrapper">
          {loading ? (
            <Loader />
          ) : (
            <Image
              height={320}
              width={459}
              src="/images/resumes/Minimal/Minimal_Honeydew.png"
              alt="honey_dew"
            />
          )}
        </div>
        <div>Minimal</div>
      </div>
    );
  };
  const CarouselItem4 = () => {
    return (
      <div className="container">
        <div className="img_wrapper">
          {loading ? (
            <Loader />
          ) : (
            <Image
              height={320}
              width={459}
              src="/images/resumes/Kathmandu/Stellar_Black.png"
              alt="black"
            />
          )}
        </div>
        <div>Kathmandu</div>
      </div>
    );
  };
  const CarouselItem5 = () => {
    return (
      <div className="container">
        <div className="img_wrapper">
          {loading ? (
            <Loader />
          ) : (
            <Image
              height={320}
              width={459}
              src="/images/resumes/Dawn/DawnMossGreen.png"
              alt="moss_green"
            />
          )}
        </div>
        <div>Dawn</div>
      </div>
    );
  };

  const CarouselItem6 = () => {
    return (
      <div className="container">
        <div className="img_wrapper">
          {loading ? (
            <Loader />
          ) : (
            <Image
              height={320}
              width={459}
              src="/images/resumes/Kathmandu/Kathmandu_RustRed.png"
              alt="rusted_red"
            />
          )}
        </div>
        <div>Stellar</div>
      </div>
    );
  };
  const CarouselItem7 = () => {
    return (
      <div className="container">
        <div className="img_wrapper">
          {loading ? (
            <Loader />
          ) : (
            <Image
              height={320}
              width={459}
              src="/images/resumes/Modern/thumbnail.png"
              alt="modern"
            />
          )}
        </div>
        <div>Modern</div>
      </div>
    );
  };
  const CarouselItem8 = () => {
    return (
      <div className="container">
        <div className="img_wrapper">
          {loading ? (
            <Loader />
          ) : (
            <Image
              height={320}
              width={459}
              src="/images/resumes/Compact/thumbnail.png"
              alt="compact"
            />
          )}
        </div>
        <div>Compact</div>
      </div>
    );
  };
  const CarouselItem9 = () => {
    return (
      <div className="container">
        <div className="img_wrapper">
          {loading ? (
            <Loader />
          ) : (
            <Image
              height={320}
              width={459}
              src="/images/resumes/inter/inter_green.png"
              alt="inter"
            />
          )}
        </div>
        <div>Inter</div>
      </div>
    );
  };

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      onMove,
      index,
      active,
      carouselState: { currentSlide, deviceType },
    } = rest;

    return (
      <div className="carousel-button-group">
        <div
          className="carousel_left_arrow"
          onClick={() => previous()}
          id="sliderrow"
        >
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 13L1 7L7 1"
              stroke="#C4C4C4"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="carousel_right_arrow" onClick={() => next()}>
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 13L7 7L1 1"
              stroke="#C4C4C4"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    );
  };

  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;

    return null;
  };

  return (
    <Carousel
      // renderArrowsWhenDisabled
      infinite
      swipeable={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      // autoPlay={this.props.deviceType !== 'mobile' ? true : false}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .3"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      // deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      customLeftArrow={<CustomLeftArrow />}
      customRightArrow={<CustomRightArrow />}
      renderButtonGroupOutside={true}
      customButtonGroup={<ButtonGroup />}
      // customDot={<CustomDot />}
    >
      <CarouselItem1 />
      <CarouselItem2 />
      <CarouselItem3 />
      <CarouselItem4 />
      <CarouselItem5 />
      <CarouselItem6 />
      <CarouselItem7 />
      <CarouselItem8 />
      <CarouselItem9 />
    </Carousel>
  );
};

export default ResumeCarousel;
