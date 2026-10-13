import React from 'react';

export default function SectionHeading({ 
  badge, 
  title, 
  subtitle, 
  align = "left", 
  className = "" 
}) {
  const isCentered = align === "center";

  return (
    <div className={`mb-12 md:mb-16 ${isCentered ? "text-center max-w-2xl mx-auto" : "max-w-3xl"} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full text-xs font-mono font-medium tracking-wider uppercase border border-brand-500/30 bg-brand-500/10 text-brand-400 ${isCentered ? "justify-center" : ""}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse"></span>
          <span>{badge}</span>
        </div>
      )}
      
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-100 leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
