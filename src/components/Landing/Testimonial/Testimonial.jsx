import React from "react";
import { Helmet } from "react-helmet";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 testimonials at once on desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1200, // Large screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Tablets
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      name: "Zainab Ali",
      profession: "Student",
      image: "img/testimonial-1.jpg",
      quote:
        "AL Hujjat helped me improve my Tajweed and understand the Quran deeply. The instructors are amazing!",
    },
    {
      name: "Mohammed Raza",
      profession: "Parent",
      image: "img/testimonial-2.jpg",
      quote:
        "My children love their classes. The academy blends spirituality with discipline beautifully.",
    },
    {
      name: "Fatima Hussain",
      profession: "Volunteer",
      image: "img/testimonial-3.jpg",
      quote:
        "Being part of AL Hujjat has been a blessing. The community is warm, and the learning is transformative.",
    },
    {
      name: "Ali Mehdi",
      profession: "Teacher",
      image: "img/testimonial-4.jpg",
      quote:
        "Teaching here is a privilege. The students are eager, and the curriculum is rooted in true Islamic values.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Testimonials | AL Hujjat Online Quran Academy</title>
        <meta
          name="description"
          content="Read what students and community members say about AL Hujjat Online Quran Academy. Discover their experiences with Quran, Tajweed, and spiritual growth."
        />
        <meta
          name="keywords"
          content="Islamic testimonials, Quran academy reviews, student feedback, AL Hujjat experiences"
        />
        <link rel="canonical" href="https://yourdomain.com/testimonials" />
      </Helmet>

      <div className="container-fluid testimonial py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto mb-5"
            style={{ maxWidth: "700px" }}
          >
            <p className="fs-5 text-uppercase text-primary">Testimonials</p>
            <h1 className="display-3">What Our Students Say</h1>
          </div>

          <Slider {...settings}>
            {testimonials.map((person, index) => (
              <div key={index} className="testimonial-item px-3">
                <div className="d-flex mb-3">
                  <div className="position-relative">
                    <img
                      src={person.image}
                      className="img-fluid"
                      alt={person.name}
                    />
                    <div
                      className="btn-md-square bg-primary rounded-circle position-absolute"
                      style={{ top: "25px", left: "-25px" }}
                    >
                      <i className="fa fa-quote-left text-dark"></i>
                    </div>
                  </div>
                  <div className="ps-3 my-auto">
                    <h5 className="mb-0">{person.name}</h5>
                    <p className="m-0">{person.profession}</p>
                  </div>
                </div>
                <div className="testimonial-content">
                  <div className="d-flex">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star text-primary"></i>
                    ))}
                  </div>
                  <p className="fs-5 m-0 pt-3">{person.quote}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
