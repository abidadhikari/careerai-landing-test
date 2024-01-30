import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { CreatableSelect } from "@atlaskit/select";
import { Input, Rate } from "antd";
import axiosInstance from "@/helper/axoisInstance";
import { errorToastMessage, successToastMessage } from "../Toast/CustomToast";
import { ToastContainer } from "react-toastify";

function ShareFeedbackModal(props) {
  const { active, setActive } = props;

  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState({
    label: "Please select one of the option",
    value: "Please select one of the option",
  });
  const [secondSelectedAnswer, setSecondSelectedAnswer] = useState({
    label: "Choose one of our products",
    value: "Choose one of our products",
  });
  const [formError, setFormError] = useState("");

  //   const dispatch = useAppDispatch();
  //   const navigate = useNavigate();

  const handleFirstInputChange = (value) => {
    setSelectedAnswer(value);
  };
  const handleSecondInputChange = (value) => {
    setSecondSelectedAnswer(value);
  };
  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleRateChange = (value) => {
    setFormError("");
    setRating(value);
  };

  const handleAddFeedbackClick = async () => {
    const data = {
      text,
      rating,
      option1: selectedAnswer?.value,
      option2: secondSelectedAnswer?.value,
      email,
      fullName,
    };

    console.log({ data });
    // if (!authState?.authenticated) {
    // data.email = email;
    // data.fullName = fullName;
    // }

    try {
      const response = await fetch(
        "https://backend.careerai.io/api/v1/feedbacks/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        setLoading(false);
        successToastMessage("Feedback added successfully");
        setActive(false);
      } else {
        errorToastMessage(error?.response?.data?.message);
        setLoading(false);
        setActive(false);
        console.log(error);
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error("An error occurred:", error);
    }
    // try {
    //   const res = await axiosInstance.post(`${BASE_URL}/feedbacks`, data);
    //   setLoading(false);
    //   successToastMessage("Feedback added successfully");
    //   setActive(false);
    // } catch (error) {
    //   errorToastMessage(error?.response?.data?.message);
    //   setLoading(false);
    //   setActive(false);
    //   console.log(error);
    // }
  };
  const inputOptions = [
    { label: "I have a suggestion", value: "I have a suggestion" },
    { label: "I have a compliment", value: "I have a compliment" },
  ];
  const secondInputOptions = [
    {
      label: "CV/Resume Builder",
      value: "CV/Resume Builder",
    },
    { label: "Cover Letter Builder", value: "Cover Letter Builder" },
  ];
  return (
    <>
      <ToastContainer />
      <div
        className={active ? "backdrop_feedback" : "backdrop_feedback dnone"}
      />
      {/* <div> */}
      <form
        className={
          active ? "sharefeedback__modal" : "sharefeedback__modal dnone"
        }
      >
        <div className="sf_top">
          <h1>Please fill the form to access the download.</h1>
          <button
            type="button"
            onClick={() => {
              setActive(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
            >
              <path
                d="M1 1L9 9M9 1L1 9"
                stroke="#00D8FF"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="sf_middle rating-container">
          <h2>How do you like using CareerAI today? *</h2>
          {/* <div className="text">Leave us rating</div> */}
          <div className="rating-wrapper">
            <Rate
              // allowHalf
              // defaultValue={0}
              style={{ fontSize: "2.5rem", color: "#FFB200" }}
              value={rating}
              onChange={handleRateChange}
              // value={rating}
              // onChange={handleRateChange}
            />
          </div>
          {
            //   !authState?.authenticated &&
            <>
              <div className="sf_middle">
                <h2>Email *</h2>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="feedback-input"
                />
              </div>
              <div className="sf_middle">
                <h2>Full Name *</h2>
                <Input
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your Full Name"
                  className="feedback-input"
                />
              </div>
            </>
          }

          <h2>What is your feedback about?</h2>
          {/* <SelectField
            options={["I have a suggestion", "I have a compliment"]}
          /> */}
          {/* <CreatableSelect
            classNamePrefix={[
              `${
                process.env.NODE_ENV === "production"
                  ? "select-field-prod"
                  : "select-field-dev"
              }`,
            ].join(" ")}
            isClearable={false}
            onChange={handleFirstInputChange}
            // register={formRegister}
            // onCreateOption={handleCreate}
            options={inputOptions}
            value={selectedAnswer}
            // {...field}
          /> */}

          {/* <select name="feedbackSuggestion">
            <option disabled>I have a suggestion</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select> */}
          <h2>Which product would you like to give feedback on?</h2>
          {/* <CreatableSelect
            classNamePrefix={[
              `${
                process.env.NODE_ENV === "production"
                  ? "select-field-prod"
                  : "select-field-dev"
              }`,
            ].join(" ")}
            isClearable={false}
            onChange={handleSecondInputChange}
            options={secondInputOptions}
            value={secondSelectedAnswer}
          /> */}
          {/* <select name="feedbackProduct">
            <option>Choose one of our products</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select> */}
          {selectedAnswer?.value === inputOptions[1]?.value ? (
            <h2>What part of CareerAI do you like most?*</h2>
          ) : (
            <h2>How do you think CareerAI could be improved?*</h2>
          )}
          <textarea
            name="feedback"
            className="feedback"
            placeholder="Share your thoughts..."
            onChange={handleInputChange}
            value={text}
            style={{ width: "100%" }}
          />
          {formError?.length > 0 && (
            <div
              style={{
                color: "#fa9e14",
                fontSize: 12,
                marginTop: 10,
                position: "absolute",
                left: "2rem",
              }}
            >
              {formError}
            </div>
          )}
          <div className="btn-btm">
            <button
              className="feedback-submit"
              type="button"
              onClick={() => {
                if (rating < 1 || text?.length < 10) {
                  setFormError("Please fill the required fields");
                  setTimeout(() => {
                    setFormError("");
                  }, 5000);
                  return;
                }

                // if (!authState?.authenticated && fullName?.length < 3) {
                if (fullName?.length < 3) {
                  setFormError("Please fill the required fields");
                  setTimeout(() => {
                    setFormError("");
                  }, 5000);
                  return;
                }
                // if (!authState?.authenticated && email?.length < 5) {
                if (email?.length < 5) {
                  setFormError("Please fill the required fields");
                  setTimeout(() => {
                    setFormError("");
                  }, 5000);
                  return;
                }
                // setActive(false);
                setLoading(true);
                handleAddFeedbackClick();
                // clearance
                setText("");
                setRating(0);
                setSelectedAnswer({
                  label: "Please select one of the option",
                  value: "Please select one of the option",
                });
                setSecondSelectedAnswer({
                  label: "Choose one of our products",
                  value: "Choose one of our products",
                });
              }}
            >
              Send
            </button>
          </div>
        </div>
      </form>
      {/* </div> */}
    </>
  );
}

export default ShareFeedbackModal;
