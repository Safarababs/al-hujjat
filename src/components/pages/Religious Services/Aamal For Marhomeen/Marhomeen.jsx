import React from "react";
import { Helmet } from "react-helmet";

const AamaalForMarhomeen = () => {
  return (
    <>
      <Helmet>
        <title>Aamaal for Marhomeen | AL Hujjat Academy</title>
        <meta
          name="description"
          content="Honor your departed loved ones with Quranic recitations and spiritual aamaal."
        />
      </Helmet>

      <header className="container-fluid hero-header">
        <div className="container">
          <h1 className="display-1 text-dark">Aamaal For Marhomeen</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li
                className="breadcrumb-item text-dark active"
                aria-current="page"
              >
                Aamaal
              </li>
            </ol>
          </nav>
        </div>
      </header>

      <section className="container py-5">
        <h2 className="mb-4">Spiritual Gifts for the Departed</h2>
        <p>
          AL Hujjat Academy offers Quranic recitations, Surah Yaseen, Dua
          Kumayl, and other aamaal for the souls of your marhoomeen.
        </p>
        <p>
          These acts of worship are a source of mercy and reward for the
          deceased and comfort for the living.
        </p>
        <a href="/contact" className="btn btn-primary mt-3">
          Submit Names for Aamaal
        </a>
      </section>
    </>
  );
};

export default AamaalForMarhomeen;
