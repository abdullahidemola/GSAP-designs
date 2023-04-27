import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./App.css";

const App = () => {
  const app = useRef();
  const click = useRef();
  const [clickValid, setClickValid] = useState(false);

  const expandHandler = () => {
    gsap.to(click.current, { height: 200, width: 200, ease: "power3.out" });
    setClickValid(true);
  };

  const shrinkHandler = () => {
    gsap.to(click.current, { height: 75, width: 75, ease: "power3.out" });
    setClickValid(false);
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".red", {
        opacity: 0,
        x: 40,
        ease: "power3.out",
        duration: 3.5,
      });
      gsap.from(".blue", {
        opacity: 0,
        x: 60,
        ease: "power3.out",
        duration: 3.5,
        delay: 0.6,
      });
      gsap.from(".yellow", {
        opacity: 0,
        x: 80,
        ease: "power3.out",
        duration: 3.5,
        delay: 0.8,
      });
    }, app);

    return () => ctx.revert();
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <div className="circle-container " ref={app}>
          <div className="circle red"></div>
          <div
            className="circle blue"
            onClick={clickValid !== true ? expandHandler : shrinkHandler}
            ref={click}
          ></div>
          <div className="circle yellow"></div>
        </div>
      </header>
    </div>
  );
};

export default App;
