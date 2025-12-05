import React from "react";
import portfolioData from "../data/portfolioData";
import useScrollReveal from "../hooks/useScrollReveal";
import Typewriter from "./ui/Typewriter";
import { Code, Server, Database, ArrowRight, Linkedin, Github, Mail } from "../icons/Icons";
import profile from "../image.png";

const Hero = () => {
  const [ref, isVisible] = useScrollReveal(0.1);

  return (
    <section
      id="about"
      ref={ref}
      className={`min-h-screen flex items-center pt-20 relative z-10 transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Hero Image */}
          <div className="order-1 flex justify-center md:justify-start relative">
            <div className="relative w-48 h-48 md:w-64 md:h-64 group">
              {/* Background Glow */}
              <div className="absolute inset-0  rounded-full rotate-6 opacity-20 blur-xl animate-pulse"></div>

              {/* Profile Image */}
              <img
                src={profile}
                alt="Profile"
                className="relative w-full h-full object-cover rounded-full shadow-2xl border-4 border-white z-10 transition-transform duration-500 hover:scale-105"
              />

              {/* Orbiting Icons */}
              <div className="absolute top-0 left-0 w-full h-full animate-spin-slow pointer-events-none z-20">
                {/* Top Center */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white p-2 rounded-full shadow-lg border border-slate-100 animate-counter-spin">
                  <Code size={20} className="text-blue-600" />
                </div>

                {/* Middle Right */}
                <div className="absolute top-1/2 -right-4 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg border border-slate-100 animate-counter-spin">
                  <Server size={20} className="text-purple-600" />
                </div>

                {/* Bottom Center */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white p-2 rounded-full shadow-lg border border-slate-100 animate-counter-spin">
                  <Database size={20} className="text-green-600" />
                </div>

                {/* ⭐ NEW Middle Left ⭐ */}
                <div className="absolute top-1/2 -left-4 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg border border-slate-100 animate-counter-spin">
                  <Github size={20} className="text-slate-900" />
                </div>
              </div>

            </div>
          </div>

          {/* Text Content */}
          <div className="order-2 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Hello, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 animate-text-flow">
                {portfolioData.personalInfo.name.split(" ")[0]}
              </span>
            </h1>

            <div className="text-lg md:text-2xl font-medium h-8 text-slate-500">
              I am a <Typewriter words={portfolioData.personalInfo.titles} />
            </div>

            <p className="text-base md:text-lg leading-relaxed text-slate-600 max-w-lg mx-auto md:mx-0">
              {portfolioData.personalInfo.tagline} With extensive experience in building
              high-performance systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <a
                href="#projects"
                className="px-8 py-3.5 rounded-xl text-white font-bold bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 hover:-translate-y-1"
              >
                View Projects <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2 hover:-translate-y-1"
              >
                Contact Me
              </a>
            </div>

            <div className="pt-6 flex justify-center md:justify-start gap-6 border-t border-slate-200 mt-6">
              <a
                href={portfolioData.personalInfo.social.linkedin}
                className="text-slate-400 hover:text-blue-600 transition-all transform hover:scale-110 hover:-translate-y-1"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={portfolioData.personalInfo.social.github}
                className="text-slate-400 hover:text-slate-900 transition-all transform hover:scale-110 hover:-translate-y-1"
              >
                <Github size={24} />
              </a>
              <a
                href={`mailto:${portfolioData.personalInfo.email}`}
                className="text-slate-400 hover:text-red-500 transition-all transform hover:scale-110 hover:-translate-y-1"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .animate-spin-slow { animation: spin 15s linear infinite; }
        .animate-counter-spin { animation: spin 15s linear infinite reverse; }
        .animate-bounce-slight { animation: bounceSlight 2s infinite; }
        .animate-text-flow { background-size: 200% auto; animation: textFlow 3s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes bounceSlight { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
        @keyframes textFlow { to { background-position: 200% center; } }
      `}</style>
    </section>
  );
};

export default Hero;
