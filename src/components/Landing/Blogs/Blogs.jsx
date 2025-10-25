import React from "react";
import { Helmet } from "react-helmet";

function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog & Reflections | AL Hujjat Online Quran Academy</title>
        <meta
          name="description"
          content="Read the latest reflections and articles from AL Hujjat Online Quran Academy. Topics include Islamic values, spirituality, and student insights."
        />
        <meta
          name="keywords"
          content="Islamic blog, Shia reflections, Quran insights, AL Hujjat articles, spirituality"
        />
        <link rel="canonical" href="https://yourdomain.com/blog" />
      </Helmet>

      <div className="container-fluid py-5">
        <div className="container py-5">
          <h1 className="display-3 mb-5 wow fadeIn" data-wow-delay="0.1s">
            Latest From <span className="text-primary">Our Blog</span>
          </h1>

          <div className="row g-4 justify-content-center">
            {[
              {
                title: "Importance of the Pillars of Islam",
                date: "01 Jan 2045",
                author: "Admin",
                comments: 12,
                image: "img/blog-1.jpg",
                excerpt:
                  "Explore the foundational pillars of Islam and their role in shaping a believer’s daily life and spiritual growth.",
              },
              {
                title: "How to Get Closer to Allah",
                date: "01 Jan 2045",
                author: "Admin",
                comments: 12,
                image: "img/blog-2.jpg",
                excerpt:
                  "Practical steps and spiritual reflections on strengthening your connection with the Divine in everyday life.",
              },
              {
                title: "Importance of Hajj in Islam",
                date: "01 Jan 2045",
                author: "Admin",
                comments: 12,
                image: "img/blog-3.jpg",
                excerpt:
                  "A deep dive into the spiritual and communal significance of Hajj and how it transforms the soul.",
              },
            ].map((post, index) => (
              <div className="col-lg-6 col-xl-4" key={index}>
                <div
                  className="blog-item wow fadeIn"
                  data-wow-delay={`${0.1 + index * 0.2}s`}
                >
                  <div className="blog-img position-relative overflow-hidden">
                    <img
                      src={post.image}
                      className="img-fluid w-100"
                      alt={post.title}
                    />
                    <div className="bg-primary d-inline px-3 py-2 text-white position-absolute top-0 end-0">
                      {post.date}
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="blog-meta d-flex justify-content-between pb-2">
                      <div>
                        <small>
                          <i className="fas fa-user me-2 text-muted"></i>By{" "}
                          {post.author}
                        </small>
                        <small className="ms-3">
                          <i className="fa fa-comment-alt me-2 text-muted"></i>
                          {post.comments} Comments
                        </small>
                      </div>
                      <div>
                        <i className="fas fa-bookmark text-muted"></i>
                      </div>
                    </div>
                    <h4 className="lh-sm mb-3">{post.title}</h4>
                    <p className="mb-4">{post.excerpt}</p>
                    <a href="/" className="btn btn-primary px-3">
                      More Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
