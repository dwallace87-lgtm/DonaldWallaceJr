import React, { useState, useEffect } from 'react';
import { UserGameState } from './types/game';
import { loadSavedGameState, saveGameState, clearSavedGameState } from './utils/storage';
import { MISSIONS_DATA } from './data/missions';
import { soundFx } from './utils/audio';

import { RetroHeader } from './components/RetroHeader';
import { TitleScreen } from './components/TitleScreen';
import { IntroSequence } from './components/IntroSequence';
import { CityMap } from './components/CityMap';
import { MissionView } from './components/MissionView';
import { VaultView } from './components/VaultView';
import { CompletionReport } from './components/CompletionReport';

import { ConstitutionalDatabase } from './components/ConstitutionalDatabase';
import { EvidenceInventory } from './components/EvidenceInventory';
import { GlossaryModal } from './components/GlossaryModal';
import { HintModal } from './components/HintModal';
import { SettingsModal } from './components/SettingsModal';
import { TeacherGuideModal } from './components/TeacherGuideModal';

export function App() {
  const [gameState, setGameState] = useState<UserGameState>(() => loadSavedGameState());

  // Modals state
  const [showDatabase, setShowDatabase] = useState(false);
  const [selectedDbAmendment, setSelectedDbAmendment] = useState<number | null>(null);
  const [showInventory, setShowInventory] = useState(false);
  const [showGlossary, setShowGlossary] = useState(false);
  const [showTeacherGuide, setShowTeacherGuide] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [activeHints, setActiveHints] = useState<[string, string, string] | null>(null);

  // Sync to storage on game state changes
  useEffect(() => {
    saveGameState(gameState);
  }, [gameState]);

  // Sync audio settings
  useEffect(() => {
    soundFx.setMuted(!gameState.soundEnabled);
    soundFx.setVolume(gameState.soundVolume);
  }, [gameState.soundEnabled, gameState.soundVolume]);

  // Handlers
  const handleNewGame = () => {
    setGameState(prev => ({
      ...prev,
      completedMissions: [],
      recoveredAmendments: [],
      collectedEvidence: [],
      currentScreen: 'INTRO',
      activeMissionId: null,
      activePuzzleIndex: 0,
      hintsUsedCount: 0,
      startedAt: new Date().toISOString(),
      completedAt: null
    }));
  };

  const handleContinue = () => {
    if (gameState.completedAt) {
      setGameState(prev => ({ ...prev, currentScreen: 'REPORT' }));
    } else if (gameState.completedMissions.length > 0) {
      setGameState(prev => ({ ...prev, currentScreen: 'CITY_MAP' }));
    } else {
      setGameState(prev => ({ ...prev, currentScreen: 'INTRO' }));
    }
  };

  const handleSelectMission = (missionId: number) => {
    setGameState(prev => ({
      ...prev,
      currentScreen: 'MISSION',
      activeMissionId: missionId,
      activePuzzleIndex: 0
    }));
  };

  const handleMissionCompleted = (missionId: number, amendmentId: number, evidenceIds: string[]) => {
    setGameState(prev => {
      const nextCompletedMissions = prev.completedMissions.includes(missionId)
        ? prev.completedMissions
        : [...prev.completedMissions, missionId];

      const nextRecoveredAmendments = amendmentId > 0 && !prev.recoveredAmendments.includes(amendmentId)
        ? [...prev.recoveredAmendments, amendmentId]
        : prev.recoveredAmendments;

      const nextEvidence = [...new Set([...prev.collectedEvidence, ...evidenceIds])];

      return {
        ...prev,
        completedMissions: nextCompletedMissions,
        recoveredAmendments: nextRecoveredAmendments,
        collectedEvidence: nextEvidence,
        currentScreen: 'CITY_MAP',
        activeMissionId: null
      };
    });
  };

  const handleVaultVictory = () => {
    setGameState(prev => ({
      ...prev,
      completedMissions: [...new Set([...prev.completedMissions, 11])],
      currentScreen: 'REPORT',
      completedAt: new Date().toISOString()
    }));
  };

  const handleUnlockAll = () => {
    const allIds = MISSIONS_DATA.map(m => m.id);
    const allAmendments = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    setGameState(prev => ({
      ...prev,
      completedMissions: allIds.filter(id => id !== 11),
      recoveredAmendments: allAmendments,
      currentScreen: 'CITY_MAP'
    }));
  };

  const handleResetProgress = () => {
    const fresh = clearSavedGameState();
    setGameState(fresh);
  };

  const activeMission = gameState.activeMissionId
    ? MISSIONS_DATA.find(m => m.id === gameState.activeMissionId)
    : null;

  return (
    <div className={`min-h-screen bg-slate-950 text-slate-100 flex flex-col ${gameState.crtEffects ? 'crt-overlay' : ''}`}>
      {/* Retro Navigation Header (Hidden on Title and Intro) */}
      {gameState.currentScreen !== 'TITLE' && gameState.currentScreen !== 'INTRO' && (
        <RetroHeader
          recoveredCount={gameState.recoveredAmendments.length}
          evidenceCount={gameState.collectedEvidence.length}
          onNavigateMap={() => setGameState(prev => ({ ...prev, currentScreen: 'CITY_MAP' }))}
          onOpenDatabase={() => {
            setSelectedDbAmendment(null);
            setShowDatabase(true);
          }}
          onOpenInventory={() => setShowInventory(true)}
          onOpenGlossary={() => setShowGlossary(true)}
          onOpenTeacherGuide={() => setShowTeacherGuide(true)}
          onOpenSettings={() => setShowSettings(true)}
          onOpenReport={() => setGameState(prev => ({ ...prev, currentScreen: 'REPORT' }))}
          canViewReport={gameState.recoveredAmendments.length > 0}
        />
      )}

      {/* Main View Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto p-3 sm:p-6 flex flex-col justify-center">
        {gameState.currentScreen === 'TITLE' && (
          <TitleScreen
            hasSaveData={gameState.completedMissions.length > 0 || gameState.recoveredAmendments.length > 0}
            onNewGame={handleNewGame}
            onContinue={handleContinue}
            onOpenDatabase={() => {
              setSelectedDbAmendment(null);
              setShowDatabase(true);
            }}
            onOpenTeacherGuide={() => setShowTeacherGuide(true)}
            onOpenSettings={() => setShowSettings(true)}
          />
        )}

        {gameState.currentScreen === 'INTRO' && (
          <IntroSequence
            onAcceptMission={() => setGameState(prev => ({ ...prev, currentScreen: 'CITY_MAP' }))}
            reducedMotion={gameState.reducedMotion}
          />
        )}

        {gameState.currentScreen === 'CITY_MAP' && (
          <CityMap
            completedMissions={gameState.completedMissions}
            recoveredAmendments={gameState.recoveredAmendments}
            onSelectMission={handleSelectMission}
            onOpenVault={() => setGameState(prev => ({ ...prev, currentScreen: 'VAULT' }))}
          />
        )}

        {gameState.currentScreen === 'MISSION' && activeMission && (
          <MissionView
            mission={activeMission}
            onBackToMap={() => setGameState(prev => ({ ...prev, currentScreen: 'CITY_MAP', activeMissionId: null }))}
            onMissionCompleted={handleMissionCompleted}
            onOpenHint={(hints) => setActiveHints(hints)}
            onOpenDatabase={(amendmentId) => {
              setSelectedDbAmendment(amendmentId || null);
              setShowDatabase(true);
            }}
            reducedMotion={gameState.reducedMotion}
          />
        )}

        {gameState.currentScreen === 'VAULT' && (
          <VaultView
            onBackToMap={() => setGameState(prev => ({ ...prev, currentScreen: 'CITY_MAP' }))}
            onVictory={handleVaultVictory}
            reducedMotion={gameState.reducedMotion}
          />
        )}

        {gameState.currentScreen === 'REPORT' && (
          <CompletionReport
            gameState={gameState}
            onPlayAgain={handleNewGame}
            onViewDatabase={() => {
              setSelectedDbAmendment(null);
              setShowDatabase(true);
            }}
          />
        )}
      </main>

      {/* Modals */}
      {showDatabase && (
        <ConstitutionalDatabase
          recoveredAmendments={gameState.recoveredAmendments}
          selectedAmendmentId={selectedDbAmendment}
          onClose={() => setShowDatabase(false)}
        />
      )}

      {showInventory && (
        <EvidenceInventory
          collectedEvidence={gameState.collectedEvidence}
          onClose={() => setShowInventory(false)}
        />
      )}

      {showGlossary && (
        <GlossaryModal
          onClose={() => setShowGlossary(false)}
        />
      )}

      {showTeacherGuide && (
        <TeacherGuideModal
          onClose={() => setShowTeacherGuide(false)}
        />
      )}

      {showSettings && (
        <SettingsModal
          soundEnabled={gameState.soundEnabled}
          soundVolume={gameState.soundVolume}
          crtEffects={gameState.crtEffects}
          reducedMotion={gameState.reducedMotion}
          studentName={gameState.studentName}
          onUpdateSettings={(newSettings) => {
            setGameState(prev => ({ ...prev, ...newSettings }));
          }}
          onResetProgress={handleResetProgress}
          onUnlockAllMissions={handleUnlockAll}
          onClose={() => setShowSettings(false)}
        />
      )}

      {activeHints && (
        <HintModal
          hints={activeHints}
          onClose={() => setActiveHints(null)}
          onHintRevealed={() => {
            setGameState(prev => ({ ...prev, hintsUsedCount: prev.hintsUsedCount + 1 }));
          }}
        />
      )}
    </div>
  );
}

export default App;
