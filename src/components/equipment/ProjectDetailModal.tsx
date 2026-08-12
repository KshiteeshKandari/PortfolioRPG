import React from 'react';
import { X, ExternalLink, ShieldCheck, Lock, Sparkles } from 'lucide-react';
import { Project } from '../../types/portfolio';
import { RarityBadge } from '../common/RarityBadge';
import { SubstatSuggestionForm } from './SubstatSuggestionForm';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-xl animate-unfurl">
      {/* Solid Dark Slate Glass Card Container (High Readability) */}
      <div className={`relative w-full max-w-2xl bg-[#121D28] border-2 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto space-y-6 text-slate-100 rarity-${project.rarity} is-selected`}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl border border-slate-700 bg-slate-900 hover:bg-slate-800 text-slate-200 transition-colors shadow-lg"
          title="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Section */}
        <div className="space-y-2 pr-8">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-mock-gold bg-mock-gold/15 px-2.5 py-0.5 rounded border border-mock-gold/30">
              {project.slot}
            </span>
            <RarityBadge rarity={project.rarity} showText />
          </div>

          <h2 className="font-game-display text-2xl sm:text-3xl font-black text-slate-100 leading-tight">
            {project.name}
          </h2>
          <p className="text-xs sm:text-sm font-mono font-semibold text-mock-accent">
            {project.subtitle}
          </p>
        </div>

        {/* Primary Metric Banner */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
              Primary Project Metric (Main Stat)
            </span>
            <span className="text-xs text-mock-gold font-semibold font-mono block">
              {project.mainStat.label}
            </span>
            <span className="font-serif text-lg font-bold text-slate-100">
              {project.mainStat.value}
            </span>
          </div>
          <Sparkles className="w-7 h-7 text-mock-gold" />
        </div>

        {/* Description */}
        <div className="space-y-1.5">
          <h4 className="font-game-display font-bold text-slate-100 text-base">Project Architecture Overview</h4>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
            {project.description}
          </p>
        </div>

        {/* Substats List */}
        <div className="space-y-2">
          <h4 className="font-game-display font-bold text-slate-100 text-base">Technical Substats & Engineering Specs</h4>
          <ul className="grid grid-cols-1 gap-2 text-xs">
            {project.subStats.map((sub, i) => (
              <li key={i} className="flex items-start space-x-2 p-2.5 rounded-lg bg-slate-900/90 border border-slate-700/80">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-200 font-medium font-sans">{sub}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Tags */}
        <div className="space-y-2">
          <h4 className="font-mono text-xs text-slate-400 font-bold uppercase">Tech Stack & Constructs</h4>
          <div className="flex flex-wrap gap-1.5">
            {project.techTags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 bg-slate-900 text-slate-200 text-xs font-mono rounded-lg border border-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Sealed Status / Repo Link */}
        {project.isSealed ? (
          <div className="p-3 bg-slate-900 border border-slate-700 rounded-xl flex items-center space-x-2 text-xs font-semibold text-slate-400">
            <Lock className="w-4 h-4 text-slate-400" />
            <span>Artifact currently sealed. Check back soon for public repository unsealing.</span>
          </div>
        ) : project.repoLink ? (
          <a
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-mock-gold text-slate-950 font-bold text-xs shadow-gold-glow hover:bg-yellow-400 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>View Public Repository</span>
          </a>
        ) : null}

        {/* Community Substat Form */}
        {!project.isSealed && (
          <SubstatSuggestionForm projectSlot={project.slot} projectName={project.name} />
        )}

      </div>
    </div>
  );
};
