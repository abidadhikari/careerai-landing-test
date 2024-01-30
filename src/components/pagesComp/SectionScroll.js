'use client';
import React, { useRef, useEffect, useState } from 'react';
import { PrimaryBtn } from '../shared/Buttons';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import scroll1 from '@/assets/images/scroll1.png';
import scroll2 from '@/assets/images/scroll2.png';
import scroll3 from '@/assets/images/scroll3.png';

const ActiveCircle = (props) => {
  const { active } = props;
  return (
    <>
      <div
        className={`ac-circle ${active ? 'active-circle' : 'inactive-circle'} `}
      >
        <div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};
const PositionBar = (props) => {
  const { activeNode } = props;
  return (
    <div className="position-bar">
      <ActiveCircle active={activeNode === 0} />
      <ActiveCircle active={activeNode === 1} />
      <ActiveCircle active={activeNode === 2} />
    </div>
  );
};

function SectionScroll(props) {
  const scrollableDivRef = useRef(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [currState, setCurrState] = useState(0);

  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    window.addEventListener('scroll', (e) => {
      const height =
        window.pageYOffset ||
        (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;

      // console.log("This much has been scolled", height);
      const scrollLabelElement = scrollableDivRef.current;
      if (scrollLabelElement) {
        const miniPos = scrollLabelElement.getBoundingClientRect().top;
        const miniHeight = scrollLabelElement.offsetHeight;
        // console.log(miniHeight);
        if (miniPos < 0 && miniPos < miniHeight) {
          // console.log(
          //   "Now Active",
          //   Math.floor(Math.abs((miniPos / miniHeight) * 100))
          // );
          setScrollPercentage(
            Math.floor(Math.abs((miniPos / miniHeight) * 100))
          );
        }
      }
    });
  }

  useEffect(() => {
    if (scrollPercentage <= 20) {
      setCurrState(0);
    } else if (scrollPercentage > 20 && scrollPercentage <= 50) {
      setCurrState(1);
    } else if (scrollPercentage > 50) setCurrState(2);
  }, [scrollPercentage]);

  return (
    <div className="sectionscroll" ref={scrollableDivRef}>
      <div className="ss">
        <div className="ss-top">
          <motion.h2 className="slidefrombottom">
            Build your resume fast and easy{' '}
          </motion.h2>
          <p className="slidefrombottom">
            Make a resume with a proven AI resume builder, and then quickly
            generate a matching cover letter and apply for your next job.
          </p>
          <a
            href="https://app.careerai.io/free-trial"
            className="slidefrombottom"
          >
            <PrimaryBtn text="Build my resume" />
          </a>
        </div>
        <div className="ss-bottom">
          <div className="ssb">
            <div className="ssb-left">
              {/* <Image
                src={
                  currState === 0
                    ? scroll1
                    : currState === 1
                    ? scroll2
                    : scroll3
                }
                className="slidefromright"
              /> */}
              {currState === 0 && (
                <Image src={scroll1} className="slidefromleft" />
              )}
              {currState === 1 && (
                <Image src={scroll2} className="slidefromleft" />
              )}
              {currState === 2 && (
                <Image src={scroll3} className="slidefromleft" />
              )}
            </div>

            <div className="ssb-middle">
              <PositionBar activeNode={currState} />
            </div>
            <div className="ssb-right">
              {currState === 0 && (
                <div className="slidefromright">
                  <div className="ssbr-title">1. Pick a template</div>
                  <p>
                    Browse through a diverse selection of professionally crafted
                    resume templates, designed to suit a wide range of career
                    paths and preferences, allowing you to choose a style that
                    best represents your professional identity.
                    <br /> <br />
                    Select the template that resonates with your career goals,
                    ensuring that your resume not only captures your
                    qualifications but also showcases your unique personality
                    and strengths.
                  </p>
                </div>
              )}
              {currState === 1 && (
                <div className="slidefromright">
                  <div className="ssbr-title">
                    2. Use AI to write your resume
                  </div>
                  <p>
                    Harness the power of cutting-edge AI technology to
                    effortlessly transform your professional history into a
                    compelling narrative by receiving tailored recommendations,
                    intelligent keyword suggestions, and expert guidance at
                    every stage of your resume creation.
                    <br /> <br />
                    Experience a seamless and efficient resume writing process
                    with our AI assistant, making writer's block a thing of the
                    past as you craft a captivating document that highlights
                    your skills and achievements in the best possible way.
                  </p>
                </div>
              )}
              {currState === 2 && (
                <div className="slidefromright">
                  <div className="ssbr-title">3. Download your resume</div>
                  <p>
                    Your professionally enhanced resume is just a click away –
                    download it in your preferred format, whether as a sleek
                    PDF, an editable Word document, or even an easily shareable
                    online link, and take the next step toward unlocking your
                    career potential.
                    <br /> <br />
                    With your new resume in hand, you're well-equipped to make a
                    lasting impression on potential employers and embark on your
                    journey toward exciting career opportunities, thanks to a
                    document that reflects your professional identity and
                    skills flawlessly.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionScroll;
