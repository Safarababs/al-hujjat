import { NavLink } from "react-router-dom";
import LogoutButton from "../../Logout Button/LogoutButton";

export default function AdminSidebar() {
  return (
    <aside
      className="d-flex flex-column text-white shadow-lg"
      style={{
        width: 260,
        minHeight: "100vh",
        background: "linear-gradient(180deg, #0d6efd 0%, #6610f2 100%)",
        backdropFilter: "blur(10px)",
      }}
    >
      {/* Centered nav section */}
      <div className="d-flex flex-column flex-grow-1 justify-content-center">
        <h4 className="mb-4 text-center fw-bold border-bottom border-light pb-3">
          ⚡ Admin Panel
        </h4>

        <ul className="nav flex-column gap-2 px-3">
          <li className="nav-item">
            <NavLink
              to="/admin/courses"
              className={({ isActive }) =>
                "nav-link rounded-pill py-2 px-3 d-flex align-items-center gap-2 fw-semibold " +
                (isActive
                  ? "bg-white text-primary shadow-sm"
                  : "text-white-75 hover-glass")
              }
            >
              📚 Manage Courses
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/admin/upload"
              className={({ isActive }) =>
                "nav-link rounded-pill py-2 px-3 d-flex align-items-center gap-2 fw-semibold " +
                (isActive
                  ? "bg-white text-primary shadow-sm"
                  : "text-white-75 hover-glass")
              }
            >
              🎥 Upload Lectures
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Logout pinned at bottom */}
      <div className="mt-auto px-3 pb-3">
        <LogoutButton className="btn btn-outline-light w-100 fw-semibold rounded-pill shadow-sm" />
      </div>
    </aside>
  );
}
