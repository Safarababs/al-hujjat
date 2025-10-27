// AboutHero.jsx
import React from "react";
import { Helmet } from "react-helmet";

const AboutHero = () => {
  return (
    <>
      <Helmet>
        <title>About Us | AL Hujjat Online Quran Academy</title>
        <meta
          name="description"
          content="Discover the mission and values of AL Hujjat Academy, dedicated to Quranic education and spiritual growth."
        />
      </Helmet>

      <header className="container-fluid hero-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="hero-header-inner animated zoomIn">
                <h1 className="display-1 text-dark">About Us</h1>
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
                      About
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

export default AboutHero;
