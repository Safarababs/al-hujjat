// src/pages/StudentDashboard.jsx
import { useEffect, useState } from "react";
import { db } from "../../../firebase";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import LogoutButton from "../Logout Button/LogoutButton";

function YouTubeEmbed({ videoId }) {
  const src = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="ratio ratio-16x9">
      <iframe
        src={src}
        title="Lecture"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export default function StudentDashboard() {
  const [courses, setCourses] = useState([]);
  const [selectedCourseId, setSelectedCourseId] = useState("");
  const [lectures, setLectures] = useState([]);

  useEffect(() => {
    const loadCourses = async () => {
      const q = query(
        collection(db, "courses"),
        where("published", "==", true)
      );
      const snap = await getDocs(q);
      const data = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      setCourses(data);
      if (data.length > 0) setSelectedCourseId(data[0].id);
    };
    loadCourses();
  }, []);

  useEffect(() => {
    const loadLectures = async () => {
      if (!selectedCourseId) return;
      const q = query(
        collection(db, "courses", selectedCourseId, "lectures"),
        where("published", "==", true),
        orderBy("order", "asc")
      );
      const snap = await getDocs(q);
      setLectures(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    };
    loadLectures();
  }, [selectedCourseId]);

  return (
    <div className="container py-4">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h3 className="mb-0">Student dashboard</h3>
        <select
          className="form-select"
          style={{ maxWidth: 280 }}
          value={selectedCourseId}
          onChange={(e) => setSelectedCourseId(e.target.value)}
        >
          {courses.map((c) => (
            <option key={c.id} value={c.id}>
              {c.title}
            </option>
          ))}
        </select>
      </div>

      {lectures.length === 0 ? (
        <div className="alert alert-info">No lectures yet for this course.</div>
      ) : (
        <div className="row g-4">
          {lectures.map((l) => (
            <div className="col-md-6" key={l.id}>
              <div className="card h-100">
                <YouTubeEmbed videoId={l.youtubeId} />
                <div className="card-body">
                  <h5 className="card-title">{l.title}</h5>
                  <p className="card-text text-muted">
                    {l.duration ? `Duration: ${l.duration}` : "Lecture"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <LogoutButton />
    </div>
  );
}
