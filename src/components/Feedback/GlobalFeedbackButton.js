/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import ShareFeedbackModal from "./ShareFeedbackModal";
// import ShareFeedbackModal from "../../../Resume/ResumeEditor/common/ShareFeedbackModal";

const GlobalFeedbackButton = () => {
  const [feedbackActive, setFeedbackActive] = useState(false);

  const handleFeedBackClick = () => {
    setFeedbackActive(!feedbackActive);
  };
  return (
    <div>
      {/* <button
        className="btn book-now desktop open-datepicker-popup"
        title="Book Now"
        onClick={handleFeedBackClick}
      >
        Feedback
      </button>
      <ShareFeedbackModal
        active={feedbackActive}
        setActive={setFeedbackActive}
      /> */}
    </div>
  );
};

export default GlobalFeedbackButton;
