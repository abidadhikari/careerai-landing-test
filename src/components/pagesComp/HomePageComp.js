import React, { useEffect, useRef, useState } from "react";
import FeatherIcon from "feather-icons-react";
import { PrimaryBtn, SecondaryBtn } from "../shared/Buttons";
import { AnimatePresence, motion } from "framer-motion";

import resumeTemplate from "../../assets/images/d2.svg";
import robot from "../../assets/images/bluerobo.svg";
import Image from "next/image";
import { TextInput } from "../shared/Input";

import img1 from "../../assets/images/openaibanner.svg";
import img2 from "../../assets/images/csangled.svg";
import img3 from "../../assets/images/cvhs.svg";
import img4 from "../../assets/images/amabanner.svg";
import img5 from "../../assets/images/cvhs1.svg";
import img6 from "../../assets/images/cvhs2.svg";
import heroDots from "../../assets/images/hero-dots.svg";
import behindImage from "../../assets/images/behind-img.svg";
import videoAlternate from "../../assets/images/video-alternate.svg";
import coverLetterBanImg from "../../assets/images/cover-letter-ban-image.svg";
import resumeBanImg from "../../assets/images/coverletter-ban.svg";
import resumeImg from "../../assets/images/resume.svg";
import robo from "../../assets/images/robo.svg";
import rightBg from "../../assets/images/hsde.svg";

import liveBg from "../../assets/images/abstract.svg";
import WhoIsCareerAIFor from "./WhoIsCareerAIFor";
import OpenAiBox from "./OpenAiBox";
import Benefits from "./Benefits";
import HomeScroll from "./HomeScroll";
import ChooseYourFavouriteTemplate from "./ChooseYourFavouriteTemplate";
import Testimonial from "../Testimonial/Testimonial";
import FAQComp from "./FAQComp";
import SectionScroll from "./SectionScroll";
import newHeroImage from "@/assets/images/newheroblock.svg";
import openainew from "@/assets/images/openainew.svg";
import ai1 from "@/assets/images/ai1.svg";
import ai2 from "@/assets/images/ai2.svg";
import ai3 from "@/assets/images/ai3.svg";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import allDetails from "@/assets/images/withDetails.png";
import NewTestimonial from "../NewTestimonial/NewTestimonial";
// import amaNewImage from '@/assets/images/medium.png';
import newOne from "@/assets/images/new1.png";

function HomePageComp(props) {
  const [responseArray, setResponseArray] = useState([""]);
  const [activeResponse, setActiveResponse] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isForm, setIsForm] = useState(true);
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [experience, setExperience] = useState("");
  const [originalResume, setOriginalResume] = useState(true);

  const scrollHereRef = useRef(null);

  const router = useRouter();

  const data = [
    "You can save up to 60% of your time and effort by writing a resume and cover letter that can easily be edited as per your desire.",
    "ATS-friendly templates that breeze through automated filters with compelling and customizable content.",
    "Increase your application volume by 10X through our dedicated virtual assistants.",
    "Personalized and step-by-step guidance through resume experts to curate highly specific Resumes.",
    "A simple and centralized tracking platform that will save you 40% of your time while tracking all of your applications.     ",
  ];
  const coverLetterP = [
    "Meticulously analyzes your resume to gain a comprehensive understanding of your skills and experiences.",
    "Seamlessly aligns the generated cover letter with the content and format of your resume.",
    "Presents your strengths and achievements in a compelling manner, increasing your chances of standing out to potential employers.",
  ];

  const callChat = async () => {
    const apiKey = "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";
    const url = "https://api.openai.com/v1/completions";
    // const role = "SOftware developer";
    // const experience = 2;

    const prompt = `write me 3 examples of professional summary for the ${role} ${
      experience !== null && `of ${experience} years experience`
    } in 3-5 sentence in a CV. Please return in form of number list. Each summary should end with a full stop. Don't exceed 60 characters.`;

    const generateTextCompletion = (prompt) => {
      return {
        model: "text-davinci-003",
        prompt: `${prompt}`,
        temperature: 1,
        max_tokens: 1000,
        top_p: 0.5,
        presence_penalty: 1,
        frequency_penalty: 1,
      };
    };

    const gptTextToArray = (value) => {
      const text = value.replace(/\r?\n|\r/g, "");

      const list = text.split(/\d+\. /);

      const final = list.filter((sen) => sen !== "");

      const arrNoDots = final.map((str) => str.replace(/\./g, ""));

      const arrWithDots = arrNoDots.map((str) =>
        str?.trim()?.endsWith(".") ? str : str?.trim() + "."
      );

      return arrWithDots;
    };

    const requestBody = generateTextCompletion(prompt);
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(requestBody),
      });
      const responseData = await response.json();
      const res = responseData?.choices[0]?.text;
      // const suggestionsList = gptTextToArray(res);
      setResponseArray(gptTextToArray(res));
      setIsForm(false);
    } catch (error) {
      // console.log(error);
      setResponseArray([]);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let uniqueId = null;

    uniqueId = uuidv4();
    try {
      const response = await fetch(
        "https://backend.careerai.io/api/v1/applicants/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: uniqueId,
            templateName: "santiago",
            color:
              "linear-gradient(180deg, #FCE6E6 0%, rgba(231, 247, 254, 0.60) 50.05%, #E6F7FF 100%)",
            fontFamily: "Manrope",
            isAiCreated: "1",
          }),
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        setLoading(false);
        router.push(
          `https://app.careerai.io/editor/${responseData?.data?.id}?aiwriter=true&name=${name}&role=${role}&experience=${experience}&uniqueId=${uniqueId}`
        );
      } else {
        console.error("API request failed");
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error("An error occurred:", error);
    }

    // }

    // setLoading(true);
    // callChat();
  };

  useEffect(() => {
    setLoading(false);
  }, [responseArray]);

  return (
    <div className="homee">
      <div className="hero-section-new-new">
        <div className="hsnn">
          {" "}
          <div className="hsnn-right">
            <div
              className="hsnnr-top"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease"
            >
              AI-Powered Resume Builder
            </div>
            <h1
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
              data-aos-easing="ease"
            >
              Create a Professional <span>Resume</span> in minutes
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1000"
              data-aos-easing="ease"
            >
              Take your resume to the next level with our AI-powered tool that
              creates customizable and impressive resumes in just minutes. Start
              building your dream career today!
            </p>
            <div
              className="hsnn-btns"
              data-aos="fade-up"
              data-aos-delay="800"
              data-aos-duration="1000"
              data-aos-easing="ease"
            >
              <a href="https://app.careerai.io/free-trial">
                <PrimaryBtn text="build my resume" />
              </a>
              <a href="https://app.careerai.io/signup">
                <SecondaryBtn text="Sign Up for free" />
              </a>
            </div>
          </div>
          <div
            className="hsnn-left"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease"
          >
            {/* <Image src={newHeroImage} alt="behind image" /> */}
            <Image
              // src="/images/new1.png"
              src={newOne}
              alt="hero"
              loading="eager"
              width={597.8}
              height={536}
            />
          </div>
        </div>
      </div>
      <NewTestimonial />
      <div className="ai-content">
        <div className="aic-left">
          <Image
            src={openainew}
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease"
          />
          <h2
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease"
          >
            Powered by OpenAI's GPT NLP model.
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease"
          >
            Leverage AI to help you secure your ideal role. Our AI-powered tool
            can craft tailored resumes and cover letters that highlight your
            professional achievements using industry-standard keywords and
            phrases. Focus on what is truly important: your career goals.
          </p>
        </div>
        <div className="aic-right">
          <div
            className="aicr-item"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease"
          >
            <div className="aicri-left">
              <Image src={ai1} />
            </div>
            <div className="aicri-right">
              <h3>AI-Powered Resume & Cover Letter Creation</h3>
              <p>
                Create an outstanding resume and cover letter with AI-powered
                language assistance.
              </p>
            </div>
          </div>
          <div
            className="aicr-item"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease"
          >
            <div className="aicri-left">
              {" "}
              <Image src={ai2} />
            </div>
            <div className="aicri-right">
              <h3>Personalized Recommendations</h3>
              <p>
                Provide personalized recommendations based on your past
                experience and career goals.
              </p>
            </div>
          </div>
          <div
            className="aicr-item"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease"
          >
            <div className="aicri-left">
              {" "}
              <Image src={ai3} />
            </div>
            <div className="aicri-right">
              <h3>Customizable Templates</h3>
              <p>
                Deliver a simple, intuitive, and user-friendly interface that
                makes it easy to navigate.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="behind-image">
        <Image src={behindImage} alt="behind image" />
      </div> */}
      {/* <OpenAiBox /> */}
      {/* <div id="originalResume"></div> */}
      {originalResume && (
        <div className="live__resume-section my-width">
          <div className="lr-left">
            <div className="lr-left__container">
              {isForm ? (
                <>
                  <div
                    className="new-form"
                    data-aos="fade-right"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                  >
                    {/* <Image src={man} /> */}
                    <Image
                      src="/images/mandesign.png"
                      width={750}
                      height={685.4}
                    />
                    <div className="new-form-form">
                      <div className="nf-top">AI Resume Writer</div>
                      <p>Create your resume in just one minute.</p>
                      <form onSubmit={handleSubmit}>
                        <TextInput
                          placeholder="Your name"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                          name="name"
                          required
                        />
                        <TextInput
                          placeholder="Your current role"
                          value={role}
                          onChange={(e) => {
                            setRole(e.target.value);
                          }}
                          name="role"
                          required
                        />
                        <TextInput
                          placeholder="Your experience (in years)"
                          value={experience}
                          onChange={(e) => {
                            setExperience(e.target.value);
                          }}
                          required
                        />
                        {/* {loading ? (
                        <div className="lds-ring">
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      ) : ( */}
                        <button
                          type="submit"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: 8,
                          }}
                        >
                          {loading ? (
                            <>
                              <div className="spinner" /> ASKING AI TO WRITE
                            </>
                          ) : (
                            <>GIVE IT A TRY</>
                          )}
                        </button>
                        {/* // )} */}
                      </form>
                    </div>
                  </div>
                  {/* <div
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    className="lr-title"
                  >
                    <Image src={robot} alt="robot" />
                    <p>
                      Create your first draft by quickly entering your
                      information here!
                    </p>
                  </div>
                  <form
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    className="lr-input-wrapper"
                    onSubmit={handleSubmit}
                  >
                    <TextInput
                      placeholder="Your current role"
                      value={role}
                      onChange={(e) => {
                        setRole(e.target.value);
                      }}
                      name="role"
                      required
                    />

                    <TextInput
                      placeholder="Your experience (in years)"
                      value={experience}
                      onChange={(e) => {
                        setExperience(e.target.value);
                      }}
                    />
                    <div className="lr-button-wrapper">
                      {loading ? (
                        <>
                          <div className="lds-ring">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                          </div>
                        </>
                      ) : (
                        <button type="submit" className="give-it-a-try">
                          Give it a try
                          <div class="arrow">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </button>
                      )}
                    </div>
                  </form> */}
                </>
              ) : (
                <>
                  <div className="lr-title">
                    <Image src={robot} alt="robot" />
                    <motion.p>Professional summary for “{role}”</motion.p>
                  </div>
                  <div className="responses">
                    {responseArray.map((e, i) => {
                      return (
                        <motion.div
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.4 }}
                          variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: -50 },
                          }}
                          className={`responses-box ${
                            activeResponse === i && "responses-box--active"
                          }`}
                          onClick={() => {
                            setActiveResponse(i);
                          }}
                        >
                          {e}
                        </motion.div>
                      );
                    })}

                    <div className="try-again">
                      <button
                        type="button"
                        onClick={() => {
                          setRole("");
                          setName("");
                          setExperience("");
                          setResponseArray([]);
                          setIsForm(true);
                          setLoading(false);
                        }}
                        className="give-it-a-try"
                      >
                        Try again{" "}
                        <div class="arrow">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div
            className="lr-right"
            data-aos="fade-left"
            data-aos-delay="250"
            data-aos-duration="1000"
            data-aos-easing="ease"
          >
            {/* <motion.div className="output">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: -50 },
                }}
              >
                {responseArray.length > 0
                  ? responseArray[activeResponse]
                  : "Your Professional Summary Goes Here"}
              </motion.div>
            </motion.div> */}
            {/* <motion.div className="output-role">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: -50 },
                }}
              >
                {role.trim().length ? role.toUpperCase() : "YOUR ROLE HERE"}
              </motion.div>
            </motion.div> */}
            {/* <motion.div className="output-name">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: -50 },
                }}
              >
                {name.trim().length ? name.toUpperCase() : "YOUR NAME HERE"}
              </motion.div>
            </motion.div> */}
            {/* <img src={"/images/d2.png"} /> */}
            {/* <Image src={withNoNameDesc} /> */}
            <Image src={allDetails} alt="alldetails" />
          </div>
        </div>
      )}
      {/* {!originalResume && <HomeScroll setOriginalResume={setOriginalResume} />} */}
      <div
        ref={scrollHereRef}
        style={
          !originalResume ? { marginTop: "49rem", marginBottom: "10vh" } : null
        }
      >
        <ChooseYourFavouriteTemplate />
      </div>

      <SectionScroll />

      <div
        className="ask-me"
        // style={!originalResume ? { marginTop: "49rem" } : null}
      >
        <div className="ask-me__row">
          <motion.div
            className="right"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease"
          >
            <Image
              src="/images/ama_new.png"
              alt="ama"
              className="special_img"
              width={531}
              height={474}
            />
          </motion.div>
          <div className="ask-me__content ml-text-adjust">
            <motion.h2
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease"
            >
              Ask me anything
            </motion.h2>
            <motion.p
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease"
            >
              We offer personalized assistance in answering any type of query
              while you create your resume and cover letter. Our goal is to help
              you showcase your skills and experiences in an impressive
              application. Ask Me Anything is here to support you every step of
              the way.
            </motion.p>
            <div
              className="ask-me__buttons"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
              data-aos-easing="ease"
            >
              <a href="https://app.careerai.io/free-trial">
                <PrimaryBtn text="Build my resume" />
              </a>
            </div>
          </div>
        </div>
        <div className="ask-me__row ask-me__row--cover" id="askmerow">
          <div className="ask-me__content">
            <motion.h2
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease"
            >
              Cover letter
            </motion.h2>
            <motion.p
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease"
              className="fw-300"
            >
              Our advanced cover letter builder utilizes AI technology to
              carefully analyze your resume and generate a perfectly tailored
              cover letter that seamlessly aligns with its content and format,
              delivering a captivating and persuasive presentation.
            </motion.p>
            <motion.div
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease"
              className="ask-me__content-lists fw-300"
            >
              {coverLetterP.map((e) => {
                return (
                  <div
                    className="mt-3"
                    data-aos="fade-right"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                  >
                    <Image src={robo} alt="robot" />
                    <div>{e}</div>
                  </div>
                );
              })}
            </motion.div>
            <div
              className="ask-me__buttons"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
              data-aos-easing="ease"
            >
              <a
                // href="https://app.careerai.io/select-cover-template"
                href="https://app.careerai.io/free-trial-cover"
              >
                <PrimaryBtn text="Build my cover letter" />
              </a>
            </div>
          </div>
          <motion.div
            className="right"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease"
          >
            {/* <img src={'/images/cvnewimage.svg'} /> */}
            <Image
              src={"/images/ama_bottom.png"}
              alt="ama bottom"
              width={500}
              height={448.2}
              className="ama_bottom"
            />
          </motion.div>
        </div>
      </div>

      <Benefits />
      <div className="below__benefits my-width">
        <h2
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease"
        >
          Stay on top of the hiring game with CareerAI
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease"
        >
          A variety of effective features to enhance and streamline the process,
          allowing you to land your dream job.
        </p>
        <div className="bb__row">
          <motion.div className="left">
            {data.map((e) => {
              return (
                <div
                  className="left-item"
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                  data-aos-easing="ease"
                >
                  <Image src={robo} alt="robot" />
                  <div>{e}</div>
                </div>
              );
            })}
            <a
              href="https://app.careerai.io/free-trial"
              className="left-item"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
              data-aos-easing="ease"
            >
              <PrimaryBtn
                text="build my resume"
                onClick={() =>
                  window.open("https://app.careerai.io/free-trial", "_self")
                }
              />
            </a>
          </motion.div>
          <motion.div
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease"
            className="right"
          >
            <Image src={resumeImg} alt="resume image" />
          </motion.div>
        </div>
      </div>
      {/* <Testimonial /> */}
      <FAQComp />
      <WhoIsCareerAIFor />
    </div>
  );
}

export default HomePageComp;
