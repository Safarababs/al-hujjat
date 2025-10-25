import React from "react";
import Home from "./Home/Home";
import About from "./About/About";
import Courses from "./Courses/Courses";
import Classes from "./Classes/Classes";
import Sermon from "./Sermon/Sermon";
import Blog from "./Blogs/Blogs";
import Team from "./Team/Team";
import Testimonials from "./Testimonial/Testimonial";
import Footer from "./Footer/Footer";

const Landing = () => {
  return (
    <>
      <Home />
      <About />
      <Courses />
      <Classes />
      <Sermon />
      <Blog />
      <Team />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Landing;
