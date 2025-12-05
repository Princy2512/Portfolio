import React, { useRef } from "react";
import Section from "./layout/Section";
import FadeIn from "./ui/FadeIn";
import portfolioData from "../data/portfolioData";
import { Layout, ExternalLink, ArrowRight } from "../icons/Icons";

const Projects = () => {
  const projects = portfolioData.projects || [];
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth * 0.8; // scroll by 80% width
    const left = direction === "left" ? -scrollAmount : scrollAmount;

    container.scrollBy({
      left,
      behavior: "smooth",
    });
  };

  return (
    <Section id="projects">
      {/* Header */}
      <FadeIn className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-16">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Featured Projects
          </h2>
          <p className="text-slate-500">
            Real-world applications engineered for performance.
          </p>
        </div>

        {/* GitHub Button */}
        <a
          href={portfolioData.personalInfo.social.github}
          target="_blank"
          rel="noreferrer"
          className="hidden md:flex items-center gap-2 text-blue-600 font-bold hover:underline"
        >
          View GitHub <ArrowRight size={16} />
        </a>
      </FadeIn>

      {/* Slider with Arrows */}
      <div className="relative px-7">
        {/* Soft gradient edges */}
        
        {/* Left Arrow */}
        <button
          type="button"
          onClick={() => handleScroll("left")}
          className="
            hidden sm:flex
            items-center justify-center
            absolute left-1 md:-left-4 top-1/2 -translate-y-1/2
            z-20 h-9 w-9 rounded-full
            bg-white/90 border border-slate-200
            shadow-md hover:shadow-lg
            hover:-translate-x-0.5
            transition-all
            text-slate-600 hover:text-blue-600
          "
        >
          <ArrowRight size={18} className="rotate-180" />
        </button>

        {/* Right Arrow */}
        <button
          type="button"
          onClick={() => handleScroll("right")}
          className="
            hidden sm:flex
            items-center justify-center
            absolute right-1 md:-right-4 top-1/2 -translate-y-1/2
            z-20 h-9 w-9 rounded-full
            bg-white/90 border border-slate-200
            shadow-md hover:shadow-lg
            hover:translate-x-0.5
            transition-all
            text-slate-600 hover:text-blue-600
          "
        >
          <ArrowRight size={18} />
        </button>

        <FadeIn className="relative">
          <div
            ref={scrollRef}
            className="
              projects-scroll
              flex gap-6 md:gap-8
              overflow-x-auto
              pb-7
              snap-x snap-mandatory
              scroll-smooth
            "
          >
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="snap-start flex-shrink-0 w-[85%] sm:w-[70%] md:w-[45%] lg:w-[32%]"
              >
                {/* Whole Card Clickable */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="block h-full"
                >
                  <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 hover:-rotate-[0.3deg] transition-all duration-300 group h-full relative overflow-hidden">
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-blue-50 rounded-xl text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                          <Layout size={24} />
                        </div>

                        <ExternalLink
                          size={20}
                          className="text-slate-300 group-hover:text-blue-600 transition-colors"
                        />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>

                      {/* Technologies */}
                      <p className="text-xs font-bold text-blue-500 uppercase tracking-wide mb-4">
                        {project.tech}
                      </p>

                      {/* Description */}
                      <p className="text-slate-600 text-sm leading-relaxed border-t pt-4">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Small custom scrollbar styling */}
        <style>{`
  .projects-scroll {
    scrollbar-width: none; /* Firefox */
  }
  .projects-scroll::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }
`}</style>
      </div>
    </Section>
  );
};

export default Projects;
