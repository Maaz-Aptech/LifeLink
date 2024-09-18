import React, { useEffect } from "react";
import ContactStyling from "./assets/styling/Contact.module.css";

function Contact() {
  useEffect(() => {
      document.title = "Contact Us";
  }, []);
  return (
    <>
      <div className={`${ContactStyling.heading}`}>Contact</div>
    </>
  );
}

export default Contact;
