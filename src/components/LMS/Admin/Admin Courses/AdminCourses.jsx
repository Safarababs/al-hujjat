// src/pages/AdminCourses.jsx
import { useEffect, useState } from "react";
import { db } from "../../../../firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
  getDocs,
} from "firebase/firestore";
import { useAuth } from "../../../../context/AuthContext";

export default function AdminCourses() {
  const { isAdmin } = useAuth();
  const [courses, setCourses] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({
    title: "",
    description: "",
    published: true,
  });

  // Real-time listener for courses
  useEffect(() => {
    const q = collection(db, "courses");
    const unsubscribe = onSnapshot(q, async (snap) => {
      const data = await Promise.all(
        snap.docs.map(async (d) => {
          const lecturesSnap = await getDocs(
            collection(db, "courses", d.id, "lectures")
          );
          return { id: d.id, ...d.data(), lectureCount: lecturesSnap.size };
        })
      );
      setCourses(data);
    });
    return () => unsubscribe();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isAdmin) return;

    try {
      if (editingId) {
        await updateDoc(doc(db, "courses", editingId), {
          title: form.title,
          description: form.description,
          published: form.published,
        });
      } else {
        await addDoc(collection(db, "courses"), {
          title: form.title,
          description: form.description,
          published: form.published,
          createdAt: serverTimestamp(),
        });
      }
      setForm({ title: "", description: "", published: true });
      setEditingId(null);
    } catch (err) {
      console.error("Error saving course:", err);
    }
  };

  const handleEdit = (course) => {
    setForm({
      title: course.title,
      description: course.description || "",
      published: course.published ?? true,
    });
    setEditingId(course.id);
  };

  const handleDelete = async (id) => {
    if (!isAdmin) return;
    if (!window.confirm("Are you sure you want to delete this course?")) return;
    try {
      await deleteDoc(doc(db, "courses", id));
    } catch (err) {
      console.error("Error deleting course:", err);
    }
  };

  return (
    <div className="container py-4" style={{ maxWidth: 640 }}>
      <h3 className="mb-3">Admin: Manage Courses</h3>

      <form onSubmit={handleSubmit} className="mb-4">
        <input
          name="title"
          className="form-control mb-2"
          placeholder="Course title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          className="form-control mb-2"
          placeholder="Course description"
          value={form.description}
          onChange={handleChange}
        />
        <div className="form-check mb-2">
          <input
            type="checkbox"
            className="form-check-input"
            name="published"
            checked={form.published}
            onChange={handleChange}
          />
          <label className="form-check-label">Published</label>
        </div>
        <button className="btn btn-success" type="submit">
          {editingId ? "Update Course" : "Add Course"}
        </button>
        {editingId && (
          <button
            type="button"
            className="btn btn-secondary ms-2"
            onClick={() => {
              setForm({ title: "", description: "", published: true });
              setEditingId(null);
            }}
          >
            Cancel
          </button>
        )}
      </form>

      <ul className="list-group">
        {courses.map((c) => (
          <li
            key={c.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <strong>{c.title}</strong>{" "}
              {!c.published && (
                <span className="badge bg-secondary">Unpublished</span>
              )}
              <div className="text-muted small">{c.description}</div>
            </div>
            <div>
              <span className="badge bg-info me-3">
                {c.lectureCount} lectures
              </span>
              <button
                className="btn btn-sm btn-outline-primary me-2"
                onClick={() => handleEdit(c)}
              >
                Edit
              </button>
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => handleDelete(c.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
