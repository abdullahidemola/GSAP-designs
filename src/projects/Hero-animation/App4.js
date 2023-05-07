import React, { useRef, useEffect } from "react";

import { gsap } from "gsap";

import imgGirl from "./images/girl.webp";
import imgBoy from "./images/boy.webp";
import arrow from "./images/arrow-right.svg";
import "./App4.scss";

const App4 = () => {
  const app = useRef(null);
  const images = useRef(null);
  const content = useRef(null);

  let tl = gsap.timeline({ delay: 1 });

  useEffect(() => {
    const girlImage = images.current.firstElementChild; // or children[0]
    const boyImage = images.current.lastElementChild;

    const headLineFirst = content.current.children[0].children[0];
    const headLineSecond = content.current.children[0].children[1];
    const headLineThird = content.current.children[0].children[2];

    const contentParagraph = content.current.children[1];
    const contentButton = content.current.children[2];

    console.log(contentParagraph, contentButton);
    gsap.to(app.current, { duration: 0, autoAlpha: 1 });

    tl.from(girlImage, {
      duration: 1.2,
      y: 1280,
      ease: "power2.out",
    })
      .from(
        girlImage.firstElementChild,
        {
          duration: 2,
          scale: 1.6,
          ease: "power2.out",
        },
        0.2
      )
      .from(
        boyImage,
        {
          duration: 1.2,
          y: 1280,
          ease: "power2.out",
        },
        0.2
      )
      .from(
        boyImage.firstElementChild,
        {
          duration: 2,
          scale: 1.6,
          ease: "power2.out",
        },
        0.2
      )
      .from(
        [
          headLineFirst.children,
          headLineSecond.children,
          headLineThird.children,
        ],
        { y: 44, ease: "power2.out", stagger: 0.15 },
        "<"
      )
      .from(contentParagraph, { y: 20, opacity: 0, ease: "power2.out" }, 1.4)
      .from(contentButton, { y: 20, opacity: 0, ease: "power2.out" }, 1.6);
  }, [tl]);

  return (
    <div className="hero" ref={app}>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner" ref={content}>
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">
                    Relieving the burden
                  </div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">
                    of disease caused
                  </div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">by behaviors.</div>
                </div>
              </h1>
              <p>
                Better treats serious cardiometabolic diseases to transform
                lives and reduce healthcare utilization through the use of
                digital therapeutics.
              </p>
              <div className="btn-row">
                <button className="explore-button">
                  Explore
                  <div className="arrow-icon">
                    <img src={arrow} alt="row" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="hero-images">
            <div className="hero-images-inner" ref={images}>
              <div className="hero-image girl">
                <img src={imgGirl} alt="girl" />
              </div>
              <div className="hero-image boy">
                <img src={imgBoy} alt="boy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App4;
