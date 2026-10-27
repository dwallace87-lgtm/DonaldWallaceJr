import React, { useState } from 'react';
import { MISSIONS_DATA } from '../data/missions';
import { DialogueBox } from './DialogueBox';
import { soundFx } from '../utils/audio';
import { AMENDMENTS_DATA } from '../data/amendments';
import { ArrowLeft, ShieldCheck, AlertOctagon, CheckCircle2, AlertCircle, Cpu, Sparkles } from 'lucide-react';

interface VaultViewProps {
  onBackToMap: () => void;
  onVictory: () => void;
  reducedMotion?: boolean;
}

export const VaultView: React.FC<VaultViewProps> = ({
  onBackToMap,
  onVictory,
  reducedMotion = false
}) => {
  const vaultMission = MISSIONS_DATA.find(m => m.id === 11);
  const [phase, setPhase] = useState<'BRIEFING' | 'CRISIS' | 'RECALL_LOCK' | 'VICTORY'>('BRIEFING');
  const [crisisIndex, setCrisisIndex] = useState(0);

  // Crisis Multiple Choice Feedback
  const [crisisFeedback, setCrisisFeedback] = useState<{ isCorrect: boolean; text: string } | null>(null);

  // Final 10-Amendment Memory Lock State
  const [assignedMatches, setAssignedMatches] = useState<Record<number, number>>({}); // amendmentId -> targetSlotId
  const [matchError, setMatchError] = useState<string | null>(null);

  if (!vaultMission) return null;

  const currentCrisis = vaultMission.puzzles[crisisIndex];

  const handleNextCrisis = () => {
    soundFx.playUnlock();
    setCrisisFeedback(null);
    if (crisisIndex < vaultMission.puzzles.length - 1) {
      setCrisisIndex(prev => prev + 1);
    } else {
      // Advance to full 10-Amendment Memory Recall Lock
      setPhase('RECALL_LOCK');
      soundFx.playSuccess();
    }
  };

  const handleVerifyRecall = () => {
    // Check if all 10 amendments are correctly matched
    const isAllCorrect = AMENDMENTS_DATA.every(a => assignedMatches[a.id] === a.id);
    if (isAllCorrect) {
      soundFx.playSuccess();
      setPhase('VICTORY');
    } else {
      soundFx.playError();
      setMatchError('Some amendments are misaligned. Review the numbers and protections before finalizing system restoration!');
    }
  };

  // Ordered display for recall challenge (shuffled so students genuinely retrieve from memory)
  const [shuffledCards] = useState(() => {
    const order = [4, 1, 6, 2, 5, 7, 3, 8, 10, 9];
    return order.map(id => AMENDMENTS_DATA.find(a => a.id === id)!);
  });

  const correctlyMatchedCount = AMENDMENTS_DATA.filter(a => assignedMatches[a.id] === a.id).length;

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-4">
      {/* Top Bar */}
      <div className="bg-slate-950 border-2 border-fuchsia-700 p-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              soundFx.playBlip(400);
              onBackToMap();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 border border-slate-700 hover:border-fuchsia-400 text-xs font-pixel text-slate-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> MAP
          </button>
          <div>
            <div className="text-[10px] font-mono text-fuchsia-400 uppercase tracking-widest">
              CENTRAL CIVICLOCK CORE // MASTER OVERRIDE
            </div>
            <h2 className="text-sm sm:text-base font-bold text-white font-pixel">
              THE CONSTITUTIONAL LOCKDOWN
            </h2>
          </div>
        </div>

        <div className="px-3 py-1 bg-fuchsia-950/70 border border-fuchsia-500 text-fuchsia-300 font-pixel text-xs animate-pulse">
          VAULT BREACH ACTIVE
        </div>
      </div>

      {/* PHASE 1: BRIEFING */}
      {phase === 'BRIEFING' && (
        <div className="space-y-4">
          <DialogueBox
            dialogueLines={vaultMission.briefing.dialogue}
            onComplete={() => {
              soundFx.playUnlock();
              setPhase('CRISIS');
            }}
            reducedMotion={reducedMotion}
          />
        </div>
      )}

      {/* PHASE 2: CRISIS MULTI-SCENARIO CHALLENGES */}
      {phase === 'CRISIS' && currentCrisis && (
        <div className="bg-slate-950 border-2 border-fuchsia-600 p-5 sm:p-7 shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <span className="text-[10px] font-mono text-fuchsia-400 uppercase">
                EMERGENCY OVERRIDE // SCENARIO {crisisIndex + 1} OF {vaultMission.puzzles.length}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white font-pixel mt-0.5">
                {currentCrisis.title}
              </h3>
            </div>
            <span className="text-xs font-pixel text-fuchsia-400">
              {Math.round(((crisisIndex + 1) / vaultMission.puzzles.length) * 100)}%
            </span>
          </div>

          <div className="p-4 bg-slate-900 border border-slate-800 font-prose space-y-1">
            <p className="text-sm sm:text-base font-semibold text-slate-100">
              {currentCrisis.prompt}
            </p>
            <p className="text-xs text-slate-400 font-mono">
              ▶ {currentCrisis.instructions}
            </p>
          </div>

          {/* Options */}
          <div className="space-y-3 font-prose">
            {currentCrisis.options?.map((opt) => (
              <button
                key={opt.id}
                onClick={() => {
                  if (opt.isCorrect) {
                    soundFx.playSuccess();
                    setCrisisFeedback({ isCorrect: true, text: opt.feedback });
                  } else {
                    soundFx.playError();
                    setCrisisFeedback({ isCorrect: false, text: opt.feedback });
                  }
                }}
                className="w-full text-left p-4 border border-slate-800 bg-slate-900 hover:border-fuchsia-400 hover:bg-slate-850 text-xs sm:text-sm text-slate-200 transition-all flex items-start gap-3"
              >
                <span className="w-5 h-5 bg-slate-950 border border-slate-700 flex items-center justify-center text-xs font-mono text-fuchsia-400 shrink-0 mt-0.5">
                  ▶
                </span>
                <span className="leading-relaxed">{opt.label}</span>
              </button>
            ))}

            {crisisFeedback && (
              <div
                className={`p-4 border mt-4 flex items-start gap-3 ${
                  crisisFeedback.isCorrect
                    ? 'bg-emerald-950/40 border-emerald-500 text-emerald-200'
                    : 'bg-red-950/40 border-red-500 text-red-200'
                }`}
              >
                {crisisFeedback.isCorrect ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                )}
                <div>
                  <div className="font-bold text-xs font-mono uppercase mb-0.5">
                    {crisisFeedback.isCorrect ? 'CONSTITUTIONAL PROTOCOL ENGAGED' : 'OVERRIDE FAILED'}
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed">{crisisFeedback.text}</p>
                </div>
              </div>
            )}
          </div>

          {/* Next Button */}
          <div className="flex justify-end pt-2 border-t border-slate-800">
            {crisisFeedback?.isCorrect && (
              <button
                onClick={handleNextCrisis}
                className="px-6 py-2.5 bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-pixel text-xs font-bold transition-all shadow-[0_0_15px_rgba(217,70,239,0.5)] active:scale-95"
              >
                {crisisIndex === vaultMission.puzzles.length - 1
                  ? 'COMMENCE FINAL 10-AMENDMENT RECALL LOCK ▶'
                  : 'NEXT CRISIS ▶'}
              </button>
            )}
          </div>
        </div>
      )}

      {/* PHASE 3: FINAL 10-AMENDMENT MEMORY RECALL LOCK */}
      {phase === 'RECALL_LOCK' && (
        <div className="bg-slate-950 border-2 border-cyan-500 p-5 sm:p-7 shadow-2xl space-y-6">
          <div className="border-b border-slate-800 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-[10px] font-mono text-cyan-400 uppercase">
                FINAL MEMORY LOCK // MASTER CONSTITUTIONAL ARCHIVE
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white font-pixel mt-0.5">
                SYNCHRONIZE ALL TEN AMENDMENTS
              </h3>
              <p className="text-xs text-slate-300 mt-1 font-prose">
                Match each constitutional guarantee below to its proper Amendment number from memory.
              </p>
            </div>
            <div className="px-3 py-1 bg-slate-900 border border-cyan-700 text-cyan-300 font-mono text-xs shrink-0 self-start sm:self-auto">
              SYNCHRONIZED: {correctlyMatchedCount} / 10
            </div>
          </div>

          {matchError && (
            <div className="p-3 bg-red-950/60 border border-red-600 text-xs text-red-200 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
              <span>{matchError}</span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-prose">
            {shuffledCards.map((card, idx) => {
              const assignedSlot = assignedMatches[card.id];
              const isCorrectlyAssigned = assignedSlot === card.id;

              return (
                <div 
                  key={card.id} 
                  className={`p-3 border transition-colors flex flex-col justify-between gap-2 ${
                    isCorrectlyAssigned 
                      ? 'bg-emerald-950/30 border-emerald-500' 
                      : assignedSlot 
                      ? 'bg-slate-900 border-amber-600/80' 
                      : 'bg-slate-900 border-slate-800'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-[10px] font-pixel tracking-wider ${isCorrectlyAssigned ? 'text-emerald-400' : 'text-slate-400'}`}>
                        {isCorrectlyAssigned ? `✓ AMENDMENT ${card.roman} VERIFIED` : `CORRUPTED CLAUSE #${idx + 1}`}
                      </span>
                      {isCorrectlyAssigned && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      )}
                    </div>
                    <div className="text-xs font-semibold text-slate-100">
                      {card.shortSummary}
                    </div>
                    <p className="text-[11px] text-slate-300 mt-1 line-clamp-2 leading-relaxed">
                      {card.plainEnglish}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-400">
                      Constitutional Protection:
                    </span>
                    <select
                      value={assignedSlot || ''}
                      onChange={(e) => {
                        soundFx.playBlip(550);
                        setMatchError(null);
                        const val = parseInt(e.target.value, 10);
                        setAssignedMatches(prev => ({ ...prev, [card.id]: val }));
                      }}
                      className={`text-xs p-1.5 border font-mono ${
                        isCorrectlyAssigned 
                          ? 'bg-emerald-950 border-emerald-500 text-emerald-200 font-bold' 
                          : 'bg-slate-950 border-cyan-700 text-cyan-200'
                      }`}
                    >
                      <option value="">Assign Amendment...</option>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                        <option key={num} value={num}>Amendment {num}</option>
                      ))}
                    </select>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-between border-t border-slate-800 pt-4">
            <button
              onClick={() => {
                // Auto-fill convenience for quick testing
                const perfect: Record<number, number> = {};
                AMENDMENTS_DATA.forEach(a => { perfect[a.id] = a.id; });
                setAssignedMatches(perfect);
                soundFx.playSuccess();
              }}
              className="text-xs font-mono text-slate-500 hover:text-slate-300"
            >
              [Auto-Fill for Testing]
            </button>

            <button
              onClick={handleVerifyRecall}
              className={`px-6 py-2.5 font-pixel text-xs font-bold transition-all ${
                correctlyMatchedCount === 10
                  ? 'bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-[0_0_20px_rgba(251,191,36,0.6)] cursor-pointer hover:scale-105'
                  : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950'
              }`}
            >
              {correctlyMatchedCount === 10 
                ? 'UNLOCK CONSTITUTIONAL VAULT (10/10) ▶' 
                : 'VERIFY & RESTORE BILL OF RIGHTS ▶'}
            </button>
          </div>
        </div>
      )}

      {/* PHASE 4: EPIC VICTORY CINEMATIC */}
      {phase === 'VICTORY' && (
        <div className="bg-slate-950 border-4 border-amber-400 p-6 sm:p-10 text-center space-y-6 shadow-2xl pixel-box-amber">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-950 border-2 border-amber-400 text-amber-300 font-pixel text-xs tracking-widest uppercase">
            <Sparkles className="w-4 h-4 text-amber-400" /> SYSTEM RESTORED // ALL 10 AMENDMENTS SECURED
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-pixel text-white tracking-wider">
              NEW LIBERTY IS FREE
            </h1>
            <p className="text-sm font-mono text-cyan-300">
              THE NULL ARCHITECT DEFEATED // CONSTITUTION.EXE HAS BEEN RESTORED
            </p>
          </div>

          <div className="max-w-2xl mx-auto p-4 bg-slate-900 border border-slate-800 text-left">
            <DialogueBox
              dialogueLines={vaultMission.celebrationDialogue}
              onComplete={() => {}}
              reducedMotion={reducedMotion}
            />
          </div>

          <div className="pt-4">
            <button
              onClick={onVictory}
              className="px-8 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-pixel text-sm font-bold shadow-[0_0_20px_rgba(251,191,36,0.6)] cursor-pointer hover:scale-105 active:scale-95 transition-all"
            >
              VIEW OFFICIAL INVESTIGATION REPORT ▶
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
