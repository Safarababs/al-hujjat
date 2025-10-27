// SermonsHero.jsx
import React from "react";
import { Helmet } from "react-helmet";

const SermonsHero = () => {
  return (
    <>
      <Helmet>
        <title>Sermons | AL Hujjat Online Quran Academy</title>
        <meta
          name="description"
          content="Listen to inspiring sermons, khutbahs, and spiritual reflections from AL Hujjat Academy's scholars and teachers."
        />
      </Helmet>

      <header className="container-fluid hero-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="hero-header-inner animated zoomIn">
                <h1 className="display-1 text-dark">Sermons</h1>
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
                      Sermons
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

export default SermonsHero;
