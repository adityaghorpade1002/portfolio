import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, Building2 } from 'lucide-react';

export default function ExperienceItem({ experience }) {
  return (
    <div className="relative pl-8 sm:pl-10 pb-12 last:pb-2 border-l border-slate-800">
      {/* Timeline Node */}
      <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-dark-950 border-2 border-brand-500 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-brand-400"></div>
      </div>

      <div className="enterprise-glass enterprise-glass-hover rounded-2xl p-6 sm:p-7 transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-lg font-bold text-slate-100">
                {experience.role}
              </h3>
              <span className="text-xs px-2.5 py-0.5 rounded-full font-mono bg-brand-500/10 text-brand-400 border border-brand-500/20">
                {experience.status}
              </span>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-300 font-medium mt-1">
              <Building2 className="w-3.5 h-3.5 text-brand-400" />
              <span>{experience.company}</span>
              <span className="text-slate-600">•</span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {experience.location}
              </span>
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-dark-900 px-3 py-1.5 rounded-lg border border-slate-800 shrink-0 self-start sm:self-center">
            <Calendar className="w-3.5 h-3.5 text-slate-500" />
            <span>{experience.period}</span>
          </div>
        </div>

        {/* Product/Engagement context */}
        {experience.product && (
          <div className="mb-4 inline-block px-3 py-1 rounded-md text-xs font-medium bg-slate-900 border border-slate-800 text-slate-200">
            Core Project: <span className="text-brand-400 font-semibold">{experience.product}</span>
          </div>
        )}

        <p className="text-sm text-slate-300 mb-4 leading-relaxed">
          {experience.description}
        </p>

        {/* Key Responsibilities */}
        <div className="space-y-2 mb-5">
          {experience.contributions.map((point, index) => (
            <div key={index} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
              <CheckCircle className="w-3.5 h-3.5 text-brand-400 shrink-0 mt-0.5" />
              <span>{point}</span>
            </div>
          ))}
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded text-[11px] font-mono bg-dark-900 border border-slate-800 text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
