import React, { useEffect } from "react";
import FeedbackStyling from "./assets/styling/Feedback.module.css";

function Feedback() {
  useEffect(() => {
      document.title = "Feedback";
  }, []);
  return (
    <>
      <div className={`${FeedbackStyling.heading}`}>Feedback</div>
    </>
  );
}

export default Feedback;
