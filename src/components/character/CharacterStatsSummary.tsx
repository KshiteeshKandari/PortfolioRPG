import React from 'react';
import { Shield, Zap, Cpu, Award, Wrench } from 'lucide-react';
import { useLoadout } from '../../context/LoadoutContext';

export const CharacterStatsSummary: React.FC = () => {
  const { equippedMap } = useLoadout();

  const activeProjects = Object.values(equippedMap).filter(p => !p.isSealed);
  
  // Calculate total rarity power level
  const totalPower = activeProjects.reduce((acc, p) => acc + p.rarity, 0) + 12; // Base power level 12

  // Collect active tech tags
  const activeTechSet = new Set<string>();
  activeProjects.forEach(p => {
    p.techTags.forEach(tag => activeTechSet.add(tag));
  });
  const activeTechTags = Array.from(activeTechSet);

  return (
    <div className="parchment-card p-5 rounded-xl space-y-4">
      {/* Header Stat Line */}
      <div className="flex items-center justify-between border-b-2 border-ink/20 pb-3">
        <div>
          <div className="flex items-center space-x-2">
            <h3 className="font-serif text-lg font-bold text-ink">Artificer Summary</h3>
            <span className="text-xs font-mono font-bold bg-terracotta text-parchment-light px-2 py-0.5 rounded border border-ink">
              Lv. 99
            </span>
          </div>
          <p className="text-xs text-ink/70">Kshiteesh Kandari &bull; M.S. Computer Science (4.0 GPA)</p>
        </div>

        <div className="text-right">
          <span className="text-xs font-mono font-semibold text-ink/70 block uppercase">Total Power</span>
          <span className="font-serif text-2xl font-bold text-terracotta">{totalPower} ★</span>
        </div>
      </div>

      {/* Main Stats Breakdown */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
        {activeProjects.map(proj => (
          <div key={proj.id} className="parchment-inset p-2.5 rounded border border-ink/40 flex items-start space-x-2">
            <Zap className="w-4 h-4 text-terracotta flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-ink block">{proj.slot} ({proj.name})</span>
              <span className="font-mono text-ink/80 text-[11px]">
                {proj.mainStat.label}: <strong className="text-ink font-bold">{proj.mainStat.value}</strong>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Active Tech Stack Chips */}
      <div>
        <div className="flex items-center space-x-1.5 mb-2 text-xs font-semibold text-ink/70 uppercase font-mono">
          <Wrench className="w-3.5 h-3.5 text-sage" />
          <span>Equipped Technology Constructs ({activeTechTags.length})</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {activeTechTags.map(tag => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-parchment text-ink text-[11px] font-mono font-medium rounded border border-ink/40 shadow-[1px_1px_0px_#4A3B2E]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
