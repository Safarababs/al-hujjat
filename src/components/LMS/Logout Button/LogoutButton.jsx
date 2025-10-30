// src/components/LogoutButton.jsx
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/signin"); // redirect to login page
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <button
      className="btn btn-outline-danger w-100 mt-3"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}
