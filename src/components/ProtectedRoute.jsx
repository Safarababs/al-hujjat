// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({
  children,
  requireAdmin = false,
  requireStudent = false,
}) {
  const { user, role, loading } = useAuth();

  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/signin" replace />;

  if (requireAdmin && role !== "admin") {
    return <Navigate to="/student" replace />;
  }
  if (requireStudent && role !== "student") {
    return <Navigate to="/admin" replace />;
  }

  return children;
}
