import React from "react";

function Input(props) {
  return <div></div>;
}

export default Input;

export const TextInput = (props) => {
  const { label, placeholder, name, type, ...rest } = props;
  return (
    <label htmlFor={name}>
      {label && <div>{label}</div>}
      <input type={type} name={name} placeholder={placeholder} {...rest} />
    </label>
  );
};

export const TextAreaInput = (props) => {
  const { label, placeholder, name, type, ...rest } = props;
  return (
    <label htmlFor={name}>
      {label && <div>{label}</div>}
      <textarea name={name} placeholder={placeholder} {...rest} />
    </label>
  );
};
