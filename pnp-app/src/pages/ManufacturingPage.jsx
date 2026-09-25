import React from 'react';
import { Factory, Leaf, Zap, Award, CheckCircle2, ShieldCheck, Download } from 'lucide-react';

export default function ManufacturingPage({ onOpenEnquiry }) {
  const yarns = [
    { type: "POY", name: "Partially Oriented Yarn", desc: "High tenacity primary spinning yarn engineered for texturizing, weaving & technical draw processes." },
    { type: "FDY", name: "Fully Drawn Yarn", desc: "High-strength fully oriented filament yarn for direct weaving, apparel, sportswear & industrial webbing." },
    { type: "DTY", name: "Drawn Textured Yarn", desc: "Soft-touch textured nylon filament yarn ideal for luggage fabrics, socks, elastic tapes & seamless wear." },
    { type: "HOY", name: "Highly Oriented Yarn", desc: "Specialized high-speed spun yarn with high orientation for specialized industrial applications." },
    { type: "ACY", name: "Air Covered Yarn", desc: "Precision air-intermingled nylon/spandex elastomeric yarn for athletic wear & stretch fabrics." }
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest text-red-500 font-bold">NYTEX Manufacturing Division</span>
          <h1 className="text-4xl md:text-5xl font-extrabold">#2 Nylon Filament Yarn Maker in India</h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            State-of-the-Art manufacturing facility at Bhilad, Gujarat. Powered by 100% Wind & Solar Green Energy and German Oerlikon Barmag technology.
          </p>
        </div>

        {/* Plant Overview Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-slate-900 rounded-3xl border border-slate-800 p-8 shadow-2xl">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
              <Leaf className="w-4 h-4" />
              <span>100% Wind & Solar Green Powered Plant</span>
            </div>
            
            <h2 className="text-3xl font-extrabold text-white">Bhilad Facility & German Precision</h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Established in 2018, NYTEX is India's second-largest manufacturer of Nylon 6 & 66 technical filament yarns. Our Bhilad plant houses German Oerlikon Barmag high-speed spinning lines ensuring zero denier variation and superior tenacity.
            </p>

            <ul className="space-y-3 pt-2">
              <li className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                <span>German Oerlikon Barmag High-Speed Spinning Lines</span>
              </li>
              <li className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                <span>100% Green Renewable Energy Generation</span>
              </li>
              <li className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                <span>ISO 9001:2015 & OEKO-TEX Standard 100 Certified</span>
              </li>
              <li className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                <span>Custom Deniers, Luster (Bright/Semi-Dull) & Intermingling Options</span>
              </li>
            </ul>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => onOpenEnquiry("NYTEX Nylon Filament Yarn")}
                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-xl transition-all"
              >
                Request Yarn Spec Sheet & Quote
              </button>
              <a
                href="/Nytex 2026 .pdf"
                download
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm rounded-xl flex items-center gap-2 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Technical PDF</span>
              </a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-800">
            <img src="/assets/businesses/nytex-hq.jpg" alt="NYTEX Bhilad Plant" className="w-full h-96 object-cover" />
          </div>
        </div>

        {/* Yarns Grid */}
        <div className="space-y-8" id="yarns">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs uppercase font-bold text-red-500">Technical Product Range</span>
            <h3 className="text-3xl font-bold">5 Nylon Technical Yarn Varieties</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {yarns.map((y) => (
              <div key={y.type} className="bg-slate-900/70 p-6 rounded-2xl border border-slate-800 hover:border-red-500/40 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-red-600/20 text-red-400 font-bold text-sm rounded-lg border border-red-500/30">
                    {y.type}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">Nylon 6 / 66</span>
                </div>
                <h4 className="text-lg font-bold text-white">{y.name}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{y.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
