import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-dark-950 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="text-base font-bold text-slate-100 tracking-tight">
                {portfolioData.personal.name}
              </span>
              <span className="text-xs text-slate-500 font-mono">/</span>
              <span className="text-xs font-mono text-brand-400">
                {portfolioData.personal.role}
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Focused on scalable web engineering, secure role-based portals, and enterprise workflow solutions.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href={portfolioData.personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-dark-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 hover:bg-slate-850 transition-all shadow-sm"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-dark-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 hover:bg-slate-850 transition-all shadow-sm"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.social.email}
              className="p-2.5 rounded-xl bg-dark-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 hover:bg-slate-850 transition-all shadow-sm"
              aria-label="Send Direct Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-dark-900 hover:bg-slate-850 border border-slate-800 hover:border-slate-600 text-xs text-slate-300 hover:text-white transition-all ml-2"
              title="Return to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-brand-400" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            © {currentYear} {portfolioData.personal.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
            <span>Enterprise React & Tailwind Architecture</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
