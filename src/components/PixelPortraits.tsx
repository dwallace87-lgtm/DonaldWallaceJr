import React from 'react';
import { CharacterId } from '../types/game';

interface PortraitProps {
  characterId: CharacterId;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  isGlitching?: boolean;
}

export const PixelPortrait: React.FC<PortraitProps> = ({
  characterId,
  size = 'md',
  className = '',
  isGlitching = false
}) => {
  const sizeMap = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-28 h-28'
  };

  const dimension = sizeMap[size];

  switch (characterId) {
    case 'reyes':
      return (
        <div className={`relative ${dimension} bg-slate-900 border-2 border-cyan-500 rounded-none overflow-hidden shrink-0 pixel-art ${className}`}>
          {/* Reyes - Archivist / Historian Portrait */}
          <svg viewBox="0 0 64 64" className="w-full h-full" shapeRendering="crispEdges">
            {/* Background CRT terminal grid */}
            <rect width="64" height="64" fill="#042f2e" />
            <path d="M0 16h64M0 32h64M0 48h64" stroke="#134e4a" strokeWidth="1" />
            <path d="M16 0v64M32 0v64M48 0v64" stroke="#134e4a" strokeWidth="1" />
            {/* Hair back */}
            <rect x="18" y="14" width="28" height="30" fill="#0f172a" />
            {/* Head / Neck */}
            <rect x="24" y="20" width="16" height="18" fill="#fcd34d" />
            <rect x="28" y="38" width="8" height="6" fill="#f59e0b" />
            {/* Hair top / bangs */}
            <rect x="20" y="12" width="24" height="10" fill="#0891b2" />
            <rect x="16" y="16" width="6" height="16" fill="#0891b2" />
            <rect x="42" y="16" width="6" height="16" fill="#0891b2" />
            {/* Glasses frame */}
            <rect x="24" y="24" width="6" height="5" fill="#06b6d4" />
            <rect x="34" y="24" width="6" height="5" fill="#06b6d4" />
            <rect x="30" y="26" width="4" height="2" fill="#0891b2" />
            {/* Eyes behind lenses */}
            <rect x="26" y="25" width="2" height="2" fill="#083344" />
            <rect x="36" y="25" width="2" height="2" fill="#083344" />
            {/* Mouth */}
            <rect x="28" y="34" width="8" height="2" fill="#b45309" />
            {/* Headset wire & mic */}
            <rect x="14" y="22" width="4" height="8" fill="#e2e8f0" />
            <rect x="14" y="12" width="36" height="3" fill="#64748b" />
            <rect x="16" y="28" width="8" height="2" fill="#94a3b8" />
            <rect x="24" y="30" width="3" height="3" fill="#06b6d4" />
            {/* Jacket & RRU Badge */}
            <rect x="16" y="44" width="32" height="20" fill="#0369a1" />
            <rect x="26" y="44" width="12" height="20" fill="#f8fafc" />
            <rect x="30" y="48" width="4" height="16" fill="#0284c7" />
            <rect x="18" y="48" width="6" height="4" fill="#fbbf24" />
          </svg>
          <div className="absolute top-0 left-0 w-full h-full bg-cyan-400/10 pointer-events-none" />
        </div>
      );

    case 'civiclock':
      return (
        <div className={`relative ${dimension} bg-black border-2 border-red-500 rounded-none overflow-hidden shrink-0 pixel-art ${className}`}>
          {/* CivicLock - Glitching System Terminal */}
          <svg viewBox="0 0 64 64" className="w-full h-full" shapeRendering="crispEdges">
            <rect width="64" height="64" fill="#180404" />
            {/* Red Scanlines */}
            <path d="M0 8h64M0 16h64M0 24h64M0 32h64M0 40h64M0 48h64M0 56h64" stroke="#450a0a" strokeWidth="1" />
            {/* Glowing corrupted AI Core eye */}
            <rect x="20" y="20" width="24" height="24" fill="#7f1d1d" />
            <rect x="24" y="24" width="16" height="16" fill="#dc2626" />
            <rect x="28" y="28" width="8" height="8" fill="#fef2f2" />
            {/* Circuit traces */}
            <path d="M12 32h8M44 32h8M32 12v8M32 44v8" stroke="#ef4444" strokeWidth="2" />
            <rect x="8" y="30" width="4" height="4" fill="#f87171" />
            <rect x="52" y="30" width="4" height="4" fill="#f87171" />
            {/* Warning brackets */}
            <path d="M6 6h10M6 6v10M58 6h-10M58 6v10M6 58h10M6 58v-10M58 58h-10M58 58v-10" stroke="#ef4444" strokeWidth="2" fill="none" />
          </svg>
          {isGlitching && (
            <div className="absolute inset-0 bg-red-600/20 animate-pulse pointer-events-none" />
          )}
        </div>
      );

    case 'morgan':
      return (
        <div className={`relative ${dimension} bg-slate-900 border-2 border-amber-500 rounded-none overflow-hidden shrink-0 pixel-art ${className}`}>
          {/* Detective Morgan */}
          <svg viewBox="0 0 64 64" className="w-full h-full" shapeRendering="crispEdges">
            <rect width="64" height="64" fill="#1c1917" />
            {/* Trenchcoat collar & Fedora hat */}
            <rect x="14" y="16" width="36" height="6" fill="#78350f" />
            <rect x="20" y="8" width="24" height="9" fill="#92400e" />
            <rect x="20" y="14" width="24" height="3" fill="#451a03" />
            {/* Face in shadow */}
            <rect x="22" y="22" width="20" height="18" fill="#d97706" />
            {/* Stubble beard */}
            <rect x="24" y="32" width="16" height="8" fill="#78350f" opacity="0.6" />
            {/* Eyes under fedora brim */}
            <rect x="26" y="25" width="4" height="2" fill="#1c1917" />
            <rect x="34" y="25" width="4" height="2" fill="#1c1917" />
            {/* Trenchcoat shoulders */}
            <rect x="12" y="40" width="40" height="24" fill="#b45309" />
            <rect x="26" y="40" width="12" height="24" fill="#451a03" />
            {/* Gold Police Badge */}
            <polygon points="18,46 22,46 24,50 20,54 16,50" fill="#facc15" />
          </svg>
        </div>
      );

    case 'vega':
      return (
        <div className={`relative ${dimension} bg-slate-900 border-2 border-purple-500 rounded-none overflow-hidden shrink-0 pixel-art ${className}`}>
          {/* Judge Vega */}
          <svg viewBox="0 0 64 64" className="w-full h-full" shapeRendering="crispEdges">
            <rect width="64" height="64" fill="#1e1b4b" />
            {/* Distinguished gray hair */}
            <rect x="18" y="10" width="28" height="24" fill="#94a3b8" />
            {/* Face */}
            <rect x="22" y="18" width="20" height="20" fill="#fbcfe8" />
            {/* Eyes & reading glasses */}
            <rect x="24" y="24" width="5" height="3" fill="#a855f7" />
            <rect x="35" y="24" width="5" height="3" fill="#a855f7" />
            <rect x="26" y="25" width="2" height="2" fill="#1e1b4b" />
            <rect x="37" y="25" width="2" height="2" fill="#1e1b4b" />
            {/* Firm mouth */}
            <rect x="27" y="32" width="10" height="2" fill="#831843" />
            {/* Black Judicial Robe with White Collar */}
            <rect x="12" y="38" width="40" height="26" fill="#0f172a" />
            <polygon points="26,38 38,38 32,46" fill="#f8fafc" />
            {/* Gavel icon pin */}
            <rect x="16" y="44" width="5" height="3" fill="#fbbf24" />
          </svg>
        </div>
      );

    case 'null_architect':
      return (
        <div className={`relative ${dimension} bg-slate-950 border-2 border-fuchsia-500 rounded-none overflow-hidden shrink-0 pixel-art ${className}`}>
          {/* The Null Architect - Enigmatic Cyber Saboteur */}
          <svg viewBox="0 0 64 64" className="w-full h-full" shapeRendering="crispEdges">
            <rect width="64" height="64" fill="#170624" />
            {/* Dark hooded cowl */}
            <polygon points="12,56 16,14 32,4 48,14 52,56" fill="#2e1065" />
            <polygon points="16,56 20,20 32,10 44,20 48,56" fill="#090514" />
            {/* Glowing neon visor in hood shadow */}
            <rect x="22" y="26" width="20" height="6" fill="#c026d3" />
            <rect x="24" y="28" width="16" height="2" fill="#fae8ff" />
            {/* Glitch code runes */}
            <rect x="26" y="38" width="3" height="3" fill="#d946ef" />
            <rect x="35" y="38" width="3" height="3" fill="#d946ef" />
            <rect x="30" y="44" width="4" height="2" fill="#a21caf" />
          </svg>
          <div className="absolute inset-0 bg-fuchsia-500/10 pointer-events-none" />
        </div>
      );

    default:
      return null;
  }
};
