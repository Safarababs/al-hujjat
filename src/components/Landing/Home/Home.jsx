import React from "react";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        <title>Home | AL Hujjat Online Quran Academy</title>
        <meta
          name="description"
          content="Welcome to AL Hujjat Online Quran Academy. Learn Quran, Tajweed, Mehdiwiat, and Nehjul Balagha with certified Shia scholars."
        />
        <meta
          name="keywords"
          content="Shia Quran Academy, Online Tajweed, Mehdiwiat course, Nehjul Balagha, AL Hujjat"
        />
        <link rel="canonical" href="https://yourdomain.com/" />
      </Helmet>

      <div className="container-fluid hero-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="hero-header-inner animated zoomIn">
                <p className="fs-4 text-dark">WELCOME TO</p>
                <h1 className="display-1 mb-5 text-dark">AL Hujjat Academy</h1>
                <a href="/" className="btn btn-primary py-3 px-5">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
