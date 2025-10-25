import React from "react";
import { Helmet } from "react-helmet";

function Sermon() {
  return (
    <>
      <Helmet>
        <title>Spiritual Resources | AL Hujjat Online Quran Academy</title>
        <meta
          name="description"
          content="Explore spiritual lectures and multimedia resources from AL Hujjat Online Quran Academy. Topics include closeness to Allah, Hajj, and pillars of Islam."
        />
        <meta
          name="keywords"
          content="Shia lectures, Islamic spirituality, Quran reflections, Mehdiwiat, Nehjul Balagha, AL Hujjat Academy"
        />
        <link rel="canonical" href="https://yourdomain.com/lectures" />
      </Helmet>

      <div className="container-fluid sermon py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto mb-5 wow fadeIn"
            data-wow-delay="0.1s"
            style={{ maxWidth: "700px" }}
          >
            <p className="fs-5 text-uppercase text-primary">
              Spiritual Resources
            </p>
            <h1 className="display-3">Join the Journey of Faith</h1>
          </div>

          <div className="row g-4 justify-content-center">
            {/* Lecture 1 */}
            <div className="col-lg-6 col-xl-4">
              <div className="sermon-item wow fadeIn" data-wow-delay="0.1s">
                <div className="overflow-hidden p-4 pb-0">
                  <img
                    src="img/sermon-1.jpg"
                    className="img-fluid w-100"
                    alt="Closer to Allah"
                  />
                </div>
                <div className="p-4">
                  <div className="sermon-meta d-flex justify-content-between pb-2">
                    <div>
                      <small>
                        <i className="fa fa-calendar me-2 text-muted"></i>13 Nov
                        2023
                      </small>
                      <small className="ms-3">
                        <i className="fas fa-user me-2 text-muted"></i>Admin
                      </small>
                    </div>
                    <div>
                      <i className="fas fa-video text-muted me-2"></i>
                      <i className="fas fa-headphones text-muted me-2"></i>
                      <i className="fas fa-file-alt text-muted me-2"></i>
                      <i className="fas fa-image text-muted"></i>
                    </div>
                  </div>
                  <h4 className="lh-sm mb-3">How to Get Closer to Allah</h4>
                  <p>
                    A heartfelt reflection on spiritual growth, sincerity in
                    worship, and building a deeper connection with the Divine.
                  </p>
                </div>
              </div>
            </div>

            {/* Lecture 2 */}
            <div className="col-lg-6 col-xl-4">
              <div className="sermon-item wow fadeIn" data-wow-delay="0.3s">
                <div className="overflow-hidden p-4 pb-0">
                  <img
                    src="img/sermon-2.jpg"
                    className="img-fluid w-100"
                    alt="Hajj Lecture"
                  />
                </div>
                <div className="p-4">
                  <div className="sermon-meta d-flex justify-content-between pb-2">
                    <div>
                      <small>
                        <i className="fa fa-calendar me-2 text-muted"></i>13 Nov
                        2023
                      </small>
                      <small className="ms-3">
                        <i className="fas fa-user me-2 text-muted"></i>Admin
                      </small>
                    </div>
                    <div>
                      <i className="fas fa-video text-muted me-2"></i>
                      <i className="fas fa-headphones text-muted me-2"></i>
                      <i className="fas fa-file-alt text-muted me-2"></i>
                      <i className="fas fa-image text-muted"></i>
                    </div>
                  </div>
                  <h4 className="lh-sm mb-3">Importance of Hajj in Islam</h4>
                  <p>
                    Discover the spiritual significance of Hajj, its
                    transformative power, and its role in uniting the global
                    Muslim community.
                  </p>
                </div>
              </div>
            </div>

            {/* Lecture 3 */}
            <div className="col-lg-6 col-xl-4">
              <div className="sermon-item wow fadeIn" data-wow-delay="0.5s">
                <div className="overflow-hidden p-4 pb-0">
                  <img
                    src="img/sermon-3.jpg"
                    className="img-fluid w-100"
                    alt="Pillars of Islam"
                  />
                </div>
                <div className="p-4">
                  <div className="sermon-meta d-flex justify-content-between pb-2">
                    <div>
                      <small>
                        <i className="fa fa-calendar me-2 text-muted"></i>13 Nov
                        2023
                      </small>
                      <small className="ms-3">
                        <i className="fas fa-user me-2 text-muted"></i>Admin
                      </small>
                    </div>
                    <div>
                      <i className="fas fa-video text-muted me-2"></i>
                      <i className="fas fa-headphones text-muted me-2"></i>
                      <i className="fas fa-file-alt text-muted me-2"></i>
                      <i className="fas fa-image text-muted"></i>
                    </div>
                  </div>
                  <h4 className="lh-sm mb-3">The Pillars of Islam</h4>
                  <p>
                    A powerful lecture on the foundational acts of worship and
                    their deeper meanings in the life of a believer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sermon;
