import React, { useState } from "react";

import "react-multi-carousel/lib/styles.css";

import FavouriteTemplateSwitch from "./FavouriteTemplateSwitch";
import ResumeCarousel from "./ResumeCarousel";
import CoverLetterCarousel from "./CoverLetterCarousel";

function ChooseYourFavouriteTemplate() {
  const [selectedOption, setSelectedOption] = useState("Resume");
  const [active, setActive] = useState(1);
  const handleToggle = () => {
    setSelectedOption(selectedOption === "Resume" ? "Cover Letter" : "Resume");
  };

  return (
    <div className="favourite-template">
      <div className="favourite-template_top_wrapper">
        <FavouriteTemplateSwitch active={active} setActive={setActive} />
        <div
          className="favourite-template_title"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease"
        >
          Choose your favourite template
        </div>
        <div
          className="favourite-template_subtitle"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease"
        >
          With CareerAI, no matter your background. Let us help you showcase
          your experience and skills in the best possible way.
        </div>
        <div
          className="favourite-template_button"
          onClick={() => {
            if (active === 1) {
              window.location.href = "https://app.careerai.io/free-trial";
            } else if (active === 2) {
              window.location.href = "https://app.careerai.io/free-trial-cover";
            }
          }}
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease"
        >
          {active === 1
            ? "View More Resume Templates"
            : "View More Cover Letter Templates"}
        </div>
      </div>
      <div
        className="favourite-template_carousel"
        data-aos="fade-up"
        data-aos-delay="350"
        data-aos-duration="1000"
        data-aos-easing="ease"
      >
        {active === 1 ? <ResumeCarousel /> : <CoverLetterCarousel />}
      </div>
    </div>
  );
}

export default ChooseYourFavouriteTemplate;
