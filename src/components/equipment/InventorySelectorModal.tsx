import React from 'react';
import { X, ShieldCheck, Check } from 'lucide-react';
import { SlotType, Project } from '../../types/portfolio';
import { FLAGSHIP_PROJECTS } from '../../data/portfolioData';
import { RarityBadge } from '../common/RarityBadge';
import { useLoadout } from '../../context/LoadoutContext';

interface InventorySelectorModalProps {
  slot: SlotType | null;
  onClose: () => void;
}

export const InventorySelectorModal: React.FC<InventorySelectorModalProps> = ({ slot, onClose }) => {
  const { equippedMap, equipProject } = useLoadout();

  if (!slot) return null;

  const currentEquipped = equippedMap[slot];
  // Filter available projects matching this slot
  const availableProjects = FLAGSHIP_PROJECTS.filter(p => p.slot === slot);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/60 backdrop-blur-sm animate-unfurl">
      <div className="relative w-full max-w-lg bg-parchment-light border-2 border-ink rounded-xl shadow-ink-lg p-6 space-y-4">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b-2 border-ink/20 pb-3">
          <div>
            <span className="text-xs font-mono font-bold uppercase text-terracotta">
              Armory Inventory
            </span>
            <h3 className="font-serif text-xl font-bold text-ink">
              Select {slot} Artifact
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg border-2 border-ink bg-parchment hover:bg-parchment-dark text-ink transition-colors shadow-ink-sm"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Project List for Slot */}
        <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-1">
          {availableProjects.map(proj => {
            const isEquipped = currentEquipped?.id === proj.id;

            return (
              <div
                key={proj.id}
                onClick={() => {
                  equipProject(slot, proj.id);
                  onClose();
                }}
                className={`parchment-card p-4 rounded-lg cursor-pointer border-2 transition-all flex items-start justify-between ${
                  isEquipped ? 'border-terracotta bg-parchment/80 ring-2 ring-terracotta/30' : 'border-ink hover:border-terracotta'
                }`}
              >
                <div className="space-y-1 pr-4">
                  <div className="flex items-center space-x-2">
                    <RarityBadge rarity={proj.rarity} />
                    <h4 className="font-serif font-bold text-ink text-base">
                      {proj.name}
                    </h4>
                  </div>

                  <span className="text-xs text-ink/70 font-semibold block">
                    {proj.subtitle}
                  </span>

                  <div className="text-xs font-mono text-terracotta">
                    {proj.mainStat.label}: <strong>{proj.mainStat.value}</strong>
                  </div>
                </div>

                <div>
                  {isEquipped ? (
                    <span className="px-2.5 py-1 rounded bg-terracotta text-parchment-light text-xs font-bold font-mono flex items-center space-x-1 border border-ink">
                      <Check className="w-3.5 h-3.5" />
                      <span>Equipped</span>
                    </span>
                  ) : (
                    <button className="px-2.5 py-1 rounded bg-parchment hover:bg-parchment-dark text-ink text-xs font-semibold border border-ink shadow-ink-sm">
                      Equip
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
