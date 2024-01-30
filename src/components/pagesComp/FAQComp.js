import React, { useState } from "react";
import faqopened from "@/assets/images/faqopened.svg";
import faqclosed from "@/assets/images/faqclosed.svg";
import faqimage from "@/assets/images/faqimage.svg";
import Image from "next/image";
import Link from "next/link";

const FaqClosed = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Vector"
        d="M10 15C10.2833 15 10.521 14.904 10.713 14.712C10.9043 14.5207 11 14.2833 11 14V11H14.025C14.3083 11 14.5417 10.904 14.725 10.712C14.9083 10.5207 15 10.2833 15 10C15 9.71667 14.904 9.479 14.712 9.287C14.5207 9.09567 14.2833 9 14 9H11V5.975C11 5.69167 10.9043 5.45833 10.713 5.275C10.521 5.09167 10.2833 5 10 5C9.71667 5 9.47933 5.09567 9.288 5.287C9.096 5.479 9 5.71667 9 6V9H5.975C5.69167 9 5.45833 9.09567 5.275 9.287C5.09167 9.479 5 9.71667 5 10C5 10.2833 5.09567 10.5207 5.287 10.712C5.479 10.904 5.71667 11 6 11H9V14.025C9 14.3083 9.096 14.5417 9.288 14.725C9.47933 14.9083 9.71667 15 10 15ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88333 18.6873 3.825 17.975 2.925 17.075C2.025 16.175 1.31267 15.1167 0.788 13.9C0.262667 12.6833 0 11.3833 0 10C0 8.61667 0.262667 7.31667 0.788 6.1C1.31267 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.31233 6.1 0.787C7.31667 0.262333 8.61667 0 10 0C11.3833 0 12.6833 0.262333 13.9 0.787C15.1167 1.31233 16.175 2.025 17.075 2.925C17.975 3.825 18.6873 4.88333 19.212 6.1C19.7373 7.31667 20 8.61667 20 10C20 11.3833 19.7373 12.6833 19.212 13.9C18.6873 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6873 13.9 19.212C12.6833 19.7373 11.3833 20 10 20Z"
        fill="#C4C4C4"
      />
    </svg>
  );
};

const FaqCard = (props) => {
  const { active, title, content, setActive, activeIndex, i } = props;
  return (
    <div
      className="fsr-card"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="1000"
      data-aos-easing="ease"
    >
      <div
        className="fsr-head"
        onClick={() => {
          if (i == activeIndex) {
            setActive(-1);
          } else {
            setActive(i);
          }
          //   setActive(i);
        }}
      >
        {title}{" "}
        {/* <Image
          //  src={active ? faqopened : faqclosed}
          src={faqclosed}
          className={active ? "faqani" : ""}
        /> */}
        <span className={active ? "faqani" : ""}>
          <FaqClosed />
        </span>
      </div>
      {active && (
        <div className="fsr-bottom">
          <div className="line"></div>
          {content}
        </div>
      )}
    </div>
  );
};

function FAQComp(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const data = [
    {
      title: "What is CareerAI?",
      content: `CareerAI is an innovative online platform that simplifies creating professional resumes and cover letters. Powered by advanced OpenAI technology, CareerAI offers an intuitive interface to craft impressive job application documents that stand out to employers.
  `,
    },
    {
      title: "How is CareerAI different from other builders?",
      content: (
        <>
          CareerAI stands out from other builders:
          <ul>
            <li>
              Advanced OpenAI technology for intelligent suggestions and
              recommendations.
            </li>
            <li>
              User-friendly interface for easy navigation and document creation.
            </li>
            <li>
              Tailored content generation to highlight unique strengths and
              experiences.
            </li>
            <li>
              Additional features like interview tips, job search resources, and
              career guidance.
            </li>
            <li>
              Continuous updates to align with industry standards and best
              practices.
            </li>
          </ul>
        </>
      ),
    },
    //   {
    //     title: "How do I sign up with CareerAI?",
    //     content: `Signing up with CareerAI is a simple and straightforward process. You have two options: you can either create an account by signing up through your Google account or sign up separately on the platform. Additionally, you can choose to sign up as an organization or as an individual, depending on your preference and needs.

    // `,
    //   },
    {
      title: `How do I build a Resume and Cover Letter once I sign up with CareerAI?
      `,
      content: `Once signed up with CareerAI, access the dashboard to find the resume and cover letter builders on the left. Choose the one you want to create, add your information, and customize the description using ChatGPT's suggestions. You can further personalize the content, font, and template to match your preferences.

  `,
    },
    {
      title:
        " Can I download my Resume and Cover Letter as PDF, Word or both? ",
      content: `Yes, you can download your resume and cover letter in PDF, Word, or both formats. Choose the format that best suits your needs and preferences, ensuring compatibility with various application submission methods.
  `,
    },
    {
      title: "Is it free to use?",
      content: `Yes, our resume builder is completely free. All you have to do is sign up with CareerAI to create your professional resume and cover letter. Start crafting your resume and cover letter today!
  `,
    },
    {
      title: "Are the downloaded Resumes/Cover Letters ATS friendly?      ",
      content: `Yes, the resumes and cover letters downloaded from our platform are ATS friendly. We optimize the formatting and structure of your documents to ensure compatibility with applicant tracking systems, increasing your chances of success in the hiring process.
  `,
    },
    //   {
    //     title: "What should I do if I need professional help?",
    //     content: `If you require professional assistance, we are here to help you. Please feel free to reach out to us via email. We are ready to provide expert guidance and answer any questions you may have on a professional level.

    // `,
    //   },
    {
      title: "Can AI Auto-fill different sections in my Resume?       ",
      content: `We have an embedded AI in the professional summary and employment history sections of our resume builder. Simply enter your basic information, and the AI will take care of the rest. It will automatically generate content for those sections based on the information provided.
  `,
    },
    {
      title: "Can I create a Cover Letter that matches my Resume?      ",
      content: `One of the greatest features we provide for a cover letter is its seamless integration with your resume. Our system carefully analyzes your resume and generates a cover letter that perfectly complements its content and style, ensuring consistency between the two documents.

  `,
    },
    {
      title: "Do you also have an embedded AI for Cover Letters?",
      content: `Yes, we have an embedded AI in the cover letter details section of our builder. Simply select your resume and enter your basic information, and the AI will take care of the rest by automatically generating content for that section.

  `,
    },
    {
      title: "How does our AI Chatbot feature “Ask Me Anything” work?      ",
      content: `Located in the left section of both our resume and cover letter builder, the "Ask Me Anything" feature powered by OpenAI’s  Chat GPT is designed to answer any questions you may have. Simply ask your query, and it will promptly provide you with an answer.


  `,
    },
  ];
  return (
    <div className="faq__section">
      <div className="fs-left">
        <h2
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease"
        >
          Frequently
          <br /> Asked Questions
        </h2>
        <p
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease"
        >
          Didn't find what you're looking for? — <br />{" "}
          <span>
            <Link href="/faq">View all our FAQs</Link>
          </span>
        </p>
        <Image
          src={faqimage}
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease"
        />
      </div>
      <div className="fs-right">
        {data.splice(0, 5).map((e, i) => {
          return (
            <FaqCard
              title={e.title}
              content={e.content}
              active={i == activeIndex}
              setActive={setActiveIndex}
              activeIndex={activeIndex}
              i={i}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FAQComp;
