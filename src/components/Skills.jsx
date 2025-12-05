import React from "react";
import Section from "./layout/Section";
import FadeIn from "./ui/FadeIn";
import portfolioData from "../data/portfolioData";

const SkillLane = ({ title, skills, direction }) => (
  <FadeIn className="mb-12">
    <div className="container mx-auto px-6 max-w-6xl mb-4">
      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 border-l-4 border-blue-500 pl-3">
        {title}
      </h4>
    </div>
    <div className="w-full overflow-hidden bg-white/50 border-y border-slate-200/50 py-6 backdrop-blur-sm group">
      <div
        className={`flex w-max ${
          direction === "left" ? "animate-marquee" : "animate-marquee-reverse"
        } group-hover:pause gap-8 px-4`}
      >
        {[...skills, ...skills, ...skills, ...skills].map((skill, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="text-blue-600">
              <skill.icon size={20} />
            </div>
            <span className="font-semibold text-slate-700 whitespace-nowrap">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  </FadeIn>
);

const Skills = () => {
  return (
    <Section id="skills">
      <FadeIn className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
          Skills
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto">
          The languages, frameworks, and tools I use to engineer scalable
          solutions.
        </p>
      </FadeIn>
      <div className="-mx-6">
        <SkillLane
          title="Languages & Core"
          skills={portfolioData.skills.languages}
          direction="left"
        />
        <SkillLane
          title="Backend Frameworks"
          skills={portfolioData.skills.backend}
          direction="right"
        />
        <SkillLane
          title="Frontend & Web"
          skills={portfolioData.skills.frontend}
          direction="left"
        />
        <SkillLane
          title="DevOps & Tools"
          skills={portfolioData.skills.tools}
          direction="right"
        />
      </div>
      <style>{`
        .animate-marquee { animation: marquee 40s linear infinite; }
        .animate-marquee-reverse { animation: marqueeReverse 40s linear infinite; }
        .group-hover\\:pause:hover { animation-play-state: paused; }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes marqueeReverse { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
      `}</style>
    </Section>
  );
};

export default Skills;
