// src/pages/SignIn.jsx
import { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../../../firebase";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useAuth } from "../../../context/AuthContext";

export default function SignIn() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [info, setInfo] = useState(""); // for success messages like reset email sent
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { role, user } = useAuth();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setInfo("");
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, form.email, form.password);
      // navigation will happen in useEffect once role is available
    } catch (err) {
      console.error("Login failed:", err);
      setError("Invalid credentials or network issue.");
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async () => {
    setError("");
    setInfo("");
    if (!form.email) {
      setError("Please enter your email first to reset password.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, form.email);
      setInfo("Password reset email sent. Check your inbox.");
    } catch (err) {
      console.error("Reset failed:", err);
      setError("Failed to send reset email. Check the email address.");
    }
  };

  // Redirect once user + role are available
  useEffect(() => {
    if (user && role) {
      if (role === "admin") {
        navigate("/admin/courses", { replace: true });
      } else {
        navigate("/student", { replace: true });
      }
    }
  }, [user, role, navigate]);

  return (
    <>
      {/* Hero Section */}
      <Helmet>
        <title>Sign In | AL Hujjat Online Quran Academy</title>
        <meta
          name="description"
          content="Sign in to access your personalized dashboard for Quran classes, attendance, and progress at AL Hujjat Online Quran Academy."
        />
        <meta
          name="keywords"
          content="Sign in, Student portal, Quran dashboard, AL Hujjat Academy"
        />
        <link rel="canonical" href="https://yourdomain.com/signin" />
      </Helmet>

      <header className="container-fluid hero-header">
        <div className="container">
          <h1 className="display-1 text-dark">Sign In</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li
                className="breadcrumb-item text-dark active"
                aria-current="page"
              >
                Sign In
              </li>
            </ol>
          </nav>
        </div>
      </header>

      {/* Sign In Form */}
      <div className="container py-5" style={{ maxWidth: 420 }}>
        <h3 className="mb-4">Sign in to your account</h3>
        {error && <div className="alert alert-danger">{error}</div>}
        {info && <div className="alert alert-success">{info}</div>}
        <form onSubmit={handleSubmit}>
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
              autoComplete="current-password"
            />
            <p className="mt-2">
              <button
                type="button"
                className="btn btn-link p-0"
                onClick={handleResetPassword}
              >
                Forgot your password?
              </button>
            </p>
          </div>
          <button className="btn btn-primary w-100" disabled={loading}>
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
        <p className="mt-3">
          No account? <Link to="/signup">Create one</Link>
        </p>
      </div>
    </>
  );
}
