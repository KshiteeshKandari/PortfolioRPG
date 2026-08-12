import React from 'react';
import { Download, Github, Linkedin, Mail, ExternalLink, Sparkles, BookOpen, Briefcase, GraduationCap } from 'lucide-react';
import { FLAGSHIP_PROJECTS, RELIC_PROJECTS, EXPERIENCE_LORE, EDUCATION_LORE } from '../../data/portfolioData';
import { RarityBadge } from './RarityBadge';
import { useLoadout } from '../../context/LoadoutContext';

export const SimpleModeView: React.FC = () => {
  const { toggleSimpleMode } = useLoadout();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 bg-parchment-light border-x-2 border-ink min-h-screen">
      
      {/* Top Banner Notice */}
      <div className="p-4 rounded-xl bg-parchment border-2 border-ink flex flex-col sm:flex-row items-center justify-between gap-3 shadow-ink-sm">
        <div className="flex items-center space-x-2 text-xs sm:text-sm text-ink">
          <Sparkles className="w-4 h-4 text-terracotta flex-shrink-0" />
          <span>You are viewing the <strong>Simple & Accessible Mode</strong> (Linear text layout).</span>
        </div>
        <button
          onClick={toggleSimpleMode}
          className="px-3 py-1.5 rounded bg-terracotta text-parchment-light text-xs font-semibold border border-ink shadow-ink-sm hover:bg-terracotta-hover transition-colors"
        >
          Return to Interactive RPG Mode
        </button>
      </div>

      {/* Header Profile */}
      <header className="space-y-4 border-b-2 border-ink pb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-serif text-4xl font-bold text-ink">
              Kshiteesh Kandari
            </h1>
            <p className="text-lg font-semibold text-terracotta mt-1">
              AI Agent Architect & Full Stack Software Engineer
            </p>
          </div>

          <a
            href="/resume.pdf"
            download="Kshiteesh_Kandari_Resume_Applied_AI.pdf"
            className="inline-flex items-center space-x-2 px-4 py-2 rounded bg-terracotta text-parchment-light font-semibold text-sm border border-ink shadow-ink-sm hover:bg-terracotta-hover transition-colors self-start"
          >
            <Download className="w-4 h-4" />
            <span>Download Résumé (PDF)</span>
          </a>
        </div>

        <p className="text-sm text-ink/80 leading-relaxed max-w-3xl">
          Software engineer specializing in AI Agents with an integrated UI/UX approach. Experienced in backend, frontend, full-stack, and applied AI/ML systems. M.S. in Computer Science (4.0 GPA) from the University of Illinois at Chicago.
        </p>

        <div className="flex flex-wrap gap-4 text-sm font-semibold pt-2">
          <a href="mailto:kshiteeshkandari@gmail.com" className="flex items-center space-x-1.5 text-ink hover:text-terracotta">
            <Mail className="w-4 h-4 text-terracotta" />
            <span>kshiteeshkandari@gmail.com</span>
          </a>
          <a href="https://www.linkedin.com/in/kshiteeshkandari/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1.5 text-ink hover:text-terracotta">
            <Linkedin className="w-4 h-4 text-sage" />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/KshiteeshKandari" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1.5 text-ink hover:text-terracotta">
            <Github className="w-4 h-4 text-ink" />
            <span>GitHub</span>
          </a>
        </div>
      </header>

      {/* Flagship Projects Section */}
      <section className="space-y-6">
        <h2 className="font-serif text-2xl font-bold text-ink border-b-2 border-ink/20 pb-2">
          Featured Engineering Projects
        </h2>

        <div className="space-y-6">
          {FLAGSHIP_PROJECTS.filter(p => !p.isSealed).map(proj => (
            <div key={proj.id} className="parchment-card p-6 rounded-xl border-2 border-ink space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="font-serif text-xl font-bold text-ink">{proj.name}</h3>
                    <RarityBadge rarity={proj.rarity} />
                  </div>
                  <p className="text-xs font-semibold text-terracotta font-mono mt-0.5">{proj.subtitle}</p>
                </div>

                <div className="text-right sm:text-right">
                  <span className="text-[10px] font-mono uppercase text-ink/60 block">{proj.mainStat.label}</span>
                  <span className="font-serif text-sm font-bold text-ink">{proj.mainStat.value}</span>
                </div>
              </div>

              <p className="text-sm text-ink/80 leading-relaxed">{proj.description}</p>

              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-ink uppercase">Key Technical Accomplishments:</span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs text-ink/80">
                  {proj.subStats.map((sub, i) => (
                    <li key={i} className="flex items-start space-x-1.5">
                      <span className="text-terracotta font-bold">•</span>
                      <span>{sub}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {proj.techTags.map(tag => (
                  <span key={tag} className="px-2 py-0.5 bg-parchment text-ink font-mono text-xs rounded border border-ink/30">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="space-y-6">
        <h2 className="font-serif text-2xl font-bold text-ink border-b-2 border-ink/20 pb-2">
          Professional Experience
        </h2>

        <div className="space-y-6">
          {EXPERIENCE_LORE.map(job => (
            <div key={job.id} className="parchment-card p-6 rounded-xl border-2 border-ink space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <h3 className="font-serif text-lg font-bold text-ink">{job.role}</h3>
                  <p className="text-xs font-mono font-semibold text-terracotta">{job.organization}</p>
                </div>
                <span className="text-xs font-mono text-ink/70 font-semibold">{job.period}</span>
              </div>

              <p className="text-sm text-ink/80">{job.description}</p>

              <ul className="space-y-1 text-xs text-ink/80">
                {job.highlights.map((h, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-terracotta font-bold">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="space-y-6">
        <h2 className="font-serif text-2xl font-bold text-ink border-b-2 border-ink/20 pb-2">
          Education
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {EDUCATION_LORE.map((edu, idx) => (
            <div key={idx} className="parchment-card p-5 rounded-xl border-2 border-ink space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-terracotta font-bold">{edu.year}</span>
                <span className="text-xs font-mono font-bold bg-terracotta text-parchment-light px-2 py-0.5 rounded border border-ink">
                  GPA {edu.gpa}
                </span>
              </div>
              <h3 className="font-serif font-bold text-ink text-base">{edu.degree}</h3>
              <p className="text-xs text-ink/70 font-mono">{edu.institution}</p>
              {edu.honors && <p className="text-xs text-sage font-semibold font-mono">{edu.honors}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Relics Section */}
      <section className="space-y-4">
        <h2 className="font-serif text-xl font-bold text-ink border-b-2 border-ink/20 pb-2">
          Additional Projects & Relics
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {RELIC_PROJECTS.map(relic => (
            <div key={relic.id} className="parchment-card p-4 rounded-lg border border-ink space-y-1.5 text-xs">
              <div className="flex items-center justify-between">
                <h4 className="font-serif font-bold text-ink text-sm">{relic.name}</h4>
                <RarityBadge rarity={relic.rarity} />
              </div>
              <p className="text-ink/80">{relic.description}</p>
              <div className="font-mono text-terracotta text-[11px]">
                {relic.mainStat.label}: <strong>{relic.mainStat.value}</strong>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
