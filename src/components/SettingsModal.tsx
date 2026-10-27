import React from 'react';
import { soundFx } from '../utils/audio';
import { X, Volume2, VolumeX, Monitor, Eye, KeyRound, RotateCcw } from 'lucide-react';

interface SettingsModalProps {
  soundEnabled: boolean;
  soundVolume: number;
  crtEffects: boolean;
  reducedMotion: boolean;
  studentName: string;
  onUpdateSettings: (settings: {
    soundEnabled?: boolean;
    soundVolume?: number;
    crtEffects?: boolean;
    reducedMotion?: boolean;
    studentName?: string;
  }) => void;
  onResetProgress: () => void;
  onUnlockAllMissions: () => void;
  onClose: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  soundEnabled,
  soundVolume,
  crtEffects,
  reducedMotion,
  studentName,
  onUpdateSettings,
  onResetProgress,
  onUnlockAllMissions,
  onClose
}) => {
  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 font-prose"
      role="dialog"
      aria-modal="true"
      aria-label="Settings"
    >
      <div className="bg-slate-950 border-2 border-slate-700 w-full max-w-lg p-5 shadow-2xl pixel-box flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h3 className="font-pixel text-xs sm:text-sm text-cyan-300 tracking-wider uppercase">
            SETTINGS & ACCESSIBILITY // PREFERENCES
          </h3>
          <button
            onClick={() => {
              soundFx.playBlip(400);
              onClose();
            }}
            className="text-slate-400 hover:text-white"
            aria-label="Close settings"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Student Name */}
        <div className="space-y-1">
          <label className="text-xs font-mono text-slate-300 uppercase">
            Investigator Name / Initials (For Report):
          </label>
          <input
            type="text"
            value={studentName}
            onChange={(e) => onUpdateSettings({ studentName: e.target.value })}
            placeholder="e.g. Alex Rivera (Period 4)"
            className="w-full bg-slate-900 border border-slate-700 px-3 py-1.5 text-xs text-white focus:outline-hidden focus:border-cyan-400"
          />
        </div>

        {/* Audio Controls */}
        <div className="p-3 bg-slate-900 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-200">
              {soundEnabled ? <Volume2 className="w-4 h-4 text-cyan-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
              <span>8-Bit Sound Effects & Ambient Audio</span>
            </div>
            <button
              onClick={() => {
                const next = !soundEnabled;
                soundFx.setMuted(!next);
                onUpdateSettings({ soundEnabled: next });
              }}
              className={`px-2.5 py-1 text-xs font-pixel font-bold border ${
                soundEnabled ? 'bg-cyan-500 text-slate-950 border-cyan-400' : 'bg-slate-950 text-slate-400 border-slate-700'
              }`}
            >
              {soundEnabled ? 'ENABLED' : 'MUTED'}
            </button>
          </div>

          {soundEnabled && (
            <div className="flex items-center gap-3">
              <span className="text-[11px] text-slate-400 font-mono">Volume:</span>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={soundVolume}
                onChange={(e) => {
                  const vol = parseFloat(e.target.value);
                  soundFx.setVolume(vol);
                  onUpdateSettings({ soundVolume: vol });
                }}
                className="w-full accent-cyan-400"
              />
              <span className="text-[11px] text-slate-400 font-mono w-8">
                {Math.round(soundVolume * 100)}%
              </span>
            </div>
          )}
        </div>

        {/* Visual & Accessibility */}
        <div className="p-3 bg-slate-900 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-slate-200">
              <Monitor className="w-4 h-4 text-cyan-400" />
              <span>Retro CRT Scanlines Overlay</span>
            </div>
            <button
              onClick={() => onUpdateSettings({ crtEffects: !crtEffects })}
              className={`px-2.5 py-1 text-xs font-pixel font-bold border ${
                crtEffects ? 'bg-cyan-500 text-slate-950 border-cyan-400' : 'bg-slate-950 text-slate-400 border-slate-700'
              }`}
            >
              {crtEffects ? 'ON' : 'OFF'}
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-slate-200">
              <Eye className="w-4 h-4 text-amber-400" />
              <span>Reduced Motion (Instant Typewriter)</span>
            </div>
            <button
              onClick={() => onUpdateSettings({ reducedMotion: !reducedMotion })}
              className={`px-2.5 py-1 text-xs font-pixel font-bold border ${
                reducedMotion ? 'bg-amber-500 text-slate-950 border-amber-400' : 'bg-slate-950 text-slate-400 border-slate-700'
              }`}
            >
              {reducedMotion ? 'ACTIVE' : 'OFF'}
            </button>
          </div>
        </div>

        {/* Teacher / Evaluation Mode */}
        <div className="p-3 bg-slate-950 border border-fuchsia-900/60 flex items-center justify-between">
          <div>
            <div className="text-xs font-pixel text-fuchsia-400 flex items-center gap-1.5">
              <KeyRound className="w-3.5 h-3.5" /> TEACHER / TEST MODE
            </div>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Instantly unlock all 10 missions and vault for grading review.
            </p>
          </div>
          <button
            onClick={() => {
              soundFx.playSuccess();
              onUnlockAllMissions();
              onClose();
            }}
            className="px-3 py-1.5 text-xs font-pixel bg-fuchsia-950 border border-fuchsia-600 text-fuchsia-200 hover:bg-fuchsia-900/70 shrink-0 font-bold"
          >
            UNLOCK ALL
          </button>
        </div>

        {/* Reset Progress */}
        <div className="flex items-center justify-between pt-1">
          <button
            onClick={() => {
              if (window.confirm('Reset all recovered files and restart investigation from zero?')) {
                onResetProgress();
                onClose();
              }
            }}
            className="flex items-center gap-1.5 text-xs text-rose-400 hover:text-rose-300 font-mono"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Reset Game Progress
          </button>

          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-pixel text-xs font-bold"
          >
            APPLY & CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};
