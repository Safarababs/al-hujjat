import React from "react";
import { Helmet } from "react-helmet";

const IstikharaServices = () => {
  return (
    <>
      <Helmet>
        <title>Istikhara Services | AL Hujjat Academy</title>
        <meta
          name="description"
          content="Seek divine guidance through Istikhara with AL Hujjat Academy's spiritual support."
        />
      </Helmet>

      <header className="container-fluid hero-header">
        <div className="container">
          <h1 className="display-1 text-dark">Istikhara Services</h1>
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

      <section className="container py-5">
        <h2 className="mb-4">What is Istikhara?</h2>
        <p>
          Istikhara is a prayer for seeking Allah’s guidance when facing
          uncertainty. At AL Hujjat Academy, we offer personalized Istikhara
          support through spiritual consultation and dua recitation.
        </p>
        <p>
          Submit your request and our scholars will perform Istikhara on your
          behalf, with sincerity and care.
        </p>
        <a href="/contact" className="btn btn-primary mt-3">
          Request Istikhara
        </a>
      </section>
    </>
  );
};

export default IstikharaServices;
