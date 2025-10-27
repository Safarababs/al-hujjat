// ContactForm.jsx
import React from "react";

const ContactForm = () => {
  return (
    <section className="container-fluid contact py-5">
      <div className="container py-5">
        <div
          className="text-center mx-auto mb-5 fadeIn"
          style={{ maxWidth: "700px" }}
        >
          <p className="fs-5 text-uppercase text-primary">Get In Touch</p>
          <h1 className="display-3">Contact For Any Queries</h1>
          <p className="mb-0">
            We’re here to support your Quranic journey. Whether you have
            questions about our courses or need guidance, feel free to reach
            out. We’ll respond as soon as possible, insha’Allah.
          </p>
        </div>

        <form className="row g-4 fadeIn" data-wow-delay="0.3s">
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control bg-transparent p-3"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="col-sm-6">
            <input
              type="email"
              className="form-control bg-transparent p-3"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="col-12">
            <input
              type="text"
              className="form-control bg-transparent p-3"
              placeholder="Subject"
            />
          </div>
          <div className="col-12">
            <textarea
              className="w-100 form-control bg-transparent p-3"
              rows="6"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <div className="col-12 text-center">
            <button
              className="btn btn-primary border-0 py-3 px-5"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
