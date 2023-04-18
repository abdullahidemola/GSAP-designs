import React from "react";
import ReactDOM from "react-dom/client";
// import App2 from "./projects/lesson 2/App2";
import App from "./projects/slider/app";
// import GsapContext from "./projects/gsap-context/gsapContext";
// import App from "./projects/lesson 1/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <GsapContext /> */}
    {/* <App/> */}
    {/* <App2 /> */}
    <App />
  </React.StrictMode>
);
