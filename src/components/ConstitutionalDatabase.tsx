import React, { useState } from 'react';
import { AMENDMENTS_DATA } from '../data/amendments';
import { soundFx } from '../utils/audio';
import { X, CheckCircle, Lock, BookOpen, AlertCircle, Sparkles } from 'lucide-react';

interface DatabaseProps {
  recoveredAmendments: number[];
  onClose: () => void;
  selectedAmendmentId?: number | null;
}

export const ConstitutionalDatabase: React.FC<DatabaseProps> = ({
  recoveredAmendments,
  onClose,
  selectedAmendmentId = null
}) => {
  const [activeTab, setActiveTab] = useState<number>(
    selectedAmendmentId || (recoveredAmendments.length > 0 ? recoveredAmendments[0] : 1)
  );

  const activeCard = AMENDMENTS_DATA.find(a => a.id === activeTab);
  const isRecovered = activeCard ? recoveredAmendments.includes(activeCard.id) : false;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Constitutional Database"
    >
      <div className="bg-slate-950 border-2 border-cyan-500 w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden pixel-box">
        {/* Header */}
        <div className="bg-slate-900 border-b border-cyan-800 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BookOpen className="w-5 h-5 text-cyan-400" />
            <div>
              <h2 className="font-pixel text-sm sm:text-base text-cyan-300 tracking-wider uppercase">
                R.R.U. CONSTITUTIONAL ARCHIVE // BILL OF RIGHTS
              </h2>
              <span className="text-[11px] text-slate-400 font-mono">
                RECOVERED FILES: {recoveredAmendments.length} / 10
              </span>
            </div>
          </div>
          <button
            onClick={() => {
              soundFx.playBlip(400);
              onClose();
            }}
            className="p-1 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            aria-label="Close database"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector 1-10 */}
        <div className="bg-slate-950 border-b border-slate-800 px-2 py-2 flex items-center gap-1 overflow-x-auto">
          {AMENDMENTS_DATA.map((card) => {
            const recovered = recoveredAmendments.includes(card.id);
            const isCurrent = card.id === activeTab;

            return (
              <button
                key={card.id}
                onClick={() => {
                  soundFx.playBlip(550);
                  setActiveTab(card.id);
                }}
                className={`px-3 py-1.5 text-xs font-pixel shrink-0 transition-all flex items-center gap-1.5 border ${
                  isCurrent
                    ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-bold shadow-md'
                    : recovered
                    ? 'bg-slate-900 text-cyan-300 border-slate-700 hover:border-cyan-500'
                    : 'bg-slate-950 text-slate-600 border-slate-800 opacity-60'
                }`}
              >
                <span>AMEND {card.roman} ({card.id})</span>
                {recovered ? (
                  <CheckCircle className="w-3 h-3 text-emerald-400" />
                ) : (
                  <Lock className="w-3 h-3 text-slate-600" />
                )}
              </button>
            );
          })}
        </div>

        {/* Card Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 font-prose space-y-5">
          {activeCard && (
            <div>
              {/* Status Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-pixel text-xs text-cyan-400">
                      AMENDMENT {activeCard.roman} · {activeCard.id}TH AMENDMENT
                    </span>
                    {isRecovered ? (
                      <span className="text-[10px] px-2 py-0.5 bg-emerald-950 border border-emerald-600 text-emerald-300 font-mono">
                        DECRYPTED & VERIFIED
                      </span>
                    ) : (
                      <span className="text-[10px] px-2 py-0.5 bg-red-950 border border-red-700 text-red-300 font-mono">
                        CORRUPTED FILE (NOT YET RESTORED)
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                    {activeCard.title}
                  </h3>
                </div>
              </div>

              {/* Memory Anchor Hero */}
              <div className="p-4 bg-cyan-950/40 border border-cyan-600/70 mt-4 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] font-pixel text-cyan-300 tracking-wider uppercase">
                    MEMORY ANCHOR // HOW TO REMEMBER
                  </div>
                  <p className="text-sm text-cyan-100 font-semibold mt-0.5">
                    {activeCard.memoryAnchor}
                  </p>
                </div>
              </div>

              {/* Plain English & Official Excerpt Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="p-4 bg-slate-900 border border-slate-800">
                  <div className="text-xs font-mono text-cyan-400 uppercase mb-1">
                    Plain-English Meaning
                  </div>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {activeCard.plainEnglish}
                  </p>
                </div>

                <div className="p-4 bg-slate-900/60 border border-slate-800">
                  <div className="text-xs font-mono text-amber-400 uppercase mb-1">
                    Official National Archives Excerpt
                  </div>
                  <blockquote className="text-xs text-amber-200/90 italic leading-relaxed font-serif border-l-2 border-amber-500 pl-3">
                    "{activeCard.officialExcerpt}"
                  </blockquote>
                </div>
              </div>

              {/* Key Protections List */}
              <div className="p-4 bg-slate-900 border border-slate-800">
                <div className="text-xs font-mono text-slate-400 uppercase mb-2">
                  Key Protected Clauses
                </div>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                  {activeCard.keyProtections.map((prot, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-cyan-400 font-bold font-mono">0{idx + 1}.</span>
                      <span>{prot}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Realistic Example */}
              <div className="p-4 bg-slate-900 border border-slate-800">
                <div className="text-xs font-mono text-emerald-400 uppercase mb-1">
                  Realistic Modern Application
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeCard.realisticExample}
                </p>
              </div>

              {/* Commonly Confused With & Historical Context */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-rose-950/20 border border-rose-900/60">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-rose-400 uppercase mb-1">
                    <AlertCircle className="w-3.5 h-3.5" /> Don't Confuse This!
                  </div>
                  <p className="text-xs sm:text-sm text-rose-200 leading-relaxed">
                    {activeCard.commonlyConfusedWith}
                  </p>
                </div>

                <div className="p-4 bg-slate-900 border border-slate-800">
                  <div className="text-xs font-mono text-slate-400 uppercase mb-1">
                    Historical Context (1791)
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {activeCard.historicalContext}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-900 border-t border-slate-800 px-4 py-2 flex items-center justify-between text-xs text-slate-400">
          <span>Click any amendment tab above to study constitutional protections.</span>
          <button
            onClick={onClose}
            className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 font-pixel text-[11px]"
          >
            CLOSE ARCHIVE
          </button>
        </div>
      </div>
    </div>
  );
};
