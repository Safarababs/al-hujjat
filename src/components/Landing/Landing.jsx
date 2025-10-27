import React from "react";
import Home from "./Home/Home";
import About from "./About/About";
import Courses from "./Courses/Courses";
import Classes from "./Classes/Classes";
import Sermon from "./Sermon/Sermon";

import Team from "./Team/Team";
import Testimonials from "./Testimonial/Testimonial";

const Landing = () => {
  return (
    <>
      <Home />
      <About />
      <Courses />
      <Classes />
      <Sermon />

      <Team />
      <Testimonials />
    </>
  );
};

export default Landing;
