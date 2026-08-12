import React from 'react';
import { Download, Github, Linkedin, Mail, ShieldCheck } from 'lucide-react';
import { useLoadout } from '../../context/LoadoutContext';

export const Footer: React.FC = () => {
  const { toggleSimpleMode } = useLoadout();

  return (
    <footer
      className="relative z-10 border-t border-mock-gold/25 bg-slate-950/85 backdrop-blur-xl py-10 px-4 sm:px-6 lg:px-8 mt-16"
      style={{ boxShadow: 'inset 0 1px 0 rgba(255,159,46,0.15)' }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Col 1: Artificer summary */}
        <div className="md:col-span-2 space-y-3">
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-lg bg-gradient-to-br from-mock-gold via-amber-400 to-mock-gold text-slate-950 font-serif font-black text-lg flex items-center justify-center border-2 border-yellow-200"
              style={{ boxShadow: '0 0 14px rgba(255,159,46,0.5)' }}
            >
              K
            </div>
            <h3 className="font-game-display text-lg font-black text-slate-100">
              The Artificer's Codex
            </h3>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed max-w-md">
            Hand-crafted portfolio for Kshiteesh Kandari. Specializing in AI Agents, vector RAG retrieval architectures, and human-centered full-stack systems.
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-mock-accent" />
            <span>Phone & full contact details in the downloadable Character Sheet PDF.</span>
          </div>
        </div>

        {/* Col 2: Navigation */}
        <div className="space-y-3">
          <h4 className="font-game-display font-black text-slate-100 text-sm uppercase tracking-widest">
            Navigation
          </h4>
          <ul className="space-y-1.5 text-sm text-slate-300">
            <li><a href="#equipment" className="hover:text-mock-gold transition-colors">Equipment Hall</a></li>
            <li><a href="#relics" className="hover:text-mock-gold transition-colors">Karma Cards</a></li>
            <li><a href="#lore" className="hover:text-mock-gold transition-colors">Lore Timeline</a></li>
            <li>
              <button
                onClick={toggleSimpleMode}
                className="text-mock-accent hover:text-mock-gold font-semibold transition-colors"
              >
                Toggle Simple Mode
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Party links */}
        <div className="space-y-3">
          <h4 className="font-game-display font-black text-slate-100 text-sm uppercase tracking-widest">
            Recruit to Party
          </h4>
          <div className="space-y-2 text-sm">
            <a
              href="mailto:kshiteeshkandari@gmail.com"
              className="flex items-center gap-2 text-slate-300 hover:text-mock-gold transition-colors"
            >
              <Mail className="w-4 h-4 text-mock-gold" />
              <span className="truncate">kshiteeshkandari@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/kshiteeshkandari/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-300 hover:text-mock-gold transition-colors"
            >
              <Linkedin className="w-4 h-4 text-mock-accent" />
              <span>LinkedIn Profile</span>
            </a>
            <a
              href="https://github.com/KshiteeshKandari"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-300 hover:text-mock-gold transition-colors"
            >
              <Github className="w-4 h-4 text-slate-300" />
              <span>GitHub Repositories</span>
            </a>
            <a
              href="/resume.pdf"
              download="Kshiteesh_Kandari_Resume_Applied_AI.pdf"
              className="inline-flex items-center gap-1.5 text-mock-gold font-bold text-xs uppercase tracking-widest hover:underline mt-1"
            >
              <Download className="w-4 h-4" />
              <span>Download Résumé</span>
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto border-t border-slate-800/70 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
        <p>© {new Date().getFullYear()} Kshiteesh Kandari · Hand-forged with React, TypeScript & Tailwind.</p>
        <p className="font-game-display italic text-mock-gold/70">"Crafting intelligent constructs with care."</p>
      </div>
    </footer>
  );
};
