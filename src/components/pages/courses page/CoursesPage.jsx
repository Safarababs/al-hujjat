import React from "react";
import CoursesHero from "./Courses Hero/CoursesHero";
import Courses from "../../Landing/Courses/Courses";
import Testimonials from "../../Landing/Testimonial/Testimonial";
import ContactForm from "../Contact/Contact Form/ContactForm";
import Classes from "../../Landing/Classes/Classes";

const CoursesPage = () => {
  return (
    <>
      <CoursesHero />
      <Courses />
      <Classes />
      <Testimonials />
      <ContactForm />
    </>
  );
};

export default CoursesPage;
