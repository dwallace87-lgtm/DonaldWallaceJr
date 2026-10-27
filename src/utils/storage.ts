import { UserGameState } from '../types/game';

const STORAGE_KEY = 'THE_RIGHTS_PROTOCOL_SAVE_DATA_V1';

const defaultState: UserGameState = {
  studentName: '',
  completedMissions: [],
  recoveredAmendments: [],
  collectedEvidence: [],
  currentScreen: 'TITLE',
  activeMissionId: null,
  activePuzzleIndex: 0,
  hintsUsedCount: 0,
  correctFirstAttemptCount: 0,
  totalAttempts: 0,
  soundEnabled: true,
  soundVolume: 0.3,
  crtEffects: true,
  reducedMotion: false,
  startedAt: new Date().toISOString(),
  completedAt: null,
};

export function loadSavedGameState(): UserGameState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...defaultState, startedAt: new Date().toISOString() };
    const parsed = JSON.parse(raw);
    return {
      ...defaultState,
      ...parsed,
    };
  } catch (e) {
    console.warn('LocalStorage unavailable, using in-memory state', e);
    return { ...defaultState, startedAt: new Date().toISOString() };
  }
}

export function saveGameState(state: UserGameState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn('Could not save to localStorage', e);
  }
}

export function clearSavedGameState(): UserGameState {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {}
  return { ...defaultState, startedAt: new Date().toISOString() };
}

// Generate teacher verification hash for the student completion report
export function generateVerificationHash(studentName: string, completedMissions: number[], date: string): string {
  const payload = `${studentName.trim().toUpperCase()}_${completedMissions.sort().join('-')}_${date.split('T')[0]}_CIVICLOCK_RESTORED`;
  let hash = 0;
  for (let i = 0; i < payload.length; i++) {
    const char = payload.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  return `RRU-${Math.abs(hash).toString(16).toUpperCase().padStart(8, '0')}`;
}
