// src/layouts/MainLayout.jsx
import TopbarNavbar from "../components/Header/Navbar";
import Footer from "../components/Landing/Footer/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <TopbarNavbar />
      <Outlet />
      <Footer />
    </>
  );
}
