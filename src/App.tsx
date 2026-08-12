import React from 'react';
import { LoadoutProvider, useLoadout } from './context/LoadoutContext';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { LeftSidebar } from './components/common/LeftSidebar';
import { EquipmentHall } from './components/equipment/EquipmentHall';
import { OldRelicsDrawer } from './components/relics/OldRelicsDrawer';
import { LoreTimeline } from './components/background/LoreTimeline';
import { ContactSection } from './components/contact/ContactSection';
import { SimpleModeView } from './components/common/SimpleModeView';
import { ProjectDetailModal } from './components/equipment/ProjectDetailModal';

const PortfolioContent: React.FC = () => {
  const { isSimpleMode, activeTab, selectedProjectModal, closeProjectModal } = useLoadout();

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-mock-gold selection:text-slate-950 antialiased relative text-slate-100">
      
      {/* Background Wallpaper Container with Heavy Blur & Tint */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 filter blur-[10px] opacity-85"
          style={{ backgroundImage: "url('/assets/wp4146170-rpg-wallpapers.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1722]/70 via-[#0F1722]/55 to-[#0F1722]/80" />
      </div>

      {/* Persistent Header */}
      <div className="relative z-10">
        <Header />
      </div>

      {/* Main Workspace Area (Fully Responsive for Desktop, Tablet, & Mobile) */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 relative z-10">
        {isSimpleMode ? (
          <SimpleModeView />
        ) : (
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 items-start">
            {/* Left Sidebar Navigation Bar */}
            <LeftSidebar />

            {/* Main Content Workspace */}
            <div className="flex-grow w-full space-y-6">
              {activeTab === 'equipment' && <EquipmentHall />}
              {activeTab === 'relics' && <OldRelicsDrawer />}
              {activeTab === 'lore' && <LoreTimeline />}
              {activeTab === 'contact' && <ContactSection />}
            </div>
          </div>
        )}
      </main>

      {/* Persistent Footer */}
      <div className="relative z-10">
        <Footer />
      </div>

      {/* Global Project Detail Inspection Modal */}
      <ProjectDetailModal
        project={selectedProjectModal}
        onClose={closeProjectModal}
      />
    </div>
  );
};

export function App() {
  return (
    <LoadoutProvider>
      <PortfolioContent />
    </LoadoutProvider>
  );
}

export default App;
