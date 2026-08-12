import React, { useState } from 'react';
import { Scroll, Star, Lock } from 'lucide-react';
import { RELIC_PROJECTS } from '../../data/portfolioData';
import { RelicProject } from '../../types/portfolio';

const iconFor = (relic: RelicProject): string => {
  // Fallback icon mapping (relics don't ship with icons yet)
  return '/assets/badge_icon.jpg';
};

export const OldRelicsDrawer: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(RELIC_PROJECTS[0].id);
  const selected = RELIC_PROJECTS.find(r => r.id === selectedId) || RELIC_PROJECTS[0];

  return (
    <section className="space-y-4">

      {/* Header banner */}
      <div
        className="rpg-glass-panel p-4 rounded-xl space-y-1 border border-slate-700/60"
        style={{ boxShadow: '0 15px 35px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)' }}
      >
        <div className="flex items-center gap-2">
          <Scroll className="w-4 h-4 text-mock-gold" />
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-mock-gold bg-mock-gold/10 px-2 py-0.5 rounded border border-mock-gold/40">
            Field Journal Archives
          </span>
        </div>
        <h2 className="font-game-display text-2xl font-black text-slate-100">
          Karma Cards & Old Relics
        </h2>
        <p className="text-xs text-slate-300">
          Early algorithmic constructs, statistical machine-learning models, and functional-programming prototypes from Kshiteesh's initial leveling-up arc.
        </p>
      </div>

      {/* Two-column layout: grid on left, detail panel on right (matches Karma inventory ref) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

        {/* Card grid */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {RELIC_PROJECTS.map(relic => {
              const isSelected = selectedId === relic.id;
              const rarity = relic.rarity;

              return (
                <div
                  key={relic.id}
                  onClick={() => setSelectedId(relic.id)}
                  className={`aspect-[3/4] rounded-lg border-2 cursor-pointer transition-all duration-200 relative overflow-hidden group rarity-${rarity} rarity-bg-${rarity} ${
                    isSelected ? 'is-selected scale-[1.05] z-10' : 'hover:scale-[1.03]'
                  }`}
                >
                  {/* Rarity stars */}
                  <div className="absolute top-1 left-1 flex items-center gap-[1px] z-[4] pointer-events-none">
                    {Array.from({ length: rarity }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-2 h-2 fill-current rarity-text-${rarity} drop-shadow-[0_0_2px_currentColor]`}
                      />
                    ))}
                  </div>

                  {/* Icon art */}
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <img
                      src={iconFor(relic)}
                      alt={relic.name}
                      className="w-3/4 h-3/4 object-contain opacity-90 group-hover:scale-105 transition-transform drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]"
                    />
                  </div>

                  {/* Bottom name plate */}
                  <div className="absolute bottom-0 inset-x-0 p-1.5 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-transparent">
                    <div className="font-mono text-[9px] font-bold text-slate-100 truncate text-center">
                      {relic.name}
                    </div>
                  </div>

                  {/* Sheen */}
                  <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-b from-white/8 via-transparent to-transparent" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Detail panel */}
        <div className="lg:col-span-4">
          <div
            className={`p-4 rounded-xl border-2 rarity-${selected.rarity} bg-slate-950/85 backdrop-blur-md space-y-3 animate-unfurl sticky top-24`}
          >
            {/* Header ribbon */}
            <div
              className="-mx-4 -mt-4 px-4 py-2 rounded-t-xl"
              style={{
                background: `linear-gradient(135deg, ${getRarityColor(selected.rarity)}dd 0%, ${getRarityColor(selected.rarity)}55 100%)`,
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {Array.from({ length: selected.rarity }).map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-slate-950 text-slate-950" />
                  ))}
                </div>
                <Lock className="w-3.5 h-3.5 text-slate-950/60" />
              </div>
              <h3 className="font-game-display font-black text-slate-950 text-base leading-tight mt-1">
                {selected.name}
              </h3>
              <p className="text-[10px] font-mono text-slate-950/80 font-bold">
                {selected.subtitle}
              </p>
            </div>

            {/* Level chip */}
            <div className="text-center">
              <span className={`inline-block px-3 py-1 rounded-md bg-slate-950 border rarity-${selected.rarity} font-game-display text-lg font-black rarity-text-${selected.rarity}`}>
                {selected.level}
              </span>
            </div>

            {/* Stats */}
            <div className="space-y-1 text-[11px]">
              <StatLine label="Attack" value={selected.rpgAttributes.attack} />
              <StatLine label="Defense" value={selected.rpgAttributes.defense} />
              <StatLine label="Max HP" value={selected.rpgAttributes.maxHp} />
            </div>

            {/* Trait effect */}
            <div className="pt-1">
              <div className="text-[9px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-1">
                Trait Effect
              </div>
              <div className={`p-2 rounded bg-slate-950/70 border-l-2 text-[10.5px] text-slate-200 leading-snug`}
                style={{ borderLeftColor: getRarityColor(selected.rarity) }}>
                {selected.traitEffect}
              </div>
            </div>

            {/* Description */}
            <p className="text-[10.5px] text-slate-300 leading-relaxed font-sans italic border-t border-slate-800/70 pt-2">
              {selected.description}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1 pt-1">
              {selected.techTags.map(tag => (
                <span
                  key={tag}
                  className="px-1.5 py-0.5 bg-slate-900 text-slate-300 text-[9px] font-mono rounded border border-slate-700/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};

const StatLine: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex items-center justify-between py-0.5 border-b border-slate-800/60">
    <span className="text-slate-400 font-mono font-bold uppercase text-[9px] tracking-widest">{label}</span>
    <span className="font-mono font-bold text-slate-100 text-right truncate max-w-[60%]">{value}</span>
  </div>
);

const RARITY_COLORS = ['#94A3B8', '#22C55E', '#38BDF8', '#A855F7', '#FF9F2E'];
function getRarityColor(rarity: number): string {
  return RARITY_COLORS[Math.min(Math.max(rarity, 1), 5) - 1];
}
