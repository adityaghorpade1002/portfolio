import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { portfolioData } from '../data/portfolio';
import { Code2, Server, GraduationCap, ShieldCheck, Database, GitBranch } from 'lucide-react';

export default function About() {
  const { personal, experience, education } = portfolioData;

  const keyHighlights = [
    {
      icon: Server,
      title: "Full Stack Architecture",
      desc: "End-to-end development integrating React.js frontend interfaces with Java and Node.js backend services and SQL databases."
    },
    {
      icon: ShieldCheck,
      title: "Institutional ERP Systems",
      desc: "Hands-on experience developing role-based access control (RBAC), exam proctoring workflows, and administrative dashboards."
    },
    {
      icon: Database,
      title: "Data Modeling & Supabase",
      desc: "Designing normalized relational schemas in PostgreSQL and MySQL, coupled with modern cloud databases like Supabase."
    },
    {
      icon: GitBranch,
      title: "Agile & Team Collaboration",
      desc: "Internship experience at QLOAX LLP contributing to sprint cycles, Git branch management, and feature test workflows."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About Me"
          title="Engineering practical software with strong architecture"
          subtitle="A comprehensive background in computer science, full stack web platforms, and industrial internship development."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              I am an MCA candidate and Full Stack Developer based in Pune, Maharashtra. 
              My journey in software engineering combines rigorous academic training from 
              <span className="text-white font-medium"> Tuljaram Chaturchand College (BCS)</span> and 
              <span className="text-white font-medium"> Dr. D. Y. Patil IMR (MCA)</span> with real-world 
              software development experience.
            </p>

            <p>
              During my internship at <span className="text-brand-400 font-semibold">QLOAX LLP</span>, 
              I have been contributing to the development of <span className="text-white font-medium">Acadmyx</span>, 
              a school and college ERP platform. This industrial role involves building RESTful API endpoints, 
              executing database operations, and automating institutional workflows within an active Agile team.
            </p>

            <p>
              My public software repositories—including <span className="text-white font-medium">OrderHub</span> (a real-time WebSocket multi-store order platform), 
              <span className="text-white font-medium">Store Rating Platform</span> (a 3-tier platform with 176 automated Vitest tests), 
              <span className="text-white font-medium">CollegeFunda</span> (a guidance platform), 
              <span className="text-white font-medium">AquaFlow</span> (a workflow management system), and 
              <span className="text-white font-medium">Javax Compiler</span> (an exam proctoring system)—demonstrate my 
              ability to translate business and institutional requirements into functional, tested, and maintainable software.
            </p>

            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-dark-900 border border-slate-800">
                <span className="text-xs text-slate-400 font-mono block">Primary Focus</span>
                <span className="text-sm font-semibold text-white">Full Stack Engineering</span>
              </div>
              <div className="p-3.5 rounded-xl bg-dark-900 border border-slate-800">
                <span className="text-xs text-slate-400 font-mono block">Current Status</span>
                <span className="text-sm font-semibold text-white">MCA (Final Year)</span>
              </div>
              <div className="p-3.5 rounded-xl bg-dark-900 border border-slate-800 col-span-2 sm:col-span-1">
                <span className="text-xs text-slate-400 font-mono block">Location</span>
                <span className="text-sm font-semibold text-white">Pune, India</span>
              </div>
            </div>
          </div>

          {/* Pillars Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {keyHighlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="enterprise-glass rounded-xl p-4.5 border border-slate-800/90 flex items-start gap-4 hover:border-slate-700 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 shrink-0 mt-0.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-100 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
