import React from "react";
import AboutHero from "./About Hero/AboutHero";
import About from "../../Landing/About/About";
import Team from "../../Landing/Team/Team";
import ContactForm from "../Contact/Contact Form/ContactForm";

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <About />
      <Team />
      <ContactForm />
    </>
  );
};

export default AboutPage;
