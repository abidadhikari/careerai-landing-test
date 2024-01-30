import LandingLayout from "@/components/Layouts/LandingLayout";
import Image from "next/image";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

// import aboutImage from "../assets/images/abt.svg";
import aboutImage from "../assets/images/aboutImage/aboutImage.png";

import ufd from "../assets/images/ufd.svg";
import trust from "../assets/images/trust.svg";
import exp from "../assets/images/exp.svg";
import buld from "../assets/images/buld.svg";
import image999 from "../assets/images/999.svg";
import image888 from "../assets/images/888.svg";

import pre from "../assets/images/pre.svg";
import cf from "../assets/images/cf.svg";
import wc from "../assets/images/wc.svg";
import ces from "../assets/images/ces.svg";
import Head from "next/head";

import as1 from "../assets/images/aboutImage/1st section/s1.svg";
import as2 from "../assets/images/aboutImage/1st section/s2.svg";
import as3 from "../assets/images/aboutImage/1st section/s3.svg";
import mainabout from "../assets/images/aboutImage/1st section/mainabout.svg";
import newabout from "../assets/images/aboutImage/1st section/newabout.svg";

import sec1 from "../assets/images/aboutImage/2nd section/sec1.svg";
import sec2 from "../assets/images/aboutImage/2nd section/sec2.svg";
import sec3 from "../assets/images/aboutImage/2nd section/sec3.svg";

import s1img1 from "../assets/images/aboutImage/Section1/ProfessionalSummary.svg";
import s1img2 from "../assets/images/aboutImage/Section1/Resume.svg";
import s1img3 from "../assets/images/aboutImage/Section1/ResumeForm.svg";
import s1img4 from "../assets/images/aboutImage/Section1/SittingGuy.svg";
import s1img5 from "../assets/images/aboutImage/Section1/spellChecker.svg";

import s2img1 from "../assets/images/aboutImage/Section2/AbstractShape.svg";
import s2img2 from "../assets/images/aboutImage/Section2/Girl.svg";
import s2img3 from "../assets/images/aboutImage/Section2/ProfessionalSummary.svg";
import s2img4 from "../assets/images/aboutImage/Section2/ResumeSidebar.svg";

function About(props) {
  const data = [
    {
      image: ufd,
      title: "User-Friendly Design",
      content:
        "We focus on user-friendly design so even with no prior experience, the whole process is effortless.",
    },
    {
      image: trust,
      title: "Trusted by Recruiters",
      content:
        "Our template and custom fields are readable and precisely what recruiters look for. We make it easier for employees to get hired.",
    },
    {
      image: exp,
      title: "AI-Generated Content",
      content:
        "Our AI-generated content weighs in with your skills and knowledge to offer a high-quality and engaging context for your resume and cover letter.",
    },
    {
      image: buld,
      title: "Time and Cost Saving",
      content:
        "Time and effort are money, after all, that is what we highlight on all our resumes. We ensure quality and results while saving more than 95% of your time and effort.",
    },
  ];

  const data2 = [
    {
      title: "Customize content in real time",
      content:
        "Make any changes to your resume that will be reflected instantly, and in real-time.",
    },
    {
      title: "Pre-suggested phrases by AI",
      content:
        "Add industry-specific keywords and phrases that make your resume more relevant.",
    },
    {
      title: "Get rid of typos",
      content:
        "Receive a resume that has zero typos - thanks to our embedded spell-checker.",
    },
    {
      title: "Download unlimited times",
      content:
        "Export your resume to .doc and .pdf file formats, as many times as you want.",
    },
  ];

  const data3 = [
    {
      img: pre,
      title: "Pre-built Templates",
      content:
        "Save time and effort by building a resume from scratch. Our pre-built templates offer a quick and effortless way to get started with the process.        ",
    },
    {
      img: wc,
      title: "Content powered by OpenAI",
      content:
        "Our tool, powered by OpenAI, is designed to help your resume stand out with the best content available for your specific niche. Choose career-specific descriptions that suit you, and you're good to go!",
    },
    {
      img: cf,
      title: "User-Friendly Design and Add Custom Sections",
      content:
        "We prioritize user-friendly design, ensuring that anyone can use our platform with ease, even if they have no prior experience. Our templates feature customizable sections that allow you to effortlessly add and tailor content to your preferences.        ",
    },

    {
      img: ces,
      title: "Trusted by Recruiters",
      content:
        "Our template and custom fields are readable and precisely what recruiters look for. We make it easier for employees to get hired. ",
    },

    {
      img: ces,
      title: "Time and Cost Saving",
      content:
        "Time and effort are money, after all, that is what we highlight on all our resumes. We ensure quality and results while saving more than 95% of your time and effort.",
    },
  ];
  return (
    <LandingLayout>
      <Head>
        <title>About - CareerAI</title>
        <meta name="title" content="About - CareerAI" />
        <meta
          name="description"
          content="Build professional resumes quickly and easily with our online resume builder. Choose from customizable templates, enter your details, and generate a polished CV. Download in PDF format. Get started today!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.careerai.io/" />
        <meta property="og:title" content="About - CareerAI" />
        <meta
          property="og:description"
          content="Build professional resumes quickly and easily with our online resume builder. Choose from customizable templates, enter your details, and generate a polished CV. Download in PDF format. Get started today!"
        />
        <meta
          property="og:image"
          content="https://www.careerai.io/images/seo.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.careerai.io/" />
        <meta property="twitter:title" content="About - CareerAI" />
        <meta
          property="twitter:description"
          content="Build professional resumes quickly and easily with our online resume builder. Choose from customizable templates, enter your details, and generate a polished CV. Download in PDF format. Get started today!"
        />
        <meta
          property="twitter:image"
          content="https://www.careerai.io/images/seo.png"
        />
      </Head>

      <div className="about__hero-section">
        <div className="my-width ah-inner">
          <div className="left">
            <h1
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease"
            >
              CareerAI: Simplifying Job Hunt
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
              data-aos-easing="ease"
            >
              CareerAI is built for individuals and institutions alike. We aim
              to ease the process of job hunting and applying to ensure maximum
              chances of getting hired. We understand the need to pay attention
              to details and follow through with each approach. However, we also
              acknowledge that job hunting can be a significant hassle.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease"
            className="right"
          >
            {/* <Image src={aboutImage} /> */}
            <img src="/images/aboutImage.png" />
          </div>
        </div>
      </div>
      <div className="about__after-hero">
        <div className="my-width aah">
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease"
            className="left"
          >
            <span>
              Intelligent Resume and Cover Letter that gets you to the top
            </span>{" "}
            of the hiring list.
          </div>
          <div className="right">
            <motion.p
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease"
            >
              In today's competitive world, standing out is the key to impress.
              If not, your resume will be piled up where it won't see the light
              of day. The time and effort to come up with the best possible
              resume is not exactly a piece of cake, especially for job seekers
              looking to invest in themselves and their skills. Getting started
              can be a hassle. Simply accelerate this process and get on top of
              the stack with CareerAI. We understand the core of what makes a
              resume and cover letter impressive.
            </motion.p>
          </div>
        </div>
        <div className="my-width aah-bottom">
          <motion.div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease"
            className="left"
          >
            {/* <Image src={image999} /> */}
            <div className="about-image-1">
              <img src="/images/about-firstimg.png" className="abt1" />
              <div className="as-main">
                {/* <Image src={s1img1} className="s1img1" />
                <Image src={s1img2} className="s1img2" />
                <Image src={s1img3} className="s1img3" />
                <Image src={s1img4} className="s1img4" />
                <Image src={s1img5} className="s1img5" /> */}
              </div>
            </div>
          </motion.div>
          <div className="right">
            {[
              {
                top: "Customize content in real time",
                bottom:
                  "Make any changes to your resume that will be reflected instantly, and in real-time.",
              },
              {
                top: "Pre-suggested phrases by AI",
                bottom:
                  " Add industry-specific keywords and phrases that make your resume more relevant.",
              },
              {
                top: "Get rid of typos",
                bottom:
                  "Receive a resume that has zero typos - thanks to our embedded spell-checker.",
              },
              {
                top: "Download unlimited times",
                bottom:
                  "Export your resume to .doc and .pdf file formats, as many times as you want.",
              },
            ].map((e) => {
              return (
                <motion.div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                  data-aos-easing="ease"
                  className="r-container"
                >
                  <div className="r-title">{e.top}</div>
                  <div className="r-content">{e.bottom}</div>
                </motion.div>
              );
            })}
            {/* <div className="r-container">
              <div className="r-title">Customize content in real time</div>
              <div className="r-content">
                Make any changes to your resume that will be reflected
                instantly, and in real-time.
              </div>
            </div>
            <div className="r-container">
              <div className="r-title">Pre-suggested phrases by AI</div>
              <div className="r-content">
                Add industry-specific keywords and phrases that make your resume
                more relevant.
              </div>
            </div>
            <div className="r-container">
              <div className="r-title">Get rid of typos</div>
              <div className="r-content">
                Receive a resume that has zero typos - thanks to our embedded
                spell-checker.
              </div>
            </div>
            <div className="r-container">
              <div className="r-title">Download unlimited times</div>
              <div className="r-content">
                Export your resume to .doc and .pdf file formats, as many times
                as you want.
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="about__items__wrapper">
        <motion.h2
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease"
        >
          Create an effective resume and cover letter that will get you hired
          faster.
        </motion.h2>
        <div className="my-width ai-row">
          {data.map((e) => {
            return (
              <motion.div
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
                data-aos-easing="ease"
                className="ai-item"
              >
                <Image src={e.image} />
                <div className="ai-title">{e.title}</div>
                <div className="ai-content-small">{e.content}</div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="about__section__last my-width">
        <motion.h2
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease"
        >
          Why use CareerAI Builder?
        </motion.h2>
        <div className="asl-row">
          <div className="asl-col1">
            <motion.p
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease"
            >
              Our resume builder takes care of the hard work and makes creating
              a polished, professional, and stand-out resume and cover letter a
              breeze! Not only this, but we follow through with our dedicated
              services of virtual assistance as well as job application and
              tracking.
            </motion.p>
            {/* <Image src={image888} /> */}
            <div className="img888">
              <img src="/images/about-secondimg.png" />
            </div>
          </div>
          <div className="asl-col2">
            {data3.map((e) => {
              return (
                <motion.div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                  data-aos-easing="ease"
                  className="asl"
                >
                  <div className="asl-top">
                    <Image src={e.img} /> {e.title}
                  </div>
                  <div className="asl-bottom">{e.content}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </LandingLayout>
  );
}

export default About;
