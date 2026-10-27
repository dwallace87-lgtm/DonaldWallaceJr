export type CharacterId = 'reyes' | 'civiclock' | 'morgan' | 'vega' | 'null_architect';

export interface Character {
  id: CharacterId;
  name: string;
  role: string;
  avatarColor: string;
  badge: string;
  portrait: string; // SVG or pixel asset path
}

export interface AmendmentCard {
  id: number; // 1 to 10
  roman: string;
  title: string;
  shortSummary: string;
  officialExcerpt: string;
  plainEnglish: string;
  keyProtections: string[];
  memoryAnchor: string;
  realisticExample: string;
  commonlyConfusedWith: string;
  historicalContext: string;
}

export interface EvidenceItem {
  id: string;
  name: string;
  iconName: string;
  location: string;
  shortSnippet: string;
  fullDescription: string;
  legalRelevance: string;
}

export interface DialogueLine {
  speaker: CharacterId;
  text: string;
  choices?: {
    label: string;
    nextDialogueId?: string;
    isCorrect?: boolean;
    feedback?: string;
  }[];
}

export type PuzzleType = 
  | 'matching'
  | 'multiple_choice'
  | 'drag_sort'
  | 'inspection'
  | 'document_reconstruct'
  | 'courtroom_repair'
  | 'cable_patch'
  | 'slider_safeguard'
  | 'multi_scenario';

export interface PuzzleStep {
  id: string;
  title: string;
  prompt: string;
  type: PuzzleType;
  instructions: string;
  evidenceItemsToGrant?: EvidenceItem[];
  options?: {
    id: string;
    label: string;
    isCorrect: boolean;
    feedback: string;
    category?: string;
  }[];
  matchingPairs?: {
    id: string;
    left: string;
    right: string;
    leftHint?: string;
  }[];
  sortCategories?: {
    id: string;
    title: string;
    description: string;
  }[];
  sortItems?: {
    id: string;
    text: string;
    targetCategoryId: string;
    explanation: string;
  }[];
  reconstructFragments?: {
    id: string;
    text: string;
    correctOrder: number;
  }[];
  sliderControls?: {
    id: string;
    title: string;
    currentValue: string;
    correctValue: string;
    options: string[];
    explanation: string;
  }[];
  hotspots?: {
    id: string;
    label: string;
    x: number; // percentage
    y: number; // percentage
    icon: string;
    evidenceGrantedId?: string;
    dialogue: string;
  }[];
  hintLadder: [string, string, string]; // Hint 1, 2, 3
}

export interface Mission {
  id: number; // 1 to 10, or 11 for final vault
  codeName: string;
  title: string;
  district: string;
  amendmentCovered: number;
  isMain: boolean; // true for 1, 2, 4, 5, 6, 7; false for 3, 8, 9, 10
  unlockedByDefault?: boolean;
  requiredPreviousMissions: number[];
  briefing: {
    dialogue: DialogueLine[];
    backgroundStory: string;
    learningObjective: string;
  };
  puzzles: PuzzleStep[];
  celebrationDialogue: DialogueLine[];
}

export interface GlossaryTerm {
  term: string;
  termEs: string;
  definitionEn: string;
  definitionEs: string;
  exampleEn: string;
  exampleEs: string;
  relevantAmendments: number[];
}

export interface UserGameState {
  studentName: string;
  completedMissions: number[]; // e.g. [1, 2, 3...]
  recoveredAmendments: number[];
  collectedEvidence: string[]; // evidence item IDs
  currentScreen: 'TITLE' | 'INTRO' | 'CITY_MAP' | 'MISSION' | 'VAULT' | 'VICTORY' | 'REPORT' | 'TEACHER_GUIDE';
  activeMissionId: number | null;
  activePuzzleIndex: number;
  hintsUsedCount: number;
  correctFirstAttemptCount: number;
  totalAttempts: number;
  soundEnabled: boolean;
  soundVolume: number; // 0 to 1
  crtEffects: boolean;
  reducedMotion: boolean;
  startedAt: string;
  completedAt: string | null;
}
