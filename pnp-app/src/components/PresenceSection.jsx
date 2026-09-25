import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PresenceSection() {
  const col1 = [
    { name: "Mumbai (Head Office)", isHQ: true },
    { name: "Surat" },
    { name: "Bhilad (Plant)" },
    { name: "New Delhi" },
    { name: "Bengaluru" },
    { name: "Chennai" }
  ];

  const col2 = [
    { name: "Hyderabad" },
    { name: "Kolkata" },
    { name: "Kanpur" },
    { name: "Kochi" },
    { name: "Taipei, Taiwan", isGlobal: true }
  ];

  return (
    <section className="py-20 bg-white text-slate-900 border-t border-slate-200" id="presence">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Narrative Col */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-6 bg-[#ed1c23] rounded-full"></span>
              <span className="text-xs font-normal uppercase tracking-widest text-[#ed1c23]">IN INDIA</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-normal text-slate-900 leading-tight">
              Across India<br />
              Always Closer to You
            </h2>

            <p className="text-slate-600 text-sm leading-relaxed">
              With a strong network of branches and warehouses, we ensure timely delivery and local support wherever you are.
            </p>

            <Link 
              to="/contact" 
              className="px-6 py-3 bg-[#ed1c23] hover:bg-[#c9141a] text-white font-normal text-sm rounded-lg inline-flex items-center gap-2 shadow-lg shadow-red-600/20 transition-all hover:scale-105"
            >
              <span>Find a Location</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* India Map Col */}
          <div className="lg:col-span-4 flex justify-center">
            <img 
              src="/assets/presence/india-map.png?v=3" 
              alt="PNP Presence Across India" 
              className="max-h-96 w-auto object-contain drop-shadow-xl" 
            />
          </div>

          {/* White Locations Card Col */}
          <div className="lg:col-span-4">
            <div className="bg-white text-slate-900 rounded-2xl p-6 shadow-xl border border-slate-200 space-y-4">
              <h3 className="text-xs font-normal uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-2">
                OUR 10+1 STRATEGIC OFFICES
              </h3>

              <div className="grid grid-cols-2 gap-2 text-xs font-normal">
                
                {/* Column 1 */}
                <div className="space-y-2">
                  {col1.map((loc, i) => (
                    <div 
                      key={i} 
                      className={`flex items-center gap-1.5 p-1.5 rounded-md ${loc.isHQ ? 'bg-[#fff100] text-slate-900 border border-yellow-300 font-normal' : 'text-slate-700'}`}
                    >
                      <MapPin className={`w-3.5 h-3.5 shrink-0 ${loc.isHQ ? 'text-[#ed1c23]' : 'text-[#ed1c23]'}`} />
                      <span className="truncate">{loc.name}</span>
                    </div>
                  ))}
                </div>

                {/* Column 2 */}
                <div className="space-y-2">
                  {col2.map((loc, i) => (
                    <div 
                      key={i} 
                      className={`flex items-center gap-1.5 p-1.5 rounded-md ${loc.isGlobal ? 'bg-blue-50 text-blue-800 font-normal' : 'text-slate-700'}`}
                    >
                      <MapPin className={`w-3.5 h-3.5 shrink-0 ${loc.isGlobal ? 'text-blue-600' : 'text-[#ed1c23]'}`} />
                      <span className="truncate">{loc.name}</span>
                    </div>
                  ))}
                  <div className="p-1.5 text-[10px] font-normal text-[#ed1c23] uppercase bg-red-50 rounded-md">
                    20L+ Sq. Ft. Warehousing
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
