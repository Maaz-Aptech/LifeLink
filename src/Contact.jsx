import React, { useEffect } from "react";
import ContactStyling from "./assets/styling/Contact.module.css";

function Contact() {
  useEffect(() => {
    return () => {
      document.title = "Contact Us";
    };
  }, []);
  return (
    <>
      <div className={`${ContactStyling.heading}`}>Contact</div>
    </>
  );
}

export default Contact;
