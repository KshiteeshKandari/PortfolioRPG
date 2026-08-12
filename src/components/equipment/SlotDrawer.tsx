import React from 'react';
import { Cpu, Zap, Shield, Eye, Database, Wrench, Layers } from 'lucide-react';
import { useLoadout } from '../../context/LoadoutContext';
import { SlotType } from '../../types/portfolio';

export const SlotDrawer: React.FC = () => {
  const { selectedSlotFilter, setSelectedSlotFilter } = useLoadout();

  const slotTabs: { id: 'All' | SlotType; label: string; icon: React.ElementType }[] = [
    { id: 'All', label: 'All Equipment', icon: Layers },
    { id: 'Core Engine', label: 'Core Engine (Weapon)', icon: Cpu },
    { id: 'Strike Module', label: 'Strike Module (ATK)', icon: Zap },
    { id: 'Failsafe Circuit', label: 'Failsafe Circuit (DEF)', icon: Shield },
    { id: 'Interface Lens', label: 'Interface Lens (Lens)', icon: Eye },
    { id: 'Foundation Plating', label: 'Foundation (Plating)', icon: Database },
    { id: 'Neural Core', label: 'Neural Core (Head)', icon: Wrench },
  ];

  return (
    <div className="rpg-glass-panel p-2 rounded-xl overflow-x-auto scrollbar-none flex items-center space-x-2">
      {slotTabs.map(tab => {
        const IconComp = tab.icon;
        const isActive = selectedSlotFilter === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => setSelectedSlotFilter(tab.id)}
            className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold whitespace-nowrap transition-all border ${
              isActive
                ? 'bg-rpg-cyan/20 text-rpg-cyan border-rpg-cyan/60 shadow-rpg-cyan'
                : 'text-slate-400 hover:text-slate-200 border-slate-700/40 hover:bg-slate-800/50'
            }`}
          >
            <IconComp className={`w-3.5 h-3.5 ${isActive ? 'text-rpg-cyan' : 'text-slate-400'}`} />
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};
