import React from "react";
import Section from "./layout/Section";
import FadeIn from "./ui/FadeIn";
import portfolioData from "../data/portfolioData";
import { Code, Award, ExternalLink, ArrowRight } from "../icons/Icons";

const ProgrammingProfiles = () => {
  const profiles = portfolioData.programmingProfiles || [];

  return (
    <Section id="profiles" className="bg-white/50">
      {/* Heading */}
      <FadeIn className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-700 uppercase tracking-wide mb-4">
          <Code size={16} />
          <span>Competitive Programming</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
          Programming Profiles
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto">
          A snapshot of my presence across coding platforms — ratings, problems
          solved, and consistency over time.
        </p>
      </FadeIn>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {profiles.map((profile, idx) => (
          <FadeIn key={profile.platform} delay={idx * 120} className="h-full">
            <a
              href={profile.profileUrl}
              target="_blank"
              rel="noreferrer"
              className="block h-full group"
            >
              <div className="relative h-full bg-white rounded-2xl border border-slate-100 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 p-6 flex flex-col gap-4">
                  {/* Top: platform + badge */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {profile.platform}
                      </h3>
                      {profile.title && (
                        <p className="text-xs font-semibold text-purple-600 mt-1 uppercase tracking-wide">
                          {profile.title}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      {profile.stars && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-yellow-50 text-yellow-700 text-xs font-semibold border border-yellow-100">
                          <Award size={14} />
                          {profile.stars}
                        </span>
                      )}
                      <ExternalLink
                        size={18}
                        className="text-slate-300 group-hover:text-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="mt-2 space-y-2 text-sm">
                    {profile.maxRating && (
                      <div className="flex items-center justify-between text-slate-600">
                        <span className="font-medium">Max Rating</span>
                        <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
                          {profile.maxRating}
                        </span>
                      </div>
                    )}

                    {profile.problemsSolved && (
                      <div className="flex items-center justify-between text-slate-600">
                        <span className="font-medium">Problems Solved</span>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">
                          {profile.problemsSolved}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="pt-3 mt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>View detailed stats</span>
                    <span className="inline-flex items-center gap-1 text-blue-600 font-semibold group-hover:gap-2 transition-all">
                      Open Profile
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};

export default ProgrammingProfiles;
