import React from 'react';
import { Layers, Server, Code, Database, Wrench } from 'lucide-react';

const categoryIcons = {
  frontend: Layers,
  backend: Server,
  languages: Code,
  databases: Database,
  tools: Wrench,
};

export default function SkillGroup({ category }) {
  const IconComponent = categoryIcons[category.id] || Code;

  return (
    <div className="enterprise-glass enterprise-glass-hover rounded-2xl p-6 flex flex-col justify-between transition-all duration-300">
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400">
            <IconComponent className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-100">
              {category.title}
            </h3>
          </div>
        </div>

        <p className="text-xs text-slate-400 mb-5 leading-relaxed">
          {category.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <div
              key={skill.name}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-900/90 border border-slate-800 text-xs text-slate-200 transition-colors hover:border-slate-700 hover:text-white"
            >
              <span className="font-medium">{skill.name}</span>
              {skill.level && (
                <span className="text-[10px] px-1.5 py-0.5 rounded font-mono bg-slate-800/80 text-slate-400 border border-slate-700/60">
                  {skill.level}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
