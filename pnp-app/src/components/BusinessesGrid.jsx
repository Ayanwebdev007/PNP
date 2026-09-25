import React, { useState } from 'react';
import { businessLogos } from '../data/pnpData';
import { Link } from 'react-router-dom';
import { LayoutGrid, Factory, Package, Store, ArrowRight } from 'lucide-react';

export default function BusinessesGrid({ onOpenSynwoodModal }) {
  const [activeDivision, setActiveDivision] = useState('all');

  const filteredLogos = activeDivision === 'all'
    ? businessLogos
    : businessLogos.filter(item => item.division === activeDivision);

  const tabs = [
    { id: 'all', label: 'All Businesses', icon: LayoutGrid },
    { id: 'mfg', label: 'Manufacturing', icon: Factory },
    { id: 'trading', label: 'Trading & Distributorship', icon: Package },
    { id: 'retail', label: 'Retail', icon: Store }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#fff100]/20 text-slate-900 relative overflow-hidden" id="businesses">
      
      {/* Massive Background Watermark */}
      <div className="absolute right-0 top-10 pointer-events-none z-0">
        <img 
          src="/assets/logo.png?v=trendsetters_v1" 
          alt="" 
          className="h-[300px] md:h-[400px] lg:h-[500px] w-auto object-contain filter grayscale opacity-[0.05] mix-blend-multiply [clip-path:inset(0_0_32%_0)]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Dynamic & Premium Header - Yellow Theme */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-[#ed1c23]"></div>
              <span className="text-[#ed1c23] font-bold tracking-widest uppercase text-sm">
                PNP Industrial Group
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 leading-tight">
              Diversified excellence across <br/>
              <span className="text-[#ed1c23]">multiple verticals.</span>
            </h2>
          </div>
          
        </div>

        {/* High-End Filter Tabs - Yellow Theme */}
        <div className="flex flex-wrap items-center gap-1 mb-14 p-1.5 bg-white/40 border border-white/50 rounded-3xl md:rounded-full w-fit backdrop-blur-md shadow-sm">
          {tabs.map(tab => {
            const Icon = tab.icon;
            const isActive = activeDivision === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveDivision(tab.id)}
                className={`px-6 py-3 rounded-2xl md:rounded-full text-[15px] font-normal transition-all duration-300 flex items-center gap-2.5 ${
                  isActive
                    ? 'bg-[#ed1c23] text-white shadow-md shadow-red-600/20'
                    : 'bg-transparent text-slate-700 hover:text-slate-900 hover:bg-white hover:shadow-sm'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500 group-hover:text-[#ed1c23]'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Premium Brand Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {filteredLogos.map(item => {
            const tileContent = (
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden group shadow-2xl border border-black/5 bg-slate-900 cursor-pointer">
                
                {/* Background Image with Zoom Effect */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                  style={{ backgroundImage: `url(${item.image})` }} 
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10 group-hover:from-black transition-colors duration-300" />
                
                {/* Card Content (Anchored to Bottom) */}
                <div className="absolute inset-0 p-8 flex items-end justify-between gap-4">
                  
                  {/* Left: Brand Logo inside a glassmorphism pill */}
                  <div className="bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl shadow-black/20 border border-white/20 transform group-hover:-translate-y-1 transition-transform duration-300">
                    <img 
                      src={item.logo} 
                      alt={item.name} 
                      className="h-12 md:h-14 max-w-[180px] md:max-w-[220px] object-contain transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        if (item.fallback) e.target.src = item.fallback;
                      }}
                    />
                  </div>
                  
                  {/* Right: Explore Button */}
                  <div className="flex items-center gap-2 text-white text-[15px] font-normal px-6 py-2.5 rounded-full border border-white/80 hover:bg-[#ed1c23] hover:border-[#ed1c23] transition-all backdrop-blur-sm transform group-hover:-translate-y-1 whitespace-nowrap flex-shrink-0">
                    <span className="lowercase tracking-wide">explore</span>
                    <ArrowRight className="w-4 h-4 stroke-[1.5] transform group-hover:translate-x-1 transition-transform" />
                  </div>
                  
                </div>
              </div>
            );

            // Routing logic based on data type
            if (item.pdf) {
              return (
                <a key={item.id} href={item.pdf} download title={item.name} className="block w-full">
                  {tileContent}
                </a>
              );
            }

            if (item.external) {
              return (
                <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer" title={item.name} className="block w-full">
                  {tileContent}
                </a>
              );
            }

            return (
              <Link key={item.id} to={item.link || '#'} title={item.name} className="block w-full">
                {tileContent}
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
