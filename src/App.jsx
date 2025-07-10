import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import TimelineSection from './components/TimelineSection';
import ContactSection from './components/ContactSection';
import LeetCodeStatsSection from "./components/LeetCodeStatsSection";


function App() {
  return (
    <main className="bg-white text-gray-900">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <LeetCodeStatsSection /> {/* NEW SECTION */}
      <ContactSection />
    </main>
  );
}

export default App;
