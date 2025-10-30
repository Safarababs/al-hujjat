// src/pages/SignUp.jsx
import { useState } from "react";
import { auth, db } from "../../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { Helmet } from "react-helmet";

export default function SignUp() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      await updateProfile(user, { displayName: form.name });
      await setDoc(doc(db, "users", user.uid), {
        displayName: form.name,
        email: form.email,
        role: "student",
        createdAt: serverTimestamp(),
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <Helmet>
        <title>Sign Up | AL Hujjat Online Quran Academy</title>
        <meta
          name="description"
          content="Create your account to join Quran classes, track attendance, and access your personalized dashboard at AL Hujjat Online Quran Academy."
        />
        <meta
          name="keywords"
          content="Sign up, Student portal, Quran dashboard, AL Hujjat Academy"
        />
        <link rel="canonical" href="https://yourdomain.com/signup" />
      </Helmet>

      <header className="container-fluid hero-header">
        <div className="container">
          <h1 className="display-1 text-dark">Sign Up</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li
                className="breadcrumb-item text-dark active"
                aria-current="page"
              >
                Sign Up
              </li>
            </ol>
          </nav>
        </div>
      </header>

      {/* Sign Up Form */}
      <div className="container py-5" style={{ maxWidth: 480 }}>
        <h3 className="mb-4">Create your account</h3>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit} className="needs-validation">
          <div className="mb-3">
            <label className="form-label">Full name</label>
            <input
              name="name"
              className="form-control"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              name="email"
              type="email"
              className="form-control"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              value={form.password}
              onChange={handleChange}
              required
              autoComplete="new-password"
            />
          </div>
          <button className="btn btn-primary w-100" disabled={loading}>
            {loading ? "Signing up..." : "Sign up"}
          </button>
        </form>
      </div>
    </>
  );
}
