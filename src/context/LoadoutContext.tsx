import React, { createContext, useContext, useState, useMemo } from 'react';
import { Project, SlotType, MainTabType, ArchetypePreset, Synergy } from '../types/portfolio';
import { FLAGSHIP_PROJECTS, ARCHETYPES, SYNERGIES } from '../data/portfolioData';

interface LoadoutContextType {
  equippedMap: Record<SlotType, Project>;
  activeTab: MainTabType;
  selectedSlotFilter: 'All' | SlotType;
  selectedArtifactId: string;
  activeArchetype: string | null;
  isSimpleMode: boolean;
  activeSynergies: Synergy[];
  selectedProjectModal: Project | null;
  
  setActiveTab: (tab: MainTabType) => void;
  setSelectedSlotFilter: (filter: 'All' | SlotType) => void;
  setSelectedArtifactId: (id: string) => void;
  equipProject: (slot: SlotType, projectId: string) => void;
  selectArchetype: (archetypeId: string) => void;
  toggleSimpleMode: () => void;
  openProjectModal: (project: Project) => void;
  closeProjectModal: () => void;
}

const defaultEquippedMap: Record<SlotType, Project> = {
  'Core Engine': FLAGSHIP_PROJECTS.find(p => p.slot === 'Core Engine')!,
  'Strike Module': FLAGSHIP_PROJECTS.find(p => p.slot === 'Strike Module')!,
  'Failsafe Circuit': FLAGSHIP_PROJECTS.find(p => p.slot === 'Failsafe Circuit')!,
  'Interface Lens': FLAGSHIP_PROJECTS.find(p => p.slot === 'Interface Lens')!,
  'Foundation Plating': FLAGSHIP_PROJECTS.find(p => p.slot === 'Foundation Plating')!,
  'Neural Core': FLAGSHIP_PROJECTS.find(p => p.slot === 'Neural Core')!
};

const LoadoutContext = createContext<LoadoutContextType | undefined>(undefined);

export const LoadoutProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [equippedMap, setEquippedMap] = useState<Record<SlotType, Project>>(defaultEquippedMap);
  const [activeTab, setActiveTab] = useState<MainTabType>('equipment');
  const [selectedSlotFilter, setSelectedSlotFilter] = useState<'All' | SlotType>('All');
  const [selectedArtifactId, setSelectedArtifactId] = useState<string>('asi-system');
  const [activeArchetype, setActiveArchetype] = useState<string | null>('ai-agent-architect');
  const [isSimpleMode, setIsSimpleMode] = useState<boolean>(false);
  const [selectedProjectModal, setSelectedProjectModal] = useState<Project | null>(null);

  const activeSynergies = useMemo(() => {
    const equippedIds = Object.values(equippedMap).map(p => p.id);
    return SYNERGIES.filter(synergy =>
      synergy.requiredProjectIds.every(id => equippedIds.includes(id))
    );
  }, [equippedMap]);

  const equipProject = (slot: SlotType, projectId: string) => {
    const targetProject = FLAGSHIP_PROJECTS.find(p => p.id === projectId);
    if (targetProject) {
      setEquippedMap(prev => ({
        ...prev,
        [slot]: targetProject
      }));
      setActiveArchetype(null);
    }
  };

  const selectArchetype = (archetypeId: string) => {
    const preset = ARCHETYPES.find(a => a.id === archetypeId);
    if (preset) {
      const newMap = { ...equippedMap };
      Object.entries(preset.equippedSlots).forEach(([slot, projectId]) => {
        const proj = FLAGSHIP_PROJECTS.find(p => p.id === projectId);
        if (proj) {
          newMap[slot as SlotType] = proj;
        }
      });
      setEquippedMap(newMap);
      setActiveArchetype(archetypeId);
    }
  };

  const toggleSimpleMode = () => {
    setIsSimpleMode(prev => !prev);
  };

  const openProjectModal = (project: Project) => {
    setSelectedProjectModal(project);
  };

  const closeProjectModal = () => {
    setSelectedProjectModal(null);
  };

  return (
    <LoadoutContext.Provider
      value={{
        equippedMap,
        activeTab,
        selectedSlotFilter,
        selectedArtifactId,
        activeArchetype,
        isSimpleMode,
        activeSynergies,
        selectedProjectModal,
        setActiveTab,
        setSelectedSlotFilter,
        setSelectedArtifactId,
        equipProject,
        selectArchetype,
        toggleSimpleMode,
        openProjectModal,
        closeProjectModal
      }}
    >
      {children}
    </LoadoutContext.Provider>
  );
};

export const useLoadout = () => {
  const context = useContext(LoadoutContext);
  if (!context) {
    throw new Error('useLoadout must be used within a LoadoutProvider');
  }
  return context;
};
