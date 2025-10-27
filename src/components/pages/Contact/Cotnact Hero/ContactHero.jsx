// ContactHero.jsx
import React from "react";
import { Helmet } from "react-helmet";

const ContactHero = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | AL Hujjat Online Quran Academy</title>
        <meta
          name="description"
          content="Reach out to AL Hujjat Academy for Quranic course inquiries, registration, or spiritual guidance."
        />
      </Helmet>

      <header className="container-fluid hero-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="hero-header-inner animated zoomIn">
                <h1 className="display-1 text-dark">Contact</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="/pages">Pages</a>
                    </li>
                    <li
                      className="breadcrumb-item text-dark active"
                      aria-current="page"
                    >
                      Contact
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default ContactHero;
