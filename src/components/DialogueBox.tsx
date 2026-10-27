import React, { useState, useEffect, useRef } from 'react';
import { DialogueLine } from '../types/game';
import { CHARACTERS } from '../data/characters';
import { PixelPortrait } from './PixelPortraits';
import { soundFx } from '../utils/audio';

interface DialogueBoxProps {
  dialogueLines: DialogueLine[];
  onComplete: () => void;
  reducedMotion?: boolean;
}

export const DialogueBox: React.FC<DialogueBoxProps> = ({
  dialogueLines,
  onComplete,
  reducedMotion = false
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [choiceFeedback, setChoiceFeedback] = useState<string | null>(null);

  const currentLine = dialogueLines[currentIndex];
  const charInfo = currentLine ? CHARACTERS[currentLine.speaker] : null;
  const typingTimerRef = useRef<number | null>(null);

  // Typewriter effect
  useEffect(() => {
    if (!currentLine) return;
    setChoiceFeedback(null);

    if (reducedMotion) {
      setDisplayedText(currentLine.text);
      setIsTyping(false);
      return;
    }

    setDisplayedText('');
    setIsTyping(true);
    let charIdx = 0;
    const fullText = currentLine.text;

    if (typingTimerRef.current) clearInterval(typingTimerRef.current);

    typingTimerRef.current = window.setInterval(() => {
      charIdx++;
      setDisplayedText(fullText.slice(0, charIdx));
      if (charIdx % 3 === 0) {
        soundFx.playBlip(currentLine.speaker === 'civiclock' ? 240 : 480, 0.02);
      }
      if (charIdx >= fullText.length) {
        if (typingTimerRef.current) clearInterval(typingTimerRef.current);
        setIsTyping(false);
      }
    }, 18);

    return () => {
      if (typingTimerRef.current) clearInterval(typingTimerRef.current);
    };
  }, [currentIndex, currentLine, reducedMotion]);

  const handleSkipOrNext = () => {
    if (choiceFeedback) {
      // Clear choice feedback and advance
      setChoiceFeedback(null);
      advance();
      return;
    }

    if (isTyping && currentLine) {
      // Instant reveal
      if (typingTimerRef.current) clearInterval(typingTimerRef.current);
      setDisplayedText(currentLine.text);
      setIsTyping(false);
    } else {
      advance();
    }
  };

  const advance = () => {
    soundFx.playBlip(600, 0.04);
    if (currentIndex < dialogueLines.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      onComplete();
    }
  };

  const handleChoice = (isCorrect?: boolean, feedback?: string) => {
    if (feedback) {
      setChoiceFeedback(feedback);
      if (isCorrect) {
        soundFx.playSuccess();
      } else {
        soundFx.playError();
      }
    } else {
      advance();
    }
  };

  if (!currentLine || !charInfo) return null;

  return (
    <div 
      className="w-full bg-slate-950 border-2 border-cyan-700/80 p-4 shadow-2xl relative select-text"
      role="region"
      aria-live="polite"
    >
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        {/* Character Portrait */}
        <PixelPortrait 
          characterId={currentLine.speaker} 
          size="md" 
          isGlitching={currentLine.speaker === 'civiclock'} 
        />

        {/* Dialogue Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-pixel text-xs tracking-wider text-cyan-400 uppercase">
              {charInfo.name}
            </span>
            <span className="text-[10px] px-1.5 py-0.5 bg-slate-900 border border-slate-700 text-slate-400 font-mono">
              {charInfo.badge}
            </span>
          </div>

          <p className="text-sm sm:text-base font-prose text-slate-100 leading-relaxed min-h-[3rem]">
            {choiceFeedback ? (
              <span className="text-cyan-300 font-medium">{choiceFeedback}</span>
            ) : (
              displayedText
            )}
            {isTyping && (
              <span className="inline-block w-2 h-4 bg-cyan-400 ml-1 animate-pulse align-middle" />
            )}
          </p>

          {/* Choices or Next action */}
          <div className="mt-3 flex flex-wrap gap-2 items-center justify-between">
            {currentLine.choices && !choiceFeedback ? (
              <div className="flex flex-wrap gap-2 w-full pt-1">
                {currentLine.choices.map((choice, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleChoice(choice.isCorrect, choice.feedback)}
                    disabled={isTyping}
                    className="px-3 py-1.5 text-xs font-medium bg-slate-900 border border-cyan-500 text-cyan-200 hover:bg-cyan-900/60 transition-colors disabled:opacity-50 text-left"
                  >
                    ▶ {choice.label}
                  </button>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-between w-full">
                <span className="text-[11px] text-slate-400">
                  Line {currentIndex + 1} of {dialogueLines.length}
                </span>
                <button
                  onClick={handleSkipOrNext}
                  className="px-4 py-1.5 text-xs font-pixel tracking-wider bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold transition-transform active:scale-95"
                >
                  {isTyping ? 'SKIP' : (currentIndex === dialogueLines.length - 1 ? 'PROCEED ▶' : 'CONTINUE ▶')}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
