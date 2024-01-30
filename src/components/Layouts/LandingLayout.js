import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import GlobalFeedbackButton from "../Feedback/GlobalFeedbackButton";

function LandingLayout(props) {
  const { children } = props;

  useEffect(() => {
    AOS.init({ duration: 1000, delay: 200 });
  }, []);
  return (
    <>
      <div className="page-wrapper">
        {/* <GlobalFeedbackButton /> */}
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default LandingLayout;
