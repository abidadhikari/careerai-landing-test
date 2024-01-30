import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../../assets/images/CareerAi.svg";
import Image from "next/image";
import Link from "next/link";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";

import instagram from "../../assets/images/footer/instagram.svg";
import facebook from "../../assets/images/footer/facebook.svg";
import linkedin from "../../assets/images/footer/linkedin.svg";
import mail from "../../assets/images/footer/mail.svg";
import { PrimaryBtn } from "./Buttons";

function Footer(props) {
  if (typeof window !== "undefined") {
    // browser code

    window.addEventListener("scroll", (e) => {
      const height =
        window.pageYOffset ||
        (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;

      if (document.querySelector(".totop")) {
        if (height > 300) {
          document.querySelector(".totop").style.display = "grid";
        } else {
          document.querySelector(".totop").style.display = "none";
        }
      }
    });
  }
  return (
    <footer>
      <div className="footer-inner">
        <div
          className="footer-column"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease"
        >
          <Image src={logo} alt="CareerAI" />
          <p>
            Empower your job search with our AI-driven resume builder.
            {/* CareerAI's */}
          </p>
          <a href="https://app.careerai.io/free-trial">
            <PrimaryBtn text="Build My resume" />
          </a>
        </div>
        <div className="footer-column-2">
          <div
            className="footer-column"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease"
          >
            <div className="footer-title">Resources</div>
            <ul>
              <li>
                <Link href="/for-institution">For Institution</Link>
              </li>
              {/* <li>
                <Link href="/">For Individual</Link>
              </li> */}
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <div
            className="footer-column"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease"
          >
            <div className="footer-title">Support</div>
            <ul>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-and-conditions">Terms & Conditions</Link>
              </li>
              {/* <li>
                <Link href="/">For Individual</Link>
              </li> */}
              {/* <li>
                <Link href="/about">Terms of Use</Link>
              </li> */}
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
            </ul>
          </div>
          <div
            className="footer-column"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease"
          >
            <div className="footer-title">Connect with us </div>
            <div className="ficons-row">
              <a
                href="https://www.facebook.com/profile.php?id=61554983050797"
                target="_blank"
              >
                <Image src={facebook} alt="facebook" />
              </a>
              <a href="https://www.instagram.com/career_ai/" target="_blank">
                <Image src={instagram} alt="instagram" />
              </a>

              <a
                href="https://www.linkedin.com/company/101348028/"
                target="_blank"
              >
                <Image src={linkedin} alt="linkedin" />
              </a>
              <a href="mailto:hello@joinmavens.com">
                <Image src={mail} alt="mail" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-line">© 2024 CareerAi. All rights reserved.</div>
      {/* <div
        className="footer-bottom"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
        data-aos-easing="ease"
      ></div> */}
      <div
        className="totop"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <FeatherIcon icon="chevron-up" />
      </div>
    </footer>
  );
}

export default Footer;
