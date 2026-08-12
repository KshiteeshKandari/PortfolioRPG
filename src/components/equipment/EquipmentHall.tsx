import React from 'react';
import { Undo2 } from 'lucide-react';
import { ArtificerAvatar } from '../character/ArtificerAvatar';
import { SynergyBanner } from '../character/SynergyBanner';
import { ArtifactCardGrid } from './ArtifactCardGrid';
import { EquipmentInspector } from './EquipmentInspector';

export const EquipmentHall: React.FC = () => {
  return (
    <div className="mock-app-window p-6 space-y-6">
      
      {/* Top Header with Golden Sword Crest Icon by Title */}
      <div className="flex items-center justify-between border-b border-slate-700/50 pb-4">
        <div className="flex items-center space-x-3">
          {/* Golden Sword Crest Emblem */}
          <div className="w-10 h-10 rounded-xl bg-slate-950 border border-mock-gold p-2 flex items-center justify-center text-mock-gold shadow-gold-glow">
            <svg className="w-6 h-6 text-mock-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M14.5 17.5L3 6V3h3l11.5 11.5" />
              <path d="M13 19l6-6" />
              <path d="M16 16l4 4" />
              <path d="M19 21l2-2" />
            </svg>
          </div>

          <div>
            <h1
              className="font-game-display text-2xl font-black text-slate-100 tracking-wide"
              style={{ textShadow: '0 2px 12px rgba(0,0,0,0.85)' }}
            >
              Artificer's Codex
            </h1>
            <p
              className="text-xs font-mono text-mock-gold font-bold"
              style={{ textShadow: '0 1px 6px rgba(0,0,0,0.8)' }}
            >
              Kshiteesh Kandari &bull; Interactive Armory
            </p>
          </div>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-2 rounded-xl bg-slate-900/90 border border-slate-700/80 hover:border-mock-accent text-slate-300 transition-colors"
          title="Reset View"
        >
          <Undo2 className="w-4 h-4" />
        </button>
      </div>

      {/* Top-Aligned 3-Column Armory Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Collectible Gear Cards Grid (4 Cols) */}
        <div className="lg:col-span-4 self-start">
          <ArtifactCardGrid />
        </div>

        {/* Center Column: Prominent Character Avatar (4 Cols) */}
        <div className="lg:col-span-4 flex items-center justify-center self-start">
          <ArtificerAvatar />
        </div>

        {/* Right Column: Glass Inspector Panel (4 Cols) */}
        <div className="lg:col-span-4 self-start">
          <EquipmentInspector />
        </div>

      </div>

      {/* Horizontal Container for Synergy Set Bonuses Below the Grid */}
      <SynergyBanner />

    </div>
  );
};
