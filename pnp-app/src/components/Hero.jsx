import React from 'react';
import { ArrowRight, Play, Search } from 'lucide-react';

export default function Hero({ onOpenEnquiry, onOpenVideoModal }) {
  return (
    <section className="relative min-h-[calc(100vh-70px)] flex flex-col justify-end bg-slate-900 text-white overflow-hidden" id="home">
      
      {/* Background Image - Static */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url("/assets/about/building.jpg")',
          backgroundPosition: 'center 35%',
          backgroundSize: 'cover'
        }}
      />

      {/* Smooth Bottom Black Gradient Backdrop */}
      <div className="absolute bottom-0 left-0 right-0 h-[60vh] bg-gradient-to-t from-black via-black/80 via-40% to-transparent z-10 pointer-events-none" />

      {/* Content Container - Center Aligned & Placed at Bottom */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 md:px-6 pb-8 pt-20 text-center flex flex-col items-center justify-end w-full space-y-3">
        
        {/* Premium White Capsule Bar with Tagline & 2 Buttons */}
        <div className="pb-2">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-5 p-2 sm:p-1.5 sm:pl-5 bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-full border border-slate-200/90 shadow-xl shadow-slate-900/5 transition-all hover:shadow-2xl">
            
            {/* Tagline Text inside Capsule */}
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-slate-400" />
              <p className="text-xs sm:text-[13px] text-slate-600 font-normal leading-tight text-center sm:text-left pr-2">
                India's #2 Nylon Yarn & Coated Fabrics Leader
              </p>
            </div>

            {/* Embedded Action Buttons */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={onOpenVideoModal}
                className="px-4 py-2 bg-[#fff100] hover:bg-yellow-300 text-slate-900 font-normal text-xs uppercase tracking-wider rounded-full shadow-sm border border-yellow-300 flex items-center gap-1.5 transition-all hover:scale-105"
              >
                <div className="w-4 h-4 rounded-full bg-[#ed1c23] flex items-center justify-center text-white">
                  <Play className="w-2 h-2 fill-current ml-0.5" />
                </div>
                <span>Watch Story</span>
              </button>

              <a
                href="#businesses"
                className="px-5 py-2 bg-[#ed1c23] hover:bg-[#c9141a] text-white font-normal text-xs uppercase tracking-wider rounded-full shadow-sm flex items-center gap-1.5 transition-all hover:scale-105"
              >
                <span>Explore</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>

        {/* Center Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight whitespace-nowrap w-full">
          Materials for a <span className="text-[#ed1c23]">Stronger Tomorrow</span>
        </h1>

      </div>

    </section>
  );
}
