import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import AboutPage from "./components/About";
import HeroSection from "./components/HeroSection"; // Homepage
import Projects from "./components/Projects"
import SkillsPage from "./components/Skills";
import ContactPage from "./components/Contact"
import ProjectDetails from "./components/ProjectDetails";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
