import React, { useEffect, useState } from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import santiagoImg from "../../assets/images/cover_letters/santiago.png";
import mintImg from "../../assets/images/cover_letters/mint.png";
import minimalImg from "../../assets/images/cover_letters/minimal.png";
import dawnImg from "../../assets/images/cover_letters/dawn.png";
import stellarImg from "../../assets/images/cover_letters/stellar.png";
// import dawnImg from '../../assets/images/cover_letters/dawn.png';

const CoverLetterCarousel = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => {};
  }, []);

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
  const CustomLeftArrow = ({ onClick }) => {
    return null;
  };
  const CarouselItem1 = () => {
    return (
      <div className="container">
        <div className="img_wrapper">
          {loading ? (
            <Loader />
          ) : (
            <Image
              height={320}
              width={459}
              src="/images/cover_letters/Santiago/Santiago_ Candy Sky.png"
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
              src="/images/cover_letters/Mint/Mint_Creamy Yellow.png"
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
              src="/images/cover_letters/Minimal/Minimal_ Lavender.png"
              alt="lavender"
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
              src="/images/cover_letters/Kathmandu/Kathmandu_ Black.png"
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
              src="/images/cover_letters/Dawn/Dawn_ Moss Green.png"
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
              src="/images/cover_letters/Stellar/Stellar_ Burnt Sienna.png"
              alt="burnt_sienna"
            />
          )}
        </div>
        <div>Stellar</div>
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
    const carouselItems = [
      CarouselItem1,
      CarouselItem2,
      CarouselItem3,
      CarouselItem4,
      CarouselItem5,
      CarouselItem6,
    ];
    return (
      <div className="carousel-button-group">
        <div className="carousel_left_arrow" onClick={() => previous()}>
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 13L1 7L7 1"
              stroke="#4339F2"
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
              stroke="#4339F2"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="custom_dots_wrapper">
          {/* {[1, 2, 3, 4, 5, 6].map((item, index) => {
            return (
              <>
                <div
                  className={active ? 'custom_dot_active' : 'custom_dot_single'}
                  onClick={() => goToSlide(currentSlide + 1)}
                />
              </>
            );
          })} */}
          {/* {
            <svg
              width="90"
              height="8"
              viewBox="0 0 90 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="4" fill="#D3D9DE" fill-opacity="0.3" />
              <circle cx="4" cy="4" r="4" fill="#D3D9DE" fill-opacity="0.3" />
              <circle cx="19" cy="4" r="4" fill="#D3D9DE" fill-opacity="0.3" />
              <circle cx="34" cy="4" r="4" fill="#D3D9DE" fill-opacity="0.3" />
              <circle cx="49" cy="4" r="4" fill="#D3D9DE" fill-opacity="0.3" />
              <circle cx="86" cy="4" r="4" fill="#D3D9DE" fill-opacity="0.3" />
              <rect x="60" width="15" height="8" rx="4" fill="#0145FD" />
            </svg>
          } */}
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

  const CustomDot = ({ onClick, ...rest }) => {
    const {
      onMove,
      index,
      active,
      carouselState: { currentSlide, deviceType },
    } = rest;
    const carouselItems = [
      CarouselItem1,
      CarouselItem2,
      CarouselItem3,
      CarouselItem4,
      CarouselItem5,
      CarouselItem6,
    ];

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
    </Carousel>
  );
};

export default CoverLetterCarousel;
