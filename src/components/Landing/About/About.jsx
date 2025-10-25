import React from "react";
import { Helmet } from "react-helmet";

function About() {
  return (
    <>
      <Helmet>
        <title>About Us | AL Hujjat Online Quran Academy</title>
        <meta
          name="description"
          content="Learn about AL Hujjat Online Quran Academy's mission to provide accessible Shia Islamic education including Quran, Tajweed, Mehdiwiat, and Nehjul Balagha."
        />
        <meta
          name="keywords"
          content="About AL Hujjat, Shia Islamic education, Online Quran classes, Tajweed, Nehjul Balagha"
        />
        <link rel="canonical" href="https://yourdomain.com/about" />
      </Helmet>

      <div className="container-fluid about py-5">
        <div className="container py-5">
          <div className="row g-5 mb-5">
            {/* Images Section */}
            <div className="col-xl-6">
              <div className="row g-4">
                <div className="col-6">
                  <img
                    src="img/about-1.jpg"
                    className="img-fluid h-100 wow zoomIn"
                    data-wow-delay="0.1s"
                    alt="About AL Hujjat 1"
                  />
                </div>
                <div className="col-6">
                  <img
                    src="img/about-2.jpg"
                    className="img-fluid pb-3 wow zoomIn"
                    data-wow-delay="0.1s"
                    alt="About AL Hujjat 2"
                  />
                  <img
                    src="img/about-3.jpg"
                    className="img-fluid pt-3 wow zoomIn"
                    data-wow-delay="0.1s"
                    alt="About AL Hujjat 3"
                  />
                </div>
              </div>
            </div>

            {/* Text Section */}
            <div className="col-xl-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="display-5 pb-4 m-0">About Us</h1>
              <p className="pb-4">
                AL Hujjat Online Quran Academy is dedicated to providing
                comprehensive Shia Islamic education and fostering a deep
                understanding of the Quran, Tajweed, Mehdiwiat, and Nehjul
                Balagha. We strive to create a nurturing environment where
                students can develop a strong connection with their faith and
                community.
              </p>

              {/* Vision & Mission */}
              <div className="row g-4 mb-4">
                <div className="col-md-6">
                  <div className="ps-3 d-flex align-items-center justify-content-start">
                    <span className="bg-primary btn-md-square rounded-circle mt-4 me-2">
                      <i className="fa fa-eye text-dark fa-4x mb-5 pb-2"></i>
                    </span>
                    <div className="ms-4">
                      <h5>Our Vision</h5>
                      <p>
                        To be a leading Shia Islamic educational institution
                        that prepares students to be knowledgeable,
                        compassionate, and ethical leaders who contribute
                        positively to society.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="ps-3 d-flex align-items-center justify-content-start">
                    <span className="bg-primary btn-md-square rounded-circle mt-4 me-2">
                      <i className="fa fa-flag text-dark fa-4x mb-5 pb-2"></i>
                    </span>
                    <div className="ms-4">
                      <h5>Our Mission</h5>
                      <p>
                        To provide high-quality Islamic education that is
                        accessible to all, equipping students with the
                        knowledge, skills, and values needed to navigate the
                        modern world while staying true to Islamic principles.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="row g-2">
                <div className="col-md-6">
                  <p className="mb-2">
                    <i className="fa fa-check text-primary me-3"></i>Charity &
                    Donation
                  </p>
                  <p className="mb-0">
                    <i className="fa fa-check text-primary me-3"></i>Parent
                    Education
                  </p>
                </div>
                <div className="col-md-6">
                  <p className="mb-2">
                    <i className="fa fa-check text-primary me-3"></i>Hadith &
                    Sunnah
                  </p>
                  <p className="mb-0">
                    <i className="fa fa-check text-primary me-3"></i>Mosque
                    Development
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="container text-center bg-primary py-5 wow fadeIn"
            data-wow-delay="0.1s"
          >
            <div className="row g-4 align-items-center">
              <div className="col-lg-2">
                <i className="fa fa-mosque fa-5x text-white"></i>
              </div>
              <div className="col-lg-7 text-center text-lg-start">
                <h1 className="mb-0">
                  Every Muslim Needs To Realise The Importance Of The "Pillar"
                  Of Islam
                </h1>
              </div>
              <div className="col-lg-3">
                <a href="/" className="btn btn-light py-2 px-4">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
