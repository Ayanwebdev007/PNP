import React, { useState } from 'react';
import { branchLocations } from '../data/pnpData';
import { MapPin, Phone, Mail, Globe, Building2, ChevronRight } from 'lucide-react';

export default function PanIndiaReachMap() {
  const [selectedBranch, setSelectedBranch] = useState(branchLocations[0]);

  return (
    <section className="py-20 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase tracking-widest text-red-500 font-bold">Pan-India & Global Infrastructure</span>
          <h2 className="text-3xl md:text-4xl font-extrabold">11 Nationwide Branches & Global Office</h2>
          <p className="text-slate-400 text-sm">
            Over 20+ Lakh Sq. Ft. of warehousing and direct logistics support across India's key industrial & textile hubs + Taipei, Taiwan.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Branch Selector List */}
          <div className="bg-slate-950 rounded-2xl border border-slate-800 p-4 space-y-2 max-h-[480px] overflow-y-auto custom-scrollbar">
            <div className="text-xs uppercase font-bold text-slate-400 px-3 py-1">Select Location</div>
            {branchLocations.map((b) => (
              <button
                key={b.name}
                onClick={() => setSelectedBranch(b)}
                className={`w-full text-left p-3.5 rounded-xl flex items-center justify-between transition-all ${
                  selectedBranch.name === b.name
                    ? 'bg-red-600 text-white font-bold shadow-lg shadow-red-600/20'
                    : 'bg-slate-900/60 text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <MapPin className={`w-4 h-4 shrink-0 ${selectedBranch.name === b.name ? 'text-white' : 'text-red-500'}`} />
                  <span className="text-xs font-semibold truncate">{b.name}</span>
                </div>
                {b.isHQ && (
                  <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded bg-white/20 text-white shrink-0">HQ</span>
                )}
              </button>
            ))}
          </div>

          {/* Active Branch Details Panel */}
          <div className="lg:col-span-2 bg-slate-950 rounded-2xl border border-slate-800 p-8 space-y-6 shadow-2xl">
            <div className="flex items-start justify-between border-b border-slate-800 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-red-500" />
                  <h3 className="text-2xl font-bold text-white">{selectedBranch.name}</h3>
                </div>
                {selectedBranch.isHQ && (
                  <span className="inline-block mt-1 text-xs font-semibold text-red-400 bg-red-950/60 px-2.5 py-0.5 rounded border border-red-500/30">
                    Corporate Headquarters
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-slate-300">
                  <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                  <div>
                    <div className="text-xs uppercase font-bold text-slate-500">Address</div>
                    <div className="text-sm font-medium mt-0.5">{selectedBranch.address}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <Phone className="w-5 h-5 text-red-500 shrink-0" />
                  <div>
                    <div className="text-xs uppercase font-bold text-slate-500">Telephone</div>
                    <a href={`tel:${selectedBranch.phone}`} className="text-sm font-semibold text-white hover:text-red-400 transition-colors">
                      {selectedBranch.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <Mail className="w-5 h-5 text-red-500 shrink-0" />
                  <div>
                    <div className="text-xs uppercase font-bold text-slate-500">Email</div>
                    <a href={`mailto:${selectedBranch.email}`} className="text-sm font-semibold text-white hover:text-red-400 transition-colors">
                      {selectedBranch.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Infrastructure Stats Box */}
              <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800 space-y-3">
                <h4 className="text-xs font-bold uppercase text-red-400">Network Capabilities</h4>
                <ul className="text-xs text-slate-300 space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-red-500" />
                    <span>20+ Lakh Sq. Ft. Warehousing Storage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-red-500" />
                    <span>Direct Factory Shipment & Local Stocking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-red-500" />
                    <span>Fast Pan-India Material Dispatch within 24-48 Hours</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
