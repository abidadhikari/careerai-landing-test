import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const testimonialData = [
  {
    userName: 'Rahul Sharma',
    text: 'As a software engineer, I wanted a resume that reflected my technical skills and experience accurately. Your resume builder not only offered a variety of tech-friendly templates but also guided me through the process.',
    rating: 5,
    createdAt: '2 days ago',
    isStatic: true,
  },
  {
    userName: 'Subham Gautam',
    text: 'This website is a lifesaver for any professional in need of an outstanding resume. As a nurse, I needed a document that highlighted my clinical expertise.',
    rating: 5,
    createdAt: '4 days ago',
    isStatic: true,
  },
  {
    userName: 'Jay Karki',
    text: 'The templates are modern and sleek, and the interface is intuitive. I was able to customize every section to highlight my strengths and experiences. Within a week of using my new resume, I landed an interview for my dream job.',
    rating: 4,
    createdAt: '3 days ago',
    isStatic: true,
  },
  {
    userName: 'Prasansha Joshi',
    text: "CareerAI has been a game-changer in my job search, and I'm incredibly grateful for the user-friendly platform and impactful resume-building features that helped me land my dream job. Your service is a true asset to job seekers, and I'll enthusiastically recommend it to others.",
    rating: 5,
    createdAt: '5 days ago',
    isStatic: true,
  },
];

const StarFilledBig = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="23"
      viewBox="0 0 24 23"
      fill="none"
    >
      <path
        d="M12 1L15.399 7.886L23 8.997L17.5 14.354L18.798 21.922L12 18.347L5.202 21.922L6.5 14.354L1 8.997L8.601 7.886L12 1Z"
        fill="#FFB400"
        stroke="#FFB400"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
const StarFilledBigNew = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
    >
      <path
        d="M10 15.7359L14.3452 14.5724L16.1607 20.4844L10 15.7359ZM20 8.09444H12.3512L10 0.484375L7.64881 8.09444H0L6.19048 12.8114L3.83928 20.4215L10.0298 15.7045L13.8393 12.8114L20 8.09444Z"
        fill="#FFB400"
      />
    </svg>
  );
};
const StarFilledBigHalfNew = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 15.2516L14.3452 14.088L16.1607 20L10 15.2516ZM20 7.61006H12.3512L10 0L7.64881 7.61006H0L6.19048 12.327L3.83928 19.9371L10.0298 15.2201L13.8393 12.327L20 7.61006Z"
        fill="#E2E2E2"
      />
      <path
        d="M10.0298 9V7.61006L10 0L7.64881 7.61006H0L6.19048 12.327L3.83928 19.9371L10.0298 15.2201V12V9Z"
        fill="#FFB400"
      />
    </svg>
  );
};
const StarFilledBigEmptyNew = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 15.2516L14.3452 14.088L16.1607 20L10 15.2516ZM20 7.61006H12.3512L10 0L7.64881 7.61006H0L6.19048 12.327L3.83928 19.9371L10.0298 15.2201L13.8393 12.327L20 7.61006Z"
        fill="#E3E3E3"
      />
    </svg>
  );
};
const StarFilledBigHalf = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="23"
      viewBox="0 0 24 23"
      fill="none"
    >
      <path
        d="M12 1L15.399 7.886L23 8.997L17.5 14.354L18.798 21.922L12 18.347L5.202 21.922L6.5 14.354L1 8.997L8.601 7.886L12 1Z"
        fill="#E3E3E3"
        stroke="#E3E3E3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 1V7.88534V10.999V14.3527V18.3453L5.202 21.92L6.5 14.3527L1 8.99624L8.601 7.88534L12 1Z"
        fill="#FFB400"
        stroke="#FFB400"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
const StarFilledBigEmpty = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="23"
      viewBox="0 0 24 23"
      fill="none"
    >
      <path
        d="M12 1L15.399 7.886L23 8.997L17.5 14.354L18.798 21.922L12 18.347L5.202 21.922L6.5 14.354L1 8.997L8.601 7.886L12 1Z"
        fill="#E3E3E3"
        stroke="#E3E3E3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 1V7.88534V10.999V14.3527V18.3453L5.202 21.92L6.5 14.3527L1 8.99624L8.601 7.88534L12 1Z"
        fill="#E3E3E3"
        stroke="#E3E3E3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const StarFilled = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
    >
      <path
        d="M8 1L10.163 5.382L15 6.089L11.5 9.498L12.326 14.314L8 12.039L3.674 14.314L4.5 9.498L1 6.089L5.837 5.382L8 1Z"
        fill="#FFB400"
        stroke="#FFB400"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
const StarBlank = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
    >
      <path
        d="M7 0L9.163 4.382L14 5.089L10.5 8.498L11.326 13.314L7 11.039L2.674 13.314L3.5 8.498L0 5.089L4.837 4.382L7 0Z"
        fill="#E3E3E3"
      />
    </svg>
  );
};

const NewTestimonialCard = (props) => {
  const { name, image, content, rating, time, isStatic, key, freeName } = props;
  function timeAgo(createdAt, isStatic) {
    if (isStatic) return createdAt;
    const currentDate = new Date();
    const createdDate = new Date(createdAt);
    const timeDifference = currentDate - createdDate;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return days === 1 ? '1 day ago' : days + ' days ago';
    } else if (hours > 0) {
      return hours === 1 ? '1 hour ago' : hours + ' hours ago';
    } else if (minutes > 0) {
      return minutes === 1 ? '1 minute ago' : minutes + ' minutes ago';
    } else {
      return seconds <= 1 ? 'just now' : seconds + ' seconds ago';
    }
  }

  function truncateTextWithEllipsis(text, maxLength = 250) {
    if (text?.length > maxLength) {
      // Find the last space within the maxLength
      const lastSpaceIndex = text?.lastIndexOf(' ', maxLength);

      // Truncate at the last space or maxLength if no space found
      const truncatedText =
        lastSpaceIndex !== -1
          ? text?.slice(0, lastSpaceIndex)
          : text?.slice(0, maxLength);

      // Add ellipsis
      return truncatedText + '...';
    } else {
      return text;
    }
  }
  return (
    <div className="new-testimonial__card" key={key}>
      <div className="ntc-stars">
        {rating ? (
          <>
            {[...Array(Number(rating))].map(() => {
              return <StarFilled />;
            })}
            {[...Array(5 - Number(rating))].map(() => {
              return <StarBlank />;
            })}
          </>
        ) : (
          <>
            {[...Array(5)].map(() => {
              return <StarBlank />;
            })}
          </>
        )}
      </div>
      <p>"{truncateTextWithEllipsis(content)}"</p>
      <div className="ntc-bottom">
        <div className="name">
          {name || freeName} <div></div>
        </div>
        {timeAgo(time, isStatic)}
      </div>
    </div>
  );
};
function ensureArrayLength(dataArray, minLength, staticDataArray) {
  console.log(dataArray, 'dataArray');
  const currentLength = dataArray.length;

  if (currentLength < minLength) {
    const staticDataToAdd = staticDataArray.slice(0, minLength - currentLength);
    dataArray = dataArray.concat(staticDataToAdd);
  }

  return dataArray;
}

function NewTestimonial(props) {
  const [data, setData] = useState([]);
  const [feedbackData, setFeedbackData] = useState([]);
  const getData = async () => {
    try {
      const req = await fetch('https://backend.careerai.io/public/feedbacks');
      const result = await req.json();
      if (result.status === 'success') {
        setData(result.data);
        const resultArray = ensureArrayLength(result.data, 4, testimonialData);
        setData(resultArray);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getFeedBackData = async () => {
    try {
      const req = await fetch(
        'https://backend.careerai.io/public/feedbackDetail'
      );
      const result = await req.json();
      if (result.status === 'success') {
        setFeedbackData(result.data);
      }
    } catch (error) {}
  };
  useEffect(() => {
    getData();
    getFeedBackData();
  }, []);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
        >
          <path
            d="M1 13L7 7L1 1"
            stroke="#C4C4C4"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
        >
          <path
            d="M7 13L1 7L7 1"
            stroke="#C4C4C4"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1070,
        settings: {
          slidesToShow: 2,

          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  // console.log(feedbackData?.avg, typeof Number(feedbackData?.avg));

  const GenerateStars = ({ rating }) => {
    if (!rating || rating > 5 || rating < 0) {
      return;
    }
    let fullStars = 0;
    let hasHalfStar = false;
    let emptyStars = 5;
    while (rating > 0) {
      rating--;
      fullStars++;
      emptyStars--;
      if (rating > 0 && rating < 1) break;
    }
    if (rating > 0 && rating < 1) hasHalfStar = true;
    if (hasHalfStar) {
      emptyStars--;
    }

    return (
      <>
        {[...Array(fullStars)].map((index) => {
          return <StarFilledBigNew key={index} />;
        })}
        {hasHalfStar && <StarFilledBigHalfNew />}
        {[...Array(emptyStars)].map((index) => {
          return <StarFilledBigEmptyNew key={index} />;
        })}
      </>
    );
  };
  return (
    <div className="new-testimonial__wrapper">
      <h2
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
        data-aos-easing="ease"
      >
        {/* CareerAI Users Love Our Resume Builder. */}
        What users say about us
      </h2>
      <p
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
        data-aos-easing="ease"
      >
        Our intuitive platform transformed workflows, empowered individuals &
        organizations to achieve their goals.
      </p>
      <div className="nt-lower">
        <div className="ntl-left">
          <div
            className="ntll-top"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease"
          >
            {/* {feedbackData?.avg} out of 5{" "} */}
            Excellent
          </div>
          <div
            className="ntll-middle"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease"
          >
            {/* <StarFilledBig /> <StarFilledBig /> <StarFilledBig />{" "}
            <StarFilledBig /> <StarFilledBigHalf /> */}{' '}
            <GenerateStars rating={Number(feedbackData?.avg)} />
          </div>
          <div
            className="ntll-bottom"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease"
          >
            Rating {Number(feedbackData?.avg)} |{' '}
            <span>{feedbackData?.totalitem} reviews</span>
          </div>
        </div>
        <div
          className="ntl-right"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease"
        >
          <Slider {...settings}>
            {data?.map((e) => {
              return (
                <NewTestimonialCard
                  image={e.userImage}
                  name={e.userName}
                  content={e.text}
                  rating={e.rating}
                  time={e.createdAt}
                  isStatic={e.isStatic}
                  key={e.id}
                  freeName={e.free_fullName}
                />
              );
            })}
            {/* {data?.map((e) => {
              return (
                <NewTestimonialCard
                  image={e.userImage}
                  name={e.userName}
                  content={e.text}
                  rating={e.rating}
                  time={e.createdAt}
                  isStatic={e.isStatic}
                />
              );
            })} */}
            {/* {data?.length < 4
              ? testimonialData.map((e) => {
                return (
                  <NewTestimonialCard
                    name={e.name}
                    content={e.content}
                    rating={e.rating}
                    time={e.time}
                    isStatic
                  />
                );
              })
              : null} */}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default NewTestimonial;
