import React from 'react';
import { Star } from 'lucide-react';
import { RarityLevel } from '../../types/portfolio';

interface RarityBadgeProps {
  rarity: RarityLevel;
  showText?: boolean;
  size?: 'sm' | 'md';
}

const rarityNames: Record<RarityLevel, string> = {
  1: 'Common',
  2: 'Uncommon',
  3: 'Rare',
  4: 'Epic',
  5: 'Legendary',
};

export const RarityBadge: React.FC<RarityBadgeProps> = ({ rarity, showText = false, size = 'md' }) => {
  const starSize = size === 'sm' ? 'w-3 h-3' : 'w-3.5 h-3.5';
  const padding = size === 'sm' ? 'px-2 py-0.5' : 'px-2.5 py-1';

  return (
    <div
      className={`inline-flex items-center gap-1.5 ${padding} rounded-md border font-mono text-xs font-bold rarity-${rarity} rarity-text-${rarity} bg-slate-950/70`}
      style={{ backdropFilter: 'blur(4px)' }}
    >
      <div className="flex items-center gap-0.5">
        {Array.from({ length: rarity }).map((_, i) => (
          <Star
            key={i}
            className={`${starSize} fill-current drop-shadow-[0_0_3px_currentColor]`}
          />
        ))}
      </div>
      {showText && <span className="uppercase tracking-wide">{rarityNames[rarity]}</span>}
    </div>
  );
};
