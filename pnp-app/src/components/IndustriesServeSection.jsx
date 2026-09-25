import React from 'react';
import { industriesServe } from '../data/pnpData';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function IndustriesServeSection() {
  return (
    <section className="py-16 bg-white text-slate-900 border-t border-slate-200" id="industries">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-6 bg-red-600 rounded-full"></span>
            <h2 className="text-xl md:text-2xl font-extrabold tracking-wider uppercase text-slate-900">
              INDUSTRIES WE SERVE
            </h2>
          </div>
          <p className="text-xs md:text-sm text-slate-600 max-w-lg">
            Our solutions are trusted across diverse sectors, helping businesses build, grow and stay ahead.
          </p>
        </div>

        {/* 6 Industry Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {industriesServe.map(ind => (
            <Link 
              key={ind.id} 
              to={ind.link} 
              className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-red-500 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl"
            >
              <div className="relative h-40 overflow-hidden bg-slate-100">
                <img 
                  src={ind.image} 
                  alt={ind.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              </div>

              <div className="p-3 bg-white flex items-center justify-between gap-2 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-900 group-hover:text-red-600 transition-colors truncate">
                  {ind.title}
                </span>
                <div className="w-6 h-6 rounded-full bg-slate-100 group-hover:bg-red-600 text-slate-500 group-hover:text-white flex items-center justify-center shrink-0 transition-all">
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
