import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import TopbarNavbar from "./components/Header/Navbar";
import Landing from "./components/Landing/Landing";
import AboutPage from "./components/pages/about page/AboutPage";
import Footer from "./components/Landing/Footer/Footer";
import CoursesPage from "./components/pages/courses page/CoursesPage";
import ContactPage from "./components/pages/Contact/ContactPage";
import Events from "./components/pages/Events/Events";
import Sermons from "./components/pages/Sermons/Sermons";
import Page404 from "./components/pages/Page 404/Page404";
import IstikharaServices from "./components/pages/Religious Services/IstikharaServices/IstikharaServices";
import OnlineNikkah from "./components/pages/Religious Services/OnlineNikkah/OnlineNikkah";
import AamaalForMarhomeen from "./components/pages/Religious Services/Aamal For Marhomeen/Marhomeen";
import QuranVerseBanner from "./components/pages/Knowledge Hub/Quran Posts/QuranVerseBanner";
import StudentPortal from "./components/pages/Knowledge Hub/Student Portal/StudentPortal";

const App = () => {
  return (
    <Router>
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

      <TopbarNavbar />

      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/sermons" element={<Sermons />} />
        <Route path="/istikhara" element={<IstikharaServices />} />
        <Route path="/nikkah" element={<OnlineNikkah />} />
        <Route path="/marhoomeen" element={<AamaalForMarhomeen />} />
        <Route path="/quranBanner" element={<QuranVerseBanner />} />
        <Route path="/studentportal" element={<StudentPortal />} />

        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
