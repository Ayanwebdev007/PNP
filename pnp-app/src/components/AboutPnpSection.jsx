import React from 'react';
import { ArrowRight, Play, Layers, MapPin, Share2, Users, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPnpSection({ onOpenVideoModal }) {
  const pillars = [
    { icon: Layers, title: "Pioneers in Industrial Fabrics" },
    { icon: MapPin, title: "Pan India Presence" },
    { icon: Share2, title: "Strong Distribution Network" },
    { icon: Users, title: "Customer Centric Approach" },
    { icon: Leaf, title: "Sustainable Growth" }
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-200 text-slate-900" id="about">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Narrative */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-6 bg-[#ed1c23] rounded-full"></span>
              <span className="text-xs font-normal uppercase tracking-widest text-[#ed1c23]">ABOUT PNP</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-slate-900 leading-tight">
              A Legacy of<br />
              <span className="text-[#ed1c23]">Trust and Innovation</span>
            </h2>

            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Since 1997, <strong className="text-slate-900 font-normal">PNP</strong> has been at the forefront of delivering <strong className="text-slate-900 font-normal">high-quality materials</strong> and industrial solutions across India. With a diversified portfolio and a <strong className="text-slate-900 font-normal">strong distribution network</strong>, we continue to build a stronger, smarter and more sustainable tomorrow.
            </p>

            <div className="pt-2">
              <Link
                to="/about"
                className="px-6 py-3 bg-[#ed1c23] hover:bg-[#c9141a] text-white font-normal text-sm rounded-lg shadow-lg shadow-red-600/20 inline-flex items-center gap-2 transition-all hover:scale-105"
              >
                <span>Know Our Journey</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Visuals + Pillars */}
          <div className="space-y-6">
            
            {/* Building Image Card */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl group">
              <img 
                src="/assets/about/building.jpg?v=hq_v2" 
                alt="PNP Headquarters Building" 
                className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 bg-slate-950/85 backdrop-blur-md p-3 rounded-xl border border-slate-800 text-white">
                <button
                  onClick={onOpenVideoModal}
                  className="w-10 h-10 rounded-full bg-[#ed1c23] hover:bg-[#c9141a] text-white flex items-center justify-center shrink-0 transition-transform hover:scale-110"
                  aria-label="Watch corporate video"
                >
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </button>
                <div>
                  <span className="text-xs font-normal text-[#fff100] block uppercase tracking-wider">A STRONGER INDIA</span>
                  <span className="text-[10px] text-white font-normal uppercase">SINCE 1997</span>
                </div>
              </div>
            </div>

            {/* 5 Pillars List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {pillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-red-50 text-[#ed1c23] shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-normal text-slate-800">{item.title}</span>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
