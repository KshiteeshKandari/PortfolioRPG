import React from 'react';
import {
  Shield,
  Sword,
  Heart,
  Check,
  Sparkles,
  ExternalLink,
  Lock,
  Star,
  Zap,
  Cpu,
  Eye,
  Database,
  Wrench,
} from 'lucide-react';
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

export const EquipmentInspector: React.FC = () => {
  const { selectedArtifactId, equippedMap, equipProject, openProjectModal, activeSynergies } = useLoadout();

  const selectedArtifact = FLAGSHIP_PROJECTS.find(p => p.id === selectedArtifactId) || FLAGSHIP_PROJECTS[0];
  const isEquipped = Object.values(equippedMap).some(eq => eq.id === selectedArtifact.id);
  const isSealed = selectedArtifact.isSealed;
  const rarity = isSealed ? 1 : selectedArtifact.rarity;
  const SlotIcon = slotIcons[selectedArtifact.slot] || Cpu;

  const relatedSynergy = activeSynergies.find(s => s.requiredProjectIds.includes(selectedArtifact.id));

  return (
    <div
      className={`mock-inspector-glass p-5 space-y-4 text-slate-100 animate-unfurl border-2 rarity-${rarity}`}
      style={{ borderRadius: '1.25rem' }}
    >

      {/* Header: slot chip + rarity stars, name, subtitle */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-lg bg-slate-950 border-2 rarity-${rarity} flex items-center justify-center rarity-text-${rarity}`}
              style={{ boxShadow: 'none' }}
            >
              <SlotIcon className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">
              {selectedArtifact.slot}
            </span>
          </div>
          <div className="flex items-center gap-0.5">
            {Array.from({ length: rarity }).map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 fill-current rarity-text-${rarity} drop-shadow-[0_0_3px_currentColor]`}
              />
            ))}
          </div>
        </div>

        <h3 className={`font-game-display font-black text-xl leading-tight rarity-text-${rarity}`}>
          {selectedArtifact.name}
        </h3>
        <p className="text-[11px] font-mono text-slate-300 leading-snug">
          {selectedArtifact.subtitle}
        </p>

        <div
          className={`h-[2px] w-full rounded-full`}
          style={{
            background: `linear-gradient(to right, currentColor, transparent)`,
            color: `var(--rarity-color-${rarity})`,
          }}
        />
        <div
          className="h-[2px] w-full rounded-full opacity-70"
          style={{
            background: 'linear-gradient(to right, #FF9F2E, rgba(255,159,46,0.4), transparent)',
          }}
        />
      </div>

      {/* Main stat banner */}
      {!isSealed && (
        <div
          className={`p-3 rounded-lg bg-slate-950/70 border rarity-${rarity}`}
          style={{ boxShadow: 'none' }}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-[9px] font-mono uppercase tracking-widest text-slate-400 font-bold">
              Main Stat
            </span>
            <Sparkles className={`w-3.5 h-3.5 rarity-text-${rarity}`} />
          </div>
          <div className={`text-[10px] font-mono rarity-text-${rarity} font-bold uppercase`}>
            {selectedArtifact.mainStat.label}
          </div>
          <div className="font-game-display text-sm font-black text-slate-100 leading-tight mt-0.5">
            {selectedArtifact.mainStat.value}
          </div>
        </div>
      )}

      {/* Combat stat rows — icon + label + value with subtle delta */}
      {!isSealed && (
        <div className="space-y-1">
          <StatRow icon={Sword} label="ATK" value={selectedArtifact.rpgAttributes.attack} delta="+864" deltaColor="text-emerald-400" />
          <StatRow icon={Shield} label="DEF" value={selectedArtifact.rpgAttributes.defense} delta="+312" deltaColor="text-emerald-400" />
          <StatRow icon={Heart} label="HP" value={selectedArtifact.rpgAttributes.maxHp} delta="+1,240" deltaColor="text-emerald-400" />
        </div>
      )}

      {/* Substats list (previously hidden — now surfaced like reference stat panel) */}
      {!isSealed && (
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-mono uppercase tracking-widest text-slate-400 font-bold">
              Substats
            </span>
            <span className="text-[9px] font-mono text-slate-500">
              +{selectedArtifact.subStats.length}
            </span>
          </div>
          <ul className="space-y-1">
            {selectedArtifact.subStats.slice(0, 4).map((sub, i) => (
              <li key={i} className="flex items-start gap-1.5 text-[10.5px] leading-snug">
                <span className={`rarity-text-${rarity} font-black mt-[1px]`}>›</span>
                <span className="text-slate-300 font-sans">{sub}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Trait effect / set bonus block (styled like Noblesse Oblige callout) */}
      <div
        className="p-2.5 rounded-lg bg-slate-950/80 border-l-2 space-y-1"
        style={{ borderLeftColor: getRarityColor(rarity) }}
      >
        <div className="flex items-center gap-1.5">
          <Sparkles className={`w-3 h-3 rarity-text-${rarity}`} />
          <span className={`text-[9px] font-mono uppercase tracking-widest font-bold rarity-text-${rarity}`}>
            Trait Effect
          </span>
        </div>
        <p className="text-[10.5px] text-slate-200 leading-relaxed font-sans">
          {selectedArtifact.traitEffect}
        </p>
      </div>

      {/* Active set bonus, if any */}
      {relatedSynergy && (
        <div
          className="p-2.5 rounded-lg bg-gradient-to-br from-amber-950/60 to-slate-950/80 border-l-2 border-mock-gold space-y-1"
          style={{ boxShadow: '0 0 12px rgba(255, 159, 46, 0.25)' }}
        >
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-mock-gold animate-pulse" />
            <span className="text-[9px] font-mono uppercase tracking-widest font-bold text-mock-gold">
              Set Bonus Active · {relatedSynergy.name}
            </span>
          </div>
          <ul className="space-y-0.5 text-[10.5px] text-slate-200 leading-relaxed">
            <li className="flex items-start gap-1.5">
              <span className="text-mock-gold font-bold">✦</span>
              <span>{relatedSynergy.bonusText}</span>
            </li>
          </ul>
        </div>
      )}

      {/* Tech tags */}
      {!isSealed && (
        <div className="space-y-1">
          <span className="text-[9px] font-mono uppercase tracking-widest text-slate-400 font-bold block">
            Stack
          </span>
          <div className="flex flex-wrap gap-1">
            {selectedArtifact.techTags.slice(0, 6).map(tag => (
              <span
                key={tag}
                className="px-1.5 py-0.5 bg-slate-950/80 text-slate-300 text-[9px] font-mono rounded border border-slate-700/60 hover:border-mock-gold hover:text-slate-100 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Action buttons */}
      <div className="pt-1 space-y-1.5">
        {!isSealed ? (
          <button
            onClick={() => equipProject(selectedArtifact.slot, selectedArtifact.id)}
            disabled={isEquipped}
            className={`w-full py-2.5 rounded-lg font-mono font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 border-2 transition-all ${
              isEquipped
                ? `bg-slate-950/80 rarity-text-${rarity} rarity-${rarity} cursor-default`
                : 'bg-gradient-to-r from-mock-gold via-amber-400 to-mock-gold text-slate-950 border-yellow-300 shadow-[0_0_20px_rgba(255,159,46,0.6)] hover:brightness-110 active:translate-y-0.5'
            }`}
            style={isEquipped ? { boxShadow: `0 0 12px ${getRarityColor(rarity)}66` } : undefined}
          >
            {isEquipped ? (
              <>
                <Check className="w-4 h-4" />
                <span>Equipped</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Equip</span>
              </>
            )}
          </button>
        ) : (
          <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-700 text-center text-xs text-slate-400 italic flex items-center justify-center gap-2">
            <Lock className="w-4 h-4" />
            <span>Sealed Artifact</span>
          </div>
        )}

        {!isSealed && (
          <button
            onClick={() => openProjectModal(selectedArtifact)}
            className="w-full py-1.5 rounded-md bg-slate-950/60 hover:bg-slate-900 text-slate-300 hover:text-slate-100 text-[10px] font-mono font-semibold border border-slate-700/60 flex items-center justify-center gap-1 transition-colors uppercase tracking-widest"
          >
            <span>Full Write-up</span>
            <ExternalLink className="w-3 h-3" />
          </button>
        )}
      </div>

    </div>
  );
};

const StatRow: React.FC<{
  icon: React.ElementType;
  label: string;
  value: string;
  delta?: string;
  deltaColor?: string;
}> = ({ icon: Icon, label, value, delta, deltaColor }) => (
  <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
    <div className="flex items-center gap-1.5 text-slate-300">
      <Icon className="w-3 h-3 text-slate-500" />
      <span className="text-[10px] font-mono font-bold uppercase tracking-wider">{label}</span>
    </div>
    <div className="flex items-baseline gap-1.5 text-right">
      <span className="font-mono font-bold text-slate-100 text-[11px] max-w-[160px] truncate">
        {value}
      </span>
      {delta && <span className={`text-[9px] font-mono ${deltaColor || 'text-slate-500'}`}>{delta}</span>}
    </div>
  </div>
);

const RARITY_COLORS = ['#94A3B8', '#22C55E', '#38BDF8', '#A855F7', '#FF9F2E'];
function getRarityColor(rarity: number): string {
  return RARITY_COLORS[Math.min(Math.max(rarity, 1), 5) - 1];
}
