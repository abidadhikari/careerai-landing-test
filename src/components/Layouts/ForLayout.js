import React from "react";
import { SecondaryBtn } from "../shared/Buttons";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import fhImage from "../../assets/images/banele.svg";

function ForLayout(props) {
  const { children, h1, h12, p, btnText, btnLink, nobtn } = props;
  return (
    <>
      <div className="for__hero">
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease"
        >
          {h1} <span>{h12}</span>
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="250"
          data-aos-duration="1000"
          data-aos-easing="ease"
          className="fw-300"
        >
          {p}
        </p>
        {!nobtn && (
          <a
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-easing="ease"
            href={btnLink ? btnLink : "https://app.careerai.io/signup"}
          >
            <SecondaryBtn text={btnText ? btnText : "Sign Up for free"} />
          </a>
        )}
        <Image src={fhImage} className="fh-img" alt="for layout image" />
      </div>

      {children}
    </>
  );
}

export default ForLayout;
