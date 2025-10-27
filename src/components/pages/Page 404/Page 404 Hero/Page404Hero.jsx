// NotFoundHero.jsx
import React from "react";
import { Helmet } from "react-helmet";

const NotFoundHero = () => {
  return (
    <>
      <Helmet>
        <title>404 Error | AL Hujjat Online Quran Academy</title>
        <meta
          name="description"
          content="Page not found. Return to AL Hujjat Academy's homepage or explore our Quranic courses."
        />
      </Helmet>

      <header className="container-fluid hero-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="hero-header-inner animated zoomIn">
                <h1 className="display-1 text-dark">404 Error</h1>
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
                      404 Error
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

export default NotFoundHero;
