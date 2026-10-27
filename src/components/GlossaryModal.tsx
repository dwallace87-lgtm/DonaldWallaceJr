import React, { useState } from 'react';
import { GLOSSARY_TERMS } from '../data/glossary';
import { soundFx } from '../utils/audio';
import { X, Search, Globe2, BookA } from 'lucide-react';

interface GlossaryModalProps {
  onClose: () => void;
}

export const GlossaryModal: React.FC<GlossaryModalProps> = ({ onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<'EN' | 'ES'>('EN');

  const filtered = GLOSSARY_TERMS.filter(item => {
    const q = searchQuery.toLowerCase();
    return (
      item.term.toLowerCase().includes(q) ||
      item.termEs.toLowerCase().includes(q) ||
      item.definitionEn.toLowerCase().includes(q) ||
      item.definitionEs.toLowerCase().includes(q)
    );
  });

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Constitutional Glossary"
    >
      <div className="bg-slate-950 border-2 border-emerald-600 w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden pixel-box-green">
        {/* Header */}
        <div className="bg-slate-900 border-b border-emerald-700/80 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BookA className="w-5 h-5 text-emerald-400" />
            <div>
              <h2 className="font-pixel text-sm sm:text-base text-emerald-300 tracking-wider uppercase">
                CONSTITUTIONAL GLOSSARY // VOCABULARIO LEGAL
              </h2>
              <span className="text-[11px] text-slate-400 font-mono">
                Bilingual Legal Reference (English / Español)
              </span>
            </div>
          </div>
          <button
            onClick={() => {
              soundFx.playBlip(400);
              onClose();
            }}
            className="p-1 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            aria-label="Close glossary"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Language Bar */}
        <div className="bg-slate-900/80 border-b border-slate-800 p-3 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search legal term... / Buscar término..."
              className="w-full bg-slate-950 border border-slate-700 rounded-none pl-9 pr-3 py-1.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-hidden focus:border-emerald-400"
            />
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <Globe2 className="w-4 h-4 text-emerald-400" />
            <span className="text-xs text-slate-400">Language:</span>
            <div className="flex border border-slate-700 bg-slate-950 p-0.5">
              <button
                onClick={() => {
                  soundFx.playBlip(500);
                  setSelectedLanguage('EN');
                }}
                className={`px-2.5 py-1 text-xs font-bold transition-colors ${
                  selectedLanguage === 'EN' ? 'bg-emerald-500 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
              >
                ENGLISH
              </button>
              <button
                onClick={() => {
                  soundFx.playBlip(500);
                  setSelectedLanguage('ES');
                }}
                className={`px-2.5 py-1 text-xs font-bold transition-colors ${
                  selectedLanguage === 'ES' ? 'bg-emerald-500 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
              >
                ESPAÑOL
              </button>
            </div>
          </div>
        </div>

        {/* Terms List */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 font-prose bg-slate-950">
          {filtered.length > 0 ? (
            filtered.map((item, idx) => (
              <div 
                key={idx} 
                className="p-4 bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-base text-emerald-300">
                      {selectedLanguage === 'EN' ? item.term : item.termEs}
                    </h3>
                    <span className="text-xs text-slate-400">
                      ({selectedLanguage === 'EN' ? item.termEs : item.term})
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {item.relevantAmendments.map((am) => (
                      <span 
                        key={am} 
                        className="text-[10px] px-2 py-0.5 bg-slate-950 border border-emerald-800/80 text-emerald-400 font-mono"
                      >
                        AMEND {am}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-slate-200 leading-relaxed">
                  {selectedLanguage === 'EN' ? item.definitionEn : item.definitionEs}
                </p>

                <div className="mt-3 p-2.5 bg-slate-950 border border-slate-800 text-xs text-slate-300">
                  <strong className="text-emerald-400 font-mono mr-1">
                    {selectedLanguage === 'EN' ? 'Example:' : 'Ejemplo:'}
                  </strong>
                  {selectedLanguage === 'EN' ? item.exampleEn : item.exampleEs}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-slate-500">
              <p>No legal terms found matching "{searchQuery}".</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-900 border-t border-slate-800 px-4 py-2 flex items-center justify-between text-xs text-slate-400">
          <span>Accessible constitutional definitions designed for high-school students.</span>
          <button
            onClick={onClose}
            className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 font-pixel text-[11px]"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};
