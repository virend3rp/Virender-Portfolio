import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import AboutPage from "./components/About";
import HeroSection from "./components/HeroSection"; // Homepage
import ProjectsPage from "./components/Projects"
import SkillsPage from "./components/Skills";
import ContactPage from "./components/Contact"
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
