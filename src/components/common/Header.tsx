import React from 'react';
import { Download, Sparkles, ScrollText, Github, Linkedin } from 'lucide-react';
import { useLoadout } from '../../context/LoadoutContext';

export const Header: React.FC = () => {
  const { isSimpleMode, toggleSimpleMode } = useLoadout();

  return (
    <header
      className="sticky top-0 z-40 bg-slate-950/92 backdrop-blur-xl border-b border-mock-gold/25"
      style={{
        boxShadow: '0 4px 20px rgba(0,0,0,0.6), inset 0 -1px 0 rgba(255,159,46,0.15)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Brand — crest + name plate */}
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-lg bg-gradient-to-br from-mock-gold via-amber-400 to-mock-gold text-slate-950 font-serif text-xl font-black flex items-center justify-center border-2 border-yellow-200"
            style={{ boxShadow: '0 0 16px rgba(255,159,46,0.65), inset 0 1px 2px rgba(255,255,255,0.5)' }}
          >
            K
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-game-display text-base font-black text-slate-100 tracking-wide leading-none">
                The Artificer's Codex
              </span>
              <span className="hidden sm:inline text-[9px] font-mono font-bold text-mock-gold bg-mock-gold/10 border border-mock-gold/40 px-1.5 py-[1px] rounded uppercase tracking-widest">
                Lv 99
              </span>
            </div>
            <span className="text-[10px] font-mono text-slate-400 tracking-wide mt-0.5">
              Kshiteesh Kandari · AI Agent & Full Stack Engineer
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">

          <div className="hidden sm:flex items-center gap-1 border-r border-slate-700/60 pr-3">
            <a
              href="https://github.com/KshiteeshKandari"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded text-slate-400 hover:text-mock-gold hover:bg-slate-800/60 transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/kshiteeshkandari/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded text-slate-400 hover:text-mock-gold hover:bg-slate-800/60 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={toggleSimpleMode}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-slate-700 bg-slate-900/80 hover:bg-slate-800 hover:border-mock-accent text-slate-200 text-[10px] font-mono font-bold transition-all uppercase tracking-widest"
          >
            {isSimpleMode ? (
              <>
                <Sparkles className="w-3.5 h-3.5 text-mock-gold" />
                <span>Armory View</span>
              </>
            ) : (
              <>
                <ScrollText className="w-3.5 h-3.5 text-mock-accent" />
                <span className="hidden sm:inline">Simple</span>
              </>
            )}
          </button>

          <a
            href="/resume.pdf"
            download="Kshiteesh_Kandari_Resume_Applied_AI.pdf"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-gradient-to-r from-mock-gold via-amber-400 to-mock-gold text-slate-950 hover:brightness-110 text-[10px] font-mono font-black uppercase tracking-widest transition-all border border-yellow-200"
            style={{ boxShadow: '0 0 14px rgba(255,159,46,0.55)' }}
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Character Sheet</span>
            <span className="sm:hidden">CV</span>
          </a>

        </div>

      </div>
    </header>
  );
};
