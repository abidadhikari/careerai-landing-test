import LandingLayout from "@/components/Layouts/LandingLayout";
import TwoOverlappingLayout from "@/components/Layouts/TwoOverlappingLayout";
import React from "react";

const FaqCard = (props) => {
  const { title, content } = props;
  return (
    <div className="faq">
      <div className="faq-head">{title}</div>
      <div className="faq-content">{content}</div>
    </div>
  );
};

function Faq(props) {
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
    <LandingLayout>
      <TwoOverlappingLayout title="Frequently" title2="Asked Questions">
        <div className="faqhome">
          {/* <h1>Frequently Asked Questions</h1> */}
          <div className="faqlist">
            {/* <FaqCard />
            <FaqCard />
            <FaqCard />
            <FaqCard />
            <FaqCard />
            <FaqCard /> */}
            {data.map((e) => {
              return <FaqCard title={e.title} content={e.content} />;
            })}
          </div>
        </div>
      </TwoOverlappingLayout>
    </LandingLayout>
  );
}

export default Faq;
