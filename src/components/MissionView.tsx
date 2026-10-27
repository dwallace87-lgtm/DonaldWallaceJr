import React, { useState } from 'react';
import { Mission, PuzzleStep } from '../types/game';
import { DialogueBox } from './DialogueBox';
import { soundFx } from '../utils/audio';
import { AMENDMENTS_DATA } from '../data/amendments';
import { ArrowLeft, HelpCircle, CheckCircle2, AlertCircle, Sparkles, RefreshCw, Layers } from 'lucide-react';

interface MissionViewProps {
  mission: Mission;
  onBackToMap: () => void;
  onMissionCompleted: (missionId: number, amendmentId: number, evidenceIds: string[]) => void;
  onOpenHint: (hints: [string, string, string]) => void;
  onOpenDatabase: (amendmentId?: number) => void;
  reducedMotion?: boolean;
}

export const MissionView: React.FC<MissionViewProps> = ({
  mission,
  onBackToMap,
  onMissionCompleted,
  onOpenHint,
  onOpenDatabase,
  reducedMotion = false
}) => {
  const [phase, setPhase] = useState<'BRIEFING' | 'PUZZLE' | 'CELEBRATION'>('BRIEFING');
  const [currentPuzzleIdx, setCurrentPuzzleIdx] = useState(0);

  // Puzzle State Handlers
  const currentPuzzle: PuzzleStep = mission.puzzles[currentPuzzleIdx];

  // Matching Puzzle State
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [matchingSolved, setMatchingSolved] = useState<string[]>([]); // pair ids
  const [matchingError, setMatchingError] = useState<string | null>(null);

  // Sorting Puzzle State
  const [sortedItems, setSortedItems] = useState<Record<string, string>>({}); // itemId -> categoryId
  const [sortFeedback, setSortFeedback] = useState<string | null>(null);

  // Document Reconstruct State
  const [reconstructedOrder, setReconstructedOrder] = useState<string[]>([]);
  const [reconstructError, setReconstructError] = useState<boolean>(false);

  // Slider State (Safeguards)
  const [sliderValues, setSliderValues] = useState<Record<string, string>>(() => {
    const init: Record<string, string> = {};
    if (currentPuzzle?.sliderControls) {
      currentPuzzle.sliderControls.forEach(s => {
        init[s.id] = s.currentValue;
      });
    }
    return init;
  });

  // Re-sync sliderValues whenever currentPuzzle changes
  React.useEffect(() => {
    if (currentPuzzle?.sliderControls) {
      const init: Record<string, string> = {};
      currentPuzzle.sliderControls.forEach(s => {
        init[s.id] = s.currentValue;
      });
      setSliderValues(init);
    }
  }, [currentPuzzle]);

  // Multiple Choice Feedback
  const [mcFeedback, setMcFeedback] = useState<{ isCorrect: boolean; text: string } | null>(null);

  // Inspection Hotspots State
  const [inspectedHotspots, setInspectedHotspots] = useState<string[]>([]);
  const [activeHotspotDialogue, setActiveHotspotDialogue] = useState<string | null>(null);

  // Check if puzzle is solved
  const isCurrentPuzzleSolved = (): boolean => {
    if (!currentPuzzle) return false;

    switch (currentPuzzle.type) {
      case 'multiple_choice':
        return mcFeedback?.isCorrect === true;
      case 'matching':
      case 'courtroom_repair':
        return (
          currentPuzzle.matchingPairs !== undefined &&
          matchingSolved.length === currentPuzzle.matchingPairs.length
        );
      case 'drag_sort':
        if (!currentPuzzle.sortItems) return false;
        return currentPuzzle.sortItems.every(
          item => sortedItems[item.id] === item.targetCategoryId
        );
      case 'document_reconstruct':
        if (!currentPuzzle.reconstructFragments) return false;
        if (reconstructedOrder.length !== currentPuzzle.reconstructFragments.length) return false;
        return currentPuzzle.reconstructFragments.every(
          frag => reconstructedOrder[frag.correctOrder - 1] === frag.id
        );
      case 'slider_safeguard':
        if (!currentPuzzle.sliderControls) return false;
        return currentPuzzle.sliderControls.every(
          ctrl => sliderValues[ctrl.id] === ctrl.correctValue
        );
      case 'inspection':
        if (!currentPuzzle.hotspots) return false;
        return inspectedHotspots.length === currentPuzzle.hotspots.length;
      default:
        return false;
    }
  };

  const handleNextPuzzle = () => {
    soundFx.playUnlock();
    // Reset local puzzle states
    setSelectedLeft(null);
    setMatchingSolved([]);
    setMatchingError(null);
    setSortedItems({});
    setSortFeedback(null);
    setReconstructedOrder([]);
    setReconstructError(false);
    setMcFeedback(null);
    setActiveHotspotDialogue(null);
    setInspectedHotspots([]);

    if (currentPuzzleIdx < mission.puzzles.length - 1) {
      setCurrentPuzzleIdx(prev => prev + 1);
    } else {
      // Mission Finished -> Celebration
      setPhase('CELEBRATION');
      soundFx.playSuccess();
    }
  };

  const handleCompleteMission = () => {
    soundFx.playUnlock();
    const grantedEvidence = mission.puzzles
      .flatMap(p => p.evidenceItemsToGrant || [])
      .map(e => e.id);

    onMissionCompleted(mission.id, mission.amendmentCovered, grantedEvidence);
  };

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-4">
      {/* Top Navigation & Status Bar */}
      <div className="bg-slate-950 border-2 border-cyan-800 p-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              soundFx.playBlip(400);
              onBackToMap();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 border border-slate-700 hover:border-cyan-400 text-xs font-pixel text-slate-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> MAP
          </button>
          <div>
            <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">
              {mission.district} // AMENDMENT {mission.amendmentCovered}
            </div>
            <h2 className="text-sm sm:text-base font-bold text-white font-pixel">
              {mission.title}
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onOpenHint(currentPuzzle.hintLadder)}
            className="px-3 py-1.5 bg-cyan-950 border border-cyan-500 hover:bg-cyan-900 text-cyan-300 text-xs font-pixel flex items-center gap-1.5 shadow-sm active:scale-95 transition-all"
          >
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>HINT LADDER</span>
          </button>
        </div>
      </div>

      {/* Main Content Pane */}
      {phase === 'BRIEFING' && (
        <div className="space-y-4">
          {/* Briefing dialogue */}
          <DialogueBox
            dialogueLines={mission.briefing.dialogue}
            onComplete={() => {
              soundFx.playUnlock();
              setPhase('PUZZLE');
            }}
            reducedMotion={reducedMotion}
          />

          <div className="p-4 bg-slate-900/80 border border-slate-800 font-prose space-y-2">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
              Investigation Objective:
            </div>
            <p className="text-sm text-slate-200">
              {mission.briefing.learningObjective}
            </p>
          </div>
        </div>
      )}

      {phase === 'PUZZLE' && (
        <div className="bg-slate-950 border-2 border-cyan-700/80 p-4 sm:p-6 shadow-2xl relative space-y-6">
          {/* Puzzle Progress Indicators */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase">
                CHALLENGE {currentPuzzleIdx + 1} OF {mission.puzzles.length}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-cyan-300 font-pixel mt-0.5">
                {currentPuzzle.title}
              </h3>
            </div>
            <div className="flex gap-1.5">
              {mission.puzzles.map((_, idx) => (
                <span
                  key={idx}
                  className={`w-3 h-3 border ${
                    idx === currentPuzzleIdx
                      ? 'bg-cyan-400 border-cyan-300 shadow-[0_0_8px_rgba(6,182,212,0.8)]'
                      : idx < currentPuzzleIdx
                      ? 'bg-emerald-500 border-emerald-400'
                      : 'bg-slate-900 border-slate-700'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Puzzle Prompt & Instructions */}
          <div className="p-4 bg-slate-900 border border-slate-800 font-prose space-y-1">
            <p className="text-sm sm:text-base font-semibold text-slate-100">
              {currentPuzzle.prompt}
            </p>
            <p className="text-xs text-slate-400 font-mono">
              ▶ {currentPuzzle.instructions}
            </p>
          </div>

          {/* ======================================================== */}
          {/* PUZZLE TYPE 1: MATCHING PAIRS & COURTROOM REPAIR        */}
          {/* ======================================================== */}
          {(currentPuzzle.type === 'matching' || currentPuzzle.type === 'courtroom_repair') && currentPuzzle.matchingPairs && (
            <div className="space-y-4 font-prose">
              {matchingError && (
                <div className="p-3 bg-red-950/60 border border-red-600 text-xs text-red-200 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                  <span>{matchingError}</span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Left Side Items */}
                <div className="space-y-2">
                  <span className="text-xs font-mono text-slate-400 uppercase">
                    Select a Scenario / Element:
                  </span>
                  {currentPuzzle.matchingPairs.map((pair) => {
                    const isSolved = matchingSolved.includes(pair.id);
                    const isSelected = selectedLeft === pair.id;

                    return (
                      <button
                        key={pair.id}
                        disabled={isSolved}
                        onClick={() => {
                          soundFx.playBlip(520);
                          setMatchingError(null);
                          setSelectedLeft(isSelected ? null : pair.id);
                        }}
                        className={`w-full text-left p-3 border text-xs sm:text-sm transition-all ${
                          isSolved
                            ? 'bg-emerald-950/40 border-emerald-600 text-emerald-300 line-through opacity-70'
                            : isSelected
                            ? 'bg-cyan-950 border-cyan-400 text-cyan-200 shadow-[0_0_12px_rgba(6,182,212,0.4)]'
                            : 'bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-200'
                        }`}
                      >
                        <div className="font-medium">{pair.left}</div>
                        {pair.leftHint && (
                          <div className="text-[11px] text-slate-400 mt-1 italic">
                            Hint: {pair.leftHint}
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Right Side Options */}
                <div className="space-y-2">
                  <span className="text-xs font-mono text-slate-400 uppercase">
                    Connect to Constitutional Right:
                  </span>
                  {currentPuzzle.matchingPairs.map((pair) => {
                    const isSolved = matchingSolved.includes(pair.id);

                    return (
                      <button
                        key={pair.id}
                        disabled={isSolved || !selectedLeft}
                        onClick={() => {
                          if (!selectedLeft) return;
                          if (selectedLeft === pair.id) {
                            soundFx.playSuccess();
                            setMatchingSolved(prev => [...prev, pair.id]);
                            setSelectedLeft(null);
                            setMatchingError(null);
                          } else {
                            soundFx.playError();
                            setMatchingError('Incorrect match. Read the legal principle carefully and try another pair!');
                          }
                        }}
                        className={`w-full text-left p-3 border text-xs sm:text-sm transition-all ${
                          isSolved
                            ? 'bg-emerald-950/40 border-emerald-600 text-emerald-300'
                            : selectedLeft
                            ? 'bg-slate-900 border-cyan-600 hover:bg-cyan-900/40 text-slate-100 cursor-pointer'
                            : 'bg-slate-950/50 border-slate-800 text-slate-500 opacity-60 cursor-not-allowed'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold">{pair.right}</span>
                          {isSolved && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* PUZZLE TYPE 2: MULTIPLE CHOICE WITH REASONING FEEDBACK  */}
          {/* ======================================================== */}
          {currentPuzzle.type === 'multiple_choice' && currentPuzzle.options && (
            <div className="space-y-3 font-prose">
              {currentPuzzle.options.map((opt) => {
                const isSelected = mcFeedback !== null;

                return (
                  <button
                    key={opt.id}
                    onClick={() => {
                      if (opt.isCorrect) {
                        soundFx.playSuccess();
                        setMcFeedback({ isCorrect: true, text: opt.feedback });
                      } else {
                        soundFx.playError();
                        setMcFeedback({ isCorrect: false, text: opt.feedback });
                      }
                    }}
                    className="w-full text-left p-4 border border-slate-800 bg-slate-900 hover:border-cyan-500 hover:bg-slate-850 text-xs sm:text-sm text-slate-200 transition-all active:scale-[0.99] flex items-start gap-3"
                  >
                    <span className="w-5 h-5 bg-slate-950 border border-slate-700 flex items-center justify-center text-xs font-mono text-cyan-400 shrink-0 mt-0.5">
                      ▶
                    </span>
                    <span className="leading-relaxed">{opt.label}</span>
                  </button>
                );
              })}

              {/* Feedback Alert Box */}
              {mcFeedback && (
                <div
                  className={`p-4 border mt-4 flex items-start gap-3 ${
                    mcFeedback.isCorrect
                      ? 'bg-emerald-950/40 border-emerald-500 text-emerald-200'
                      : 'bg-red-950/40 border-red-500 text-red-200'
                  }`}
                >
                  {mcFeedback.isCorrect ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <div className="font-bold text-xs font-mono uppercase mb-0.5">
                      {mcFeedback.isCorrect ? 'LEGAL ANALYSIS VERIFIED' : 'CONSTITUTIONAL MISALIGNMENT'}
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed">{mcFeedback.text}</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ======================================================== */}
          {/* PUZZLE TYPE 3: DRAG & SORT (CIVIL VS CRIMINAL / POWERS) */}
          {/* ======================================================== */}
          {currentPuzzle.type === 'drag_sort' && currentPuzzle.sortCategories && currentPuzzle.sortItems && (
            <div className="space-y-4 font-prose">
              {sortFeedback && (
                <div className="p-3 bg-red-950/60 border border-red-600 text-xs text-red-200">
                  {sortFeedback}
                </div>
              )}

              {/* Categories */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentPuzzle.sortCategories.map((cat) => (
                  <div key={cat.id} className="p-4 bg-slate-900 border-2 border-slate-700 flex flex-col gap-3 min-h-[220px]">
                    <div className="border-b border-slate-800 pb-2">
                      <h4 className="font-bold text-sm text-cyan-300 font-pixel">
                        {cat.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5">{cat.description}</p>
                    </div>

                    <div className="flex-1 space-y-2">
                      {currentPuzzle.sortItems
                        ?.filter(item => sortedItems[item.id] === cat.id)
                        .map(item => (
                          <div
                            key={item.id}
                            className="p-2.5 bg-slate-950 border border-cyan-800 text-xs text-slate-200 flex items-center justify-between"
                          >
                            <span>{item.text}</span>
                            <button
                              onClick={() => {
                                soundFx.playBlip(400);
                                setSortedItems(prev => {
                                  const copy = { ...prev };
                                  delete copy[item.id];
                                  return copy;
                                });
                              }}
                              className="text-[10px] text-red-400 hover:underline ml-2"
                            >
                              [Remove]
                            </button>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Unsorted Items Pool */}
              <div className="p-4 bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-xs font-mono text-slate-400 uppercase">
                  Case Files / Powers to Assign (Click category button to assign):
                </span>
                <div className="space-y-2">
                  {currentPuzzle.sortItems
                    .filter(item => !sortedItems[item.id])
                    .map(item => (
                      <div
                        key={item.id}
                        className="p-3 bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
                      >
                        <span className="leading-relaxed">{item.text}</span>
                        <div className="flex gap-2 shrink-0">
                          {currentPuzzle.sortCategories?.map(cat => (
                            <button
                              key={cat.id}
                              onClick={() => {
                                soundFx.playBlip(550);
                                setSortedItems(prev => ({ ...prev, [item.id]: cat.id }));
                              }}
                              className="px-2.5 py-1 text-[11px] font-pixel bg-slate-950 border border-cyan-600 hover:bg-cyan-900 text-cyan-300"
                            >
                              Assign to: {cat.title.split(' ')[0]}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* PUZZLE TYPE 4: DOCUMENT RECONSTRUCT (FRAGMENT ARRANGING) */}
          {/* ======================================================== */}
          {currentPuzzle.type === 'document_reconstruct' && currentPuzzle.reconstructFragments && (
            <div className="space-y-4 font-prose">
              {reconstructError && (
                <div className="p-3 bg-red-950/60 border border-red-600 text-xs text-red-200 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                  <span>The fragments are in the wrong order. Reset and try again!</span>
                </div>
              )}

              {/* Working Reconstructed Box */}
              <div className="p-4 bg-slate-900 border-2 border-dashed border-cyan-700 min-h-[90px] flex flex-wrap gap-2 items-center">
                {reconstructedOrder.length === 0 ? (
                  <span className="text-xs text-slate-500 italic">
                    Click fragments below in the correct grammatical and legal sequence...
                  </span>
                ) : (
                  reconstructedOrder.map((fragId, idx) => {
                    const frag = currentPuzzle.reconstructFragments?.find(f => f.id === fragId);
                    return (
                      <span
                        key={fragId}
                        className="px-3 py-1.5 bg-cyan-950 border border-cyan-500 text-cyan-200 text-xs sm:text-sm font-medium"
                      >
                        {idx + 1}. {frag?.text}
                      </span>
                    );
                  })
                )}
              </div>

              {/* Fragments Pool */}
              <div className="flex flex-wrap gap-2">
                {currentPuzzle.reconstructFragments.map((frag) => {
                  const isPlaced = reconstructedOrder.includes(frag.id);

                  return (
                    <button
                      key={frag.id}
                      disabled={isPlaced}
                      onClick={() => {
                        soundFx.playBlip(550);
                        setReconstructError(false);
                        setReconstructedOrder(prev => [...prev, frag.id]);
                      }}
                      className={`px-3 py-2 border text-xs sm:text-sm transition-all ${
                        isPlaced
                          ? 'bg-slate-950 text-slate-600 border-slate-900 opacity-40 cursor-not-allowed'
                          : 'bg-slate-900 border-slate-700 hover:border-cyan-400 text-slate-200 hover:bg-slate-800'
                      }`}
                    >
                      {frag.text}
                    </button>
                  );
                })}
              </div>

              {/* Reset button */}
              <button
                onClick={() => {
                  soundFx.playBlip(400);
                  setReconstructedOrder([]);
                  setReconstructError(false);
                }}
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-300 font-mono"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Reset Fragments
              </button>
            </div>
          )}

          {/* ======================================================== */}
          {/* PUZZLE TYPE 5: SLIDER SAFEGUARD (8TH AMENDMENT MACHINE) */}
          {/* ======================================================== */}
          {currentPuzzle.type === 'slider_safeguard' && currentPuzzle.sliderControls && (
            <div className="space-y-4 font-prose">
              {currentPuzzle.sliderControls.map((ctrl) => (
                <div key={ctrl.id} className="p-4 bg-slate-900 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-sm text-rose-300 font-pixel">
                      {ctrl.title}
                    </h4>
                    <span className="text-xs font-mono text-cyan-300">
                      Current: {sliderValues[ctrl.id]}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400">{ctrl.explanation}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
                    {ctrl.options.map((opt, oIdx) => (
                      <button
                        key={oIdx}
                        onClick={() => {
                          soundFx.playBlip(500);
                          setSliderValues(prev => ({ ...prev, [ctrl.id]: opt }));
                        }}
                        className={`p-2.5 text-xs text-left border transition-all ${
                          sliderValues[ctrl.id] === opt
                            ? opt === ctrl.correctValue
                              ? 'bg-emerald-950 border-emerald-500 text-emerald-200 font-bold'
                              : 'bg-rose-950 border-rose-500 text-rose-200'
                            : 'bg-slate-950 border-slate-800 hover:border-slate-700 text-slate-300'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ======================================================== */}
          {/* PUZZLE TYPE 6: INSPECTION HOTSPOTS (4TH AMEND OFFICE)    */}
          {/* ======================================================== */}
          {currentPuzzle.type === 'inspection' && currentPuzzle.hotspots && (
            <div className="space-y-4 font-prose">
              <div 
                className="relative w-full h-64 sm:h-80 bg-slate-950 border-2 border-slate-700 overflow-hidden pixel-art bg-cover bg-center"
                style={{ backgroundImage: "url('/public/assets/aistudio/Free_Modern_Pack___Dev_Essentials___e6c92e84.png')" }}
              >
                <div className="absolute inset-0 bg-slate-950/70" />
                {currentPuzzle.hotspots.map((hs) => {
                  const isInspected = inspectedHotspots.includes(hs.id);

                  return (
                    <button
                      key={hs.id}
                      onClick={() => {
                        soundFx.playUnlock();
                        setActiveHotspotDialogue(hs.dialogue);
                        if (!inspectedHotspots.includes(hs.id)) {
                          setInspectedHotspots(prev => [...prev, hs.id]);
                        }
                      }}
                      style={{ left: `${hs.x}%`, top: `${hs.y}%` }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 p-2 border-2 transition-all flex items-center gap-1.5 ${
                        isInspected
                          ? 'bg-emerald-950 border-emerald-500 text-emerald-300'
                          : 'bg-cyan-950 border-cyan-400 text-cyan-200 animate-bounce'
                      }`}
                    >
                      <Sparkles className="w-4 h-4 text-cyan-400" />
                      <span className="text-[11px] font-pixel font-bold whitespace-nowrap">
                        {hs.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Hotspot Dialogue */}
              {activeHotspotDialogue && (
                <div className="p-4 bg-cyan-950/50 border border-cyan-500 text-xs sm:text-sm text-cyan-100 flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-pixel text-[11px] text-cyan-300 uppercase mb-1">
                      FORENSIC EVIDENCE INSPECTED
                    </div>
                    <p className="leading-relaxed">{activeHotspotDialogue}</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Puzzle Action Bar */}
          <div className="flex items-center justify-between border-t border-slate-800 pt-4">
            <span className="text-xs text-slate-400 font-mono">
              Status: {isCurrentPuzzleSolved() ? '✓ Solved' : 'Awaiting correct judgment'}
            </span>

            {isCurrentPuzzleSolved() ? (
              <button
                onClick={handleNextPuzzle}
                className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-pixel text-xs font-bold transition-all shadow-[0_0_15px_rgba(16,185,129,0.5)] active:scale-95"
              >
                {currentPuzzleIdx === mission.puzzles.length - 1
                  ? 'RESTORE AMENDMENT FILE ▶'
                  : 'NEXT PUZZLE ▶'}
              </button>
            ) : (
              <div className="text-xs text-slate-500 font-mono italic">
                Solve the challenge above to proceed
              </div>
            )}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* CELEBRATION / FILE RECOVERY SCREEN                       */}
      {/* ======================================================== */}
      {phase === 'CELEBRATION' && (
        <div className="bg-slate-950 border-4 border-emerald-500 p-6 sm:p-8 text-center space-y-6 shadow-2xl pixel-box-green">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-950 border border-emerald-400 text-emerald-300 font-pixel text-xs tracking-widest uppercase">
            FILE RECOVERED // SYSTEM INTEGRITY +10%
          </div>

          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold font-pixel text-white">
              AMENDMENT {AMENDMENTS_DATA.find(a => a.id === mission.amendmentCovered)?.roman || 'X'} RESTORED
            </h2>
            <p className="text-sm font-mono text-cyan-300">
              {AMENDMENTS_DATA.find(a => a.id === mission.amendmentCovered)?.shortSummary || 'Constitutional File Re-indexed'}
            </p>
          </div>

          <div className="max-w-xl mx-auto p-4 bg-slate-900 border border-slate-800 text-left">
            <DialogueBox
              dialogueLines={mission.celebrationDialogue}
              onComplete={() => {}}
              reducedMotion={reducedMotion}
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenDatabase(mission.amendmentCovered)}
              className="px-4 py-2 bg-slate-900 border border-cyan-500 hover:bg-cyan-900 text-cyan-200 text-xs font-pixel"
            >
              INSPECT CONSTITUTIONAL CARD
            </button>
            <button
              onClick={handleCompleteMission}
              className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-pixel text-xs font-bold shadow-lg"
            >
              RETURN TO CITY MAP ▶
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
