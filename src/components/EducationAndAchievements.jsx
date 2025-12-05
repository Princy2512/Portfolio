import React from "react";
import Section from "./layout/Section";
import FadeIn from "./ui/FadeIn";
import portfolioData from "../data/portfolioData";
import { GraduationCap, Award } from "../icons/Icons";

const EducationAndAchievements = () => {
  return (
    <Section id="education"  className="bg-white/50">
      <div className="grid md:grid-cols-2 gap-16">
        {/* Education */}
        <FadeIn delay={0}>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-slate-900">
            <div className="p-2 bg-blue-100 rounded text-blue-600">
              <GraduationCap size={24} />
            </div>
            Education
          </h3>
          {portfolioData.education.map((edu, idx) => (
            <div
              key={idx}
              className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <h4 className="text-lg font-bold text-slate-900 mb-1">
                {edu.school}
              </h4>
              <p className="text-blue-600 font-medium mb-4">{edu.degree}</p>
              <div className="flex justify-between text-sm font-bold text-slate-500 uppercase tracking-wide">
                <span>{edu.year}</span>
                <span className="text-green-600 px-2 py-0.5 bg-green-50 rounded">
                  {edu.score}
                </span>
              </div>
            </div>
          ))}
        </FadeIn>

        {/* Achievements */}
        <FadeIn delay={200}>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-slate-900">
            <div className="p-2 bg-yellow-100 rounded text-yellow-600">
              <Award size={24} />
            </div>
            Achievements
          </h3>
          <div className="space-y-4">
            {portfolioData.achievements.map((ach, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-white hover:bg-slate-50 transition-colors hover:shadow-sm"
              >
                <div className="mt-1.5 w-2 h-2 rounded-full bg-yellow-400 flex-shrink-0 shadow-sm"></div>
                <p className="text-slate-700 font-medium leading-snug">
                  {ach}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </Section>
  );
};

export default EducationAndAchievements;
