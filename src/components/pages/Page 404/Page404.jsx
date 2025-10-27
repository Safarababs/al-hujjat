import React from "react";
import NotFoundHero from "./Page 404 Hero/Page404Hero";
import ContactForm from "../Contact/Contact Form/ContactForm";
import NotFound from "./Page 404 details/Page404Details";

const Page404 = () => {
  return (
    <>
      <NotFoundHero />
      <NotFound />
      <ContactForm />
    </>
  );
};

export default Page404;
