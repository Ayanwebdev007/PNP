import React, { useState } from 'react';
import { motion } from 'framer-motion';

const industries = [
  {
    id: "apparel",
    title: "Apparel & Textiles",
    products: [
      { name: "Filament Yarn", brand: "NYTEX" },
      { name: "Label Tapes", brand: "FNP" },
      { name: "Webbings", brand: "FNP" }
    ],
    image: "/assets/industries/apparel.webp",
    description: "Supporting the fashion and garment ecosystem with premium filament yarns, woven labels, and high-tenacity belts."
  },
  {
    id: "luggage",
    title: "Luggage & Travel Gear",
    products: [
      { name: "Luggage Fabric", brand: "Aasutex" },
      { name: "Webbings", brand: "FNP" },
      { name: "Retail Mall", brand: "Baginnov" }
    ],
    image: "/assets/industries/luggage.webp",
    description: "India's market leader in coated fabrics, powering backpacks, soft luggage, and travel accessories."
  },
  {
    id: "construction",
    title: "Construction & Infra",
    products: [
      { name: "Synthetic Wood", brand: "Synwood" },
      { name: "Roofing Screws", brand: "TiE" }
    ],
    image: "/assets/industries/construction-hq.webp",
    description: "Revolutionizing building materials with synthetic wood and permanent bonding solutions for modern infrastructure."
  },
  {
    id: "logistics",
    title: "Logistics & Warehousing",
    products: [
      { name: "Warehouse Racking", brand: "FNP" },
      { name: "Air Ventilators", brand: "HAO" }
    ],
    image: "/assets/industries/warehousing-hq.webp",
    description: "Optimizing supply chains with heavy-duty storage systems and eco-friendly industrial ventilation."
  },
  {
    id: "architecture",
    title: "Architecture & Interiors",
    products: [
      { name: "Synthetic Wood", brand: "Synwood" },
      { name: "Office Furniture", brand: "FNP" }
    ],
    image: "/assets/industries/architecture.webp",
    description: "Elevating commercial and residential spaces with waterproof cladding, decking, and modular furniture."
  },
  {
    id: "automotive",
    title: "Automotive & Safety",
    products: [
      { name: "Webbings", brand: "FNP" },
      { name: "Label Tapes", brand: "FNP" }
    ],
    image: "/assets/industries/automotive.webp",
    description: "Ensuring life-saving reliability with industrial-grade seat belts, helmet straps, and safety harnesses."
  },
  {
    id: "outdoor",
    title: "Outdoor & Adventure",
    products: [
      { name: "Luggage Fabric", brand: "Aasutex" },
      { name: "Webbings", brand: "FNP" }
    ],
    image: "/assets/industries/outdoor.webp",
    description: "Engineered for extremes, providing durable fabrics for tents, windcheaters, and trekking equipment."
  }
];

const getBrandLogo = (brand) => {
  const logos = {
    "NYTEX": "/assets/businesses/logo-nytex.webp",
    "FNP": "/assets/businesses/logo-pnp.webp",
    "Aasutex": "/assets/businesses/logo-pnp.webp",
    "Synwood": "/assets/businesses/logo-synwood.webp",
    "TiE": "/assets/businesses/logo-tie.webp",
    "HAO": "/assets/businesses/logo-hao.webp",
    "Baginnov": "/assets/businesses/logo-baginnov.webp"
  };
  return logos[brand];
};

export default function IndustriesServeSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-12 lg:py-16 bg-white text-slate-900 min-h-[calc(100vh-80px)] flex flex-col justify-center" id="industries">
      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
        
        {/* Header */}
        <motion.div 
          className="mb-8 lg:mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[#ed1c23]"></span>
            <span className="text-xs lg:text-sm font-bold tracking-[0.2em] text-[#ed1c23] uppercase">
              Global Impact
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight">
            Industries <span className="text-slate-400">we empower.</span>
          </h2>
        </motion.div>

        {/* Constrained Height Container */}
        <div className="flex flex-col lg:flex-row gap-8 h-auto lg:h-[55vh] lg:min-h-[450px] lg:max-h-[600px]">
          
          {/* Left Side - Interactive List */}
          <motion.div 
            className="w-full lg:w-5/12 flex flex-col justify-center gap-1 pr-0 lg:pr-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            {industries.map((ind, index) => (
              <div 
                key={ind.id}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className={`group cursor-pointer py-2 lg:py-3 border-b border-slate-100 transition-all duration-300 ${
                  activeIndex === index ? 'pl-4 lg:pl-6 border-[#ed1c23]' : 'hover:pl-2'
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className={`whitespace-nowrap text-lg md:text-xl lg:text-2xl xl:text-3xl transition-all duration-300 ${
                    activeIndex === index 
                      ? 'font-medium text-[#ed1c23]' 
                      : 'font-light text-slate-400 group-hover:text-slate-600'
                  }`}>
                    {ind.title}
                  </h3>
                  
                  {/* Arrow Indicator */}
                  <div className={`transition-all duration-300 ${activeIndex === index ? 'opacity-100 translate-x-0 text-[#ed1c23]' : 'opacity-0 -translate-x-4 text-slate-300 group-hover:opacity-100 group-hover:translate-x-0'}`}>
                    <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>

                {/* Mobile description & image (visible only on mobile) */}
                <div className={`lg:hidden overflow-hidden transition-all duration-500 ${activeIndex === index ? 'max-h-[800px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                  <div className="w-full h-[200px] rounded-2xl overflow-hidden mb-4 relative">
                     <img src={ind.image} alt={ind.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {ind.products.map((p, i) => (
                      <div key={i} className="bg-slate-900 pr-3 pl-1 py-1 rounded-lg flex items-center gap-2 shadow-sm border border-slate-800">
                        <div className="bg-white h-6 px-2 rounded-md flex items-center justify-center">
                           <img src={getBrandLogo(p.brand)} alt={p.brand} className="h-2.5 object-contain" />
                        </div>
                        <span className="text-[9px] font-bold text-white uppercase tracking-wider">{p.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right Side - Full Height Image Crossfade (Desktop Only) */}
          <motion.div 
            className="hidden lg:block w-full lg:w-7/12 relative rounded-3xl overflow-hidden shadow-2xl bg-slate-100"
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            {industries.map((ind, index) => (
              <div 
                key={ind.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  activeIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <img 
                  src={ind.image} 
                  alt={ind.title} 
                  className={`w-full h-full object-cover transition-transform duration-[2s] ease-out ${
                    activeIndex === index ? 'scale-100' : 'scale-110'
                  }`} 
                />
                
                {/* Elegant dark gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent" />
                
                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                  <div className={`transform transition-all duration-700 delay-100 ${activeIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <div className="flex flex-wrap gap-3">
                      {ind.products.map((p, i) => (
                        <div 
                          key={i} 
                          className="bg-black/50 backdrop-blur-md border border-white/10 pr-5 pl-1.5 py-1.5 rounded-2xl flex items-center gap-3 shadow-2xl hover:bg-black/70 transition-all hover:-translate-y-0.5 group cursor-default"
                        >
                          <div className="bg-white h-9 px-3 rounded-xl flex items-center justify-center flex-shrink-0 shadow-inner transition-transform group-hover:scale-105">
                            <img src={getBrandLogo(p.brand)} alt={p.brand} className="h-4 object-contain max-w-[60px]" />
                          </div>
                          <span className="text-white/90 text-[10px] font-bold uppercase tracking-widest">{p.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
