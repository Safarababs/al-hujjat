// NotFound.jsx
import React from "react";
import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 Error | AL Hujjat Online Quran Academy</title>
        <meta
          name="description"
          content="Page not found. Return to AL Hujjat Academy's homepage or explore our Quranic courses."
        />
      </Helmet>

      <section className="container-fluid py-5 fadeIn">
        <div className="container text-center py-5">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <i
                className="bi bi-exclamation-triangle display-1 text-primary"
                aria-hidden="true"
              ></i>
              <h1 className="display-1">404</h1>
              <h1 className="mb-4">Page Not Found</h1>
              <p className="mb-4">
                We’re sorry, the page you’re looking for doesn’t exist on our
                website. Please return to the homepage or explore our Quranic
                courses.
              </p>
              <a className="btn btn-primary py-3 px-4" href="/">
                Go Back To Home
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
