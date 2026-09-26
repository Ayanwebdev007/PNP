import React, { useState } from 'react';
import { businessLogos } from '../data/pnpData';
import { Link } from 'react-router-dom';
import { LayoutGrid, Factory, Package, Store, ArrowRight } from 'lucide-react';

export default function BusinessesGrid({ onOpenSynwoodModal }) {
  const [activeDivision, setActiveDivision] = useState('all');
  const [minH, setMinH] = useState(null);

  const filteredLogos = activeDivision === 'all'
    ? businessLogos
    : businessLogos.filter(item => item.division === activeDivision);

  const tabs = [
    { id: 'all', label: 'All Businesses', icon: LayoutGrid },
    { id: 'mfg', label: 'Manufacturing', icon: Factory },
    { id: 'trading', label: 'Trading & Distributorship', icon: Package },
    { id: 'retail', label: 'Retail', icon: Store }
  ];

  const handleTabClick = (tabId) => {
    if (activeDivision === tabId) return;

    const anchor = document.getElementById('tabs-anchor');
    const container = document.getElementById('cards-container');

    if (anchor && container) {
      const offset = window.innerWidth >= 768 ? 100 : 80;
      const top = anchor.getBoundingClientRect().top + window.scrollY - offset;
      
      // If user is scrolled down into the cards
      if (window.scrollY > top + 20) {
        // 1. Freeze the container height so the page doesn't instantly shrink
        setMinH(container.offsetHeight);
        
        // 2. Instantly update the cards (they swap instantly without jump)
        setActiveDivision(tabId);
        
        // 3. Smoothly scroll the user back to the top of the tabs
        window.scrollTo({ top, behavior: 'smooth' });
        
        // 4. Once the scroll finishes safely, remove the artificial height.
        // The page will shrink gracefully below the viewport, without pulling other sections up.
        setTimeout(() => {
          setMinH(null);
        }, 1500); 
        return;
      }
    }
    
    // Default instant change if they are already at the top
    setActiveDivision(tabId);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#fff100]/20 text-slate-900 relative" id="businesses">
      
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

        <div className="relative w-full" id="tabs-anchor">
          {/* Absolute Wrapper for Filter Bar to control its sticky duration precisely */}
          <div className="absolute inset-x-0 top-0 bottom-[400px] md:bottom-[480px] pointer-events-none z-30">
            
            {/* High-End Filter Tabs - Yellow Theme */}
            <div className="sticky top-[80px] md:top-[100px] flex flex-wrap items-center gap-1 mb-14 p-1.5 bg-[#fff100] border border-[#fff100] rounded-3xl md:rounded-full w-fit shadow-sm pointer-events-auto">
              {tabs.map(tab => {
                const Icon = tab.icon;
                const isActive = activeDivision === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className={`px-6 py-3 rounded-2xl md:rounded-full text-[15px] font-normal transition-all duration-300 flex items-center gap-2.5 ${
                      isActive
                        ? 'bg-[#ed1c23] text-white'
                        : 'bg-transparent text-slate-800 hover:text-slate-900 hover:bg-white hover:shadow-sm'
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2]' : 'stroke-[1.5]'}`} />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Premium Brand Cards - Sticky Stack */}
          <div 
            id="cards-container"
            className="flex flex-col gap-8 lg:gap-12 pt-[100px] md:pt-[120px]"
            style={{ minHeight: minH ? `${minH}px` : undefined }}
          >
            {filteredLogos.map((item, index) => {
              const tileContent = (
                <div className="relative w-full h-[400px] md:h-[480px] rounded-2xl overflow-hidden group bg-slate-900 cursor-pointer">
                  
                  {/* Background Image with Zoom Effect */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                    style={{ backgroundImage: `url(${item.image})` }} 
                  />
                  
                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10 group-hover:from-black/80 transition-colors duration-300" />
                  
                  {/* Card Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-between">
                    
                    {/* Top Left: Brand Logo inside a glassmorphism pill */}
                    <div className="self-start bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl shadow-black/20 border border-white/20 transform group-hover:-translate-y-1 transition-transform duration-300">
                      <img 
                        src={item.logo} 
                        alt={item.name} 
                        className="h-12 md:h-16 max-w-[180px] md:max-w-[260px] object-contain transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => {
                          if (item.fallback) e.target.src = item.fallback;
                        }}
                      />
                    </div>
                    
                    {/* Bottom Right: Explore Button */}
                    <div className="self-end flex items-center gap-2 text-white text-[15px] font-normal px-8 py-3.5 md:py-4 rounded-full border border-white/80 hover:bg-[#ed1c23] hover:border-[#ed1c23] transition-all backdrop-blur-sm transform group-hover:-translate-y-1 whitespace-nowrap flex-shrink-0">
                      <span className="lowercase tracking-wide text-lg">explore</span>
                      <ArrowRight className="w-5 h-5 stroke-[1.5] transform group-hover:translate-x-1 transition-transform" />
                    </div>
                    
                  </div>
                </div>
              );

              // Sticky classes for perfect overlap stacking beneath the filter bar
              const slideClasses = "block w-full sticky transition-all duration-300";
              const slideStyle = { top: '180px' };

              // Routing logic based on data type
              if (item.pdf) {
                return (
                  <a key={item.id} href={item.pdf} download title={item.name} className={slideClasses} style={slideStyle}>
                    {tileContent}
                  </a>
                );
              }

              if (item.external) {
                return (
                  <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer" title={item.name} className={slideClasses} style={slideStyle}>
                    {tileContent}
                  </a>
                );
              }

              return (
                <Link key={item.id} to={item.link || '#'} title={item.name} className={slideClasses} style={slideStyle}>
                  {tileContent}
                </Link>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
