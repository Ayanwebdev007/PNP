import React, { useState } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { synwoodCatalogues } from '../data/pnpData';

export default function SynwoodModal({ isOpen, onClose }) {
  const [activeFilter, setActiveFilter] = useState('all');

  if (!isOpen) return null;

  const filteredItems = activeFilter === 'all' 
    ? synwoodCatalogues 
    : synwoodCatalogues.filter(item => item.category === activeFilter);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-slate-200">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between shrink-0">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-red-500 bg-red-950/80 px-2.5 py-0.5 rounded border border-red-500/30">
              SYNWOOD & HAOWOOD • 10% MARKET SHARE
            </span>
            <h3 className="text-lg md:text-xl font-bold text-white mt-1">
              Official Product Catalogues & Specification Flyers (21 Documents)
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          <p className="text-xs text-slate-600">
            Explore and download all 21 official catalogues for SYNWOOD & HAOWOOD Synthetic Wood, PVC construction bars, solid foam sheets, wall cladding, and exterior fluted panels.
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All (21)' },
              { id: 'doors', label: 'Doors & Sheets (5)' },
              { id: 'wall', label: 'Wall Panels & Cladding (8)' },
              { id: 'wpc', label: 'Exterior WPC & Flute (5)' },
              { id: 'bars', label: 'Foam Sheets & Bars (3)' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeFilter === tab.id
                    ? 'bg-red-600 text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {filteredItems.map(item => (
              <div 
                key={item.id} 
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-red-500/40 flex items-center justify-between gap-3 group transition-all"
              >
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-red-600 transition-colors truncate">
                    {item.title}
                  </h4>
                  <span className="text-[10px] text-slate-500">{item.catName}</span>
                </div>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white text-[11px] font-bold rounded-md flex items-center gap-1 shrink-0 transition-all hover:scale-105"
                >
                  <span>Open PDF</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
