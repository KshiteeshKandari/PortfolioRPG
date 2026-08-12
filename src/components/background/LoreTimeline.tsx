import React from 'react';
import { Briefcase, GraduationCap, Award, Calendar, FileText } from 'lucide-react';
import { EXPERIENCE_LORE, EDUCATION_LORE } from '../../data/portfolioData';

export const LoreTimeline: React.FC = () => {
  return (
    <section className="space-y-6">
      
      {/* Header */}
      <div className="rpg-glass-panel p-4 rounded-xl space-y-1 border border-slate-700/50">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-rpg-gold bg-rpg-gold/10 px-2 py-0.5 rounded border border-rpg-gold/30">
          Career Chronicles
        </span>
        <h2 className="font-serif text-2xl font-bold text-slate-100">
          Character Background & Lore Timeline
        </h2>
        <p className="text-xs text-slate-300">
          Chronological career history detailing real-world software engineering impact, published CHI 2026 research, and academic distinctions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Experience Timeline (8 Cols) */}
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center space-x-2 border-b border-slate-700/60 pb-2">
            <Briefcase className="w-4 h-4 text-rpg-gold" />
            <h3 className="font-serif font-bold text-slate-100 text-lg">Professional Experience</h3>
          </div>

          <div className="relative border-l-2 border-slate-700 ml-3 pl-5 space-y-6">
            {EXPERIENCE_LORE.map(job => (
              <div key={job.id} className="relative group">
                <div className="absolute -left-[27px] top-1.5 w-3.5 h-3.5 rounded-full bg-rpg-gold border-2 border-slate-900 shadow-rpg-gold" />

                <div className="rpg-glass-panel p-5 rounded-xl border border-slate-700/60 space-y-2.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="font-serif font-bold text-slate-100 text-base">
                      {job.role}
                    </h4>
                    <span className="text-xs font-mono font-semibold text-rpg-cyan bg-rpg-cyan/10 px-2 py-0.5 rounded border border-rpg-cyan/30 inline-flex items-center space-x-1 self-start">
                      <Calendar className="w-3 h-3" />
                      <span>{job.period}</span>
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-rpg-gold font-mono">
                    {job.organization}
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {job.description}
                  </p>

                  <ul className="space-y-1 text-xs text-slate-300 pt-1">
                    {job.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-rpg-gold font-bold">✦</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {job.paperNote && (
                    <div className="p-2.5 bg-purple-950/40 border border-purple-500/40 rounded-lg flex items-start space-x-2 text-xs text-slate-200">
                      <FileText className="w-4 h-4 text-rpg-purple flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-semibold text-rpg-purple block">Academic Publication (Co-author):</strong>
                        <span className="italic">"You Believe That You're Talking to a Real Person": Design and Development of AI-Promotora for Latino Dementia Patient Caregivers</span> ({job.paperNote})
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Academic Honors (4 Cols) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center space-x-2 border-b border-slate-700/60 pb-2">
            <GraduationCap className="w-4 h-4 text-rpg-cyan" />
            <h3 className="font-serif font-bold text-slate-100 text-lg">Education & Distinction</h3>
          </div>

          <div className="space-y-3">
            {EDUCATION_LORE.map((edu, idx) => (
              <div key={idx} className="rpg-glass-panel p-4 rounded-xl border border-slate-700/60 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-rpg-gold">{edu.year}</span>
                  <span className="text-xs font-mono font-bold bg-rpg-gold text-slate-950 px-2 py-0.5 rounded shadow-rpg-gold">
                    GPA {edu.gpa}
                  </span>
                </div>

                <h4 className="font-serif font-bold text-slate-100 text-base">
                  {edu.degree}
                </h4>

                <p className="text-xs text-slate-400 font-mono">
                  {edu.institution}
                </p>

                {edu.honors && (
                  <div className="inline-flex items-center space-x-1 text-xs font-semibold text-rpg-emerald font-mono">
                    <Award className="w-3.5 h-3.5" />
                    <span>{edu.honors}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
};
