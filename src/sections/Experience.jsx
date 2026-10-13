import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ExperienceItem from '../components/ExperienceItem';
import { portfolioData } from '../data/portfolio';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 md:py-28 border-t border-slate-800/80 bg-dark-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Work Experience"
          title="Industrial Experience & IT Internship"
          subtitle="Direct contribution to commercial enterprise software, backend services, and multi-user educational platforms."
        />

        <div className="max-w-4xl mx-auto">
          {experience.map((item) => (
            <ExperienceItem key={item.id} experience={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
