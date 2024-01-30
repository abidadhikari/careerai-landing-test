import React, { useState } from "react";

const FavouriteTemplateSwitch = (props) => {
  const { active, setActive } = props;
  //   const [active, setActive] = useState(1);
  return (
    <div
      className="favourite-template_switch"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="1000"
      data-aos-easing="ease"
    >
      <div
        className={active === 1 ? "active_switch text_wrapper" : "text_wrapper"}
        onClick={() => setActive(1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="14"
          viewBox="0 0 12 14"
          fill="none"
        >
          <path
            d="M7.25 1H2.25C1.91848 1 1.60054 1.1317 1.36612 1.36612C1.1317 1.60054 1 1.91848 1 2.25V12.25C1 12.5815 1.1317 12.8995 1.36612 13.1339C1.60054 13.3683 1.91848 13.5 2.25 13.5H9.75C10.0815 13.5 10.3995 13.3683 10.6339 13.1339C10.8683 12.8995 11 12.5815 11 12.25V4.75L7.25 1Z"
            stroke="#C4C4C4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.25 1V4.75H11"
            stroke="#C4C4C4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.5 7.875H3.5"
            stroke="#C4C4C4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.5 10.375H3.5"
            stroke="#C4C4C4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.75 5.375H4.125H3.5"
            stroke="#C4C4C4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Resume
      </div>
      <div
        className={active === 2 ? "active_switch text_wrapper" : "text_wrapper"}
        onClick={() => setActive(2)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
        >
          <path
            d="M5.92086 2.15918H2.09353C1.8035 2.15918 1.52536 2.27439 1.32029 2.47947C1.11521 2.68454 1 2.96268 1 3.25271V10.9074C1 11.1974 1.11521 11.4755 1.32029 11.6806C1.52536 11.8857 1.8035 12.0009 2.09353 12.0009H9.7482C10.0382 12.0009 10.3164 11.8857 10.5214 11.6806C10.7265 11.4755 10.8417 11.1974 10.8417 10.9074V7.08004"
            stroke="#C4C4C4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.0223 1.33971C10.2398 1.1222 10.5348 1 10.8424 1C11.15 1 11.445 1.1222 11.6625 1.33971C11.8801 1.55723 12.0023 1.85225 12.0023 2.15986C12.0023 2.46747 11.8801 2.76249 11.6625 2.98L6.4683 8.17425L4.28125 8.72101L4.82801 6.53396L10.0223 1.33971Z"
            stroke="#C4C4C4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Cover Letter
      </div>
    </div>
  );
};

export default FavouriteTemplateSwitch;
