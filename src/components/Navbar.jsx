import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, ArrowUpRight, Github } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section spy
      const sections = ['about', 'skills', 'projects', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3'
          : 'bg-dark-950/40 backdrop-blur-sm border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#hero"
            className="group flex items-center gap-3 transition-transform duration-200 hover:scale-[1.02]"
            aria-label="Aditya Ghorpade - Home"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-indigo-700 text-white font-bold text-sm shadow-md shadow-brand-500/20 border border-brand-400/30 group-hover:border-brand-300 transition-colors">
              <span>AG</span>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-dark-950"></span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-slate-100 tracking-tight group-hover:text-white transition-colors">
                {portfolioData.personal.name}
              </span>
              <span className="text-xs text-slate-400 font-mono tracking-wide">
                {portfolioData.personal.role}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-dark-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-brand-500/20 text-brand-400 border border-brand-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* GitHub Profile Icon Button */}
            <a
              href={portfolioData.personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 border border-slate-800 hover:border-slate-700 transition-all shadow-sm"
              title="GitHub Profile (@adityaghorpade1002)"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4 text-slate-200" />
            </a>

            <a
              href={portfolioData.personal.resume.filePath}
              download={portfolioData.personal.resume.fileName}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-200 border border-slate-700 hover:border-slate-500 hover:bg-slate-850 hover:text-white transition-all shadow-sm"
              title="Download Full Resume"
            >
              <FileDown className="w-3.5 h-3.5 text-brand-400" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium text-white bg-brand-600 hover:bg-brand-500 border border-brand-400/30 transition-all shadow-sm shadow-brand-600/30 hover:shadow-brand-500/40"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={portfolioData.personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-850"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4 text-slate-200" />
            </a>

            <a
              href={portfolioData.personal.resume.filePath}
              download={portfolioData.personal.resume.fileName}
              className="p-2 rounded-lg border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-850"
              aria-label="Download Resume"
            >
              <FileDown className="w-4 h-4 text-brand-400" />
            </a>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-850 focus:outline-none focus:ring-2 focus:ring-brand-500/50"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl bg-dark-900/95 border border-slate-800 backdrop-blur-xl shadow-2xl space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800/80">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={portfolioData.personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium text-slate-200 bg-slate-850 border border-slate-700 hover:bg-slate-800"
              >
                <Github className="w-4 h-4 text-slate-200" />
                <span>GitHub Profile (@adityaghorpade1002)</span>
              </a>
              <a
                href={portfolioData.personal.resume.filePath}
                download={portfolioData.personal.resume.fileName}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium text-slate-200 bg-slate-850 border border-slate-700 hover:bg-slate-800"
              >
                <FileDown className="w-4 h-4 text-brand-400" />
                <span>Download Resume (PDF)</span>
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-medium text-white bg-brand-600 hover:bg-brand-500"
              >
                <span>Contact Me</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
