import React from "react";
import BackgroundCanvas from "./components/layout/BackgroundCanvas";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import EducationAndAchievements from "./components/EducationAndAchievements";
import Contact from "./components/Contact";
import ProgrammingProfiles from "./components/ProgrammingProfiles";

const App = () => {
  return (
    <div className="font-sans antialiased bg-slate-50 min-h-screen selection:bg-blue-200 selection:text-blue-900">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
        html { scroll-behavior: smooth; }
      `}</style>

      <BackgroundCanvas />
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <ProgrammingProfiles/>
      <EducationAndAchievements />
      <Contact />
    </div>
  );
};

export default App;
