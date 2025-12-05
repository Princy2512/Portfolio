import React from "react";
import FadeIn from "./ui/FadeIn";
import portfolioData from "../data/portfolioData";
import { Send, Linkedin } from "../icons/Icons";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-slate-900 text-white relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>

      <FadeIn className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let's Work Together
        </h2>
        <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
          Currently open for backend engineering roles. Whether you have a
          question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href={`mailto:${portfolioData.personalInfo.email}`}
            className="flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all hover:-translate-y-1 shadow-lg shadow-blue-900/50 hover:shadow-blue-500/50"
          >
            <Send size={20} />
            Email Me
          </a>
          <a
            href={portfolioData.personalInfo.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/10 transition-all hover:-translate-y-1 backdrop-blur-sm"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
        </div>

        <footer className="mt-24 pt-8 border-t border-slate-800 text-slate-500 text-sm">
          <p>
            © {new Date().getFullYear()} {portfolioData.personalInfo.name}.
          </p>
        </footer>
      </FadeIn>
    </section>
  );
};

export default Contact;
