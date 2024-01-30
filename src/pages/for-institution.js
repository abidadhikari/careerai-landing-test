import ForLayout from "../components/Layouts/ForLayout";
import LandingLayout from "../components/Layouts/LandingLayout";
import Image from "next/image";
import React from "react";

import img1 from "../assets/images/cons.svg";
import img2 from "../assets/images/customize.svg";
import img3 from "../assets/images/create.svg";
import img4 from "../assets/images/101.svg";
import { AnimatePresence, motion } from "framer-motion";
import image1 from "../assets/images/inapp.svg";
import image2 from "../assets/images/reljob.svg";
import image3 from "../assets/images/more.svg";
import image4 from "../assets/images/apptrack.svg";

import onestopImage from "../assets/images/onestop.svg";
import unidashImage from "../assets/images/unidash.svg";
import usermgmtImage from "../assets/images/usermgmt.svg";
import Head from "next/head";

const Card = (props) => {
  const { image, title, content } = props;
  return (
    <div
      data-aos="zoom-in"
      data-aos-delay="200"
      data-aos-duration="1000"
      data-aos-easing="ease"
      className="card__container"
    >
      <Image src={image} />
      <div className="card-title">{title}</div>
      <div className="card-content">{content}</div>
    </div>
  );
};

const CardSide = (props) => {
  const { image, title, content, i, type } = props;
  return (
    <div className={`card__side ${i % 2 == 0 && "card__side-mirror"}`}>
      {type == "static" ? (
        <img src={image} style={{ height: "auto" }} />
      ) : (
        <Image src={image} />
      )}
      <div
        className="text"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
        data-aos-easing="ease"
      >
        <div className="card__side-title">{title}</div>
        <div className="card__side-content">{content}</div>
      </div>
    </div>
  );
};

const CardBottom = (props) => {
  const { image, title, content } = props;
  return (
    <div className="card__bottom">
      <Image src={image} />
      <div className="text">
        <div className="card__bottom-title">{title}</div>
        <div className="card__bottom-content">{content}</div>
      </div>
    </div>
  );
};

function ForINstitution(props) {
  const dataForCard = [
    {
      image: img1,
      title: "Consistency",
      content:
        "Enables students to create documents that are consistent in format and structure, presenting a more visually appealing and professional image of each.",
    },
    {
      image: img2,
      title: "Customizable",
      content:
        "Allows students to easily make changes to the suggested phrases, enabling them to incorporate their own writing style appropriate for the job description.",
    },
    // {
    //   image: img3,
    //   title: "Relevancy",
    //   content:
    //     "Include our pre-suggested industry-specific keywords and phrases to breeze through applicant tracking systems (ATS) and get noticed by hiring managers.",
    // },
    {
      image: img4,
      title: "Creativity",
      content:
        "Students can select from our multiple templates to create a professional-looking resume and cover letter of their choice, with embedded designs and AI-generated phrases that assures a great first impression.",
    },
  ];

  const dataForCardSide = [
    {
      type: "static",
      image: "/images/increased-application.png",
      title: "Increased applications",
      content:
        "An increase of 10X in the number of job applications, greatly enhancing students' chances of getting noticed by employers and securing interviews.",
    },
    {
      type: "static",
      image: "/images/relevant-job.png",
      title: "Relevant jobs",
      content:
        "Motivate students by actively applying for positions that align with their career goals and specific skill sets, improving their chances of successfully securing their desired roles.",
    },
    {
      type: "static",
      image: "/images/job-tracker.png",
      title: "Improved access",
      content:
        "Jobs are applied for in hundreds of open positions on major job boards: LinkedIn, Dice, Indeed, and ZipRecruiter.",
    },
    {
      type: "static",
      image: "/images/application-tracking.png",
      title: "Application-tracking",
      content:
        "Stay on top of your job hunt by tracking the status of all your applications and getting reminders on important follow-up tasks.",
    },
  ];

  const dataBottom = [
    {
      image: onestopImage,
      title: "One-stop-shop to stay on top",
      content:
        "Your students will have access to AI-powered resumes and cover letters readiness, experts feedback, virtual assistants, collaboration and a centralized application tracking system. An all-in-one place.",
    },
    // {
    //   image: unidashImage,
    //   title: "Unified dashboard",
    //   content:
    //     "Access all necessary insights on a singular dashboard with status of your students and mentors, readiness of Resumes and Cover Letters, feedback from experts, collaboration from Virtual Assistants and real-time report of job applications.",
    // },
    {
      image: usermgmtImage,
      title: "User management",
      content:
        "An easy management system for everyone in your institution, from students and mentors to experts and virtual assistants. Keep track of tasks, monitor progress, and make informed decisions on this user-friendly platform.",
    },
  ];

  return (
    <LandingLayout>
      <Head>
        <title>Institution</title>
      </Head>
      <ForLayout
        h1="CareerAI for"
        h12="Institution"
        p="CareerAI offers support and guidance to your institution to help students streamline the job application process and achieve their professional goals. By partnering with CareerAI, you can equip students with the necessary tools to excel in their job search and have a greater chance of securing their desired position."
        btnLink="https://app.careerai.io/signup"
      >
        <div className="for__institution__page">
          <div className="fi-top my-width">
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease"
              className="fit-top"
            >
              BETTER APPLICATIONS
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease"
              className="fit-desc"
            >
              Our resume and cover letter builder, <span>powered by AI</span> ,
              eases the process for students by generating professional
              documents in minutes. The templates are industry-specific,
              visually stunning, and ATS-friendly, ensuring that all have an
              equal chance of being noticed by hiring managers.
            </div>

            <div className="card__row">
              {dataForCard.map((e) => {
                return (
                  <Card image={e.image} title={e.title} content={e.content} />
                );
              })}
            </div>

            <div className="box-side-by-side__container">
              <h2
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
                data-aos-easing="ease"
              >
                Significant Hiring Rates
              </h2>
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
                data-aos-easing="ease"
              >
                Experience significant improvements in students' hiring rates
                with the help of our virtual assistants. Our assistants will
                apply to numerous suitable open positions on their behalf,
                enabling them to focus on what's truly important: preparing for
                their job interviews!
              </p>

              <div className="card__side__wrapper">
                {dataForCardSide.map((e, i) => {
                  return (
                    <CardSide
                      image={e.image}
                      title={e.title}
                      content={e.content}
                      type={e?.type}
                      i={i}
                    />
                  );
                })}
              </div>
            </div>

            {/* <div className="inst-bottom__container">
              <div className="inst-left">
                <div className="il-top">COST-EFFECTIVE SOLUTIONS</div>
                <div className="il-bottom">
                  <span>
                    Invest in the tools needed for your students to succeed in
                    landing their first dream role
                  </span>
                  - Intelligent Resumes and dedicated Virtual Assistants that set
                  your students up for success, and at a fraction of the cost it
                  would take to implement these services on your own.
                </div>
              </div>
              <div className="inst-right">
                {dataBottom.map((e) => {
                  return (
                    <CardBottom
                      image={e.image}
                      title={e.title}
                      content={e.content}
                    />
                  );
                })}
              </div>
            </div> */}

            <div className="inst-bottom__container">
              {/* <div className="inst-left">
                <div className="il-top">COST-EFFECTIVE SOLUTIONS</div>
                <div className="il-bottom">
                  <span>
                    Invest in the tools needed for your students to succeed in
                    landing their first dream role
                  </span>
                  - Intelligent Resumes and dedicated Virtual Assistants that set
                  your students up for success, and at a fraction of the cost it
                  would take to implement these services on your own.
                </div>
              </div> */}
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
                data-aos-easing="ease"
                className="inst-right full-inst-right"
              >
                {dataBottom.map((e) => {
                  return (
                    <CardBottom
                      image={e.image}
                      title={e.title}
                      content={e.content}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </ForLayout>
    </LandingLayout>
  );
}

export default ForINstitution;
