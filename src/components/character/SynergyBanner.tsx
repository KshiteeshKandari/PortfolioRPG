import React from 'react';
import { Sparkles, Zap } from 'lucide-react';
import { useLoadout } from '../../context/LoadoutContext';

export const SynergyBanner: React.FC = () => {
  const { activeSynergies } = useLoadout();

  if (activeSynergies.length === 0) return null;

  return (
    <div className="w-full space-y-2 pt-2">
      <div className="flex items-center gap-2 px-1">
        <Zap className="w-3.5 h-3.5 text-mock-gold" />
        <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-mock-gold">
          Active Set Bonuses ({activeSynergies.length})
        </span>
        <div className="flex-grow h-px bg-gradient-to-r from-mock-gold/60 via-mock-gold/20 to-transparent" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {activeSynergies.map(synergy => (
          <div
            key={synergy.id}
            className="p-3 rounded-lg bg-gradient-to-br from-amber-950/50 via-slate-950/85 to-slate-950/95 border-l-2 border-mock-gold animate-unfurl relative overflow-hidden"
            style={{ boxShadow: '0 0 18px rgba(255, 159, 46, 0.25), inset 0 0 20px rgba(255, 159, 46, 0.08)' }}
          >
            {/* Corner sparkle */}
            <div className="absolute -top-2 -right-2 opacity-30">
              <Sparkles className="w-10 h-10 text-mock-gold" />
            </div>

            <div className="flex items-center gap-1.5 mb-1">
              <div className="w-1.5 h-1.5 rounded-full bg-mock-gold animate-pulse" />
              <h4 className="font-game-display font-black text-slate-100 text-xs tracking-wide">
                {synergy.name}
              </h4>
            </div>

            <p className="text-[10.5px] text-slate-300 leading-snug mb-2">
              {synergy.description}
            </p>

            <div className="flex items-start gap-1.5 text-[10.5px] font-mono font-bold text-mock-gold leading-snug">
              <span className="text-mock-gold">✦</span>
              <span>{synergy.bonusText}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
