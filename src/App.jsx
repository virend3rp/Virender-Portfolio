import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import AboutPage from "./components/About";
import HeroSection from "./components/HeroSection"; // Homepage
import Projects from "./components/Projects"
import SkillsPage from "./components/Skills";
import ContactPage from "./components/Contact"
import Experience from "./components/Experience";
import FooterContact from "./components/FooterContact";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/skills" element={<SkillsPage />} />
      </Routes>
      <FooterContact/>
    </>
  );
}

export default App;
