import React, { useEffect } from "react";
import HomeStyling from "./assets/styling/Home.module.css";

function Home() {
  useEffect(() => {
      document.title = "Home";
  }, []);

  return (
    <>
      <h1 className={`${HomeStyling.heading}`}>Home</h1>
    </>
  );
}

export default Home;
