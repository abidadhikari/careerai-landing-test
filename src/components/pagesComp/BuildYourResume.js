import React from "react";
import byr from "../../assets/images/byr.svg";
import { SecondaryBtn } from "../shared/Buttons";
import Image from "next/image";

function BuildYourResume(props) {
  return (
    <div className="byr">
      <div className="left">
        <h3>Build your resume now</h3>
        <p>
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec
          purus felis. Pellentesque habitant morbi tristique senectus et netus
          et malesuada fames ac turpis egestas. Maecenas eu est sed justo
          fermentum bibendum. Quisque pharetra */}
          Discover expert resume-building tips at CareerAI. Our latest insights
          empower job seekers to craft winning CVs and secure their dream jobs.
          Start your journey toward career success by delving into our valuable
          resources.
        </p>
        <a href="https://app.careerai.io/free-trial">
          <SecondaryBtn text="BUILD MY RESUME" />
        </a>
      </div>
      <div className="right">
        <Image src={byr} alt="build your resume" />
      </div>
    </div>
  );
}

export default BuildYourResume;
