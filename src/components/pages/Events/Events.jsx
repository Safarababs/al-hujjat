import React from "react";
import EventsHero from "./EventHero/EventHero";
import ContactForm from "../Contact/Contact Form/ContactForm";
import Courses from "../../Landing/Courses/Courses";
import Classes from "../../Landing/Classes/Classes";

const Events = () => {
  return (
    <>
      <EventsHero />
      <Classes />
      <Courses />
      <ContactForm />
    </>
  );
};

export default Events;
