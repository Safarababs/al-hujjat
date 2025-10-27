import React from "react";
import SermonsHero from "./Sermons Hero/SermonsHero";
import ContactForm from "../Contact/Contact Form/ContactForm";
import Courses from "../../Landing/Courses/Courses";
import Sermon from "../../Landing/Sermon/Sermon";

const Sermons = () => {
  return (
    <>
      <SermonsHero />
      <Sermon />
      <ContactForm />
      <Courses />
    </>
  );
};

export default Sermons;
