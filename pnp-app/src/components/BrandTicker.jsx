import React from 'react';
import { brands } from '../data/pnpData';

export default function BrandTicker() {
  return (
    <div className="bg-slate-900 border-y border-slate-800 py-8 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <span className="text-xs uppercase tracking-widest text-red-500 font-semibold">Our Flagship Brands & Business Units</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-center">
          {brands.map((b) => (
            <div 
              key={b.id} 
              className="bg-slate-950/60 hover:bg-slate-800/80 border border-slate-800/80 hover:border-red-500/30 p-3 rounded-xl flex flex-col items-center justify-center gap-2 group transition-all duration-300"
            >
              <img 
                src={b.logo} 
                alt={b.name} 
                className="h-9 w-auto object-contain filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300"
              />
              <span className="text-[11px] font-semibold text-slate-300 text-center truncate max-w-full">
                {b.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
