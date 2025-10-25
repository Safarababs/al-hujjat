import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import TopbarNavbar from "./components/Header/Navbar";
import Landing from "./components/Landing/Landing";

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
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
};

export default App;
