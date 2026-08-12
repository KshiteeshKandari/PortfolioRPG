import React from 'react';
import { Check, Lock, Shield, Cpu, Zap, Eye, Database, Wrench, Star } from 'lucide-react';
import { useLoadout } from '../../context/LoadoutContext';
import { FLAGSHIP_PROJECTS } from '../../data/portfolioData';
import { SlotType } from '../../types/portfolio';

const slotIcons: Record<SlotType, React.ElementType> = {
  'Core Engine': Cpu,
  'Strike Module': Zap,
  'Failsafe Circuit': Shield,
  'Interface Lens': Eye,
  'Foundation Plating': Database,
  'Neural Core': Wrench,
};

export const ArtifactCardGrid: React.FC = () => {
  const { equippedMap, selectedArtifactId, setSelectedArtifactId, equipProject } = useLoadout();

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-xs font-mono text-slate-300 px-1">
        <span className="font-game-display font-bold tracking-wide">Collectible Gear</span>
        <span className="text-[11px] text-slate-400 font-sans">Click · Double-click to equip</span>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
        {FLAGSHIP_PROJECTS.map(proj => {
          const isSelected = selectedArtifactId === proj.id;
          const isEquipped = Object.values(equippedMap).some(eq => eq.id === proj.id);
          const IconComp = slotIcons[proj.slot] || Cpu;
          const rarity = proj.isSealed ? 1 : proj.rarity;

          return (
            <div
              key={proj.id}
              onClick={() => setSelectedArtifactId(proj.id)}
              onDoubleClick={() => {
                if (!proj.isSealed) equipProject(proj.slot, proj.id);
              }}
              className={`aspect-square rounded-xl cursor-pointer border-2 transition-all duration-200 relative overflow-hidden group rarity-${rarity} rarity-bg-${rarity} ${
                isSelected ? 'is-selected scale-[1.06] z-10' : 'hover:scale-[1.03]'
              }`}
              title={`${proj.name} — ${proj.slot}`}
            >
              {/* Top-left rarity stars */}
              <div className="absolute top-1 left-1 flex items-center gap-[1px] z-[4] pointer-events-none">
                {Array.from({ length: rarity }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-2 h-2 fill-current rarity-text-${rarity} drop-shadow-[0_0_2px_currentColor]`}
                  />
                ))}
              </div>

              {/* Top-right equipped ribbon (gold when equipped) */}
              {isEquipped && (
                <div
                  className="corner-ribbon flex items-center gap-0.5"
                  style={{ background: 'linear-gradient(135deg, #FCD34D 0%, #FF9F2E 100%)' }}
                >
                  <Check className="w-2.5 h-2.5 stroke-[3.5]" />
                  <span>EQ</span>
                </div>
              )}

              {/* Sealed ribbon */}
              {proj.isSealed && !isEquipped && (
                <div
                  className="corner-ribbon"
                  style={{ background: 'linear-gradient(135deg, #64748B 0%, #334155 100%)', color: '#F8FAFC' }}
                >
                  SEAL
                </div>
              )}

              {/* Icon artwork — bleeds to edges */}
              <div className="absolute inset-0 flex items-center justify-center">
                {proj.isSealed ? (
                  <Lock className="w-9 h-9 text-slate-500 group-hover:text-slate-400 transition-colors" />
                ) : proj.iconPath ? (
                  <img
                    src={proj.iconPath}
                    alt={proj.name}
                    className="w-[92%] h-[92%] object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]"
                  />
                ) : (
                  <IconComp className={`w-10 h-10 rarity-text-${rarity}`} />
                )}
              </div>

              {/* Inner sheen (top highlight) */}
              <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-b from-white/8 via-transparent to-transparent" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
