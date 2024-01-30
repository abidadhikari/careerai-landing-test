import Image from 'next/image';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import t1 from '../../assets/images/t1.svg';
import t2 from '../../assets/images/t2.svg';
import t3 from '../../assets/images/t3.svg';
import t4 from '../../assets/images/t4.svg';
import institution from '../../assets/images/institution.svg';

import whodesImage from '../../assets/images/whodes.svg';
import { SecondaryBtn } from '../shared/Buttons';

function WhoIsCareerAIFor(props) {
  const [currPerson, setCurrPerson] = useState(0);
  const data = [
    {
      img: t1,
      label: 'Professional',
      content:
        'If you are a professional in need of assistance in improving your resume, our resume builder powered by OpenAI can help you generate the best version of your resume thus far.',
    },
    {
      img: t2,
      label: 'Student',
      content:
        "If you're a bootcamp student juggling multiple job applications, streamline them with a user-friendly and adaptable kanban board instead of relying on difficult-to-use Excel spreadsheets.",
    },
    {
      img: institution,
      label: 'Institution',
      content:
        'If you want to help your students concentrate on their job interview preparation, utilize our virtual assistants who will apply to hundreds of open positions on their behalf.',
    },
    // {
    //   img: t4,
    //   content:
    //     "If you're a fresh college grad and struggling to write your first resume, use our AI-powered resume-builder to generate the first draft.",
    // },
  ];
  return (
    <div
      className="whoiscareeraifor"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="1000"
      data-aos-easing="ease"
    >
      <div className="who-title">Who is Career AI for?</div>
      <div className="who-people-row">
        {data.map((e, i) => {
          return (
            <motion.div
              className={
                i === currPerson
                  ? 'who-people who-people--active'
                  : 'who-people'
              }
              onClick={() => setCurrPerson(i)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.4 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 50, opacity: 0 },
              }}
            >
              <Image src={e.img} />
              <div>{e.label}</div>
            </motion.div>
          );
        })}
      </div>
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.8 }}
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: 50, opacity: 0 },
        }}
        className="fw-300"
      >
        {data[currPerson].content}
      </motion.p>
      <a href="https://app.careerai.io/signup">
        <SecondaryBtn text="SIGN UP FOR FREE" />
      </a>

      <Image src={whodesImage} className="whobg" />
    </div>
  );
}

export default WhoIsCareerAIFor;
