import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { portfolioData } from '../data/portfolio';
import { Layers, Sparkles, Github } from 'lucide-react';

export default function Projects() {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('all');

  const categories = [
    { label: 'All Projects', value: 'all' },
    { label: 'Full Stack & Next.js', value: 'fullstack' },
    { label: 'ERP & Workflows', value: 'erp' },
    { label: 'Systems & Security', value: 'system' },
  ];

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'fullstack') {
      return (
        project.id === 'multi-store-order-management' ||
        project.id === 'store-rating-platform' ||
        project.id === 'collegefunda' ||
        project.id === 'aquaflow'
      );
    }
    if (filter === 'erp') {
      return (
        project.id === 'multi-store-order-management' ||
        project.id === 'aquaflow' ||
        project.id === 'campus-nexus'
      );
    }
    if (filter === 'system') {
      return (
        project.id === 'javax-compiler' ||
        project.id === 'multi-store-order-management' ||
        project.id === 'store-rating-platform'
      );
    }
    return true;
  });

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            badge="Verified Repositories & Systems"
            title="Featured Projects & Full Stack Architecture"
            subtitle="Production-grade distributed systems, real-time WebSocket engines, institutional ERP platforms, and proctored examination compilers backed by verified code."
            className="mb-0 md:mb-0"
          />

          {/* Filter buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-dark-900 border border-slate-800 self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  filter === cat.value
                    ? 'bg-brand-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              isPriority={idx < 2}
            />
          ))}
        </div>

        {/* GitHub Repository Access Footer */}
        <div className="mt-12 p-6 rounded-2xl enterprise-glass border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400">
              <Github className="w-5 h-5 text-slate-200" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-100">
                Explore All Public Repositories on GitHub
              </p>
              <p className="text-xs text-slate-400">
                Inspect TypeScript, Next.js, and Java implementations, Prisma schema migrations, and test suites directly.
              </p>
            </div>
          </div>

          <a
            href={portfolioData.personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-dark-900 hover:bg-slate-850 border border-slate-700 text-slate-200 hover:text-white transition-all shrink-0"
          >
            <span>Visit @adityaghorpade1002</span>
            <span className="text-brand-400">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
