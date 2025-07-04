import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import DNACreation from './components/DNACreation';
import BuildDNALanding from './components/BuildDNALanding';

function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'creation'>('landing');

  const handleStartBuilding = () => {
    setCurrentView('creation');
  };

  const handleBackToLanding = () => {
    setCurrentView('landing');
  };

  return (
    <div className= "min-h-screen bg-black" >
    { currentView === 'creation' && (
      <>
      <Sidebar />
      < TopBar onBackToLanding = { handleBackToLanding } />
        </>
      )
}

{
  currentView === 'landing' ? (
    <BuildDNALanding onStartBuilding= { handleStartBuilding } />
      ) : (
    <DNACreation />
  )
}
</div>
  );
}

export default App;