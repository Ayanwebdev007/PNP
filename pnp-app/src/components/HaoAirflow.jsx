import React from 'react';

const RED = '#ed1c23';
const COOL = '#0ea5e9';

const Num = ({ x, y, n }) => (
  <g>
    <circle cx={x} cy={y} r="15" fill={RED} />
    <text x={x} y={y + 5} textAnchor="middle" fontSize="15" fontWeight="700" fill="#fff">{n}</text>
  </g>
);

// Cross-section of a shed with a HAO turbo on the ridge. Wind spins the turbo,
// hot air rises out through it, fresh air comes in through the side openings.
export default function HaoAirflow({ className = '' }) {
  return (
    <svg viewBox="0 0 800 440" className={className} role="img" aria-label="Diagram: wind spins the HAO turbo on the roof ridge, hot air rises out through it and fresh air enters through the side openings">
      <defs>
        <marker id="hao-arrow-red" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill={RED} /></marker>
        <marker id="hao-arrow-cool" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill={COOL} /></marker>
        <marker id="hao-arrow-grey" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#a3a3a3" /></marker>
        <clipPath id="hao-dome"><path d="M342 122 C338 96 342 72 362 63 Q400 54 438 63 C458 72 462 96 458 122 Z" /></clipPath>
        <radialGradient id="hao-low" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={RED} stopOpacity="0.18" />
          <stop offset="100%" stopColor={RED} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ground */}
      <line x1="40" y1="400" x2="760" y2="400" stroke="#d4d4d4" strokeWidth="2" />

      {/* Shed */}
      <path d="M130 400 V262 L400 160 L670 262 V400 Z" fill="#fafafa" stroke="#d4d4d4" strokeWidth="2" />
      <path d="M100 274 L400 150 L700 274" fill="none" stroke="#525252" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      {/* Side openings */}
      <rect x="126" y="318" width="8" height="40" fill="#fff" />
      <rect x="666" y="318" width="8" height="40" fill="#fff" />

      {/* Low pressure zone */}
      <ellipse cx="400" cy="215" rx="150" ry="45" fill="url(#hao-low)" />

      {/* Turbo (squat steel dome, dark band, flared base) */}
      <path d="M372 160 C380 150 386 142 388 134 H412 C414 142 420 150 428 160 Z" fill="#e5e5e5" stroke="#a3a3a3" strokeWidth="1.5" />
      <g clipPath="url(#hao-dome)">
        <rect x="330" y="50" width="140" height="80" fill="#d9d9d9" />
        <g className="hao-spin">
          {Array.from({ length: 16 }).map((_, i) => {
            const x = 308 + i * 12;
            return (
              <g key={i}>
                <path d={`M${x} 124 C${x + 2} 96 ${x + 8} 76 ${x + 14} 58`} stroke="#f5f5f5" strokeWidth="5" fill="none" />
                <path d={`M${x + 4} 124 C${x + 6} 96 ${x + 12} 76 ${x + 18} 58`} stroke="#737373" strokeWidth="2" fill="none" />
              </g>
            );
          })}
        </g>
        <rect x="330" y="50" width="140" height="14" fill="#bdbdbd" opacity="0.5" />
      </g>
      <path d="M342 122 C338 96 342 72 362 63 Q400 54 438 63 C458 72 462 96 458 122 Z" fill="none" stroke="#525252" strokeWidth="2.5" />
      <rect x="340" y="118" width="120" height="14" rx="3" fill="#262626" />

      {/* Wind over the roof */}
      {[78, 100, 122].map((y, i) => (
        <path key={y} d={`M40 ${y} H${300 - i * 10}`} className="hao-flow" stroke="#a3a3a3" strokeWidth="3" fill="none" strokeLinecap="round" markerEnd="url(#hao-arrow-grey)" />
      ))}

      {/* Hot air rising and out */}
      <path d="M250 370 C250 290 330 230 392 200 L392 168" className="hao-flow" stroke={RED} strokeWidth="3.5" fill="none" strokeLinecap="round" markerEnd="url(#hao-arrow-red)" />
      <path d="M550 370 C550 290 470 230 408 200 L408 168" className="hao-flow" stroke={RED} strokeWidth="3.5" fill="none" strokeLinecap="round" markerEnd="url(#hao-arrow-red)" />
      <path d="M400 360 V180" className="hao-flow" stroke={RED} strokeWidth="3.5" fill="none" strokeLinecap="round" markerEnd="url(#hao-arrow-red)" />
      <path d="M404 50 C406 32 432 22 470 18" className="hao-flow" stroke={RED} strokeWidth="3.5" fill="none" strokeLinecap="round" markerEnd="url(#hao-arrow-red)" />
      <path d="M396 50 C394 32 366 22 330 16" className="hao-flow" stroke={RED} strokeWidth="3.5" fill="none" strokeLinecap="round" markerEnd="url(#hao-arrow-red)" />

      {/* Fresh air coming in */}
      <path d="M40 338 H210" className="hao-flow" stroke={COOL} strokeWidth="3.5" fill="none" strokeLinecap="round" markerEnd="url(#hao-arrow-cool)" />
      <path d="M760 338 H590" className="hao-flow" stroke={COOL} strokeWidth="3.5" fill="none" strokeLinecap="round" markerEnd="url(#hao-arrow-cool)" />

      {/* Step markers */}
      <Num x={318} y={100} n="1" />
      <Num x={400} y={250} n="2" />
      <Num x={496} y={22} n="3" />
    </svg>
  );
}
