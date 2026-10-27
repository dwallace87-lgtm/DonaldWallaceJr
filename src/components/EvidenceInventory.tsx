import React, { useState } from 'react';
import { EVIDENCE_ITEMS } from '../data/evidence';
import { soundFx } from '../utils/audio';
import { X, Briefcase, FileText, CheckCircle2, Search } from 'lucide-react';

interface InventoryProps {
  collectedEvidence: string[];
  onClose: () => void;
}

export const EvidenceInventory: React.FC<InventoryProps> = ({
  collectedEvidence,
  onClose
}) => {
  const [selectedId, setSelectedId] = useState<string>(
    collectedEvidence.length > 0 ? collectedEvidence[0] : ''
  );

  const selectedEvidence = EVIDENCE_ITEMS.find(e => e.id === selectedId);

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Evidence Inventory"
    >
      <div className="bg-slate-950 border-2 border-amber-600 w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden pixel-box-amber">
        {/* Header */}
        <div className="bg-slate-900 border-b border-amber-700/80 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Briefcase className="w-5 h-5 text-amber-400" />
            <div>
              <h2 className="font-pixel text-sm sm:text-base text-amber-300 tracking-wider uppercase">
                INVESTIGATOR EVIDENCE LOCKER // CASE DOSSIERS
              </h2>
              <span className="text-[11px] text-slate-400 font-mono">
                COLLECTED ARTIFACTS: {collectedEvidence.length} / {EVIDENCE_ITEMS.length}
              </span>
            </div>
          </div>
          <button
            onClick={() => {
              soundFx.playBlip(400);
              onClose();
            }}
            className="p-1 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            aria-label="Close inventory"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Split */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* Item List */}
          <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-slate-800 p-3 overflow-y-auto space-y-2 bg-slate-950">
            {EVIDENCE_ITEMS.map((item) => {
              const isFound = collectedEvidence.includes(item.id);
              const isSelected = item.id === selectedId;

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    if (isFound) {
                      soundFx.playBlip(500);
                      setSelectedId(item.id);
                    }
                  }}
                  disabled={!isFound}
                  className={`w-full text-left p-2.5 border transition-all flex items-start gap-2.5 ${
                    isSelected
                      ? 'border-amber-500 bg-amber-950/40 text-amber-200'
                      : isFound
                      ? 'border-slate-800 bg-slate-900 hover:border-slate-700 text-slate-300'
                      : 'border-slate-900 bg-slate-950/50 opacity-40 cursor-not-allowed text-slate-600'
                  }`}
                >
                  <FileText className={`w-4 h-4 shrink-0 mt-0.5 ${isFound ? 'text-amber-400' : 'text-slate-600'}`} />
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold truncate">
                      {isFound ? item.name : 'Unknown Evidence Dossier'}
                    </div>
                    <div className="text-[10px] text-slate-400 truncate">
                      {isFound ? item.location : 'Sector Unexplored'}
                    </div>
                  </div>
                  {isFound && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />}
                </button>
              );
            })}
          </div>

          {/* Item Inspection Panel */}
          <div className="flex-1 p-4 sm:p-6 overflow-y-auto font-prose space-y-4 bg-slate-900/30">
            {selectedEvidence && collectedEvidence.includes(selectedEvidence.id) ? (
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-amber-950 border border-amber-600 text-amber-300 uppercase">
                    EVIDENCE LOG // {selectedEvidence.id}
                  </span>
                  <span className="text-xs text-slate-400">
                    Discovered: {selectedEvidence.location}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mt-1">
                  {selectedEvidence.name}
                </h3>

                <div className="p-3 bg-slate-900 border border-slate-800 text-xs text-amber-200 mt-2">
                  Summary: {selectedEvidence.shortSnippet}
                </div>

                <div className="mt-4">
                  <h4 className="text-xs font-mono text-slate-400 uppercase mb-1">
                    Forensic Examination & Contents
                  </h4>
                  <p className="text-sm text-slate-200 leading-relaxed bg-slate-950 p-4 border border-slate-800">
                    {selectedEvidence.fullDescription}
                  </p>
                </div>

                <div className="mt-4">
                  <h4 className="text-xs font-mono text-cyan-400 uppercase mb-1 flex items-center gap-1.5">
                    <Search className="w-3.5 h-3.5" /> Constitutional Law Relevance
                  </h4>
                  <p className="text-sm text-cyan-100 leading-relaxed bg-cyan-950/40 p-4 border border-cyan-700/60 font-medium">
                    {selectedEvidence.legalRelevance}
                  </p>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 text-slate-500">
                <Briefcase className="w-12 h-12 mb-2 opacity-50" />
                <p className="text-sm">Select an evidence file from the left to inspect its contents and legal relevance.</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-900 border-t border-slate-800 px-4 py-2 flex items-center justify-between text-xs text-slate-400">
          <span>Inspect documents to substantiate legal claims and challenge CIVICLOCK.</span>
          <button
            onClick={onClose}
            className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 font-pixel text-[11px]"
          >
            CLOSE INVENTORY
          </button>
        </div>
      </div>
    </div>
  );
};
