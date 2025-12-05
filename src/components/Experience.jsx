import React from "react";
import Section from "./layout/Section";
import FadeIn from "./ui/FadeIn";
import portfolioData from "../data/portfolioData";

const Experience = () => {
  return (
    <Section id="experience" className="bg-white/50">
      <FadeIn className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
          Professional Journey
        </h2>
        <div className="w-16 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
      </FadeIn>

      <div className="relative border-l-2 border-slate-200 ml-4 md:ml-12 space-y-16">
        {portfolioData.experience.map((exp, idx) => (
          <div key={idx} className="relative pl-8 md:pl-12">
            <FadeIn delay={idx * 200}>
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-blue-600 z-10 shadow-sm transition-transform hover:scale-125"></div>

              <div className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-semibold text-blue-600">
                        {exp.company}
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="text-slate-500 text-sm">
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <span className="mt-2 md:mt-0 px-4 py-1.5 bg-slate-50 border border-slate-200 rounded-full text-xs font-bold text-slate-600 uppercase tracking-wide group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-3">
                  {exp.description.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-slate-600 leading-relaxed text-sm md:text-base"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 group-hover:bg-blue-600 transition-colors"></span>
                      <span className="group-hover:text-slate-700 transition-colors">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
