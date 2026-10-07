import React, { useState } from 'react';
import { businessLogos } from '../data/pnpData';
import { Link } from 'react-router-dom';
import { LayoutGrid, Factory, Package, Store, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BusinessesGrid({ onOpenSynwoodModal }) {
  const [activeDivision, setActiveDivision] = useState('all');

  const filteredLogos = activeDivision === 'all'
    ? businessLogos
    : businessLogos.filter(item => item.division === activeDivision);

  const tabs = [
    { id: 'all', label: 'All Businesses', icon: LayoutGrid },
    { id: 'mfg', label: 'Manufacturing', icon: Factory },
    { id: 'trading', label: 'Trading & Distribution', icon: Package },
    { id: 'retail', label: 'Retail', icon: Store }
  ];

  return (
    <section className="py-24 bg-slate-50 text-slate-900 relative overflow-hidden" id="businesses">
      
      {/* Enhanced Background Watermark */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <img 
          src="/assets/logo.webp?v=trendsetters_v1" 
          alt="" 
          className="absolute right-0 top-20 h-[400px] lg:h-[600px] w-auto object-contain filter grayscale opacity-[0.03] mix-blend-multiply [clip-path:inset(0_0_20%_0)]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-[#ed1c23]"></div>
              <span className="text-[#ed1c23] font-bold tracking-widest uppercase text-sm">
                PNP Group
              </span>
            </div>
            <h2 className="text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 leading-[1.1] sm:leading-tight">
              Diversified excellence across <br className="hidden sm:block" />
              <span className="text-slate-500"> multiple product categories.</span>
            </h2>
          </motion.div>
        </div>

        {/* Filter Tabs - Modernized */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 w-full sm:w-fit bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-full overflow-hidden"
        >
          <div className="flex flex-nowrap sm:flex-wrap items-center gap-1 p-1.5 w-full overflow-x-auto sm:overflow-visible touch-pan-x overscroll-x-contain [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {tabs.map(tab => {
              const Icon = tab.icon;
              const isActive = activeDivision === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveDivision(tab.id)}
                  className={`relative shrink-0 px-5 py-3 sm:px-6 sm:py-3 rounded-full text-[14px] sm:text-[15px] font-normal transition-colors duration-300 flex items-center gap-2 sm:gap-2.5 overflow-hidden group ${
                    isActive ? 'text-white' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {isActive && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute inset-0 bg-[#ed1c23] rounded-full z-0"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <div className="relative z-10 flex items-center gap-2">
                    <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${isActive ? 'stroke-[2.5]' : 'stroke-[2] group-hover:scale-110 transition-transform'}`} />
                    {tab.label}
                  </div>
                </button>
              );
            })}
            {/* Spacer for mobile scroll end */}
            <div className="w-[1px] shrink-0 sm:hidden"></div>
          </div>
        </motion.div>

        {/* Dynamic Bento Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredLogos.map((item, index) => {
              
              // Bento Logic: Alternate span-2 and span-1 in a 3-column grid
              const isAll = activeDivision === 'all';
              const isWide = isAll ? [0, 3, 4, 7].includes(index) : false;
              const spanClasses = isWide ? 'md:col-span-2' : 'md:col-span-1';

              const tileContent = (
                <div className="relative w-full h-[380px] md:h-[420px] rounded-[2rem] overflow-hidden group bg-slate-900 cursor-pointer transition-all duration-500">
                  
                  {/* Background Image with Zoom Effect */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
                    style={{ backgroundImage: `url(${item.image})` }} 
                  />
                  
                  {/* Dark Gradient Overlay - Refined */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent group-hover:from-black/95 group-hover:via-black/60 transition-colors duration-500" />
                  
                  {/* Content Container */}
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10">
                    
                    {/* Top Area: Brand Logo */}
                    <div className="self-start bg-white/95 backdrop-blur-md px-5 py-3.5 rounded-2xl transform group-hover:-translate-y-1 group-hover:scale-105 transition-all duration-500">
                      <img 
                        src={item.logo} 
                        alt={item.name} 
                        className="h-9 md:h-11 max-w-[160px] object-contain"
                        onError={(e) => {
                          if (item.fallback) e.target.src = item.fallback;
                        }}
                      />
                    </div>
                    
                    {/* Bottom Area: Description & Action */}
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="max-w-md">
                          <h3 className="text-white font-medium text-2xl md:text-3xl tracking-tight mb-2 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                            {item.name}
                          </h3>
                          <p className="text-slate-300/90 text-sm md:text-base font-light leading-relaxed group-hover:text-white transition-colors duration-300 line-clamp-2">
                            {item.desc}
                          </p>
                      </div>

                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/15 group-hover:bg-[#ed1c23] backdrop-blur-md transition-all duration-500 group-hover:rotate-45 shrink-0">
                        <ArrowUpRight className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    
                  </div>
                </div>
              );

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
                  key={item.id}
                  className={spanClasses}
                >
                  {item.pdf ? (
                    <a href={item.pdf} download title={item.name} className="block h-full">
                      {tileContent}
                    </a>
                  ) : item.external ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" title={item.name} className="block h-full">
                      {tileContent}
                    </a>
                  ) : (
                    <Link to={item.link || '#'} title={item.name} className="block h-full">
                      {tileContent}
                    </Link>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

