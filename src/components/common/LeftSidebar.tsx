import React from 'react';
import { Download, Mail } from 'lucide-react';
import { useLoadout } from '../../context/LoadoutContext';
import { MainTabType } from '../../types/portfolio';

const ArmorTabIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L4 5v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-5.45 8-12V5l-8-3zm0 4a3 3 0 013 3c0 2-3 5-3 5s-3-3-3-5a3 3 0 013-3z" />
  </svg>
);

const CardsTabIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3H9c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-6v-2h6v2zm0-4h-6V7h6v2zM5 7H3v14c0 1.1.9 2 2 2h12v-2H5V7z" />
  </svg>
);

const LoreTabIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 4h2v5l-1-.5L9 9V4zm9 16H6V4h1v9l3-1.5L13 13V4h5v16z" />
  </svg>
);

export const LeftSidebar: React.FC = () => {
  const { activeTab, setActiveTab } = useLoadout();

  const navItems: { id: MainTabType; label: string; icon: React.ElementType }[] = [
    { id: 'equipment', label: 'Equipment', icon: ArmorTabIcon },
    { id: 'relics', label: 'Karma', icon: CardsTabIcon },
    { id: 'lore', label: 'Lore', icon: LoreTabIcon },
    { id: 'contact', label: 'Recruit', icon: Mail },
  ];

  return (
    <aside className="w-full lg:w-52 flex-shrink-0 space-y-3">

      <div
        className="rpg-glass-panel overflow-hidden border border-slate-700/70"
        style={{ borderRadius: '1rem' }}
      >

        {/* Character card header — mimics reference "Hero / Charlotte" plate */}
        <div className="p-3 border-b border-slate-700/60 flex items-center gap-2.5 bg-gradient-to-r from-slate-950/80 to-transparent">
          <div
            className="w-9 h-9 rounded-lg bg-slate-950 border-2 border-mock-gold flex items-center justify-center text-mock-gold flex-shrink-0"
            style={{ boxShadow: '0 0 12px rgba(255,159,46,0.5), inset 0 1px 2px rgba(255,255,255,0.08)' }}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M14.5 17.5L3 6V3h3l11.5 11.5" />
              <path d="M13 19l6-6" />
              <path d="M16 16l4 4" />
              <path d="M19 21l2-2" />
            </svg>
          </div>

          <div className="min-w-0">
            <div className="text-[9px] font-mono uppercase tracking-widest text-slate-400 leading-none">
              Hero
            </div>
            <h2 className="font-game-display font-black text-slate-100 text-sm leading-tight mt-0.5">
              Artificer
            </h2>
          </div>
        </div>

        {/* Nav tabs */}
        <div className="p-1.5 grid grid-cols-4 lg:grid-cols-1 gap-1">
          {navItems.map(item => {
            const IconComp = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`relative flex lg:flex-row flex-col items-center lg:justify-start justify-center gap-2 py-2.5 lg:py-2 px-2 lg:px-3 rounded-md transition-all group ${
                  isActive
                    ? 'bg-slate-950/85 text-mock-gold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
                style={
                  isActive
                    ? { boxShadow: 'inset 0 0 12px rgba(255,159,46,0.15)' }
                    : undefined
                }
              >
                {isActive && (
                  <div
                    className="hidden lg:block absolute left-0 top-1 bottom-1 w-[3px] bg-mock-gold rounded-r"
                    style={{ boxShadow: '0 0 10px #FF9F2E, 0 0 4px #FCD34D' }}
                  />
                )}

                <IconComp
                  className={`w-5 h-5 transition-transform group-hover:scale-110 ${
                    isActive ? 'drop-shadow-[0_0_6px_rgba(255,159,46,0.8)]' : ''
                  }`}
                />

                <span
                  className={`text-[10px] lg:text-xs font-mono font-bold uppercase tracking-widest ${
                    isActive ? 'text-mock-gold' : ''
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Resume download */}
        <div className="p-2 border-t border-slate-700/60">
          <a
            href="/resume.pdf"
            download="Kshiteesh_Kandari_Resume_Applied_AI.pdf"
            className="w-full py-2 rounded-md bg-gradient-to-r from-mock-gold via-amber-400 to-mock-gold text-slate-950 font-game-display font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-1.5 transition-all active:translate-y-0.5 border border-yellow-200"
            style={{ boxShadow: '0 0 14px rgba(255,159,46,0.55)' }}
          >
            <Download className="w-3 h-3" />
            <span>Character Sheet</span>
          </a>
        </div>

      </div>

    </aside>
  );
};
