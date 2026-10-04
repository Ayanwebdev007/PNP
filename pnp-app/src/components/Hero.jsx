import React from 'react';
import { ArrowRight, Play, Search } from 'lucide-react';

export default function Hero({ onOpenEnquiry, onOpenVideoModal }) {
  return (
    <section className="relative min-h-[calc(100vh-70px)] flex flex-col justify-end bg-slate-900 text-white overflow-hidden" id="home">
      
      {/* Background Image - Static */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url("/assets/about/building.webp")',
          backgroundPosition: 'center 35%',
          backgroundSize: 'cover'
        }}
      />

      {/* Smooth Bottom Black Gradient Backdrop */}
      <div className="absolute bottom-0 left-0 right-0 h-[60vh] bg-gradient-to-t from-black via-black/80 via-40% to-transparent z-10 pointer-events-none" />

      {/* Content Container - Center Aligned & Placed at Bottom */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 md:px-6 pb-36 sm:pb-8 pt-20 text-center flex flex-col items-center justify-end w-full space-y-3">
        
        {/* Premium White Capsule Bar with Tagline & 2 Buttons */}
        <div className="pb-2 w-full max-w-[96vw] sm:w-auto px-1 sm:px-0 mx-auto">
          <div className="flex flex-row items-center justify-between gap-1.5 sm:gap-5 p-1 sm:p-1.5 pl-3 sm:pl-5 w-full sm:w-auto bg-white/95 backdrop-blur-md rounded-full border border-slate-200/90 shadow-xl shadow-slate-900/5 transition-all hover:shadow-2xl">
            
            {/* Tagline Text inside Capsule */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-hidden flex-1 sm:flex-none">
              <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 shrink-0" />
              <p className="text-[10.5px] min-[375px]:text-[11.5px] sm:text-[13px] text-slate-600 font-normal truncate">
                Trusted for Quality · Nylon Yarn &amp; Coated Fabrics Since 1997
              </p>
            </div>

            {/* Embedded Action Buttons */}
            <div className="flex items-center gap-1 sm:gap-2 shrink-0">
              <button
                onClick={onOpenVideoModal}
                className="p-1.5 sm:px-4 sm:py-2 bg-[#fff100] hover:bg-yellow-300 text-slate-900 font-normal text-xs uppercase tracking-wider rounded-full shadow-sm border border-yellow-300 flex items-center gap-1.5 transition-all hover:scale-105"
                aria-label="Watch Story"
              >
                <div className="w-5 h-5 sm:w-4 sm:h-4 rounded-full bg-[#ed1c23] flex items-center justify-center text-white shrink-0">
                  <Play className="w-2.5 h-2.5 sm:w-2 sm:h-2 fill-current ml-0.5" />
                </div>
                <span className="hidden sm:block">Watch Story</span>
              </button>

              <a
                href="#businesses"
                className="px-3 py-1.5 sm:px-5 sm:py-2 bg-[#ed1c23] hover:bg-[#c9141a] text-white font-normal text-[10px] sm:text-xs uppercase tracking-wider rounded-full shadow-sm flex items-center gap-1 sm:gap-1.5 transition-all hover:scale-105"
              >
                <span className="hidden min-[400px]:block sm:block">Explore</span>
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
              </a>
            </div>

          </div>
        </div>

        {/* Center Headline */}
        <h1 className="text-3xl min-[400px]:text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.15] sm:leading-tight whitespace-normal sm:whitespace-nowrap w-full px-2 sm:px-0">
          Materials for a <br className="block sm:hidden" /><span className="text-[#ed1c23]">Stronger Tomorrow</span>
        </h1>

      </div>

    </section>
  );
}
