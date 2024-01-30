import LandingLayout from "../components/Layouts/LandingLayout";
import { PrimaryBtn } from "../components/shared/Buttons";
import FeatherIcon from "feather-icons-react";
import Head from "next/head";
import React from "react";

const SinglePricing = (props) => {
  const { data } = props;
  // console.log(data);
  return (
    <div className="single__pricing">
      <div className="sp-title">{data.title}</div>
      <div className="sp-desc">{data.desc}</div>
      <div className="sp-price">
        <div className="sp-dollar">${data.dollar}</div>
        <div className="sp-date">per month</div>
      </div>
      <a href="https://app.careerai.io/signup">
        <PrimaryBtn text="Sign Up for free" />
      </a>

      <div className="sp-pricing__list">
        {data.list.map((e) => {
          return (
            <div className="sp-item">
              <div className="sp-icon">
                <FeatherIcon icon="check" size="18" />
              </div>
              {e}
            </div>
          );
        })}
      </div>
    </div>
  );
};

function Pricing(props) {
  const data = [
    {
      title: "For Individual",
      desc: "Semper tincidunt nec lacinia nisi. Nisl justo tortor suscipit bibendum vel adipiscing amet. Et elit et.",
      dollar: 0,
      list: [
        "1 resume and 1 Cover Letter template",
        "Unlimited word and PDF downloads",
        "AI-generated keywords and phrases",
        "AI Chatbot with unlimited assistance",
      ],
    },

    {
      title: "For Individual",
      desc: "Semper tincidunt nec lacinia nisi. Nisl justo tortor suscipit bibendum vel adipiscing amet. Et elit et.",
      dollar: 9,
      list: [
        "Unlimited resume and Cover Letter templates",
        "Unlimited word and PDF downloads",
        "AI-generated keywords and phrases",
        "AI Chatbot with unlimited assistance",
        "3 resume and 3 Cover Letter reviews by experts",
        "7 days free trial with guaranteed money back",
      ],
    },

    {
      title: "For Institution",
      desc: "Semper tincidunt nec lacinia nisi. Nisl justo tortor suscipit bibendum vel adipiscing amet. Et elit et.",
      dollar: "?",
      list: [
        "Unlimited team members",
        "Unlimited word and PDF downloads",
        "AI-generated keywords and phrases",
        "AI Chatbot with unlimited assistance",
        "Unlimited resume and Cover Letter reviews by experts",
        "Applications through dedicated Virtual Assistants",
        "Multiple application management platform",
        "Priority support through email and chat",
        "7 days free trial with guaranteed money back",
      ],
    },
  ];
  return (
    <LandingLayout>
      <Head>
        <title>Pricing</title>
      </Head>

      <div className="pricing__page">
        <h1>Choose your plan</h1>

        <div className="pricing__wrapper my-width">
          <div className="pricing__row">
            <SinglePricing data={data[0]} />
            <SinglePricing data={data[1]} />
            <SinglePricing data={data[2]} />
          </div>
        </div>
      </div>
    </LandingLayout>
  );
}

export default Pricing;
