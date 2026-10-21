"use client";

import React from "react";
import { projects } from "@/constants";

const ProjectCard = ({ project }) => {
  return (
    <div className="rounded-2xl overflow-hidden bg-[#953949]/75 backdrop-blur-md border border-white/20 shadow-xl flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
      {/* Logo Banner */}
      <div
        className="relative h-44 w-full flex items-center justify-center border-b border-white/15"
        style={{ backgroundColor: project.logoBg || "#111111" }}
      >
        <img
          src={project.logo}
          alt={project.title + " logo"}
          className="max-h-24 max-w-[70%] object-contain filter drop-shadow-xl"
        />
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-md bg-black/50 text-[11px] font-mono font-semibold text-rose-100 border border-white/20 backdrop-blur-sm">
            {project.metrics}
          </span>
        </div>
        {/* External link icon top-right */}
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full bg-white/10 border border-white/20 hover:bg-white/25 transition-colors backdrop-blur-sm"
          title="Visit site"
        >
          <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      {/* Card Body */}
      <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-5 text-white">
        <div className="space-y-2">
          <span className="text-xs uppercase font-mono tracking-wider text-rose-200 font-semibold">
            {project.subtitle}
          </span>
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <p className="text-sm text-rose-100 leading-relaxed font-normal">
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="space-y-4 pt-2">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md bg-white/15 border border-white/20 text-xs text-white font-mono"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="pt-4 border-t border-white/20 flex items-center justify-between">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-rose-100 hover:text-white flex items-center gap-1.5 transition-colors underline"
            >
              GitHub Repository
            </a>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-lg bg-white text-[#953949] text-xs font-bold font-mono hover:bg-rose-100 transition-colors shadow-md"
            >
              Visit Site →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="w-full py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] text-[40px] drop-shadow">
            Projects
          </h2>
          <p className="text-rose-100 text-lg font-medium">
            Selected 3D, WebGL & Frontend architectures
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
