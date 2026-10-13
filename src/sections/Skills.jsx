import React from 'react';
import SectionHeading from '../components/SectionHeading';
import SkillGroup from '../components/SkillGroup';
import { portfolioData } from '../data/portfolio';

export default function Skills() {
  const { categories } = portfolioData.skills;

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-slate-800/80 bg-dark-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technical Skills"
          title="Verified Technical Stack & Proficiencies"
          subtitle="Systematically organized technologies backed by practical project implementations, coursework, and internship experience."
        />

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <SkillGroup key={category.id} category={category} />
          ))}
        </div>

        {/* Soft Skills & Practices Footer Note */}
        <div className="mt-8 p-5 rounded-2xl enterprise-glass border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-400"></span>
            <div>
              <p className="text-xs font-semibold text-slate-200 uppercase tracking-wider font-mono">
                Engineering Practices & Soft Skills
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                Problem Solving • Agile Sprint Cycles • System Modeling • Clear Communication • Teamwork
              </p>
            </div>
          </div>
          <span className="text-[11px] font-mono text-slate-400 border border-slate-800 bg-dark-900 px-3 py-1 rounded-md self-start sm:self-auto">
            Clean Code • Modular Components
          </span>
        </div>
      </div>
    </section>
  );
}
