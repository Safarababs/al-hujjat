import React from "react";
import { Helmet } from "react-helmet";

function Courses() {
  return (
    <>
      <Helmet>
        <title>Courses | AL Hujjat Online Quran Academy</title>
        <meta
          name="description"
          content="Explore our Shia Islamic courses including Quranic Studies, Hadith, Fiqh, Arabic Language, Spiritual Development, and Community Outreach."
        />
        <meta
          name="keywords"
          content="Shia Quran Courses, Online Islamic Studies, Tajweed, Hadith, Fiqh, Arabic, AL Hujjat Academy"
        />
        <link rel="canonical" href="https://yourdomain.com/courses" />
      </Helmet>

      <div className="container-fluid activities py-5">
        <div className="container py-5">
          <div
            className="mx-auto text-center mb-5 wow fadeIn"
            data-wow-delay="0.1s"
            style={{ maxWidth: "700px" }}
          >
            <h1 className="display-3">Our Courses</h1>
          </div>

          <div className="row g-4">
            {/* Quranic Studies */}
            <div className="col-lg-6 col-xl-4">
              <div
                className="activities-item p-4 wow fadeIn"
                data-wow-delay="0.1s"
              >
                <i className="fa fa-mosque fa-4x text-dark"></i>
                <div className="ms-4">
                  <h4>Quranic Studies</h4>
                  <p className="mb-4">
                    Offering classes on recitation (Tajweed), memorization
                    (Hifz), and understanding (Tafseer) of the Quran.
                  </p>
                  <a href="/" className="btn btn-primary px-3">
                    Read More
                  </a>
                </div>
              </div>
            </div>

            {/* Hadith Studies */}
            <div className="col-lg-6 col-xl-4">
              <div
                className="activities-item p-4 wow fadeIn"
                data-wow-delay="0.3s"
              >
                <i className="fa fa-book fa-4x text-dark"></i>
                <div className="ms-4">
                  <h4>Hadith Studies</h4>
                  <p className="mb-4">
                    Classes focusing on the study and understanding of the
                    sayings and actions of the Prophet Muhammad (peace be upon
                    him).
                  </p>
                  <a href="/" className="btn btn-primary px-3">
                    Read More
                  </a>
                </div>
              </div>
            </div>

            {/* Fiqh & History */}
            <div className="col-lg-6 col-xl-4">
              <div
                className="activities-item p-4 wow fadeIn"
                data-wow-delay="0.5s"
              >
                <i className="fa fa-quran fa-4x text-dark"></i>
                <div className="ms-4">
                  <h4>Islamic Jurisprudence (Fiqh)</h4>
                  <p className="mb-4">
                    Courses on Islamic law and its application in daily life.
                    Islamic History: Exploring the history of Islam and its
                    civilizations.
                  </p>
                  <a href="/" className="btn btn-primary px-3">
                    Read More
                  </a>
                </div>
              </div>
            </div>

            {/* Arabic Language */}
            <div className="col-lg-6 col-xl-4">
              <div
                className="activities-item p-4 wow fadeIn"
                data-wow-delay="0.1s"
              >
                <i className="fa fa-book fa-4x text-dark"></i>
                <div className="ms-4">
                  <h4>Arabic Language</h4>
                  <p className="mb-4">
                    Teaching Arabic for better understanding of the Quran and
                    Islamic texts.
                  </p>
                  <a href="/" className="btn btn-primary px-3">
                    Read More
                  </a>
                </div>
              </div>
            </div>

            {/* Spiritual Development */}
            <div className="col-lg-6 col-xl-4">
              <div
                className="activities-item p-4 wow fadeIn"
                data-wow-delay="0.3s"
              >
                <i className="fa fa-book-open fa-4x text-dark"></i>
                <div className="ms-4">
                  <h4>Spiritual Development</h4>
                  <p className="mb-4">
                    Workshops and lectures on building spirituality and a strong
                    connection with Allah.
                  </p>
                  <a href="/" className="btn btn-primary px-3">
                    Read More
                  </a>
                </div>
              </div>
            </div>

            {/* Community Outreach */}
            <div className="col-lg-6 col-xl-4">
              <div
                className="activities-item p-4 wow fadeIn"
                data-wow-delay="0.5s"
              >
                <i className="fa fa-hands fa-4x text-dark"></i>
                <div className="ms-4">
                  <h4>Community Outreach</h4>
                  <p className="mb-4">
                    Programs to engage with the broader community and promote
                    understanding of Islam.
                  </p>
                  <a href="/" className="btn btn-primary px-3">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Courses;
