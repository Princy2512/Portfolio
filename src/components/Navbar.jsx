import React, { useState, useEffect } from "react";
import portfolioData from "../data/portfolioData";
import { Menu, X, ArrowRight } from "../icons/Icons";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Profiles", href: "#profiles" },
    { name: "Education", href: "#education" },
    { name: "Achievements", href: "#education" },
    { name: "Contact", href: "#contact" },
    
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
        <a
          href="#"
          className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-1 group"
        >
          Shubham Shekhaliya
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a
            href={portfolioData.personalInfo.resumeUrl}
            className="px-5 py-2.5 rounded-full text-white text-sm font-semibold bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/30 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            Download Resume
            <ArrowRight size={16} />
          </a>
        </div>

        <button
          className="md:hidden text-slate-800"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t p-6 flex flex-col gap-4 shadow-xl md:hidden animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-lg font-medium text-slate-700"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
