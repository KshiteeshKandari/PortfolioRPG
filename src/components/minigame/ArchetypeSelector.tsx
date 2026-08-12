import React from 'react';
import { Bot, Shield, Layout, Sparkles, Check } from 'lucide-react';
import { ARCHETYPES } from '../../data/portfolioData';
import { useLoadout } from '../../context/LoadoutContext';

const archetypeIconMap: Record<string, React.ElementType> = {
  Bot: Bot,
  Shield: Shield,
  Layout: Layout,
};

export const ArchetypeSelector: React.FC = () => {
  const { activeArchetype, selectArchetype } = useLoadout();

  return (
    <section id="archetypes" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
      
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-sage/20 border border-sage/40 text-sage-hover text-xs font-mono font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Recruiter Fast-Track Minigame</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-4xl font-bold text-ink">
          Build Your Own Artificer Archetype
        </h2>
        <p className="text-sm text-ink/80">
          In a hurry? Select a candidate role archetype to instantly auto-equip Kshiteesh's most relevant projects, metrics, and technology substats.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ARCHETYPES.map(preset => {
          const IconComp = archetypeIconMap[preset.iconName] || Bot;
          const isSelected = activeArchetype === preset.id;

          return (
            <div
              key={preset.id}
              onClick={() => selectArchetype(preset.id)}
              className={`parchment-card p-6 rounded-xl cursor-pointer border-2 transition-all flex flex-col justify-between space-y-4 relative ${
                isSelected ? 'border-terracotta bg-parchment-light shadow-ink-md ring-2 ring-terracotta/40' : 'border-ink hover:border-terracotta'
              }`}
            >
              {isSelected && (
                <div className="absolute -top-3 right-4 px-2.5 py-0.5 rounded bg-terracotta text-parchment-light text-xs font-mono font-bold border border-ink shadow-ink-sm flex items-center space-x-1">
                  <Check className="w-3.5 h-3.5" />
                  <span>Active Loadout</span>
                </div>
              )}

              <div className="space-y-3">
                <div className="w-12 h-12 rounded-lg bg-parchment border-2 border-ink flex items-center justify-center text-terracotta shadow-ink-sm">
                  <IconComp className="w-6 h-6" />
                </div>

                <h3 className="font-serif font-bold text-ink text-xl">
                  {preset.name}
                </h3>

                <p className="text-xs text-ink/80 leading-relaxed">
                  {preset.description}
                </p>
              </div>

              <div className="pt-3 border-t border-ink/20 flex items-center justify-between">
                <span className="text-[11px] font-mono font-semibold text-terracotta">
                  Focus: {preset.highlightFocus}
                </span>

                <button className={`px-3 py-1 rounded text-xs font-semibold border border-ink transition-all ${
                  isSelected ? 'bg-terracotta text-parchment-light' : 'bg-parchment hover:bg-parchment-dark text-ink shadow-ink-sm'
                }`}>
                  {isSelected ? 'Equipped' : 'Auto-Equip'}
                </button>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};
