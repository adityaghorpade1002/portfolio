import React from 'react';
import { 
  ArrowRight, 
  FileDown, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Terminal, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-[300px] h-[250px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Identity & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-xs font-mono font-medium shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>{personal.badge}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-brand-400">
                  {personal.name}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-brand-400 font-mono tracking-tight">
                {personal.role} & System Builder
              </p>
            </div>

            {/* Strategic Value Proposition */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Specialized in engineering robust full stack web platforms, role-based ERP systems, 
              and automated workflows with <span className="text-slate-100 font-semibold">Java</span>,{' '}
              <span className="text-slate-100 font-semibold">React.js</span>, and{' '}
              <span className="text-slate-100 font-semibold">Node.js</span>. Focused on clean system design, 
              API resilience, and verifiable data integrity.
            </p>

            {/* Key Meta Badges */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-1">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-dark-900 border border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-brand-400" />
                {personal.location}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-dark-900 border border-slate-800">
                <Terminal className="w-3.5 h-3.5 text-brand-400" />
                MCA Candidate (CGPA: 8.27)
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-brand-600 hover:bg-brand-500 border border-brand-400/40 shadow-lg shadow-brand-600/30 hover:shadow-brand-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personal.resume.filePath}
                download={personal.resume.fileName}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-200 bg-dark-900 hover:bg-slate-850 hover:text-white border border-slate-700 hover:border-slate-500 shadow-sm transition-all duration-200"
              >
                <FileDown className="w-4 h-4 text-brand-400" />
                <span>Download Resume</span>
              </a>

              {/* Social Link Badges */}
              <div className="flex items-center gap-2 pl-1">
                <a
                  href={personal.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-dark-900 hover:bg-slate-850 border border-slate-800 hover:border-slate-600 text-slate-300 hover:text-white transition-colors"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={personal.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-dark-900 hover:bg-slate-850 border border-slate-800 hover:border-slate-600 text-slate-300 hover:text-white transition-colors"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={personal.social.email}
                  className="p-3 rounded-xl bg-dark-900 hover:bg-slate-850 border border-slate-800 hover:border-slate-600 text-slate-300 hover:text-white transition-colors"
                  aria-label="Email Me"
                  title="Email Me"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Image & Enterprise Stats Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Outer decorative halo */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-brand-600/40 via-sky-500/20 to-transparent blur-lg opacity-70 -z-10"></div>

              {/* Photo Frame Container */}
              <div className="relative p-2 rounded-3xl enterprise-glass shadow-2xl border border-slate-800">
                <div className="relative overflow-hidden rounded-2xl w-64 h-72 sm:w-72 sm:h-80 md:w-80 md:h-96 bg-dark-900">
                  <img
                    src={personal.profileImage}
                    alt={personal.name}
                    className="w-full h-full object-cover object-center filter grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                    loading="eager"
                  />
                  {/* Subtle bottom gradient overlay for card integration */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-dark-950/90 to-transparent"></div>
                  
                  {/* Overlay Identity Tag */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-dark-950/80 backdrop-blur-md border border-slate-800 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-white">{personal.name}</p>
                      <p className="text-[10px] font-mono text-brand-400">Full Stack Developer</p>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
