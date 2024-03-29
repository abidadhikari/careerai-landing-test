import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import img1 from "../../assets/images/rb.svg";
import img2 from "../../assets/images/cl.svg";
import img3 from "../../assets/images/mrt.svg";
import img4 from "../../assets/images/va.svg";
import img5 from "../../assets/images/rv.svg";
import img6 from "../../assets/images/ats.svg";
import dnd from "../../assets/images/dnd.svg";
import atss from "../../assets/images/atss.svg";
import rdd from "../../assets/images/rdd.svg";
import Image from "next/image";

function Benefits(props) {
  const data = [
    {
      img: img1,
      title: "AI Resume Builder",
      desc: "A curated and intelligent resume generated by powerful AI and personalized by you through our simple builder.",
    },
    {
      img: img2,
      title: "Corresponding Cover Letter",
      desc: "Automatically analyzes your resume and generates a corresponding cover letter that aligns with its context and style, ensuring uniformity between the two documents.",
    },
    {
      img: img3,
      title: "Multiple Templates",
      desc: "A collection of appealing templates that are compatible with applicant tracking systems and are tailored to your profession and personal style. ",
    },
    {
      img: dnd,
      title: "Drag and Drop",
      desc: "Seamless rearrangement of resume sections through an intuitive interface, empowering users to customize their resume layout according to their preferences. ",
    },
    {
      img: img5,
      title: "Resume Review",
      desc: "Experienced professionals to offer tailored guidance and specialized input to customize your resume and cover letter to match the requirements of the job opening.",
    },
    // {
    //   img: img6,
    //   title: "Ask Me Anything(AMA)",
    //   desc: "This feature enables questions and assistance in filling sections of your resume and cover letter with AMA, facilitating the creation of a professional application.      ",
    // },
    {
      img: atss,
      title: "ATS-Friendly Templates ",
      desc: "Optimizes job applications with ATS-friendly templates featuring customizable content, clear formatting, relevant keywords, accessibility, and mobile responsiveness.",
    },
    {
      img: rdd,
      title: "Readily Downloadable",
      desc: "Effortlessly retrieve both the cover letter and the resume in the versatile formats of Word and PDF through easy downloading. ",
    },
    {
      img: img4,
      title: "Virtual Assistants",
      desc: "Our dedicated virtual assistants are here to help you by applying for multiple job openings and increasing your chances of securing the position.",
    },
    {
      img: img6,
      title: "Application Tracking Platform",
      desc: "Simplifies the process of managing multiple applications by combining the status into a visually presented and customizable Kanban board.",
    },
  ];
  return (
    <div className="benefits__wrapper">
      <h2
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
        data-aos-easing="ease"
      >
        Your application stress management toolkit!
      </h2>
      <p
        className="big-p"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
        data-aos-easing="ease"
      >
        In addition to our <b>AI-Powered</b> resume and cover letter builder,
        CareerAI provides virtual assistants, resume and cover letter review
        services by industry experts, and a multiple application tracking
        platform.
      </p>
      <div className="b-row">
        {[
          data.map((e, i) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="1000"
                data-aos-easing="ease"
                className="benefit"
              >
                <div className="left">
                  <Image src={e.img} />
                </div>
                <div className="right">
                  <div className="top">{e.title}</div>
                  <div className="bottom">{e.desc}</div>
                </div>
              </div>
            );
          }),
        ]}
      </div>
    </div>
  );
}

export default Benefits;
