import React, { useState, useEffect } from 'react';
import { PixelPortrait } from './PixelPortraits';
import { soundFx } from '../utils/audio';
import { Terminal, AlertTriangle, ShieldCheck, ArrowRight } from 'lucide-react';

interface IntroSequenceProps {
  onAcceptMission: () => void;
  reducedMotion?: boolean;
}

export const IntroSequence: React.FC<IntroSequenceProps> = ({
  onAcceptMission,
  reducedMotion = false
}) => {
  const [step, setStep] = useState<'ALARM' | 'TRANSMISSION' | 'READY'>('ALARM');

  useEffect(() => {
    soundFx.playGlitch();
    const timer = setTimeout(() => {
      setStep('TRANSMISSION');
      soundFx.playUnlock();
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-[85vh] flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-slate-950 border-4 border-red-600 p-6 sm:p-10 shadow-[0_0_30px_rgba(220,38,38,0.3)] pixel-box-red relative">
        {step === 'ALARM' && (
          <div className="space-y-6 text-center font-mono py-8">
            <div className="w-16 h-16 mx-auto bg-red-950/80 border-2 border-red-500 flex items-center justify-center text-red-500 animate-pulse">
              <AlertTriangle className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <div className="text-red-500 font-pixel text-sm sm:text-base tracking-widest uppercase animate-pulse">
                ⚠ CIVICLOCK SYSTEM STATUS: CRITICAL ⚠
              </div>
              <div className="text-xs sm:text-sm text-slate-300 space-y-1">
                <div>&gt; CONSTITUTIONAL DATABASE: CORRUPTED</div>
                <div>&gt; PROTECTED RIGHTS: 0/10 RECOVERED</div>
                <div>&gt; NULL PROTOCOL ACTIVATED ACROSS ALL SECTORS</div>
                <div className="text-red-400 font-bold">&gt; EMERGENCY RECOVERY PROTOCOL INITIATED...</div>
              </div>
            </div>

            <div className="text-[11px] text-slate-500 animate-ping">
              [ CONNECTING SECURE FREQUENCY ]
            </div>
          </div>
        )}

        {(step === 'TRANSMISSION' || step === 'READY') && (
          <div className="space-y-6">
            {/* Incoming Transmission Header */}
            <div className="flex items-center justify-between border-b border-cyan-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-cyan-400 animate-pulse" />
                <span className="font-pixel text-xs text-cyan-300 tracking-wider">
                  INCOMING TRANSMISSION // R.R.U. FREQUENCY 1791.0
                </span>
              </div>
              <span className="text-[10px] font-mono text-cyan-400">
                SIGNAL: ENCRYPTED
              </span>
            </div>

            {/* Archivist Reyes Briefing */}
            <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center bg-slate-900/90 p-5 border border-cyan-700/80">
              <PixelPortrait characterId="reyes" size="lg" />

              <div className="space-y-3 font-prose">
                <div className="flex items-center gap-2">
                  <span className="font-pixel text-xs text-cyan-400">ARCHIVIST REYES</span>
                  <span className="text-[10px] px-1.5 py-0.5 bg-cyan-950 border border-cyan-700 text-cyan-300 font-mono">
                    R.R.U. HEADQUARTERS
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-100 leading-relaxed">
                  "Listen up, Investigator. Somebody wiped the Bill of Rights from the city’s system. Now everyone’s acting like the government can do whatever it wants."
                </p>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  "Ten amendments. Ten missing files. And a whole lot of people who don't know what protects them. You've got one job: find the files, figure out the rights, and get this city back online."
                </p>
                <p className="text-sm font-bold text-cyan-300 font-pixel">
                  "Don't guess. Investigate."
                </p>
              </div>
            </div>

            {/* Accept Mission CTA */}
            <div className="pt-2 text-center">
              <button
                onClick={() => {
                  soundFx.playSuccess();
                  onAcceptMission();
                }}
                className="w-full sm:w-auto px-10 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-pixel text-sm font-bold tracking-wider shadow-[0_0_20px_rgba(6,182,212,0.6)] cursor-pointer hover:scale-105 active:scale-95 transition-all inline-flex items-center justify-center gap-3"
              >
                <span>ACCEPT THE MISSION</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
