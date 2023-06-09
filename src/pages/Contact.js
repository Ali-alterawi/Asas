import React from "react";
import NavBar from "../components/NavBar";
import ContactHero from "../components/ContactHero";
import ContactForm from "../components/ContactForm";


const Contact = () => {
  return (
    <>
      <NavBar />
      <ContactHero/>
      {/* <Test/> */}
      <ContactForm/>
    </>
  );
};

export default Contact;
