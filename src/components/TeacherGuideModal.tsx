import React, { useState } from 'react';
import { soundFx } from '../utils/audio';
import { X, GraduationCap, CheckCircle2, AlertTriangle, HelpCircle, FileCheck } from 'lucide-react';

interface TeacherGuideProps {
  onClose: () => void;
}

export const TeacherGuideModal: React.FC<TeacherGuideProps> = ({ onClose }) => {
  const [activeSection, setActiveSection] = useState<'overview' | 'answers' | 'misconceptions' | 'quiz'>('overview');

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 select-text"
      role="dialog"
      aria-modal="true"
      aria-label="Teacher Guide & Curriculum Reference"
    >
      <div className="bg-slate-950 border-2 border-indigo-500 w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden pixel-box">
        {/* Header */}
        <div className="bg-slate-900 border-b border-indigo-700 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <GraduationCap className="w-5 h-5 text-indigo-400" />
            <div>
              <h2 className="font-pixel text-sm sm:text-base text-indigo-300 tracking-wider uppercase">
                TEACHER’S CURRICULUM GUIDE // MR. WALLACE
              </h2>
              <span className="text-[11px] text-slate-400 font-mono">
                Instructional Design, Answer Keys, & Constitutional Caveats
              </span>
            </div>
          </div>
          <button
            onClick={() => {
              soundFx.playBlip(400);
              onClose();
            }}
            className="p-1 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            aria-label="Close guide"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-slate-900/60 border-b border-slate-800 px-3 py-2 flex items-center gap-2 overflow-x-auto text-xs font-mono">
          <button
            onClick={() => {
              soundFx.playBlip(500);
              setActiveSection('overview');
            }}
            className={`px-3 py-1.5 font-bold transition-colors ${
              activeSection === 'overview' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            1. Overview & Objectives
          </button>
          <button
            onClick={() => {
              soundFx.playBlip(500);
              setActiveSection('answers');
            }}
            className={`px-3 py-1.5 font-bold transition-colors ${
              activeSection === 'answers' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            2. Puzzle Solutions & Keys
          </button>
          <button
            onClick={() => {
              soundFx.playBlip(500);
              setActiveSection('misconceptions');
            }}
            className={`px-3 py-1.5 font-bold transition-colors ${
              activeSection === 'misconceptions' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            3. Legal Caveats & Misconceptions
          </button>
          <button
            onClick={() => {
              soundFx.playBlip(500);
              setActiveSection('quiz');
            }}
            className={`px-3 py-1.5 font-bold transition-colors ${
              activeSection === 'quiz' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            4. 5-Min Post-Game Quiz
          </button>
        </div>

        {/* Content Pane */}
        <div className="flex-1 p-5 overflow-y-auto font-prose space-y-5 text-slate-200 text-sm">
          {activeSection === 'overview' && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-indigo-300 font-pixel">
                COURSE CONTEXT: NYS 11TH GRADE U.S. HISTORY
              </h3>
              <p className="leading-relaxed">
                Designed for high school juniors in Brooklyn, NY. Following their study of the American Revolution, Articles of Confederation, and the constitutional debates between Federalists and Anti-Federalists, students frequently struggle to memorize and distinguish the Bill of Rights—especially Amendments 5, 6, and 7, as well as the Fourth Amendment's application in public school settings.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                <div className="p-4 bg-slate-900 border border-slate-800">
                  <h4 className="font-bold text-xs font-mono text-cyan-400 uppercase mb-2">
                    Primary Learning Objectives
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside">
                    <li>Independently identify all 10 Amendments by number and core protection.</li>
                    <li>Explain the 5 freedoms of the 1st Amendment (R-A-P-P-S).</li>
                    <li>Distinguish government action from private company rules (State Action Doctrine).</li>
                    <li>Apply the New Jersey v. T.L.O. reasonable suspicion standard for public schools.</li>
                    <li>Differentiate custodial interrogation (5th) from criminal trial rights (6th) and civil disputes (7th).</li>
                    <li>Explain why the Founders added the Bill of Rights in 1791.</li>
                  </ul>
                </div>

                <div className="p-4 bg-slate-900 border border-slate-800">
                  <h4 className="font-bold text-xs font-mono text-emerald-400 uppercase mb-2">
                    Instructional Timing & Pacing
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    <li><strong>Period 1 (40 min):</strong> Missions 1 to 4 (Amendments 1, 2, 3, 4). Focus on free speech, permissible gun regulations, and school privacy.</li>
                    <li><strong>Period 2 (40 min):</strong> Missions 5 to 10 + Final Vault. Focus on 5th vs 6th vs 7th, Federalism, and completing the escape.</li>
                    <li><strong>Homework / Extension:</strong> Copy generated report into Google Classroom and complete the 5-minute reflection quiz.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'answers' && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-indigo-300 font-pixel">
                MASTER PUZZLE SOLUTION KEY
              </h3>

              <div className="space-y-3 text-xs">
                <div className="p-3 bg-slate-900 border border-slate-800">
                  <strong className="text-cyan-400 font-pixel text-[11px]">MISSION 01 (1st Amendment):</strong>
                  <p className="mt-1">
                    <strong>P1 Signals:</strong> Assembly (transit rally), Press (newspaper), Religion (school prayer), Petition (grievance list), Speech (student opinion).<br />
                    <strong>P2 State Action:</strong> Police chief revoking parade permit (Government actor suppressing speech).<br />
                    <strong>P3 Tinker:</strong> Students retain speech unless it causes material and substantial disruption.
                  </p>
                </div>

                <div className="p-3 bg-slate-900 border border-slate-800">
                  <strong className="text-amber-400 font-pixel text-[11px]">MISSION 02 (2nd Amendment):</strong>
                  <p className="mt-1">
                    <strong>P1 Heller:</strong> Protects an individual right unconnected with militia service, traditionally for home self-defense.<br />
                    <strong>P2 Timeline:</strong> Heller (individual right) → McDonald (state incorporation) → Bruen (public carry/history) → Rahimi (restraining orders for credible threats).<br />
                    <strong>P3 Balance:</strong> Rights are robust but not absolute; historical safety regulations can coexist.
                  </p>
                </div>

                <div className="p-3 bg-slate-900 border border-slate-800">
                  <strong className="text-blue-400 font-pixel text-[11px]">MISSION 03 (4th Amendment):</strong>
                  <p className="mt-1">
                    <strong>P1 Hotspots:</strong> Backpack, Teacher Gomez Report, School Handbook.<br />
                    <strong>P2 T.L.O. Standard:</strong> School officials do not need a warrant; justified at inception based on reasonable suspicion.<br />
                    <strong>P3 Scope:</strong> Reading personal diary exceeded reasonable scope.<br />
                    <strong>Cross-Context:</strong> Home searches by police require probable cause and a warrant.
                  </p>
                </div>

                <div className="p-3 bg-slate-900 border border-slate-800">
                  <strong className="text-red-400 font-pixel text-[11px]">MISSION 04 (5th Amendment):</strong>
                  <p className="mt-1">
                    <strong>P1 Miranda:</strong> In custody + interrogated = Miranda warning mandatory.<br />
                    <strong>P2 Double Jeopardy:</strong> Cannot be tried twice for the same offense after acquittal.<br />
                    <strong>P3 Due Process:</strong> No person shall be deprived of life, liberty, or property without due process of law.<br />
                    <strong>P4 5th vs 6th:</strong> 5th protects silence during pre-trial interrogation.
                  </p>
                </div>

                <div className="p-3 bg-slate-900 border border-slate-800">
                  <strong className="text-purple-400 font-pixel text-[11px]">MISSION 05 (6th Amendment):</strong>
                  <p className="mt-1">
                    <strong>P1 Courtroom Repair:</strong> Counsel, Public/Speedy, Impartial Jury, Notice of Charges, Confrontation, Subpoena.<br />
                    <strong>P2 Gideon v. Wainwright:</strong> Indigent felony defendants must receive appointed defense counsel.<br />
                    <strong>P3 Confrontation:</strong> Unsworn absent witness statements cannot be read without cross-examination opportunity.
                  </p>
                </div>

                <div className="p-3 bg-slate-900 border border-slate-800">
                  <strong className="text-yellow-400 font-pixel text-[11px]">MISSION 06 (7th Amendment):</strong>
                  <p className="mt-1">
                    <strong>P1 Sorting:</strong> Armed robbery & Vehicular assault = Criminal. Shipping breach & Medical malpractice = Civil.<br />
                    <strong>P2 Federal Standard:</strong> Suits at common law exceeding twenty dollars preserve jury trial.<br />
                    <strong>P3 Triage:</strong> 5th = Interrogation silence; 6th = Criminal trial jury; 7th = Civil lawsuit jury.
                  </p>
                </div>

                <div className="p-3 bg-slate-900 border border-slate-800">
                  <strong className="text-emerald-400 font-pixel text-[11px]">FINAL VAULT:</strong>
                  <p className="mt-1">
                    <strong>Founders Rationale:</strong> Added to limit the new federal government's power and satisfy Anti-Federalist ratification concerns that individual rights would be crushed by centralized authority.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'misconceptions' && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-indigo-300 font-pixel">
                CRITICAL LEGAL CAVEATS & FREQUENT STUDENT MISCONCEPTIONS
              </h3>

              <div className="space-y-3 text-xs">
                <div className="p-3 bg-rose-950/30 border border-rose-800/80">
                  <h4 className="font-bold text-rose-300 flex items-center gap-1.5 mb-1">
                    <AlertTriangle className="w-4 h-4" /> Misconception 1: "The 1st Amendment applies to Instagram, Twitter, or private bosses."
                  </h4>
                  <p className="text-slate-300">
                    <strong>Legal Reality:</strong> The State Action Doctrine dictates that the First Amendment limits GOVERNMENT actors (public school staff, police, legislators), NOT private corporations or private websites enforcing community guidelines.
                  </p>
                </div>

                <div className="p-3 bg-rose-950/30 border border-rose-800/80">
                  <h4 className="font-bold text-rose-300 flex items-center gap-1.5 mb-1">
                    <AlertTriangle className="w-4 h-4" /> Misconception 2: "Every search without a police warrant is unconstitutional."
                  </h4>
                  <p className="text-slate-300">
                    <strong>Legal Reality:</strong> Under New Jersey v. T.L.O., public school officials operate under the "Reasonable Suspicion" standard to protect the educational environment. However, police searching a private home still generally require probable cause and a judicial warrant.
                  </p>
                </div>

                <div className="p-3 bg-rose-950/30 border border-rose-800/80">
                  <h4 className="font-bold text-rose-300 flex items-center gap-1.5 mb-1">
                    <AlertTriangle className="w-4 h-4" /> Misconception 3: "Police must read Miranda rights the second they say hello."
                  </h4>
                  <p className="text-slate-300">
                    <strong>Legal Reality:</strong> Miranda warnings are only legally required when BOTH conditions are met: (1) the person is in custody (not free to leave), AND (2) police are conducting an interrogation.
                  </p>
                </div>

                <div className="p-3 bg-rose-950/30 border border-rose-800/80">
                  <h4 className="font-bold text-rose-300 flex items-center gap-1.5 mb-1">
                    <AlertTriangle className="w-4 h-4" /> Misconception 4: "The 6th and 7th Amendments are the same thing."
                  </h4>
                  <p className="text-slate-300">
                    <strong>Legal Reality:</strong> The 6th Amendment is strictly for CRIMINAL prosecutions (risk of prison, right to public defender, criminal jury). The 7th Amendment preserves jury rights in covered federal CIVIL lawsuits (private disputes over money, damages, and contracts).
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'quiz' && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-indigo-300 font-pixel">
                5-MINUTE POST-GAME REFLECTION QUIZ
              </h3>
              <p className="text-xs text-slate-300">
                You can copy these 5 questions into Google Forms, Kahoot, or an exit ticket for a fast follow-up assessment.
              </p>

              <ol className="space-y-3 text-xs bg-slate-900 p-4 border border-slate-800 list-decimal list-inside">
                <li>
                  <strong>Which amendment is invoked when a suspect refuses to answer police questions during an interrogation?</strong>
                  <div className="text-slate-400 pl-4 mt-0.5">Answer: Fifth Amendment (Privilege against compelled self-incrimination).</div>
                </li>
                <li>
                  <strong>Why can a private tech platform delete a user's post, while a public school principal cannot ban a peaceful protest armband without disruption?</strong>
                  <div className="text-slate-400 pl-4 mt-0.5">Answer: The State Action Doctrine (First Amendment limits government, not private companies).</div>
                </li>
                <li>
                  <strong>What legal standard governs searches by public school administrators under New Jersey v. T.L.O.?</strong>
                  <div className="text-slate-400 pl-4 mt-0.5">Answer: Reasonable Suspicion (justified at inception and moderate in scope).</div>
                </li>
                <li>
                  <strong>What is the fundamental difference between the jury protections in the 6th and 7th Amendments?</strong>
                  <div className="text-slate-400 pl-4 mt-0.5">Answer: 6th is for criminal trials (jail/crimes); 7th is for federal civil lawsuits (money damages/contracts).</div>
                </li>
                <li>
                  <strong>Why did Anti-Federalists demand a Bill of Rights before ratifying the Constitution?</strong>
                  <div className="text-slate-400 pl-4 mt-0.5">Answer: To limit the power of the new federal government and safeguard individual liberties.</div>
                </li>
              </ol>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-900 border-t border-slate-800 px-4 py-2 flex items-center justify-between text-xs text-slate-400">
          <span>Designed for Mr. Wallace's U.S. History Classroom.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white font-pixel text-xs font-bold"
          >
            CLOSE TEACHER GUIDE
          </button>
        </div>
      </div>
    </div>
  );
};
