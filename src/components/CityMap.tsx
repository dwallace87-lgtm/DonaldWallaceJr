import React from 'react';
import { Mission } from '../types/game';
import { MISSIONS_DATA } from '../data/missions';
import { soundFx } from '../utils/audio';
import { CheckCircle2, Lock, Radio, Shield, Home, Eye, AlertOctagon, Scale, BookOpen, Layers, Cpu } from 'lucide-react';

interface CityMapProps {
  completedMissions: number[];
  recoveredAmendments: number[];
  onSelectMission: (missionId: number) => void;
  onOpenVault: () => void;
}

export const CityMap: React.FC<CityMapProps> = ({
  completedMissions,
  recoveredAmendments,
  onSelectMission,
  onOpenVault
}) => {
  const allMissions = MISSIONS_DATA;
  const mainMissions = allMissions.filter(m => m.isMain && m.id !== 11);
  const miniMissions = allMissions.filter(m => !m.isMain);
  const finalVault = allMissions.find(m => m.id === 11);

  const isMissionUnlocked = (m: Mission): boolean => {
    if (m.unlockedByDefault) return true;
    return m.requiredPreviousMissions.every(prevId => completedMissions.includes(prevId));
  };

  const isVaultUnlocked = (recoveredAmendments.length >= 10);

  const getDistrictIcon = (id: number) => {
    switch (id) {
      case 1: return <Radio className="w-5 h-5 text-cyan-400" />;
      case 2: return <Shield className="w-5 h-5 text-amber-400" />;
      case 3: return <Home className="w-5 h-5 text-emerald-400" />;
      case 4: return <Eye className="w-5 h-5 text-blue-400" />;
      case 5: return <AlertOctagon className="w-5 h-5 text-red-400" />;
      case 6: return <Scale className="w-5 h-5 text-purple-400" />;
      case 7: return <BookOpen className="w-5 h-5 text-yellow-400" />;
      case 8: return <AlertOctagon className="w-5 h-5 text-rose-400" />;
      case 9: return <Layers className="w-5 h-5 text-indigo-400" />;
      case 10: return <Layers className="w-5 h-5 text-teal-400" />;
      default: return <Cpu className="w-5 h-5 text-fuchsia-400" />;
    }
  };

  return (
    <div className="w-full flex flex-col gap-6 select-none">
      {/* City Status Banner */}
      <div className="relative border-2 border-cyan-800 bg-slate-950 p-4 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-15 bg-cover bg-center pointer-events-none pixel-art"
          style={{ backgroundImage: "url('/public/assets/aistudio/future_city_27_7cabe051.png')" }}
        />
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-cyan-400 rounded-none animate-ping" />
              <h2 className="font-pixel text-sm sm:text-base text-cyan-300 tracking-wide uppercase">
                NEW LIBERTY MUNICIPAL GRID // INVESTIGATION MAP
              </h2>
            </div>
            <p className="text-xs text-slate-300 mt-1 font-prose">
              Select an active sector to investigate breaches and recover missing Constitutional Files.
            </p>
          </div>

          <div className="flex items-center gap-4 bg-slate-900/90 border border-slate-700 px-4 py-2">
            <div>
              <div className="text-[10px] text-slate-400 font-mono uppercase">System Integrity</div>
              <div className="text-sm font-bold text-cyan-300 font-pixel">
                {recoveredAmendments.length * 10}% RESTORED
              </div>
            </div>
            <div className="w-24 bg-slate-800 h-3 border border-slate-700">
              <div 
                className="bg-cyan-400 h-full transition-all duration-500" 
                style={{ width: `${recoveredAmendments.length * 10}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Core Missions Grid (Amendments 1, 2, 4, 5, 6, 7) */}
      <div>
        <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
          <h3 className="font-pixel text-xs text-slate-300 tracking-wider uppercase flex items-center gap-2">
            <span className="text-cyan-400">■</span> Priority Investigation Sectors (Core 6)
          </h3>
          <span className="text-xs text-slate-400 font-mono">
            {completedMissions.filter(id => [1, 2, 4, 5, 6, 7].includes(id)).length} / 6 Recovered
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mainMissions.map((m) => {
            const unlocked = isMissionUnlocked(m);
            const completed = completedMissions.includes(m.id);

            return (
              <button
                key={m.id}
                onClick={() => {
                  if (unlocked) {
                    soundFx.playUnlock();
                    onSelectMission(m.id);
                  } else {
                    soundFx.playError();
                  }
                }}
                disabled={!unlocked}
                className={`relative text-left p-4 border-2 transition-all group flex flex-col justify-between min-h-[170px] ${
                  completed
                    ? 'border-emerald-600/80 bg-emerald-950/20 hover:border-emerald-400'
                    : unlocked
                    ? 'border-cyan-600 bg-slate-900/80 hover:bg-slate-900 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                    : 'border-slate-800 bg-slate-950/60 opacity-60 cursor-not-allowed'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono px-1.5 py-0.5 bg-slate-950 border border-slate-700 text-slate-300 uppercase">
                      SEC-0{m.id} // AMENDMENT {m.amendmentCovered}
                    </span>
                    {completed ? (
                      <span className="flex items-center gap-1 text-[11px] font-pixel text-emerald-400">
                        <CheckCircle2 className="w-3.5 h-3.5" /> RECOVERED
                      </span>
                    ) : unlocked ? (
                      <span className="text-[11px] font-pixel text-cyan-400 animate-pulse">
                        INVESTIGATE ▶
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-[11px] text-slate-500 font-mono">
                        <Lock className="w-3.5 h-3.5" /> LOCKED
                      </span>
                    )}
                  </div>

                  <div className="flex items-start gap-3 mt-1">
                    <div className="p-2 bg-slate-950 border border-slate-800 shrink-0">
                      {getDistrictIcon(m.id)}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm sm:text-base text-slate-100 group-hover:text-cyan-300 transition-colors">
                        {m.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                        {m.district} — {m.briefing.learningObjective.split(',')[0]}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Puzzles: {m.puzzles.length}</span>
                  <span className="font-mono text-cyan-400 group-hover:underline">
                    {unlocked ? 'ENTER SECTOR' : 'PREREQUISITES REQUIRED'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Mini-Missions (Amendments 3, 8, 9, 10) */}
      <div>
        <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
          <h3 className="font-pixel text-xs text-slate-300 tracking-wider uppercase flex items-center gap-2">
            <span className="text-amber-400">■</span> Peripheral Rights Hubs (Amendments 3, 8, 9, 10)
          </h3>
          <span className="text-xs text-slate-400 font-mono">
            {completedMissions.filter(id => [3, 8, 9, 10].includes(id)).length} / 4 Recovered
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {miniMissions.map((m) => {
            const unlocked = isMissionUnlocked(m);
            const completed = completedMissions.includes(m.id);

            return (
              <button
                key={m.id}
                onClick={() => {
                  if (unlocked) {
                    soundFx.playUnlock();
                    onSelectMission(m.id);
                  } else {
                    soundFx.playError();
                  }
                }}
                disabled={!unlocked}
                className={`p-3 border text-left transition-all group flex flex-col justify-between min-h-[130px] ${
                  completed
                    ? 'border-emerald-600/80 bg-emerald-950/20'
                    : unlocked
                    ? 'border-amber-600/80 bg-slate-900/80 hover:border-amber-400 hover:bg-slate-900'
                    : 'border-slate-800 bg-slate-950/50 opacity-60 cursor-not-allowed'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1">
                    <span>AMENDMENT {m.amendmentCovered}</span>
                    {completed ? (
                      <span className="text-emerald-400 font-pixel">OK</span>
                    ) : unlocked ? (
                      <span className="text-amber-400 font-pixel">OPEN</span>
                    ) : (
                      <Lock className="w-3 h-3 text-slate-600" />
                    )}
                  </div>
                  <h5 className="font-bold text-xs sm:text-sm text-slate-200 group-hover:text-amber-300">
                    {m.title}
                  </h5>
                  <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                    {m.district}
                  </p>
                </div>

                <div className="text-[10px] text-slate-400 pt-2 border-t border-slate-800 mt-2 flex justify-between">
                  <span>Fast Case</span>
                  <span className="text-amber-400">{unlocked ? 'INSPECT' : 'LOCKED'}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* The Constitutional Vault Final Chamber */}
      <div className="pt-2">
        <div className={`p-5 border-2 relative overflow-hidden transition-all ${
          isVaultUnlocked 
            ? 'border-fuchsia-500 bg-slate-950 shadow-[0_0_25px_rgba(217,70,239,0.25)]' 
            : 'border-slate-800 bg-slate-950/40 opacity-70'
        }`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className={`p-3 border-2 shrink-0 ${
                isVaultUnlocked ? 'border-fuchsia-400 bg-fuchsia-950/50 text-fuchsia-300 animate-pulse' : 'border-slate-700 bg-slate-900 text-slate-600'
              }`}>
                <Cpu className="w-8 h-8" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-pixel uppercase tracking-widest text-fuchsia-400">
                    CENTRAL CIVICLOCK CORE // LEVEL 11
                  </span>
                  <span className="text-[10px] px-2 py-0.5 bg-slate-900 border border-slate-700 font-mono text-slate-300">
                    {recoveredAmendments.length} / 10 AMENDMENTS ACQUIRED
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white font-pixel mt-0.5">
                  THE CONSTITUTIONAL VAULT: MASTER OVERRIDE
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  {isVaultUnlocked 
                    ? 'ALL 10 CONSTITUTIONAL AMENDMENTS RESTORED. The central vault doors have opened! Confront the Null Architect and escape the citywide constitutional lockdown.' 
                    : `RESTRICTED PROTOCOL: Requires all 10 Amendment Files. (${10 - recoveredAmendments.length} remaining)`}
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                if (isVaultUnlocked) {
                  soundFx.playUnlock();
                  onOpenVault();
                } else {
                  soundFx.playError();
                }
              }}
              disabled={!isVaultUnlocked}
              className={`px-6 py-3 font-pixel text-xs tracking-wider font-bold transition-all whitespace-nowrap shrink-0 ${
                isVaultUnlocked
                  ? 'bg-fuchsia-500 hover:bg-fuchsia-400 text-slate-950 shadow-lg cursor-pointer hover:scale-105 active:scale-95'
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed'
              }`}
            >
              {isVaultUnlocked ? 'ENTER CONSTITUTIONAL VAULT ▶' : 'VAULT SEALED (0/10)'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
