// CoursesHero.jsx
import React from "react";
import { Helmet } from "react-helmet";

const CoursesHero = () => {
  return (
    <>
      <Helmet>
        <title>Courses | AL Hujjat Online Quran Academy</title>
        <meta
          name="description"
          content="Explore Quranic courses offered by AL Hujjat Academy including Tajweed, Tafsir, and Grammar."
        />
      </Helmet>

      <header className="container-fluid hero-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="hero-header-inner animated zoomIn">
                <h1 className="display-1 text-dark">Courses</h1>
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
                      Courses
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

export default CoursesHero;
