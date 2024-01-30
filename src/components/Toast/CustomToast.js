import React from "react";
import { toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import WarnIcon from "../../../public/images/warn.svg";
import InfoIcon from "../../../public/images/info.svg";
import DangerIcon from "../../../public/images/danger.svg";
import SuccessIcon from "../../../public/images/success.svg";

export const successToastMessage = (message) => {
  return toast.success(message, {
    // icon: <img src={SuccessIcon} alt="dashboard" />,
    className: "toast-container toast-success",
    transition: Flip,
    autoClose: 2000,
  });
};

export const notificationToast = (message) => {
  const customId = "custom-id-yes";
  toast.success(message, {
    toastId: customId,
    // icon: false,
    transition: Flip,
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    progress: undefined,
    theme: "light",
  });
};

export const errorToastMessage = (message) => {
  return toast.error(message, {
    // icon: <img src={DangerIcon} alt="error" />,
    className: "toast-container toast-danger",
    transition: Flip,
    autoClose: 2000,
  });
};

export const infoToastMessage = (message) => {
  return toast.error(message, {
    // icon: <img src={InfoIcon} alt="info" />,
    className: "toast-container toast-info",
    transition: Flip,
    autoClose: 2000,
  });
};

export const warnToastMessage = (message) => {
  return toast.warn(message, {
    // icon: <img src={WarnIcon} alt="warn" />,
    className: "toast-container toast-warn",
    transition: Flip,
    autoClose: 2000,
  });
};
