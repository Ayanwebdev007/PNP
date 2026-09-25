import React from 'react';
import { pdfCatalogues } from '../data/pnpData';
import { Download, FileText, ArrowDownToLine } from 'lucide-react';

export default function DownloadsSection() {
  return (
    <section className="py-16 bg-slate-950 border-t border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest text-red-500 font-bold">Catalogues & Documentation</span>
            <h2 className="text-3xl font-extrabold mt-1">Download Product Catalogues</h2>
            <p className="text-slate-400 text-sm mt-1">Official technical specification sheets, product brochures & brand profiles.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pdfCatalogues.map((item, idx) => (
            <div 
              key={idx}
              className="bg-slate-900/60 hover:bg-slate-900 p-5 rounded-2xl border border-slate-800 hover:border-red-500/40 flex items-center justify-between gap-4 group transition-all"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="p-3 rounded-xl bg-red-600/20 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] uppercase font-bold text-red-400">{item.category} • {item.size}</span>
                  <h4 className="text-sm font-bold text-white group-hover:text-red-400 transition-colors truncate">
                    {item.title}
                  </h4>
                </div>
              </div>

              <a
                href={item.file}
                download
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white transition-all shrink-0"
                title={`Download ${item.title}`}
              >
                <ArrowDownToLine className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
