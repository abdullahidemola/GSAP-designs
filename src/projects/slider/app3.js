import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

import leftArrow from "./assets/arrow-left.svg";
import rightArrow from "./assets/arrow-right.svg";

import "reset-css";
import "./app.scss";

const testimonials = [
  {
    name: "Julia Cameron",
    title: "Creative Director, VISA",
    image: `${require("./assets/image3.jpg")}`,
    quote:
      "It's all good. I was amazed at the quality of the Design. We've seen amazing results already.",
  },
  {
    name: "Mark Jacobs",
    title: "Tech Lead, Google",
    image: `${require("./assets/image.jpg")}`,
    quote:
      "The rebranding has really helped our business. Definitely worth the investment.",
  },
  {
    name: "Lisa Bearings",
    title: "Brand Coordinator, Facebook",
    image: `${require("./assets/image2.jpg")}`,
    quote:
      "The service was excellent. Absolutely wonderful! A complete redesign did it for us.",
  },
];

function App() {
  const imageList = useRef();
  const testimonialList = useRef();

  const imageWidth = 340;
  const [state, setState] = useState({
    isActive0: true,
    isActive1: false,
    isActive2: false,
    
  });

  useEffect(() => {
    console.log(imageList.current.children[0]);
    console.log(imageList.current.children[1]);

    gsap.to(testimonialList.current.children[0], { duration: 1, alpha: 1 });
  }, []);

  const slideLeft = (index, duration, multiplier = 1) => {
    gsap.to(imageList.current.children[index], {
      duration: duration,
      x: -imageWidth * multiplier,
      ease: "power2.out",
    });
  };

  const slideRight = (index, duration, multiplier = 1) => {
    gsap.to(imageList.current.children[index], {
      duration: duration,
      x: imageWidth * multiplier,
      ease: "power2.out",
    });
  };

  const scale = (index, duration) => {
    gsap.from(imageList.current.children[index], {
      duration: duration,
      scale: 1.2,
      ease: "power3.out",
    });
  };

  const fadeOut = (index, duration) => {
    gsap.to(testimonialList.current.children[index], {
      duration: duration,
      opacity: 0,
    });
  };

  const fadeIn = (index, duration) => {
    gsap.to(testimonialList.current.children[index], {
      duration: duration,
      opacity: 1,
      delay: 0.5,
    });
  };

  const nextSlide = () => {
    if (imageList.current.children[0].className.includes("active")) {
      setState({ isActive0: false, isActive1: true });

      slideLeft(0, 1);

      slideLeft(1, 1);

      scale(1, 1);

      fadeOut(0, 1);

      fadeIn(1, 1);
    } else if (imageList.current.children[1].className.includes("active")) {
      setState({ isActive1: false, isActive2: true });
      // slideRight(0, 1);

      slideLeft(1, 1, 2);

      slideLeft(2, 0);

      slideLeft(2, 1, 2);

      slideRight(0, 0, 1);

      scale(2, 1);

      fadeOut(1, 1);

      fadeIn(2, 1);
    } else if (imageList.current.children[2].className.includes("active")) {
      setState({ isActive2: false, isActive0: true });
      slideLeft(2, 1, 3);

      slideLeft(0, 1, 0);

      slideLeft(1, 0, 0);

      scale(0, 1);

      fadeOut(2, 1);

      fadeIn(0, 1);
    }
  };

  const prevSlide = () => {
    if (imageList.current.children[0].className.includes("active")) {
      setState({ isActive0: false, isActive2: true });

      slideLeft(2, 0, 3);

      slideLeft(2, 1, 2);

      scale(2, 1);

      slideRight(0, 1);

      slideLeft(1, 0, 2);

      fadeOut(0, 1);

      fadeIn(2, 1);
    } else if (imageList.current.children[1].className.includes("active")) {
      setState({ isActive1: false, isActive0: true });

      slideLeft(0, 0);

      slideRight(0, 1, 0);

      scale(0, 1);

      slideRight(1, 1, 0);

      fadeOut(1, 1);

      fadeIn(0, 1);
    } else if (imageList.current.children[2].className.includes("active")) {
      setState({ isActive2: false, isActive1: true });

      slideLeft(1, 0, 2);

      slideLeft(1, 1);

      scale(1, 1);

      slideLeft(2, 1);

      // slideLeft(0, 0, 2);

      fadeOut(2, 1);

      fadeIn(1, 1);
    }
  };
  return (
    <div className="testimonial-section">
      <div className="testimonial-container">
        <div className="arrows left" onClick={prevSlide}>
          <span>
            <img src={leftArrow} alt="" />
          </span>
        </div>
        <div className="inner">
          <div className="t-image">
            <ul ref={imageList}>
              <li className={`${state.isActive0 ? "active" : ""}`}>
                <img src={testimonials[0].image} alt="" />
              </li>
              <li className={`${state.isActive1 ? "active" : ""}`}>
                <img src={testimonials[1].image} alt="" />
              </li>
              <li className={`${state.isActive2 ? "active" : ""}`}>
                <img src={testimonials[2].image} alt="" />
              </li>
            </ul>
          </div>

          <div className="t-content">
            <ul ref={testimonialList}>
              <li className={`${state.isActive0 ? "active" : ""}`}>
                <div className="content-inner">
                  <p className="quote">{testimonials[0].quote}</p>
                  <h3 className="name">{testimonials[0].name}</h3>
                  <h4 className="title">{testimonials[0].title}</h4>
                </div>
              </li>

              <li className={`${state.isActive1 ? "active" : ""}`}>
                <div className="content-inner">
                  <p className="quote">{testimonials[1].quote}</p>
                  <h3 className="name">{testimonials[1].name}</h3>
                  <h4 className="title">{testimonials[1].title}</h4>
                </div>
              </li>

              <li className={`${state.isActive2 ? "active" : ""}`}>
                <div className="content-inner">
                  <p className="quote">{testimonials[2].quote}</p>
                  <h3 className="name">{testimonials[2].name}</h3>
                  <h4 className="title">{testimonials[2].title}</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="arrows right" onClick={nextSlide}>
          <span>
            <img src={rightArrow} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
