import React from 'react';

const sparkleSeeds = Array.from({ length: 14 }, (_, i) => ({
  left: `${(i * 37 + 11) % 90 + 5}%`,
  delay: `${(i * 0.7) % 6}s`,
  duration: `${5 + (i % 5)}s`,
  size: 2 + (i % 3),
  color: i % 3 === 0 ? '#FF9F2E' : i % 3 === 1 ? '#38BDF8' : '#FCD34D',
}));

export const ArtificerAvatar: React.FC = () => {
  return (
    <div className="relative w-full h-[520px] max-w-sm mx-auto flex items-end justify-center select-none">

      {/* Ground pool — wide soft bloom */}
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] h-40 rounded-full blur-3xl pointer-events-none character-ground-glow"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(255, 159, 46, 0.55) 0%, rgba(56, 189, 248, 0.25) 40%, transparent 75%)',
        }}
      />

      {/* Ground pool — tight bright core */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 w-40 h-16 rounded-full blur-2xl pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(252, 211, 77, 0.85) 0%, rgba(255, 159, 46, 0.4) 55%, transparent 90%)',
        }}
      />

      {/* Mandala rings — outer */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-72 h-72 pointer-events-none opacity-40 mandala-outer">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <radialGradient id="mandala-fade" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FF9F2E" stopOpacity="0" />
              <stop offset="70%" stopColor="#FF9F2E" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FF9F2E" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="100" cy="100" r="94" fill="none" stroke="url(#mandala-fade)" strokeWidth="1" strokeDasharray="2 4" />
          <circle cx="100" cy="100" r="80" fill="none" stroke="#FCD34D" strokeWidth="0.6" strokeDasharray="1 8" opacity="0.55" />
          {/* Runic ticks */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x1 = 100 + Math.cos(angle) * 86;
            const y1 = 100 + Math.sin(angle) * 86;
            const x2 = 100 + Math.cos(angle) * 92;
            const y2 = 100 + Math.sin(angle) * 92;
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#FF9F2E" strokeWidth="1.2" opacity="0.6" />;
          })}
        </svg>
      </div>

      {/* Mandala rings — inner, counter-rotating */}
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 w-52 h-52 pointer-events-none opacity-50 mandala-inner">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="70" fill="none" stroke="#38BDF8" strokeWidth="0.8" strokeDasharray="4 6" opacity="0.5" />
          <circle cx="100" cy="100" r="55" fill="none" stroke="#FF9F2E" strokeWidth="0.6" strokeDasharray="1 3" opacity="0.65" />
          {/* Hex vertices */}
          {Array.from({ length: 6 }).map((_, i) => {
            const angle = (i * 60 * Math.PI) / 180;
            const x = 100 + Math.cos(angle) * 62;
            const y = 100 + Math.sin(angle) * 62;
            return <circle key={i} cx={x} cy={y} r="1.6" fill="#FCD34D" opacity="0.85" />;
          })}
        </svg>
      </div>

      {/* Floating sparkle particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {sparkleSeeds.map((s, i) => (
          <span
            key={i}
            className="sparkle"
            style={{
              left: s.left,
              bottom: '10%',
              width: `${s.size}px`,
              height: `${s.size}px`,
              background: s.color,
              boxShadow: `0 0 6px ${s.color}, 0 0 12px ${s.color}`,
              animationDelay: s.delay,
              animationDuration: s.duration,
            }}
          />
        ))}
      </div>

      {/* Character render */}
      <div className="relative w-full h-full flex items-end justify-center z-10">
        <img
          src="/assets/artificer_hero.jpg"
          alt="Kshiteesh Kandari - Artificer Character"
          className="w-full h-full object-contain object-bottom drop-shadow-[0_18px_28px_rgba(0,0,0,0.75)]"
          style={{ maskImage: 'linear-gradient(to bottom, black 88%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 88%, transparent 100%)' }}
        />
      </div>

      {/* Character name plate at bottom */}
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none">
        <div className="px-4 py-1 rounded-md border border-mock-gold/70 bg-slate-950/85 backdrop-blur-md shadow-[0_0_16px_rgba(255,159,46,0.5)]">
          <span className="font-game-display text-sm font-black tracking-[0.2em] text-mock-gold uppercase">
            Artificer
          </span>
        </div>
        <span className="mt-1 text-[10px] font-mono text-slate-300 tracking-widest uppercase">
          Kshiteesh Kandari · Lv 99
        </span>
      </div>

    </div>
  );
};
