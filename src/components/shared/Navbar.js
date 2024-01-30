import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import logo from "../../assets/images/MavenHire.svg";
import Link from "next/link";
import { SecondaryBtn } from "./Buttons";
import FeatherIcon from "feather-icons-react";

// import abstract from "@/assets/images/abstract.svg";

const Nav = (props) => {
  const { setOpenNav } = props;
  const router = useRouter();
  const handleClick = () => {
    setOpenNav(false);
  };
  return (
    <ul>
      <li>
        <Link
          href="https://app.careerai.io/free-trial"
          className={
            router.pathname == "/free-trial" ? "logo navlink-active" : "logo"
          }
          onClick={handleClick}
        >
          Resume
        </Link>
      </li>
      <li>
        <Link
          href="https://app.careerai.io/free-trial-cover"
          className={
            router.pathname == "/free-trial-cover"
              ? "logo navlink-active"
              : "logo"
          }
          onClick={handleClick}
        >
          Cover Letter
        </Link>
      </li>
      <li>
        <Link
          href="/for-institution"
          className={
            router.pathname == "/for-institution"
              ? "logo navlink-active"
              : "logo"
          }
          onClick={handleClick}
        >
          For Institution
        </Link>
      </li>
      {/* <li>
    <Link
      href="/for-individual"
      className={
        router.pathname == "/for-individual"
          ? "logo navlink-active"
          : "logo"
      }
      onClick={handleClick}
    >
      For Individual
    </Link>
  </li> */}
      <li>
        <Link
          href="/about"
          className={
            router.pathname == "/about" ? "logo navlink-active" : "logo"
          }
          onClick={handleClick}
        >
          About
        </Link>
      </li>
      {/* <li>
        <Link
          href="/pricing"
          className={
            router.pathname == "/pricing" ? "logo navlink-active" : "logo"
          }
          onClick={handleClick}
        >
          Pricing
        </Link>
      </li> */}
      <li>
        <Link
          href="/blog"
          className={
            router.pathname == "/blog" ? "logo navlink-active" : "logo"
          }
          onClick={handleClick}
        >
          Blog
        </Link>
      </li>
      <li>
        <Link
          href="/contact"
          className={
            router.pathname == "/contact" ? "logo navlink-active" : "logo"
          }
          onClick={handleClick}
        >
          Contact
        </Link>
      </li>
      <li>
        <Link
          href="https://app.careerai.io"
          className="logo"
          onClick={handleClick}
        >
          <SecondaryBtn text="Sign In" />
        </Link>
      </li>
    </ul>
  );
};

function Navbar(props) {
  const router = useRouter();
  const [openNav, setOpenNav] = useState(false);
  return (
    <>
      {" "}
      <div className="helperdiv"></div>
      <header>
        <div className="main-header my-width">
          <Link href="/" className="logo">
            <Image
              src={logo}
              alt="CareerAI"
              height={30.4}
              width={123}
              priority
            />
          </Link>
          <nav>
            <Nav setOpenNav={setOpenNav} />
          </nav>
          <button
            type="button"
            className="openbtn"
            onClick={() => setOpenNav(true)}
          >
            <FeatherIcon icon="menu" />
          </button>
          {openNav && (
            <div className="mobilenav__container">
              <Nav setOpenNav={setOpenNav} />
              <button
                type="button"
                className="closebtn"
                onClick={() => setOpenNav(false)}
              >
                <FeatherIcon icon="x" />
              </button>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default Navbar;
