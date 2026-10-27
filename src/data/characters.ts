import { Character, CharacterId } from '../types/game';

export const CHARACTERS: Record<CharacterId, Character> = {
  reyes: {
    id: 'reyes',
    name: 'ARCHIVIST REYES',
    role: 'Constitutional Historian & R.R.U. Handler',
    avatarColor: 'border-cyan-400 bg-cyan-950/80 text-cyan-200',
    badge: 'R.R.U. HQ ARCHIVE',
    portrait: 'reyes'
  },
  civiclock: {
    id: 'civiclock',
    name: 'CIVICLOCK v2.4',
    role: 'Corrupted Municipal OS',
    avatarColor: 'border-red-500 bg-red-950/80 text-red-200',
    badge: 'SYSTEM OVERRIDE',
    portrait: 'civiclock'
  },
  morgan: {
    id: 'morgan',
    name: 'DETECTIVE MORGAN',
    role: 'N.L.P.D. Major Case Squad',
    avatarColor: 'border-amber-400 bg-amber-950/80 text-amber-200',
    badge: 'INVESTIGATIONS',
    portrait: 'morgan'
  },
  vega: {
    id: 'vega',
    name: 'JUDGE VEGA',
    role: 'Superior District Court',
    avatarColor: 'border-purple-400 bg-purple-950/80 text-purple-200',
    badge: 'JUDICIARY',
    portrait: 'vega'
  },
  null_architect: {
    id: 'null_architect',
    name: 'THE NULL ARCHITECT',
    role: 'System Saboteur & Ideologue',
    avatarColor: 'border-fuchsia-500 bg-fuchsia-950/80 text-fuchsia-200',
    badge: 'ROOT ADMIN // ENCRYPTED',
    portrait: 'null_architect'
  }
};
