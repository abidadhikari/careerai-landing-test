import React from "react";
import ele1 from "../../assets/images/ele1.svg";
import openaiImage from "../../assets/images/openai.svg";
import robo from "../../assets/images/robo.svg";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

function OpenAiBox(props) {
  return (
    <div
      className="openai-box"
      data-aos="fade-up"
      data-aos-delay="400"
      data-aos-duration="1000"
      data-aos-easing="ease"
    >
      <div className="openai-box-cover"></div>
      <Image src={ele1} className="oa-tofix" />
      <div className="oa-container  ">
        <div className="left">
          <Image src={openaiImage} />
          <div className="left-title">Powered by OpenAI's GPT-3 NLP model.</div>
        </div>
        <div className="right">
          <p
            data-aos="fade-up"
            data-aos-delay="450"
            data-aos-duration="1000"
            data-aos-easing="ease"
            className="big-p"
          >
            Leverage AI to help you secure your ideal role. Our AI-powered tool
            can craft tailored resumes and cover letters that highlight your
            professional achievements using industry-standard keywords and
            phrases. Focus on what is truly important: <b>your career goals.</b>
          </p>
          <div className="hrline" />
          <p
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-easing="ease"
            className="p-text fw-300"
          >
            CareerAI's resume builder uses an integrated GPT-3 NLP model to :
          </p>
          <div className="oa-list">
            <div
              className="oa-list-item"
              data-aos="fade-left"
              data-aos-delay="250"
              data-aos-duration="1000"
              data-aos-easing="ease"
            >
              <Image src={robo} />
              <span>
                Create an outstanding resume and cover letter with AI-powered
                language assistance.
              </span>
            </div>
            <div
              className="oa-list-item"
              data-aos="fade-left"
              data-aos-delay="250"
              data-aos-duration="1000"
              data-aos-easing="ease"
            >
              <Image src={robo} />
              <span>
                Provide personalized recommendations based on your past
                experience and career goals.
              </span>
            </div>
            <div
              className="oa-list-item"
              data-aos="fade-left"
              data-aos-delay="250"
              data-aos-duration="1000"
              data-aos-easing="ease"
            >
              <Image src={robo} />
              <span>
                Deliver a simple, intuitive, and user-friendly interface that
                makes it easy to navigate.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenAiBox;
