import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CtaBannerSection({ onOpenEnquiry }) {
  return (
    <section className="relative overflow-hidden bg-white text-slate-900 border-t border-slate-200" id="contact">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#ed1c23] rounded-3xl overflow-hidden shadow-2xl">
          
          {/* Left Red Content */}
          <div className="lg:col-span-7 p-8 md:p-12 space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-tight">
              Let’s Build a<br />
              Stronger Tomorrow Together
            </h2>
            <p className="text-white text-sm md:text-base leading-relaxed">
              Partner with PNP for innovative materials, reliable supply and long-term growth.
            </p>

            <button
              onClick={() => onOpenEnquiry()}
              className="px-7 py-3.5 bg-[#fff100] hover:bg-yellow-300 text-slate-900 font-normal text-sm rounded-lg shadow-xl flex items-center gap-2 transition-all hover:scale-105"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4 text-slate-900" />
            </button>
          </div>

          {/* Right Pillar Words Banner */}
          <div className="lg:col-span-5 bg-[#111827] text-white p-8 md:p-12 h-full flex flex-col justify-center space-y-3 font-normal uppercase tracking-widest text-lg md:text-xl border-l border-red-500/30">
            <span className="text-slate-300">PEOPLE</span>
            <span className="text-slate-300">PRODUCTS</span>
            <span className="text-slate-300">PROGRESS</span>
            <span className="text-[#fff100] text-2xl font-normal">A STRONGER INDIA</span>
            <div className="w-16 h-1 bg-[#ed1c23] rounded-full mt-2"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
