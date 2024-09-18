import React, { useEffect } from "react";
import AboutStyling from "./assets/styling/About.module.css";

function About() {
  useEffect(() => {
    return () => {
      document.title = "About Us";
    };
  }, []);
  return (
    <>
      <div className={`${AboutStyling.heading}`}>About</div>
    </>
  );
}

export default About;
