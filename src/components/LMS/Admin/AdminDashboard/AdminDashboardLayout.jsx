import AdminSidebar from "../Admin Sidebar/AdminSidebar";
import { Outlet } from "react-router-dom";

export default function AdminDashboardLayout() {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        className="bg-dark text-white p-0 shadow-sm"
        style={{ width: "240px", minHeight: "100vh", position: "fixed" }}
      >
        <AdminSidebar />
      </div>

      {/* Main content */}
      <div
        className="flex-grow-1 p-4"
        style={{
          marginLeft: "240px",
          backgroundColor: "#f8f9fa",
          minHeight: "100vh",
        }}
      >
        <div className="card shadow-sm p-4 h-100">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
