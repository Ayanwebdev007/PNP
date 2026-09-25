import React from 'react';
import { Shield, CheckCircle2, Download, Package } from 'lucide-react';

export default function TradingPage({ onOpenEnquiry }) {
  const tradingBrands = [
    {
      name: "PNP Coated Fabrics",
      share: "25% Indian Market Share",
      desc: "High-denier PVC & PU coated nylon/polyester fabrics engineered for soft luggage, backpacks, rainwear, and industrial canvas.",
      img: "/assets/products/luggage-fabric-hq.jpg",
      pdf: "/PNP All Logos.pdf"
    },
    {
      name: "Synwood & Haowood",
      share: "10% Market Share",
      desc: "100% Waterproof, termite-proof & fire-retardant synthetic wood WPC/PVC boards for luxury interiors & exterior cladding.",
      img: "/assets/products/synwood-boards-hq.jpg",
      pdf: "/PNP diary 2019.pdf"
    },
    {
      name: "HAO Roof Turbo Ventilators",
      share: "Eco-Friendly Ventilation",
      desc: "Stainless steel & aluminium wind-driven roof ventilators for industrial factories, warehouses & commercial buildings.",
      img: "/assets/products/turbo-ventilators-hq.jpg",
      pdf: "/Hao-2026 new.pdf"
    },
    {
      name: "TIE Roofing Fasteners",
      share: "PEB Self-Drilling Screws",
      desc: "High-tensile corrosion resistant self-drilling screws with EPDM washers for pre-engineered steel buildings.",
      img: "/assets/products/roofing-screws-hq.jpg",
      pdf: "/Tie Scres 2026.pdf"
    },
    {
      name: "PNP Heavy Duty Racking Systems",
      share: "Warehousing Storage",
      desc: "Heavy duty pallet racking, selective racks, and mezzanine systems for modern logistics warehouses.",
      img: "/assets/about/building.jpg",
      pdf: "/PNP Racking 2026.pdf"
    },
    {
      name: "Jaquar Commercial Lighting",
      share: "Mumbai Authorized Distributor",
      desc: "Authorized distribution partner for Jaquar commercial, architectural & smart outdoor lighting solutions (Bandra to Virar).",
      img: "/assets/about/building.jpg",
      pdf: "/Jaquar 2062.pdf"
    }
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest text-red-500 font-bold">Trading & Own Brands</span>
          <h1 className="text-4xl md:text-5xl font-extrabold">Market Leading Industrial Brands</h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Distributing top-quality coated fabrics (25% market share), synthetic wood (10% share), roof ventilators, PEB screws & Jaquar lighting.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tradingBrands.map((b, i) => (
            <div key={i} className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-red-500/40 transition-all shadow-xl">
              <div className="relative h-48 overflow-hidden bg-slate-950">
                <img src={b.img} alt={b.name} className="w-full h-full object-cover" />
                <span className="absolute top-3 right-3 px-3 py-1 bg-red-600/90 backdrop-blur-md text-white font-bold text-xs rounded-full">
                  {b.share}
                </span>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">{b.name}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{b.desc}</p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onOpenEnquiry(b.name)}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-lg transition-colors"
                  >
                    Enquire Now
                  </button>

                  <a
                    href={b.pdf}
                    download
                    className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Catalog</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
