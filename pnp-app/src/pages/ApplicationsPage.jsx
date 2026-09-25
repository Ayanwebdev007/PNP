import React from 'react';
import { Shirt, Car, Shield, Building2, Trophy, ArrowRight } from 'lucide-react';

export default function ApplicationsPage({ onOpenEnquiry }) {
  const apps = [
    {
      title: "Travel Luggage & Backpacks",
      icon: Shield,
      desc: "PVC/PU coated high-denier fabrics, NYTEX textured yarns, and zippers engineered for extreme durability, water repellency, and tear resistance.",
      img: "/assets/industries/textile-luggage-hq.jpg"
    },
    {
      title: "Apparel & Ready-Made Garments",
      icon: Shirt,
      desc: "Nylon 6 & 66 FDY/DTY filament yarns supplied to India's top textile mills for high-end fashion, innerwear, and outerwear weaving.",
      img: "/assets/products/nylon-yarn-hq.jpg"
    },
    {
      title: "Automotive Interiors & Trims",
      icon: Car,
      desc: "High-tenacity nylon webbing yarns, seatbelt reinforcement, helmet harnesses, and interior acoustic insulation fabrics.",
      img: "/assets/products/luggage-fabric-hq.jpg"
    },
    {
      title: "PEB Roofing & Industrial Storage",
      icon: Building2,
      desc: "HAO roof turbo ventilators, TIE corrosion-resistant self-drilling screws, and PNP heavy-duty pallet racking systems.",
      img: "/assets/products/turbo-ventilators-hq.jpg"
    },
    {
      title: "Sportswear & Active Mesh",
      icon: Trophy,
      desc: "Air Covered Yarn (ACY) & breathable mesh fabrics for activewear, sportswear, athletic footwear, and protective pads.",
      img: "/assets/products/nylon-yarn-hq.jpg"
    }
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest text-red-500 font-bold">Multifaceted Applications</span>
          <h1 className="text-4xl md:text-5xl font-extrabold">Powering Top OEMs Across Industries</h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            From travel gear and apparel textiles to automotive webbing, PEB construction, and athletic sportswear.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app, idx) => {
            const Icon = app.icon;
            return (
              <div key={idx} className="bg-slate-900 rounded-2xl border border-slate-800 p-6 space-y-4 hover:border-red-500/40 transition-all flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="p-3 bg-red-600/20 text-red-400 rounded-xl w-fit">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{app.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{app.desc}</p>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <button
                    onClick={() => onOpenEnquiry(`Application: ${app.title}`)}
                    className="w-full py-2.5 bg-slate-800 hover:bg-red-600 text-slate-200 hover:text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Request Application Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
