import React from "react";
import { Helmet } from "react-helmet";

function StudentPortalHero() {
  return (
    <>
      <Helmet>
        <title>Student Portal | AL Hujjat Online Quran Academy</title>
        <meta
          name="description"
          content="Access your personalized dashboard for Quran classes, attendance, aamaal tracking, and spiritual progress at AL Hujjat Online Quran Academy."
        />
        <meta
          name="keywords"
          content="Student portal, Quran dashboard, Islamic learning, AL Hujjat Academy, Shia online classes"
        />
        <link rel="canonical" href="https://yourdomain.com/student-portal" />
      </Helmet>

      <header className="container-fluid hero-header">
        <div className="container">
          <h1 className="display-1 text-dark">Welcome to Student Portal</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li
                className="breadcrumb-item text-dark active"
                aria-current="page"
              >
                Istikhara
              </li>
            </ol>
          </nav>
        </div>
      </header>
    </>
  );
}

export default StudentPortalHero;
