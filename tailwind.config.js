/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mock: {
          bg: '#0F1722',
          panel: 'rgba(19, 32, 43, 0.85)',
          'panel-border': 'rgba(51, 65, 85, 0.5)',
          accent: '#06B6D4',
          gold: '#FF9F2E',
          'gold-light': '#FCD34D',
        },
        rpg: {
          gold: '#FF9F2E',
          'gold-light': '#FCD34D',
          cyan: '#38BDF8',
          emerald: '#22C55E',
          purple: '#A855F7',
          crimson: '#EF4444',
        },
        rarity: {
          1: '#94A3B8',
          2: '#22C55E',
          3: '#38BDF8',
          4: '#A855F7',
          5: '#FF9F2E',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace', 'sans-serif'],
      },
      boxShadow: {
        'mock-glow': '0 0 20px rgba(6, 182, 212, 0.4)',
        'gold-glow': '0 0 20px rgba(255, 159, 46, 0.4)',
        'glass-card': '0 10px 30px 0 rgba(0, 0, 0, 0.5)',
        'rarity-1': '0 0 12px rgba(148, 163, 184, 0.35), inset 0 0 8px rgba(148, 163, 184, 0.15)',
        'rarity-2': '0 0 14px rgba(34, 197, 94, 0.45), inset 0 0 10px rgba(34, 197, 94, 0.18)',
        'rarity-3': '0 0 16px rgba(56, 189, 248, 0.5), inset 0 0 10px rgba(56, 189, 248, 0.2)',
        'rarity-4': '0 0 18px rgba(168, 85, 247, 0.55), inset 0 0 12px rgba(168, 85, 247, 0.22)',
        'rarity-5': '0 0 22px rgba(255, 159, 46, 0.65), inset 0 0 14px rgba(255, 159, 46, 0.28)',
        'rpg-gold': '0 0 20px rgba(255, 159, 46, 0.55)',
      }
    },
  },
  plugins: [],
}
