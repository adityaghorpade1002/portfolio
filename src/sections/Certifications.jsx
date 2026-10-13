import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { portfolioData } from '../data/portfolio';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Certifications() {
  const { achievements } = portfolioData;

  return (
    <section id="certifications" className="py-20 md:py-28 border-t border-slate-800/80 bg-dark-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Credentials & Recognition"
          title="Certifications & Honors"
          subtitle="Accredited technical certifications and verified honors in software development competitions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Certifications Block */}
          <div className="enterprise-glass rounded-2xl p-6 sm:p-7 border border-slate-800">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-100">
                  Verified Certifications
                </h3>
                <p className="text-xs text-slate-400">
                  Technical competency credentials
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {achievements.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-dark-900/90 border border-slate-800/80 flex items-start justify-between gap-4 hover:border-slate-700 transition-colors"
                >
                  <div>
                    <h4 className="text-sm font-semibold text-slate-100">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-brand-400 font-mono mt-0.5">
                      {cert.issuer}
                    </p>
                  </div>
                  <span className="shrink-0 inline-flex items-center gap-1 text-[11px] font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Awards & Honors Block */}
          <div className="enterprise-glass rounded-2xl p-6 sm:p-7 border border-slate-800">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-100">
                  Competitions & Honors
                </h3>
                <p className="text-xs text-slate-400">
                  Competitive performance & academic leadership
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {achievements.awards.map((award, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-dark-900/90 border border-slate-800/80 space-y-1.5 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-sm font-semibold text-slate-100">
                      {award.title}
                    </h4>
                  </div>
                  <p className="text-[11px] font-mono text-amber-400">
                    {award.issuer}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {award.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
