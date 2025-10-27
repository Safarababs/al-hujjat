import React from "react";

function Footer() {
  return (
    <div
      className="container-fluid footer pt-5 wow fadeIn"
      data-wow-delay="0.1s"
      id="footer"
    >
      <div className="container py-5">
        {/* Newsletter Section */}
        <div className="row py-5">
          <div className="col-lg-7">
            <h1 className="text-light mb-0">Subscribe to Our Newsletter</h1>
            <p className="text-secondary">Get the latest news and tips</p>
          </div>
          <div className="col-lg-5">
            <div className="position-relative mx-auto">
              <input
                className="form-control border-0 w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Your email"
              />
              <button
                type="button"
                className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
              >
                Subscribe
              </button>
            </div>
          </div>
          <div className="col-12">
            <div className="border-top border-secondary"></div>
          </div>
        </div>

        {/* Footer Columns */}
        <div className="row g-4 footer-inner">
          {/* About */}
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item mt-5">
              <h4 className="text-light mb-4">
                AL<span className="text-primary"> Hujjat</span>
              </h4>
              <p className="mb-4 text-secondary">
                Dedicated to providing accessible Shia Islamic education through
                Quran, Tajweed, Mehdiwiat, and Nehjul Balagha courses.
              </p>
              <a href="/" className="btn btn-primary py-2 px-4">
                Donate Now
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item mt-5">
              <h4 className="text-light mb-4">Contact Us</h4>
              <div className="d-flex flex-column">
                <h6 className="text-secondary mb-0">Our Address</h6>
                <div className="d-flex align-items-center border-bottom py-4">
                  <span className="flex-shrink-0 btn-square bg-primary me-3 p-4">
                    <i className="fa fa-map-marker-alt text-dark"></i>
                  </span>
                  <a href="/" className="text-body">
                    123 Street, Samaweh, Iraq
                  </a>
                </div>
                <h6 className="text-secondary mt-4 mb-0">Phone</h6>
                <div className="d-flex align-items-center py-4">
                  <span className="flex-shrink-0 btn-square bg-primary me-3 p-4">
                    <i className="fa fa-phone-alt text-dark"></i>
                  </span>
                  <a href="/" className="text-body">
                    +964 770 123 4567
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item mt-5">
              <h4 className="text-light mb-4">Explore</h4>
              <div className="d-flex flex-column align-items-start">
                {[
                  "Home",
                  "About Us",
                  "Our Features",
                  "Contact Us",
                  "Our Blog",
                  "Our Events",
                  "Donations",
                  "Sermons",
                ].map((link, i) => (
                  <a key={i} className="text-body mb-2" href="/">
                    <i className="fa fa-check text-primary me-2"></i>
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Latest Posts */}
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item mt-5">
              <h4 className="text-light mb-4">Latest Posts</h4>
              {[
                {
                  date: "01 Jan 2045",
                  image: "img/blog-mini-1.jpg",
                  title: "Lorem ipsum dolor sit amet elit eros vel",
                },
                {
                  date: "01 Jan 2045",
                  image: "img/blog-mini-2.jpg",
                  title: "Lorem ipsum dolor sit amet elit eros vel",
                },
              ].map((post, i) => (
                <div
                  key={i}
                  className={`d-flex ${
                    i === 0 ? "border-bottom border-secondary" : ""
                  } py-4`}
                >
                  <img
                    src={post.image}
                    className="img-fluid flex-shrink-0"
                    alt={post.title}
                  />
                  <div className="ps-3">
                    <p className="mb-0 text-muted">{post.date}</p>
                    <a href="/" className="text-body">
                      {post.title}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container py-4">
        <div className="border-top border-secondary pb-4"></div>
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            &copy;{" "}
            <a className="border-bottom" href="https://al-hujjat.netlify.app/">
              AL Hujjat Academy
            </a>
            , All Rights Reserved.
          </div>
          <div className="col-md-6 text-center text-md-end">
            Designed By{" "}
            <a className="border-bottom" href="https://al-hujjat.netlify.app/">
              Safar Abbas
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
