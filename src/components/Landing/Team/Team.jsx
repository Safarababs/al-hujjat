import React from "react";
import { Helmet } from "react-helmet";

function Team() {
  return (
    <>
      <Helmet>
        <title>Our Team | AL Hujjat Online Quran Academy</title>
        <meta
          name="description"
          content="Meet the dedicated educators and organizers behind AL Hujjat Online Quran Academy. Learn about their roles and contributions to Islamic education."
        />
        <meta
          name="keywords"
          content="Shia Quran teachers, Islamic organizers, AL Hujjat team, online instructors"
        />
        <link rel="canonical" href="https://yourdomain.com/team" />
      </Helmet>

      <div className="container-fluid team py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto mb-5 wow fadeIn"
            data-wow-delay="0.1s"
            style={{ maxWidth: "700px" }}
          >
            <p className="fs-5 text-uppercase text-primary">Our Team</p>
            <h1 className="display-3">Meet Our Educators & Organizers</h1>
          </div>

          <div className="row g-5">
            {/* Lead Organizer */}
            <div className="col-lg-4 col-xl-5">
              <div className="team-img wow zoomIn" data-wow-delay="0.1s">
                <img
                  src="img/team-1.jpg"
                  className="img-fluid"
                  alt="Anamul Hasan"
                />
              </div>
            </div>
            <div className="col-lg-8 col-xl-7">
              <div className="team-item wow fadeIn" data-wow-delay="0.1s">
                <h1>Dr. Ghulam Jaffer Qumi</h1>
                <h5 className="fw-normal fst-italic text-primary mb-4">
                  President
                </h5>
                <p className="mb-4">
                  Molana Dr. Ghulam Jaffar Qumi leads AL Hujjat with a vision
                  for accessible, high-quality Shia Islamic education. His
                  leadership ensures the academy stays rooted in faith and
                  excellence.
                </p>
                <div className="team-icon d-flex pb-4 mb-4 border-bottom border-primary">
                  <a className="btn btn-primary btn-lg-square me-2" href="/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-primary btn-lg-square me-2" href="/">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-primary btn-lg-square me-2" href="/">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a className="btn btn-primary btn-lg-square" href="/">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>

              {/* Team Members */}
              <div className="row g-4">
                {[
                  {
                    name: "Mustafa Kamal",
                    role: "Imam",
                    image: "img/team-2.jpg",
                    delay: "0.2s",
                  },
                  {
                    name: "Nahiyan Momen",
                    role: "Teacher",
                    image: "img/team-2.jpg",
                    delay: "0.4s",
                  },
                  {
                    name: "Asfaque Ali",
                    role: "Volunteer",
                    image: "img/team-2.jpg",
                    delay: "0.6s",
                  },
                ].map((member, index) => (
                  <div className="col-md-4" key={index}>
                    <div
                      className={`team-item wow zoomIn`}
                      data-wow-delay={member.delay}
                    >
                      <img
                        src={member.image}
                        className="img-fluid w-100"
                        alt={member.name}
                      />
                      <div className="team-content text-dark text-center py-3">
                        <div className="team-content-inner">
                          <h5 className="mb-0">{member.name}</h5>
                          <p className="text-dark">{member.role}</p>
                          <div className="team-icon d-flex align-items-center justify-content-center">
                            <a
                              className="btn btn-primary btn-sm-square me-2"
                              href="/"
                            >
                              <i className="fab fa-facebook-f"></i>
                            </a>
                            <a
                              className="btn btn-primary btn-sm-square me-2"
                              href="/"
                            >
                              <i className="fab fa-twitter"></i>
                            </a>
                            <a
                              className="btn btn-primary btn-sm-square me-2"
                              href="/"
                            >
                              <i className="fab fa-instagram"></i>
                            </a>
                            <a
                              className="btn btn-primary btn-sm-square"
                              href="/"
                            >
                              <i className="fab fa-linkedin-in"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
