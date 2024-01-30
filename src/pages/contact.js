import LandingLayout from "@/components/Layouts/LandingLayout";
import { PrimaryBtn } from "@/components/shared/Buttons";
import { TextAreaInput, TextInput } from "@/components/shared/Input";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AnimatePresence, motion } from "framer-motion";

import cntImage from "../assets/images/cnt.svg";
import Image from "next/image";
import dotted from "@/assets/images/blog/dotted.svg";
import Head from "next/head";
import TwoOverlappingLayout from "@/components/Layouts/TwoOverlappingLayout";

function Contact(props) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    howCanIHelpYou: "",
  });

  // axios
  // .post("https://backend.careerai.io/api/v1/dashboard/sales", {
  //   name: fd.get("name"),
  //   email: fd.get("email"),
  //   phone: fd.get("phone"),
  //   companyName: fd.get("companyName"),
  //   howCanIHelpYou: fd.get("howCanIHelpYou"),
  // })
  // .then(function (response) {
  //   btn.innerText = "Send";
  //   btn.disabled = false;
  //   Swal.fire(
  //     "Email has been sent to us",
  //     "Thankyou for your patience. We will r

  const sendMail = async () => {
    const requestBody = data;
    try {
      const response = await fetch(
        "https://backend.careerai.io/api/v1/dashboard/sales",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify(requestBody),
        }
      );
      const responseData = await response.json();
      if (responseData.status === "success") {
        toast.success(responseData.message);
        setData({
          name: "",
          email: "",
          phone: "",
          companyName: "",
          howCanIHelpYou: "",
        });
      } else {
        toast.error("Something went wrong");
      }
      // console.log(responseData);
    } catch (error) {
      toast.error("Something went wrong");
    }
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    sendMail();
  };

  const handleChange = (e) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  // console.log(data);
  return (
    <LandingLayout>
      <Head>
        <title>Contact - CareerAI</title>
        <meta name="title" content="Contact - CareerAI" />
        <meta
          name="description"
          content="Build professional resumes quickly and easily with our online resume builder. Choose from customizable templates, enter your details, and generate a polished CV. Download in PDF format. Get started today!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.careerai.io/contact" />
        <meta property="og:title" content="Contact - CareerAI" />
        <meta
          property="og:description"
          content="Build professional resumes quickly and easily with our online resume builder. Choose from customizable templates, enter your details, and generate a polished CV. Download in PDF format. Get started today!"
        />
        <meta
          property="og:image"
          content="https://www.careerai.io/images/seo.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.careerai.io/contact"
        />
        <meta property="twitter:title" content="Contact - CareerAI" />
        <meta
          property="twitter:description"
          content="Build professional resumes quickly and easily with our online resume builder. Choose from customizable templates, enter your details, and generate a polished CV. Download in PDF format. Get started today!"
        />
        <meta
          property="twitter:image"
          content="https://www.careerai.io/images/seo.png"
        />
      </Head>
      <Toaster position="top-right" />

      <TwoOverlappingLayout title="Contact" title2="us">
        <div className="contact__page">
          {/* <motion.h1>Contact us</motion.h1> */}
          <div className="contact__wrapper">
            {/* <div className="dotted-bg">
              <Image src={dotted} alt="dotted" />
            </div> */}
            <Image src={cntImage} className="cnt" />
            <div className="left">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                variants={{
                  visible: { y: 0, opacity: 1 },
                  hidden: { y: 50, opacity: 0 },
                }}
                className="cw-title"
              >
                Contact our sales team
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                variants={{
                  visible: { y: 0, opacity: 1 },
                  hidden: { y: 50, opacity: 0 },
                }}
                className="cw-desc"
              >
                Do you have questions, comments or concerns to share with us?
                Our CareerAI team would love to hear from you! Please fill in
                the form and send your message our way.
              </motion.div>
            </div>
            <form className="right" onSubmit={handleSubmit}>
              <TextInput
                label="Name"
                name="name"
                value={data.name}
                onChange={handleChange}
                required
              />
              <TextInput
                label="Email"
                name="email"
                type="email"
                value={data.email}
                onChange={handleChange}
                required
              />
              <TextInput
                label="Phone number"
                type="number"
                name="phone"
                value={data.phone}
                onChange={handleChange}
                required
              />
              <TextInput
                label="Company name"
                name="companyName"
                value={data.companyName}
                onChange={handleChange}
                required
              />
              <TextAreaInput
                label="How can we help you?"
                name="howCanIHelpYou"
                value={data.howCanIHelpYou}
                onChange={handleChange}
                required
              />

              <PrimaryBtn
                text="Send"
                type="submit"
                disabled={loading}
                loading={loading}
              />
            </form>
          </div>
        </div>
      </TwoOverlappingLayout>
    </LandingLayout>
  );
}

export default Contact;
