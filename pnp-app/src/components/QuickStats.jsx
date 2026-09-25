import React from 'react';
import { groupInfo } from '../data/pnpData';

export default function QuickStats() {
  return (
    <section className="bg-slate-950 py-16 border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {groupInfo.stats.map((stat, i) => (
            <div 
              key={i}
              className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 hover:border-red-500/40 text-center space-y-1 transition-all group hover:scale-[1.02]"
            >
              <div className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-white">{stat.label}</div>
              <div className="text-xs text-slate-400">{stat.subtext}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
