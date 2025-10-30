import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

// Layouts
import TopbarNavbar from "./components/Header/Navbar";
import Footer from "./components/Landing/Footer/Footer";

// Public pages
import Landing from "./components/Landing/Landing";
import AboutPage from "./components/pages/about page/AboutPage";
import CoursesPage from "./components/pages/courses page/CoursesPage";
import ContactPage from "./components/pages/Contact/ContactPage";
import Events from "./components/pages/Events/Events";
import Sermons from "./components/pages/Sermons/Sermons";
import Page404 from "./components/pages/Page 404/Page404";
import IstikharaServices from "./components/pages/Religious Services/IstikharaServices/IstikharaServices";
import OnlineNikkah from "./components/pages/Religious Services/OnlineNikkah/OnlineNikkah";

import QuranVerseBanner from "./components/pages/Knowledge Hub/Quran Posts/QuranVerseBanner";
import StudentPortal from "./components/pages/Knowledge Hub/Student Portal/StudentPortal";

// Auth
import SignUp from "./components/LMS/Sign Up/SignUp";
import SignIn from "./components/LMS/Sign In/SignIn";

// Dashboards
import AdminUpload from "./components/LMS/Admin/Admin Upload/AdminUpload";
import AdminCourses from "./components/LMS/Admin/Admin Courses/AdminCourses";
import AdminDashboardLayout from "./components/LMS/Admin/AdminDashboard/AdminDashboardLayout";
import StudentDashboard from "./components/LMS/Student Dashboard/StudentDashboard";
import AamaalForMarhomeen from "./components/pages/Religious Services/Aamal For Marhomeen/Marhomeen";

// Public site layout (Navbar + Footer)
const MainLayout = ({ children }) => (
  <>
    <TopbarNavbar />
    {children}
    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Helmet>
          <title>Learn Tajweed Online | AL Hujjat Academy</title>
          <meta
            name="description"
            content="Join our Shia Tajweed course and master Quran recitation with certified instructors."
          />
          <meta
            name="keywords"
            content="Shia Tajweed, Online Quran, Mehdiwiat, Nehjul Balagha, AL Hujjat Academy"
          />
        </Helmet>

        <Routes>
          {/* Public pages wrapped in MainLayout */}
          <Route
            path="/"
            element={
              <MainLayout>
                <Landing />
              </MainLayout>
            }
          />
          <Route
            path="/about"
            element={
              <MainLayout>
                <AboutPage />
              </MainLayout>
            }
          />
          <Route
            path="/courses"
            element={
              <MainLayout>
                <CoursesPage />
              </MainLayout>
            }
          />
          <Route
            path="/contact"
            element={
              <MainLayout>
                <ContactPage />
              </MainLayout>
            }
          />
          <Route
            path="/events"
            element={
              <MainLayout>
                <Events />
              </MainLayout>
            }
          />
          <Route
            path="/sermons"
            element={
              <MainLayout>
                <Sermons />
              </MainLayout>
            }
          />
          <Route
            path="/istikhara"
            element={
              <MainLayout>
                <IstikharaServices />
              </MainLayout>
            }
          />
          <Route
            path="/nikkah"
            element={
              <MainLayout>
                <OnlineNikkah />
              </MainLayout>
            }
          />
          <Route
            path="/marhoomeen"
            element={
              <MainLayout>
                <AamaalForMarhomeen />
              </MainLayout>
            }
          />
          <Route
            path="/quranBanner"
            element={
              <MainLayout>
                <QuranVerseBanner />
              </MainLayout>
            }
          />
          <Route
            path="/studentportal"
            element={
              <MainLayout>
                <StudentPortal />
              </MainLayout>
            }
          />

          {/* Auth pages also use MainLayout */}
          <Route
            path="/signup"
            element={
              <MainLayout>
                <SignUp />
              </MainLayout>
            }
          />
          <Route
            path="/signin"
            element={
              <MainLayout>
                <SignIn />
              </MainLayout>
            }
          />

          {/* Admin Dashboard (no TopbarNavbar/Footer) */}
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute requireAdmin>
                <AdminDashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route path="courses" element={<AdminCourses />} />
            <Route path="upload" element={<AdminUpload />} />
          </Route>

          {/* Student Dashboard (no TopbarNavbar/Footer) */}
          <Route
            path="/student/*"
            element={
              <ProtectedRoute requireStudent>
                <StudentDashboard />
              </ProtectedRoute>
            }
          />

          {/* 404 */}
          <Route
            path="*"
            element={
              <MainLayout>
                <Page404 />
              </MainLayout>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
