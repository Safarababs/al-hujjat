// src/pages/AdminUpload.jsx
import { useEffect, useState } from "react";
import { db } from "../../../../firebase";
import {
  collection,
  getDocs,
  query,
  orderBy,
  addDoc,
  serverTimestamp,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { useAuth } from "../../../../context/AuthContext";

// helper to extract YouTube video ID from different link formats
function extractYouTubeId(url) {
  try {
    if (url.includes("youtu.be/")) {
      return url.split("youtu.be/")[1].split(/[?&]/)[0];
    }
    if (url.includes("youtube.com/watch")) {
      const params = new URL(url).searchParams;
      return params.get("v");
    }
    if (url.includes("youtube.com/embed/")) {
      return url.split("embed/")[1].split(/[?&]/)[0];
    }
    return url; // fallback: assume it's already an ID
  } catch {
    return url;
  }
}

export default function AdminUpload() {
  const { isAdmin } = useAuth();
  const [courses, setCourses] = useState([]);
  const [lectures, setLectures] = useState([]);
  const [form, setForm] = useState({
    courseId: "",
    title: "",
    youtubeUrl: "",
    duration: "",
    published: true,
  });
  const [status, setStatus] = useState({ type: "", msg: "" });

  // Load courses once
  useEffect(() => {
    const loadCourses = async () => {
      try {
        const q = query(collection(db, "courses"), orderBy("title"));
        const snap = await getDocs(q);
        setCourses(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
      } catch (err) {
        console.error("Failed to load courses:", err);
        setStatus({
          type: "danger",
          msg: "Cannot load courses. Check permissions.",
        });
      }
    };
    loadCourses();
  }, []);

  // Load lectures in real-time when a course is selected
  useEffect(() => {
    if (!form.courseId) {
      setLectures([]);
      return;
    }
    const q = query(
      collection(db, "courses", form.courseId, "lectures"),
      orderBy("createdAt", "desc")
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setLectures(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, [form.courseId]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({
      ...f,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", msg: "" });

    if (!isAdmin) {
      setStatus({ type: "danger", msg: "Unauthorized: Admins only." });
      return;
    }

    if (!form.courseId) {
      setStatus({ type: "danger", msg: "Please select a course first." });
      return;
    }

    try {
      const ref = collection(db, "courses", form.courseId, "lectures");
      const videoId = extractYouTubeId(form.youtubeUrl);

      // Shift existing lectures down by +1
      const existing = await getDocs(ref);
      for (const d of existing.docs) {
        await updateDoc(d.ref, { order: (d.data().order || 0) + 1 });
      }

      // Add new lecture as order 1
      await addDoc(ref, {
        title: form.title,
        youtubeId: videoId,
        duration: form.duration,
        order: 1,
        published: form.published,
        createdAt: serverTimestamp(),
      });

      setStatus({ type: "success", msg: "Lecture uploaded successfully." });
      setForm((f) => ({
        ...f,
        title: "",
        youtubeUrl: "",
        duration: "",
      }));
    } catch (err) {
      console.error("Upload failed:", err);
      setStatus({
        type: "danger",
        msg: "Upload failed. Check permissions and try again.",
      });
    }
  };

  const handleDelete = async (lectureId) => {
    try {
      await deleteDoc(doc(db, "courses", form.courseId, "lectures", lectureId));
      setStatus({ type: "success", msg: "Lecture deleted." });
    } catch (err) {
      console.error("Delete failed:", err);
      setStatus({ type: "danger", msg: "Failed to delete lecture." });
    }
  };

  return (
    <div className="container py-4" style={{ maxWidth: 720 }}>
      <h3 className="mb-3">Admin: Upload lecture</h3>
      {status.msg && (
        <div className={`alert alert-${status.type}`}>{status.msg}</div>
      )}

      {/* Upload form */}
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-3">
          <label className="form-label">Course</label>
          <select
            name="courseId"
            className="form-select"
            value={form.courseId}
            onChange={handleChange}
            required
          >
            <option value="">Select course</option>
            {courses.map((c) => (
              <option key={c.id} value={c.id}>
                {c.title}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Lecture title</label>
          <input
            name="title"
            className="form-control"
            value={form.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">YouTube video link</label>
          <input
            name="youtubeUrl"
            className="form-control"
            placeholder="Paste full YouTube link"
            value={form.youtubeUrl}
            onChange={handleChange}
            required
          />
          <div className="form-text">
            Paste the full YouTube link (e.g., https://youtu.be/dQw4w9WgXcQ).
          </div>
        </div>

        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Duration</label>
            <input
              name="duration"
              className="form-control"
              placeholder="e.g., 12:34"
              value={form.duration}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div className="form-check mt-4">
              <input
                className="form-check-input"
                type="checkbox"
                name="published"
                checked={form.published}
                onChange={handleChange}
              />
              <label className="form-check-label">Published</label>
            </div>
          </div>
        </div>

        <button className="btn btn-success mt-3" type="submit">
          Upload lecture
        </button>
      </form>

      {/* Lecture list */}
      {form.courseId && (
        <div>
          <h5>Lectures for selected course</h5>
          {lectures.length === 0 && (
            <p className="text-muted">No lectures yet.</p>
          )}
          <ul className="list-group">
            {lectures.map((lec) => (
              <li
                key={lec.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <span>
                  <strong>{lec.title}</strong> ({lec.duration || "?"}){" "}
                  {lec.published ? (
                    <span className="badge bg-success">Published</span>
                  ) : (
                    <span className="badge bg-secondary">Draft</span>
                  )}
                </span>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => handleDelete(lec.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
