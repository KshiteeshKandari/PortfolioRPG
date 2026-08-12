export type RarityLevel = 1 | 2 | 3 | 4 | 5;

export type SlotType =
  | 'Core Engine'
  | 'Strike Module'
  | 'Failsafe Circuit'
  | 'Interface Lens'
  | 'Foundation Plating'
  | 'Neural Core';

export type MainTabType = 'equipment' | 'relics' | 'lore' | 'contact';

export interface MainStat {
  label: string;
  value: string;
}

export interface RPGAttributes {
  attack: string;
  defense: string;
  maxHp: string;
}

export interface Project {
  id: string;
  slot: SlotType;
  name: string;
  subtitle: string;
  rarity: RarityLevel;
  level: string;
  mainStat: MainStat;
  rpgAttributes: RPGAttributes;
  traitEffect: string;
  subStats: string[];
  techTags: string[];
  description: string;
  artworkType: string;
  iconPath?: string;
  repoLink?: string | null;
  isSealed?: boolean;
}

export interface RelicProject {
  id: string;
  name: string;
  subtitle: string;
  rarity: RarityLevel;
  level: string;
  mainStat: MainStat;
  rpgAttributes: RPGAttributes;
  traitEffect: string;
  subStats: string[];
  techTags: string[];
  description: string;
  artworkType: string;
  iconPath?: string;
}

export interface ExperienceLore {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
  paperNote?: string;
}

export interface EducationLore {
  degree: string;
  institution: string;
  year: string;
  gpa: string;
  honors?: string;
}

export interface ArchetypePreset {
  id: string;
  name: string;
  iconName: string;
  description: string;
  equippedSlots: Record<SlotType, string>;
  highlightFocus: string;
}

export interface Synergy {
  id: string;
  name: string;
  description: string;
  requiredProjectIds: string[];
  bonusText: string;
}

export interface SubstatSuggestion {
  id: string;
  projectSlot: string;
  suggestion: string;
  suggestedBy?: string;
  createdAt: string;
}
