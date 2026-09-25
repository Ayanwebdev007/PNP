import React from 'react';
import { Link } from 'react-router-dom';
import { businessDivisions } from '../data/pnpData';
import { ArrowRight, CheckCircle, Factory, ShoppingBag, Store, Shield } from 'lucide-react';

export default function BusinessDivisions({ onOpenEnquiry }) {
  const icons = [Factory, Shield, Store, ShoppingBag];

  return (
    <section className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-red-500 font-bold">Four Core Pillars of PNP</span>
          <h2 className="text-3xl md:text-4xl font-extrabold">Diversified Industrial Leadership</h2>
          <p className="text-slate-400 text-sm md:text-base">
            From technical nylon yarn manufacturing and coated fabrics leadership to synthetic wood boards, roof ventilation & premier retail megastores.
          </p>
        </div>

        {/* Divisions Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {businessDivisions.map((division, index) => {
            const IconComp = icons[index % icons.length];
            return (
              <div 
                key={division.id}
                className="group bg-slate-950/80 rounded-2xl overflow-hidden border border-slate-800 hover:border-red-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                {/* Image Showcase */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={division.image} 
                    alt={division.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-red-600 text-white shadow-lg">
                    <IconComp className="w-5 h-5" />
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">{division.subtitle}</span>
                    <h3 className="text-2xl font-bold mt-1 text-white group-hover:text-red-400 transition-colors">
                      {division.title}
                    </h3>

                    <ul className="mt-4 space-y-2">
                      {division.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between gap-4">
                    <Link
                      to={division.link}
                      className="text-xs font-bold text-white hover:text-red-400 flex items-center gap-1.5 transition-colors"
                    >
                      <span>Explore Division Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      onClick={() => onOpenEnquiry(division.title)}
                      className="px-4 py-2 bg-red-600/20 hover:bg-red-600 text-red-400 hover:text-white text-xs font-bold rounded-lg border border-red-500/30 transition-all"
                    >
                      Enquire
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
