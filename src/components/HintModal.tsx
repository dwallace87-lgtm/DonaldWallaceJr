import React, { useState } from 'react';
import { soundFx } from '../utils/audio';
import { X, HelpCircle, ChevronRight, Lightbulb } from 'lucide-react';

interface HintModalProps {
  hints: [string, string, string]; // Hint 1, 2, 3
  onClose: () => void;
  onHintRevealed: () => void;
}

export const HintModal: React.FC<HintModalProps> = ({
  hints,
  onClose,
  onHintRevealed
}) => {
  const [revealedTier, setRevealedTier] = useState<number>(1);

  const handleRevealNext = () => {
    if (revealedTier < 3) {
      soundFx.playUnlock();
      setRevealedTier(prev => prev + 1);
      onHintRevealed();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Investigator Hint Console"
    >
      <div className="bg-slate-950 border-2 border-cyan-500 w-full max-w-lg p-5 shadow-2xl pixel-box flex flex-col gap-4 font-prose">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-cyan-400" />
            <h3 className="font-pixel text-xs sm:text-sm text-cyan-300 tracking-wider uppercase">
              R.R.U. INVESTIGATION ASSISTANT
            </h3>
          </div>
          <button
            onClick={() => {
              soundFx.playBlip(400);
              onClose();
            }}
            className="text-slate-400 hover:text-white"
            aria-label="Close hints"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-slate-300">
          The hint ladder is designed to scaffold your legal thinking without giving away the final judgment.
        </p>

        {/* Tier 1: Evidence Pointer */}
        <div className="p-3 bg-slate-900 border border-slate-800">
          <div className="flex items-center gap-2 text-xs font-pixel text-cyan-400 mb-1">
            <Lightbulb className="w-4 h-4" />
            <span>TIER 1 // EVIDENCE POINTER</span>
          </div>
          <p className="text-xs text-slate-200 leading-relaxed">
            {hints[0]}
          </p>
        </div>

        {/* Tier 2: Legal Distinction */}
        {revealedTier >= 2 ? (
          <div className="p-3 bg-slate-900 border border-amber-800/80">
            <div className="flex items-center gap-2 text-xs font-pixel text-amber-400 mb-1">
              <Lightbulb className="w-4 h-4" />
              <span>TIER 2 // LEGAL DISTINCTION</span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed">
              {hints[1]}
            </p>
          </div>
        ) : (
          <button
            onClick={handleRevealNext}
            className="p-3 bg-slate-950 border border-dashed border-slate-700 hover:border-amber-500 text-left text-xs text-slate-400 hover:text-amber-300 transition-colors flex items-center justify-between group"
          >
            <span>Unlock Tier 2: Legal Distinction</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        )}

        {/* Tier 3: Scaffolded Approach */}
        {revealedTier >= 3 ? (
          <div className="p-3 bg-slate-900 border border-emerald-800/80">
            <div className="flex items-center gap-2 text-xs font-pixel text-emerald-400 mb-1">
              <Lightbulb className="w-4 h-4" />
              <span>TIER 3 // SCAFFOLDED APPROACH</span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed">
              {hints[2]}
            </p>
          </div>
        ) : revealedTier >= 2 ? (
          <button
            onClick={handleRevealNext}
            className="p-3 bg-slate-950 border border-dashed border-slate-700 hover:border-emerald-500 text-left text-xs text-slate-400 hover:text-emerald-300 transition-colors flex items-center justify-between group"
          >
            <span>Unlock Tier 3: Scaffolded Guidance</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        ) : null}

        {/* Close Button */}
        <div className="flex justify-end pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-pixel text-xs font-bold"
          >
            RETURN TO INVESTIGATION
          </button>
        </div>
      </div>
    </div>
  );
};
