import React from 'react';
import { Lock, Sparkles, ChevronRight, Zap, Shield, Eye, Cpu, Database, Wrench } from 'lucide-react';
import { Project, SlotType } from '../../types/portfolio';
import { RarityBadge } from '../common/RarityBadge';
import { useLoadout } from '../../context/LoadoutContext';

interface EquipmentSlotCardProps {
  slot: SlotType;
  project: Project;
  onSwapClick: () => void;
}

const slotIcons: Record<SlotType, React.ElementType> = {
  'Core Engine': Cpu,
  'Strike Module': Zap,
  'Failsafe Circuit': Shield,
  'Interface Lens': Eye,
  'Foundation Plating': Database,
  'Neural Core': Wrench,
};

const rarityGlowClasses: Record<number, string> = {
  1: 'rarity-glow-1',
  2: 'rarity-glow-2',
  3: 'rarity-glow-3',
  4: 'rarity-glow-4',
  5: 'rarity-glow-5',
};

export const EquipmentSlotCard: React.FC<EquipmentSlotCardProps> = ({ slot, project, onSwapClick }) => {
  const { openProjectModal } = useLoadout();
  const IconComponent = slotIcons[slot] || Cpu;

  const isSealed = project.isSealed;

  return (
    <div
      className={`parchment-card rounded-xl p-5 flex flex-col justify-between space-y-4 relative ${
        isSealed ? 'opacity-75 bg-parchment-dark/50' : rarityGlowClasses[project.rarity]
      }`}
    >
      {/* Top Bar: Slot Icon, Slot Title & Rarity */}
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-2.5">
          <div className="p-2 rounded-lg bg-parchment border-2 border-ink shadow-ink-sm text-terracotta">
            <IconComponent className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-ink/60 block">
              {slot}
            </span>
            <h3 className="font-serif font-bold text-ink text-lg leading-tight">
              {project.name}
            </h3>
          </div>
        </div>

        {isSealed ? (
          <div className="p-1.5 rounded bg-ink/10 border border-ink/40 text-ink/60" title="Sealed Slot">
            <Lock className="w-4 h-4" />
          </div>
        ) : (
          <RarityBadge rarity={project.rarity} />
        )}
      </div>

      {/* Main Stat Banner (Genshin artifact style) */}
      {!isSealed ? (
        <div className="parchment-inset p-3 rounded-lg border border-ink/40 space-y-0.5">
          <span className="text-[10px] font-mono uppercase tracking-wider text-terracotta font-semibold block">
            {project.mainStat.label}
          </span>
          <span className="font-serif text-base font-bold text-ink block">
            {project.mainStat.value}
          </span>
        </div>
      ) : (
        <div className="parchment-inset p-3 rounded-lg border border-dashed border-ink/40 space-y-0.5 text-center">
          <span className="text-xs font-serif italic text-ink/70">
            "New gear is being forged. Check back soon."
          </span>
        </div>
      )}

      {/* Substats List */}
      {!isSealed && (
        <div className="space-y-1.5">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-ink/60 block">
            Substats ({project.subStats.length})
          </span>
          <ul className="space-y-1 text-xs text-ink/80">
            {project.subStats.slice(0, 3).map((sub, i) => (
              <li key={i} className="flex items-start space-x-1.5 leading-snug">
                <span className="text-terracotta font-bold">›</span>
                <span className="line-clamp-1">{sub}</span>
              </li>
            ))}
            {project.subStats.length > 3 && (
              <li className="text-[11px] font-mono text-ink/60 italic pl-3">
                +{project.subStats.length - 3} more substats...
              </li>
            )}
          </ul>
        </div>
      )}

      {/* Tech Tags */}
      {!isSealed && (
        <div className="flex flex-wrap gap-1 pt-1">
          {project.techTags.slice(0, 4).map(tag => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-parchment text-ink text-[10px] font-mono rounded border border-ink/30"
            >
              {tag}
            </span>
          ))}
          {project.techTags.length > 4 && (
            <span className="px-1.5 py-0.5 bg-parchment/60 text-ink/60 text-[10px] font-mono rounded">
              +{project.techTags.length - 4}
            </span>
          )}
        </div>
      )}

      {/* Bottom Action Controls */}
      <div className="pt-2 border-t border-ink/20 flex items-center justify-between">
        {!isSealed ? (
          <button
            onClick={() => openProjectModal(project)}
            className="text-xs font-semibold text-terracotta hover:underline flex items-center space-x-1"
          >
            <span>Inspect Write-up</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        ) : (
          <span className="text-xs text-ink/50 italic">Sealed Artifact</span>
        )}

        <button
          onClick={onSwapClick}
          className="px-2.5 py-1 rounded bg-parchment hover:bg-parchment-dark text-xs font-semibold text-ink border border-ink shadow-ink-sm transition-all"
          title="Swap or re-equip artifact"
        >
          {isSealed ? 'Inspect Slot' : 'Swap Gear'}
        </button>
      </div>
    </div>
  );
};
