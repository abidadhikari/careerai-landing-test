import React from "react";

function Buttons(props) {
  return <div></div>;
}

export default Buttons;

export const PrimaryBtn = (props) => {
  const { text, loading = false, ...rest } = props;
  return (
    <button className="btn primary-btn" {...rest}>
      {/* {text} */}
      {loading ? "Sending..." : text}
    </button>
  );
};

export const SecondaryBtn = (props) => {
  const { text } = props;
  return <button className="btn secondary-btn">{text}</button>;
};
