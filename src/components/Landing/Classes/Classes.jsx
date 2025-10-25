import React from "react";
import { Helmet } from "react-helmet";

function Classes() {
  return (
    <>
      <Helmet>
        <title>Classes & Timings | AL Hujjat Online Quran Academy</title>
        <meta
          name="description"
          content="Explore our ongoing Shia Islamic courses including Quranic Studies, Hadith, Fiqh, and Spiritual Development with scheduled timings and enrollment options."
        />
        <meta
          name="keywords"
          content="Shia Quran classes, Online Islamic courses, Tajweed timings, Hadith sessions, AL Hujjat Academy"
        />
        <link rel="canonical" href="https://yourdomain.com/classes" />
      </Helmet>

      <div className="container-fluid event py-5">
        <div className="container py-5">
          <h1 className="display-3 mb-5 wow fadeIn" data-wow-delay="0.1s">
            Ongoing <span className="text-primary">Courses & Timings</span>
          </h1>

          {/* Class 1 */}
          <div className="row g-4 event-item wow fadeIn" data-wow-delay="0.1s">
            <div className="col-3 col-lg-2 pe-0">
              <div className="text-center border-bottom border-dark py-3 px-2">
                <h6>01 Nov 2025</h6>
                <p className="mb-0">Fri 06:55</p>
              </div>
            </div>
            <div className="col-9 col-lg-6 border-start border-dark pb-5">
              <div className="ms-3">
                <h4 className="mb-3">Tajweed & Quran Recitation</h4>
                <p className="mb-4">
                  Learn proper pronunciation and recitation rules with certified
                  Shia instructors. Ideal for beginners and intermediate
                  learners.
                </p>
                <a href="/" className="btn btn-primary px-3">
                  Enroll Now
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="overflow-hidden mb-5">
                <img
                  src="img/events-1.jpg"
                  className="img-fluid w-100"
                  alt="Tajweed Class"
                />
              </div>
            </div>
          </div>

          {/* Class 2 */}
          <div className="row g-4 event-item wow fadeIn" data-wow-delay="0.3s">
            <div className="col-3 col-lg-2 pe-0">
              <div className="text-center border-bottom border-dark py-3 px-2">
                <h6>02 Nov 2025</h6>
                <p className="mb-0">Wed 11:30</p>
              </div>
            </div>
            <div className="col-9 col-lg-6 border-start border-dark pb-5">
              <div className="ms-3">
                <h4 className="mb-3">Hadith & Islamic Ethics</h4>
                <p className="mb-4">
                  Explore the sayings of the Prophet and Imams with practical
                  lessons on ethics and daily life. Open to all age groups.
                </p>
                <a href="/" className="btn btn-primary px-3">
                  Enroll Now
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="overflow-hidden mb-5">
                <img
                  src="img/events-2.jpg"
                  className="img-fluid w-100"
                  alt="Hadith Class"
                />
              </div>
            </div>
          </div>

          {/* Class 3 */}
          <div className="row g-4 event-item wow fadeIn" data-wow-delay="0.5s">
            <div className="col-3 col-lg-2 pe-0">
              <div className="text-center border-bottom border-dark py-3 px-2">
                <h6>03 Nov 2025</h6>
                <p className="mb-0">Thu 11:30</p>
              </div>
            </div>
            <div className="col-9 col-lg-6 border-start border-dark pb-5">
              <div className="ms-3">
                <h4 className="mb-3">Fiqh & Islamic Law</h4>
                <p className="mb-4">
                  Understand Shia jurisprudence and its application in modern
                  life. Includes Q&A sessions and practical case studies.
                </p>
                <a href="/" className="btn btn-primary px-3">
                  Enroll Now
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="overflow-hidden mb-5">
                <img
                  src="img/events-3.jpg"
                  className="img-fluid w-100"
                  alt="Fiqh Class"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Classes;
