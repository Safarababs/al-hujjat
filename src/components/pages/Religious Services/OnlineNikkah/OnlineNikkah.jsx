import React from "react";
import { Helmet } from "react-helmet";

const OnlineNikkah = () => {
  return (
    <>
      <Helmet>
        <title>Online Nikkah | AL Hujjat Academy</title>
        <meta
          name="description"
          content="Facilitate your Islamic marriage with AL Hujjat Academy's Online Nikkah services."
        />
      </Helmet>

      <header className="container-fluid hero-header">
        <div className="container">
          <h1 className="display-1 text-dark">Online Nikkah</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li
                className="breadcrumb-item text-dark active"
                aria-current="page"
              >
                Online Nikkah
              </li>
            </ol>
          </nav>
        </div>
      </header>

      <section className="container py-5">
        <h2 className="mb-4">Islamic Marriage Made Easy</h2>
        <p>
          AL Hujjat Academy offers Online Nikkah services for couples seeking a
          Sharia-compliant marriage ceremony with convenience and spiritual
          integrity.
        </p>
        <p>
          Our scholars guide you through the process, ensuring all Islamic
          requirements are fulfilled.
        </p>
        <a href="/contact" className="btn btn-primary mt-3">
          Schedule Your Nikkah
        </a>
      </section>
    </>
  );
};

export default OnlineNikkah;
