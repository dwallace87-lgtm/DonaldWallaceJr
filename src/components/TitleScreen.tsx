import React from 'react';
import { soundFx } from '../utils/audio';
import { Play, RotateCcw, BookOpen, GraduationCap, Settings, ShieldAlert, Sparkles } from 'lucide-react';

interface TitleScreenProps {
  hasSaveData: boolean;
  onNewGame: () => void;
  onContinue: () => void;
  onOpenDatabase: () => void;
  onOpenTeacherGuide: () => void;
  onOpenSettings: () => void;
}

export const TitleScreen: React.FC<TitleScreenProps> = ({
  hasSaveData,
  onNewGame,
  onContinue,
  onOpenDatabase,
  onOpenTeacherGuide,
  onOpenSettings
}) => {
  return (
    <div className="relative min-h-[85vh] flex flex-col justify-between items-center text-center p-6 select-none overflow-hidden border-2 border-cyan-800 bg-slate-950 pixel-box">
      {/* Background Pixel City Skyline */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-bottom pointer-events-none pixel-art"
        style={{ backgroundImage: "url('/public/assets/aistudio/future_city_27_7cabe051.png')" }}
      />
      <div className="absolute inset-0 bg-radial from-transparent via-slate-950/70 to-slate-950 pointer-events-none" />

      {/* Top Classroom Kicker */}
      <div className="relative z-10 pt-4 flex flex-col items-center gap-1">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/80 border border-cyan-500/70 text-cyan-300 font-mono text-[11px] tracking-wider uppercase">
          <ShieldAlert className="w-3.5 h-3.5 text-cyan-400" />
          <span>MR. WALLACE'S U.S. HISTORY // 11TH GRADE CLASSROOM</span>
        </div>
        <span className="text-[10px] text-slate-400 font-mono">
          BROOKLYN, NEW YORK · CIVIC DEFENSE SIMULATOR
        </span>
      </div>

      {/* Hero Title Lockup */}
      <div className="relative z-10 my-auto py-8 space-y-4 max-w-3xl">
        <div className="space-y-1">
          <h1 className="font-pixel text-3xl sm:text-5xl lg:text-6xl text-white tracking-wider crt-glow">
            THE RIGHTS PROTOCOL
          </h1>
          <div className="font-pixel text-sm sm:text-lg text-rose-500 tracking-widest crt-glow-red animate-pulse">
            CONSTITUTION.EXE HAS BEEN CORRUPTED
          </div>
        </div>

        <p className="text-xs sm:text-base text-cyan-100/90 font-prose max-w-xl mx-auto leading-relaxed">
          10 Amendments. One Corrupted City. Your Rights Are on the Line.
          Investigate the cases. Challenge CIVICLOCK. Escape the constitutional lockdown.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <button
            onClick={() => {
              soundFx.playUnlock();
              onNewGame();
            }}
            className="w-full sm:w-auto px-8 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-pixel text-xs sm:text-sm font-bold tracking-wider shadow-[0_0_20px_rgba(6,182,212,0.6)] cursor-pointer hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>NEW INVESTIGATION</span>
          </button>

          {hasSaveData && (
            <button
              onClick={() => {
                soundFx.playUnlock();
                onContinue();
              }}
              className="w-full sm:w-auto px-6 py-3.5 bg-slate-900 border-2 border-emerald-500 hover:bg-emerald-950/60 text-emerald-300 font-pixel text-xs sm:text-sm font-bold tracking-wider transition-all flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>CONTINUE INVESTIGATION</span>
            </button>
          )}
        </div>
      </div>

      {/* Bottom Utility Bar */}
      <div className="relative z-10 w-full pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-center sm:justify-between gap-4 text-xs">
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              soundFx.playBlip(500);
              onOpenDatabase();
            }}
            className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5 font-mono"
          >
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <span>Constitutional Archive</span>
          </button>
          <span className="text-slate-700">·</span>
          <button
            onClick={() => {
              soundFx.playBlip(500);
              onOpenTeacherGuide();
            }}
            className="text-slate-400 hover:text-indigo-300 transition-colors flex items-center gap-1.5 font-mono"
          >
            <GraduationCap className="w-4 h-4 text-indigo-400" />
            <span>Teacher Guide</span>
          </button>
        </div>

        <button
          onClick={() => {
            soundFx.playBlip(500);
            onOpenSettings();
          }}
          className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 font-mono"
        >
          <Settings className="w-4 h-4" />
          <span>Settings & Sound</span>
        </button>
      </div>
    </div>
  );
};
