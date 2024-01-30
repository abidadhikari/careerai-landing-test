import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import robot from "../../assets/images/bluerobo.svg";
import { TextInput } from "../shared/Input";
import FeatherIcon from "feather-icons-react";

function HomeScroll({ setOriginalResume }) {
  const responseArray = [
    "Experienced Software Engineer with 2 years of experience in developing and maintaining software applications Proficient in C++, Java, Python and SQL Passionate about finding innovative solutions to complex problems.",
    "Highly motivated Software Engineer with 2 years of experience building efficient software applications using cutting-edge technologies such as ReactJS and NodeJS Adept at troubleshooting technical issues quickly and efficiently.",
    "Proven track record of success in designing, coding, testing and debugging software systems for multiple clients over the past two years using various programming languages including C#, JavaScript & HTML5/CSS3 Excellent problem solving skills combined with a strong attention to detail.",
  ];
  const [aniIndex, setAniIndex] = useState(0);

  useEffect(() => {
    let roleValue = document.getElementsByClassName("role")[0];
    let outputData = document.getElementById("outputData");
    let experienceValue = document.getElementById("experience");

    const sectionBg = document.getElementsByClassName("section-test")[0];
    const helperDiv = document.getElementsByClassName("helperdiv")[0];
    const section = document.getElementsByClassName("sticky-div")[0];
    // const contentChange = document.getElementById("content-change");
    const contentPChange = document.getElementById("content-p-change");
    const imageChange = document.getElementById("image");
    const summaries = document.getElementById("summaries");
    const image = document.querySelectorAll(".image");

    const mLine1 = document.getElementsByClassName("m-line-1")[0];
    const mLine2 = document.getElementsByClassName("m-line-2")[0];

    const position =
      sectionBg.getBoundingClientRect().top -
      helperDiv.getBoundingClientRect().top;
    // console.log("MY position :::", position);
    const paint = (color) => {
      section.style.backgroundColor = color;
    };

    const title = [
      "Intelligent Resumes To Get You Hired.",
      " Great cover letters to match your Resumes.",
    ];

    const desc = [
      "Generate a well-structured resume in seconds! Simple and user-friendly, our resume builder will help you create a great CV where you can add entire sections of professional summary, work experiences and education. You will save valuable time and effort with various suggested content to choose from!",
      "Our cover letter builder will generate an intuitive and engaging cover letter to match the contents of your CV, elevating your entire application. Job-specific with a personal touch, highlight your unique skills with the suggested content!",
    ];

    const generateTypingEffect = (percentage) => {
      const value = "Software Engineer";
      if (percentage >= 1 && percentage <= 2) {
        return "S";
      }
      if (percentage >= 2 && percentage <= 3) {
        return "So";
      }
      if (percentage >= 3 && percentage <= 4) {
        return "Sof";
      }
      if (percentage >= 4 && percentage <= 5) {
        return "Soft";
      }
      if (percentage >= 5 && percentage <= 6) {
        return "Softw";
      }
      if (percentage >= 6 && percentage <= 7) {
        return "Softwa";
      }
      if (percentage >= 7 && percentage <= 8) {
        return "Softwar";
      }
      if (percentage >= 8 && percentage <= 9) {
        return "Software";
      }
      if (percentage >= 9 && percentage <= 10) {
        return "Software ";
      }
      if (percentage >= 10 && percentage <= 11) {
        return "Software E";
      }
      if (percentage >= 11 && percentage <= 12) {
        return "Software En";
      }
      if (percentage >= 12 && percentage <= 13) {
        return "Software Eng";
      }
      if (percentage >= 13 && percentage <= 14) {
        return "Software Engi";
      }
      if (percentage >= 14 && percentage <= 15) {
        return "Software Engin";
      }
      if (percentage >= 15 && percentage <= 16) {
        return "Software Engine";
      }
      if (percentage >= 16 && percentage <= 17) {
        return "Software Enginee";
      }
      if (percentage >= 17 && percentage <= 18) {
        return "Software Engineer";
      }
      if (percentage >= 18) {
        return "Software Engineer";
      }
      // Add more conditions to cover the remaining characters if needed
    };

    window.addEventListener("scroll", () => {
      if (window.scrollY > position) {
        const percentage = 100 - (position / window.scrollY) * 100;
        roleValue.value = generateTypingEffect(percentage, "Software Engineer");
        if (percentage >= 23 && percentage <= 24) {
          experienceValue.value = "4";
        }
        if (percentage >= 24 && percentage <= 25) {
          experienceValue.value = "4 y";
        }
        if (percentage >= 25 && percentage <= 26) {
          experienceValue.value = "4 ye";
        }
        if (percentage >= 26 && percentage <= 27) {
          experienceValue.value = "4 yea";
        }
        if (percentage >= 27 && percentage <= 28) {
          experienceValue.value = "4 year";
        }
        if (percentage >= 28) {
          experienceValue.value = "4 years";
        }

        if (percentage < 23) {
          experienceValue.value = "";
        }
        if (percentage >= 35) {
          summaries.style.display = "";
          outputData.style.display = "";
          contentPChange.style.display = "none";
        } else {
          summaries.style.display = "none";
          outputData.style.display = "none";
          contentPChange.style.display = "";
        }

        if (percentage >= 45) {
          outputData.style.display = "";
        } else {
          outputData.style.display = "none";
        }

        if (percentage <= 2) {
          roleValue.value = "";
          experienceValue.value = "";
        } else if (percentage > 50 && percentage <= 75) {
        } else {
        }

        // if (elementIsVisibleInViewport(el, true);) {
        //   setOriginalResume(true);
        // }
      }
    });
  }, []);

  return (
    <>
      <div className="section-test">
        <div className="sticky-div">
          <div className="dynamic-content-grid live__resume-section">
            <div className="lr-left right">
              <div className="lr-left__container">
                <div id="content-p-change">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    href="#"
                    transition={{ duration: 0.5, delay: 0.4 }}
                    variants={{
                      visible: { opacity: 1, y: 0 },
                      hidden: { opacity: 0, y: 50 },
                    }}
                    className="lr-title"
                  >
                    <Image src={robot} />
                    <motion.p>
                      Create your first draft by quickly entering your
                      information here!
                    </motion.p>
                  </motion.div>
                  <form href="#" className="lr-input-wrapper">
                    <TextInput
                      placeholder="Your current role"
                      name="role"
                      className="role"
                      disabled
                      required
                    />

                    <TextInput
                      name="experience"
                      id="experience"
                      disabled
                      placeholder="Your experience (in years)"
                    />
                    <div className="lr-button-wrapper">
                      <button type="submit" className="give-it-a-try">
                        Give it a try
                        {/* <FeatherIcon icon="chevrons-right" /> */}
                        <div class="arrow">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </button>
                    </div>
                  </form>
                </div>
                <div id="summaries" style={{ display: "none" }}>
                  <div className="responses">
                    {responseArray.map((e, i) => {
                      return (
                        <motion.div
                          initial="hidden"
                          whileInView="visible"
                          transition={{ duration: 0.3, delay: 0.2 }}
                          variants={{
                            visible: { opacity: 1, y: 0 },
                            hidden: { opacity: 0, y: 100 },
                          }}
                          className={`responses-box ${
                            i == aniIndex ? "responses-box--active" : ""
                          }`}
                          onClick={() => setAniIndex(i)}
                        >
                          {e}
                        </motion.div>
                      );
                    })}
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      transition={{ duration: 0.3, delay: 0.2 }}
                      variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: -50 },
                      }}
                      className="try-again"
                    >
                      <button
                        type="button"
                        onClick={() => {
                          setOriginalResume(true);
                          window.location.href = "#originalResume";
                        }}
                      >
                        Try again <FeatherIcon icon="chevrons-right" />
                      </button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="lr-right"
              data-aos="fade-left"
              data-aos-delay="250"
              data-aos-duration="1000"
              data-aos-easing="ease"
            >
              <motion.div
                className="output"
                id="outputData"
                style={{ display: "none" }}
              >
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: 0.4 }}
                  variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: { opacity: 0, x: -50 },
                  }}
                >
                  {/* {
                    "Experienced Software Engineer with 2 years of experience in developing and maintaining software applications Proficient in C++, Java, Python and SQL Passionate about finding innovative solutions to complex problems"
                  } */}
                  {responseArray[aniIndex]}
                </motion.div>
              </motion.div>
              <img src="/images/d2.png" alt="" className="image" />
            </div>
            {/* <div className="middle" style={{ display: "none" }}>
              <div className="m-circle m-circle-1">
                <div className="m1"></div>
                <div className="mbg"></div>
              </div>
              <div className="m-line m-line-1"></div>
              <div className="m-circle m-circle-2">
                <div className="m1"></div>
                <div className="mbg"></div>
              </div>
              <div className="m-line m-line-2"></div>
              <div className="m-circle m-circle-3">
                <div className="m1"></div>
                <div className="mbg"></div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeScroll;
