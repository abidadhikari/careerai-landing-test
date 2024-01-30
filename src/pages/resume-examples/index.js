import LandingLayout from "@/components/Layouts/LandingLayout";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeatherIcon from "feather-icons-react";
import Slider from "react-slick";
import BuildYourResume from "@/components/pagesComp/BuildYourResume";

const SectionResumeSlider = (props) => {
  const { children, title, description } = props;
  return (
    <div className="section-resume-slider">
      <h2>{title}</h2>
      <p>{description}d</p>
      <div className="slider-container-new">{children}</div>
    </div>
  );
};

function ResumeExamplePage(props) {
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
            stroke="#C4C4C4"
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
            stroke="#C4C4C4"
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
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    speed: 500,
    autoplaySpeed: 2000,
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
    <LandingLayout>
      <div className="resume__example">
        <div className="re-head">
          <div className="re-head-inner">
            <div className="reh-left">
              <h1>
                Professional <span>Resume Examples</span>{" "}
              </h1>
              <p>
                Explore our collection of meticulously crafted professional
                resume examples to guide you in creating a standout resume
                tailored to your industry. A well-crafted resume is your
                passport to career opportunities, and our examples cover a
                variety of professions, from finance and technology to
                healthcare and creative fields.
              </p>
            </div>
            <div className="reh-right">
              <div className="img"></div>
            </div>
          </div>
        </div>
        <div className="re-content">
          <div className="re-search-section">
            <button type="button" className="openbtn" onClick={() => {}}>
              <FeatherIcon icon="search" />
            </button>
            <input
              type="text"
              placeholder="Search resume"

              // onChange={}
            />
          </div>
          <div className="re-labels-list">
            {[...Array(4)].map((e, i) => {
              return (
                <button
                  type="button"
                  className={i == 0 ? "label-btn-active" : ""}
                  // onClick={() => setActiveLabel(e.value)}
                >
                  Test
                </button>
              );
            })}
          </div>
          <SectionResumeSlider
            title="Education Examples"
            description="Build the perfect education or teaching resume — quickly, easily and with minimum stress. Whether you’re a teacher, child care expert, or college professor, our resume samples will show you what employers really want to see in an application."
          >
            <Slider {...settings}>
              {[...Array(5)].map(() => {
                return (
                  <div className="slider-item">
                    <div className="si-inner">
                      <img
                        src="/images/resumes/Minimal/Minimal_Honeydew.png"
                        alt="honey_dew"
                      />
                    </div>
                  </div>
                );
              })}
            </Slider>
          </SectionResumeSlider>
          <SectionResumeSlider
            title="Education Examples"
            description="Build the perfect education or teaching resume — quickly, easily and with minimum stress. Whether you’re a teacher, child care expert, or college professor, our resume samples will show you what employers really want to see in an application."
          >
            <Slider {...settings}>
              {[...Array(5)].map(() => {
                return (
                  <div className="slider-item">
                    <div className="si-inner">
                      <img
                        src="/images/resumes/Kathmandu/Stellar_Black.png"
                        alt="black"
                      />
                    </div>
                  </div>
                );
              })}
            </Slider>
          </SectionResumeSlider>
          <SectionResumeSlider
            title="Education Examples"
            description="Build the perfect education or teaching resume — quickly, easily and with minimum stress. Whether you’re a teacher, child care expert, or college professor, our resume samples will show you what employers really want to see in an application."
          >
            <Slider {...settings}>
              {[...Array(5)].map(() => {
                return (
                  <div className="slider-item">
                    <div className="si-inner">
                      <img
                        src="/images/resumes/Kathmandu/Kathmandu_RustRed.png"
                        alt="rusted_red"
                      />
                    </div>
                  </div>
                );
              })}
            </Slider>
          </SectionResumeSlider>
          <SectionResumeSlider
            title="Education Examples"
            description="Build the perfect education or teaching resume — quickly, easily and with minimum stress. Whether you’re a teacher, child care expert, or college professor, our resume samples will show you what employers really want to see in an application."
          >
            <Slider {...settings}>
              {[...Array(5)].map(() => {
                return (
                  <div className="slider-item">
                    <div className="si-inner">
                      <img
                        src="/images/resumes/Compact/thumbnail.png"
                        alt="compact"
                      />
                    </div>
                  </div>
                );
              })}
            </Slider>
          </SectionResumeSlider>
          <div style={{ height: "39px" }}></div>
          <BuildYourResume />
        </div>
      </div>
    </LandingLayout>
  );
}

export default ResumeExamplePage;
