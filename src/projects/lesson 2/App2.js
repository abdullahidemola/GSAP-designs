import React, { useRef, useEffect } from "react";
import "./App.scss";
import { gsap } from "gsap";
import people from "./images/people.webp";
import { CSSRulePlugin } from "gsap/all";
// import  CSSRulePlugin  from "gsap/CSSRulePlugin";
// gsap.registerPlugin(CSSRulePlugin);

const App2 = () => {
  let container = useRef();
  let image = useRef();

  let imageReveal = CSSRulePlugin.getRule(".img-container::after");
  const tl = gsap.timeline();

  useEffect(() => {
    tl.to(".container", {
      duration: 1,
      autoAlpha: 1,
    }).to(imageReveal, { duration: 1.6, width: "0%", ease: "power2.out" });
  });

  return (
    <section className="main">
      <div className="container" ref={container}>
        <div className="img-container">
          <img src={people} alt="img" ref={image} />
        </div>
      </div>
    </section>
  );
};

export default App2;
