import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { portfolioData } from '../data/portfolio';
import { GraduationCap, Award, Calendar, Building } from 'lucide-react';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 md:py-28 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Academic Background"
          title="Education & Formal Qualifications"
          subtitle="A consistent track record of academic excellence in Computer Science and Application disciplines."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="enterprise-glass enterprise-glass-hover rounded-2xl p-6 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-brand-500/10 text-brand-400 border border-brand-500/20">
                    <Calendar className="w-3 h-3" />
                    {edu.period}
                  </span>
                  
                  <span className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {edu.score}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-100">
                  {edu.degree}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 flex items-center gap-1.5 mt-1.5 mb-3">
                  <Building className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                  <span>{edu.institution}</span>
                </p>

                {edu.highlight && (
                  <p className="text-xs text-slate-400 leading-relaxed border-t border-slate-800/80 pt-3 mt-3">
                    {edu.highlight}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
