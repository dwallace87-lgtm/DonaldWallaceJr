import React from 'react';
import { soundFx } from '../utils/audio';
import { BookOpen, Briefcase, BookA, GraduationCap, Settings, ShieldCheck, Map } from 'lucide-react';

interface RetroHeaderProps {
  recoveredCount: number;
  evidenceCount: number;
  onNavigateMap: () => void;
  onOpenDatabase: () => void;
  onOpenInventory: () => void;
  onOpenGlossary: () => void;
  onOpenTeacherGuide: () => void;
  onOpenSettings: () => void;
  onOpenReport: () => void;
  canViewReport: boolean;
}

export const RetroHeader: React.FC<RetroHeaderProps> = ({
  recoveredCount,
  evidenceCount,
  onNavigateMap,
  onOpenDatabase,
  onOpenInventory,
  onOpenGlossary,
  onOpenTeacherGuide,
  onOpenSettings,
  onOpenReport,
  canViewReport
}) => {
  return (
    <header className="flex items-center justify-between gap-4 md:gap-8 px-4 sm:px-6 py-3 border-b-2 border-cyan-800 bg-slate-950/95 sticky top-0 z-40 backdrop-blur-xs select-none">
      {/* Zone 1: Brand Wordmark (Single text element) */}
      <button
        onClick={() => {
          soundFx.playBlip(500);
          onNavigateMap();
        }}
        className="text-base sm:text-lg font-pixel font-bold tracking-tight text-white whitespace-nowrap shrink-0 hover:text-cyan-400 transition-colors flex items-center gap-2 text-left"
      >
        <span className="w-2.5 h-2.5 bg-cyan-400 shrink-0 inline-block" />
        <span className="crt-glow">THE RIGHTS PROTOCOL</span>
      </button>

      {/* Zone 2: Navigation Links (1-2 word labels, single line) */}
      <nav className="hidden md:flex items-center gap-5 text-xs font-mono text-slate-300">
        <button
          onClick={() => {
            soundFx.playBlip(500);
            onNavigateMap();
          }}
          className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
        >
          <Map className="w-3.5 h-3.5" />
          <span>City Map</span>
        </button>

        <button
          onClick={() => {
            soundFx.playBlip(500);
            onOpenDatabase();
          }}
          className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
        >
          <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
          <span>Database ({recoveredCount}/10)</span>
        </button>

        <button
          onClick={() => {
            soundFx.playBlip(500);
            onOpenInventory();
          }}
          className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
        >
          <Briefcase className="w-3.5 h-3.5 text-amber-400" />
          <span>Evidence ({evidenceCount})</span>
        </button>

        <button
          onClick={() => {
            soundFx.playBlip(500);
            onOpenGlossary();
          }}
          className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
        >
          <BookA className="w-3.5 h-3.5 text-emerald-400" />
          <span>Glossary</span>
        </button>

        <button
          onClick={() => {
            soundFx.playBlip(500);
            onOpenTeacherGuide();
          }}
          className="hover:text-indigo-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
        >
          <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
          <span>Teacher Guide</span>
        </button>
      </nav>

      {/* Zone 3: 1 Primary Action */}
      <div className="flex items-center gap-2 shrink-0">
        {canViewReport && (
          <button
            onClick={() => {
              soundFx.playSuccess();
              onOpenReport();
            }}
            className="px-3 py-1.5 text-xs font-pixel font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all whitespace-nowrap shrink-0 hidden sm:flex items-center gap-1.5"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>REPORT</span>
          </button>
        )}

        <button
          onClick={() => {
            soundFx.playBlip(500);
            onOpenSettings();
          }}
          className="px-3 py-1.5 text-xs font-mono font-medium text-cyan-300 bg-slate-900 border border-slate-700 hover:border-cyan-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
          aria-label="Settings"
        >
          <Settings className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Settings</span>
        </button>
      </div>
    </header>
  );
};
