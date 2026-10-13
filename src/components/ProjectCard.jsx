import React from 'react';
import { Github, ExternalLink, Calendar, Layers, CheckCircle2 } from 'lucide-react';

export default function ProjectCard({ project, isPriority = false }) {
  return (
    <article
      className={`enterprise-glass enterprise-glass-hover rounded-2xl flex flex-col justify-between overflow-hidden p-6 md:p-7 transition-all duration-300 relative ${
        isPriority ? 'border-brand-500/30 bg-dark-850/70 shadow-glow-sm' : ''
      }`}
    >
      <div>
        {/* Top Meta Header */}
        <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-brand-500/10 text-brand-400 border border-brand-500/20">
              <Calendar className="w-3 h-3" />
              {project.year}
            </span>
            <span className="text-xs font-medium text-slate-400 px-2 py-0.5 rounded bg-dark-900 border border-slate-800">
              {project.category}
            </span>
          </div>

          {project.featured && (
            <span className="text-[10px] uppercase font-mono tracking-wider font-semibold px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
              Featured Architecture
            </span>
          )}
        </div>

        {/* Title and Subtitle */}
        <h3 className="text-xl font-bold text-slate-100 group-hover:text-white transition-colors">
          {project.title}
        </h3>
        <p className="text-xs font-medium text-brand-400 mt-1 mb-3">
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="text-sm text-slate-300 leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Key Architectural Highlights */}
        {project.bullets && project.bullets.length > 0 && (
          <div className="mb-6 space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">
              Key Contributions & Architecture
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {project.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2 leading-relaxed">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-400 shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div>
        {/* Tech Stack Pills */}
        <div className="pt-4 border-t border-slate-800/80 mb-5">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-dark-900 border border-slate-800 text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-3">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium bg-dark-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white transition-all shadow-sm"
              title={`View ${project.title} on GitHub`}
            >
              <Github className="w-3.5 h-3.5" />
              <span>Source Code</span>
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs text-slate-500 border border-slate-800 bg-dark-900/50 cursor-not-allowed">
              <Github className="w-3.5 h-3.5" />
              <span>Private / Internal</span>
            </span>
          )}

          {project.isLiveAvailable && project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium bg-brand-600 hover:bg-brand-500 text-white transition-all shadow-sm"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live System</span>
            </a>
          ) : (
            <span 
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-[11px] font-mono text-slate-400 bg-slate-900/40 border border-slate-800/80" 
              title="Academic / Internal enterprise project"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
              <span>Enterprise / Academic Demo</span>
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
