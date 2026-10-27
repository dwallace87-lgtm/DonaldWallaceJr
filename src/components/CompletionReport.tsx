import React, { useState } from 'react';
import { UserGameState } from '../types/game';
import { generateVerificationHash } from '../utils/storage';
import { soundFx } from '../utils/audio';
import { Award, Printer, Copy, Check, RotateCcw, ShieldCheck } from 'lucide-react';

interface ReportProps {
  gameState: UserGameState;
  onPlayAgain: () => void;
  onViewDatabase: () => void;
}

export const CompletionReport: React.FC<ReportProps> = ({
  gameState,
  onPlayAgain,
  onViewDatabase
}) => {
  const [copied, setCopied] = useState(false);
  const completionDate = gameState.completedAt || new Date().toISOString();
  const formattedDate = new Date(completionDate).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const studentNameDisplay = gameState.studentName.trim() || 'Anonymous Investigator';
  const verificationHash = generateVerificationHash(studentNameDisplay, gameState.completedMissions, completionDate);

  // Compute rank based on mastery & hints
  const getRank = () => {
    if (gameState.hintsUsedCount === 0 && gameState.recoveredAmendments.length === 10) {
      return {
        title: 'MASTER CONSTITUTIONAL SCHOLAR',
        badge: 'GRADE A+ // PERFECT INDEPENDENCE',
        color: 'text-amber-400 border-amber-500 bg-amber-950/30'
      };
    } else if (gameState.hintsUsedCount <= 3 && gameState.recoveredAmendments.length === 10) {
      return {
        title: 'CHIEF CONSTITUTIONAL SPECIALIST',
        badge: 'GRADE A // SUPERIOR LEGAL ANALYSIS',
        color: 'text-cyan-400 border-cyan-500 bg-cyan-950/30'
      };
    } else if (gameState.recoveredAmendments.length === 10) {
      return {
        title: 'CERTIFIED RIGHTS INVESTIGATOR',
        badge: 'GRADE B+ // FULL BILL OF RIGHTS RECOVERED',
        color: 'text-emerald-400 border-emerald-500 bg-emerald-950/30'
      };
    } else {
      return {
        title: 'PROBATIONARY AGENT',
        badge: 'IN PROGRESS',
        color: 'text-slate-400 border-slate-700 bg-slate-900'
      };
    }
  };

  const rank = getRank();

  const handleCopySummary = () => {
    soundFx.playSuccess();
    const summaryText = `=====================================================
MR. WALLACE'S U.S. HISTORY - THE RIGHTS PROTOCOL
OFFICIAL CONSTITUTIONAL INVESTIGATION REPORT
=====================================================
Student Investigator: ${studentNameDisplay}
Completion Date: ${formattedDate}
Investigator Rank: ${rank.title} (${rank.badge})
Bill of Rights Recovered: ${gameState.recoveredAmendments.length} / 10 Amendments (100%)
Missions Completed: ${gameState.completedMissions.length} / 10 Sectors + Constitutional Vault
Scaffolded Hints Used: ${gameState.hintsUsedCount}
Core Precedents Mastered:
  - Tinker v. Des Moines (1st Amend: Student Speech)
  - D.C. v. Heller & Rahimi (2nd Amend: Individual Right & Limits)
  - New Jersey v. T.L.O. (4th Amend: School Reasonableness)
  - Miranda v. Arizona (5th Amend: Custodial Interrogation)
  - Gideon v. Wainwright (6th Amend: Assistance of Counsel)
  - 7th Amend Federal Civil Common Law Jury Guarantee
Teacher Verification Code: ${verificationHash}
Status: CIVICLOCK RESTORED // CONSTITUTION.EXE SECURE
=====================================================`;

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handlePrint = () => {
    soundFx.playBlip(500);
    window.print();
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 select-text">
      {/* Official Certificate Card */}
      <div className="bg-slate-950 border-4 border-cyan-500 p-6 sm:p-8 shadow-2xl relative pixel-box">
        {/* Certificate Header */}
        <div className="border-b-2 border-dashed border-cyan-700/80 pb-6 text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950 border border-cyan-500 text-cyan-300 font-pixel text-xs tracking-widest uppercase">
            <ShieldCheck className="w-4 h-4 text-cyan-400" /> NEW LIBERTY RIGHTS RECOVERY UNIT // OFFICIAL DOSSIER
          </div>
          <h1 className="font-pixel text-xl sm:text-2xl text-white tracking-wider mt-2">
            CONSTITUTIONAL INVESTIGATION CERTIFICATE
          </h1>
          <p className="text-xs sm:text-sm font-mono text-cyan-400 uppercase">
            MR. WALLACE'S 11TH-GRADE U.S. HISTORY CLASSROOM // BROOKLYN, NY
          </p>
        </div>

        {/* Certificate Body */}
        <div className="py-6 space-y-6">
          {/* Student & Date metadata */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-900/80 p-4 border border-slate-800">
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase">Investigator Name:</span>
              <div className="text-base font-bold text-white font-pixel mt-0.5">
                {studentNameDisplay}
              </div>
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase">Date of Decryption:</span>
              <div className="text-sm font-medium text-slate-200 font-mono mt-0.5">
                {formattedDate}
              </div>
            </div>
          </div>

          {/* Rank Badge */}
          <div className={`p-4 border-2 flex flex-col sm:flex-row items-center justify-between gap-4 ${rank.color}`}>
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 shrink-0" />
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase opacity-80">
                  Earned Investigator Rank:
                </span>
                <div className="text-base sm:text-lg font-pixel font-bold mt-0.5">
                  {rank.title}
                </div>
              </div>
            </div>
            <div className="px-3 py-1 bg-black/60 border border-current text-xs font-mono font-bold">
              {rank.badge}
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 bg-slate-900 border border-slate-800 text-center">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Amendments Restored</div>
              <div className="text-xl font-pixel font-bold text-cyan-400 mt-1">
                {gameState.recoveredAmendments.length} / 10
              </div>
            </div>
            <div className="p-3 bg-slate-900 border border-slate-800 text-center">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Missions Solved</div>
              <div className="text-xl font-pixel font-bold text-emerald-400 mt-1">
                {gameState.completedMissions.length}
              </div>
            </div>
            <div className="p-3 bg-slate-900 border border-slate-800 text-center">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Scaffolded Hints</div>
              <div className="text-xl font-pixel font-bold text-amber-400 mt-1">
                {gameState.hintsUsedCount}
              </div>
            </div>
            <div className="p-3 bg-slate-900 border border-slate-800 text-center">
              <div className="text-[10px] font-mono text-slate-400 uppercase">System Integrity</div>
              <div className="text-xl font-pixel font-bold text-fuchsia-400 mt-1">
                100%
              </div>
            </div>
          </div>

          {/* Constitutional Mastery Breakdown */}
          <div className="bg-slate-900/60 border border-slate-800 p-4 space-y-2">
            <h3 className="font-pixel text-xs text-cyan-300 uppercase tracking-wide">
              Verified Constitutional Competencies:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-300 font-prose">
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span><strong>1st Amendment:</strong> Mastered 5 Freedoms & Tinker student speech standard.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span><strong>2nd Amendment:</strong> Individual right for self-defense & permissible limits (Rahimi).</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span><strong>4th Amendment:</strong> Search & seizure, warrants, and T.L.O. school reasonableness.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span><strong>5th Amendment:</strong> Silence, Miranda custodial interrogation, due process, double jeopardy.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span><strong>6th Amendment:</strong> Criminal trials, Gideon counsel, and confrontation clause.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span><strong>7th Amendment:</strong> Federal civil common law jury trial rights ($20 threshold).</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span><strong>Amendments 3, 8, 9, 10:</strong> Quartering, excessive bail/punishment, unenumerated rights, and Federalism.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span><strong>Constitutional Intent:</strong> Understood Founders' ratification compromise & Anti-Federalist limits.</span>
              </div>
            </div>
          </div>

          {/* Teacher Verification Stamp */}
          <div className="p-3 bg-black border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs">
            <div>
              <span className="text-slate-400 uppercase text-[10px]">Anti-Tamper Teacher Verification Code:</span>
              <div className="font-bold text-cyan-300 tracking-wider">
                {verificationHash}
              </div>
            </div>
            <div className="text-[10px] text-slate-500 text-center sm:text-right">
              Generated locally from verified state telemetry
            </div>
          </div>
        </div>

        {/* Report Action Buttons */}
        <div className="border-t-2 border-dashed border-cyan-800 pt-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySummary}
              className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-pixel text-xs font-bold transition-all flex items-center gap-1.5 active:scale-95"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? 'COPIED TO CLIPBOARD!' : 'COPY SUMMARY FOR GOOGLE CLASSROOM'}
            </button>
            <button
              onClick={handlePrint}
              className="px-3 py-2 bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 text-xs font-mono flex items-center gap-1.5"
            >
              <Printer className="w-4 h-4" /> Print / Save PDF
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onViewDatabase}
              className="px-3 py-2 bg-slate-900 border border-cyan-700 text-cyan-300 text-xs font-mono hover:bg-slate-800"
            >
              Review Database
            </button>
            <button
              onClick={onPlayAgain}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-pixel text-xs font-bold flex items-center gap-1.5"
            >
              <RotateCcw className="w-4 h-4" /> PLAY AGAIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
