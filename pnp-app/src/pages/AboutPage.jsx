import React from 'react';
import { groupInfo, branchLocations } from '../data/pnpData';
import { Award, Globe, Building2, ShieldCheck, CheckCircle2, MapPin } from 'lucide-react';

export default function AboutPage({ onOpenEnquiry }) {
  const milestones = [
    { year: "1997", title: "Foundation of PNP Group", desc: "Started operations in Mumbai as a trading & industrial solutions provider for plastics & coated fabrics." },
    { year: "2005", title: "Pan-India Expansion", desc: "Established branch offices across Surat, Delhi, Chennai, and Kolkata to support nationwide demand." },
    { year: "2012", title: "Taipei Office Setup", desc: "Opened global office in Taipei, Taiwan for direct international raw material sourcing and technological collaboration." },
    { year: "2018", title: "NYTEX Bhilad Manufacturing Plant", desc: "Commissioned high-speed German Oerlikon Barmag spinning lines at Bhilad, Gujarat for Nylon 6 & 66 yarns." },
    { year: "2021", title: "100% Green Energy Shift", desc: "Transitioned NYTEX manufacturing operations to 100% Wind & Solar green energy." },
    { year: "2024", title: "BAGINNOV Retail Megastore Launch", desc: "Opened 3-floor 25,000 sq. ft. luggage mall in Borivali West, Mumbai housing world-leading travel brands." }
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest text-red-500 font-bold">About PNP Group</span>
          <h1 className="text-4xl md:text-5xl font-extrabold">27+ Years of Industrial Legacy</h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            From humble beginnings in 1997 to becoming India's #2 Nylon Filament Yarn producer and market leader in coated luggage fabrics & synthetic wood boards.
          </p>
        </div>

        {/* Corporate Profile Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-slate-900 rounded-3xl border border-slate-800 p-8 shadow-2xl">
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold text-white">Company Overview</h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              PNP Group (P.N. Plastics & Industrial Materials) is a multi-disciplinary conglomerate headquartered in Mumbai, India. We specialize in technical yarn spinning, PVC/PU coated industrial fabrics, synthetic wood boards, wind-driven roof ventilators, PEB self-drilling screws, and retail luggage megastores.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              Driven by innovation, quality, and environmental stewardship, our Bhilad manufacturing facility operates entirely on 100% wind & solar green power, setting benchmark standards for sustainable industrial manufacturing in India.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="text-2xl font-bold text-red-500">20+ Lakh Sq. Ft.</div>
                <div className="text-xs text-slate-400">Warehousing Capacity</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="text-2xl font-bold text-emerald-400">100% Green</div>
                <div className="text-xs text-slate-400">Wind & Solar Energy</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-800">
            <img src="/assets/about/building.jpg" alt="PNP Headquarters" className="w-full h-80 object-cover" />
          </div>
        </div>

        {/* Milestones Timeline */}
        <div className="space-y-8" id="milestones">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs uppercase font-bold text-red-500">Our Journey</span>
            <h3 className="text-3xl font-bold">Key Milestones Since 1997</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((m, idx) => (
              <div key={idx} className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 hover:border-red-500/40 space-y-3">
                <span className="inline-block px-3 py-1 rounded-full bg-red-600/20 text-red-400 text-xs font-bold border border-red-500/30">
                  {m.year}
                </span>
                <h4 className="text-lg font-bold text-white">{m.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-red-700 to-rose-700 text-white rounded-3xl p-8 text-center space-y-4">
          <h3 className="text-2xl font-bold">Want to learn more or request product samples?</h3>
          <p className="text-red-100 text-sm max-w-xl mx-auto">Get in touch with our corporate team or visit one of our 11 nationwide branches.</p>
          <button
            onClick={() => onOpenEnquiry("General Corporate Enquiry")}
            className="px-6 py-3 bg-white text-red-700 font-bold rounded-xl shadow-lg hover:bg-slate-100 transition-transform hover:scale-105"
          >
            Contact Corporate Office
          </button>
        </div>

      </div>
    </div>
  );
}
