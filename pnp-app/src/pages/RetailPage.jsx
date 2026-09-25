import React from 'react';
import { Store, ShoppingBag, Download, MapPin, ExternalLink, Gift, CheckCircle2 } from 'lucide-react';

export default function RetailPage({ onOpenEnquiry }) {
  const retailBrands = [
    "Samsonite", "American Tourister", "Delsey Paris", "Carlton",
    "VIP Luggage", "Skybags", "Safari", "BAGINNOV Signature"
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest text-red-500 font-bold">Retail Division</span>
          <h1 className="text-4xl md:text-5xl font-extrabold">BAGINNOV Iconic Luggage Megastore</h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            India's premier 3-floor 25,000 sq. ft. luggage experience mall located at Mangal Aarambh, Borivali West, Mumbai.
          </p>
        </div>

        {/* Mall Feature Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-slate-900 rounded-3xl border border-slate-800 p-8 shadow-2xl">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 text-red-400 text-xs font-bold border border-red-500/30">
              <Store className="w-4 h-4" />
              <span>3 Floors • 25,000 Sq. Ft. Megastore</span>
            </div>

            <h2 className="text-3xl font-extrabold text-white">World-Class Travel & Luggage Mall</h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              BAGINNOV brings together the finest global and Indian luggage brands under one roof. Designed as an experiential shopping destination for frequent flyers, business travelers, holidaymakers, and corporate gifting buyers.
            </p>

            <div className="space-y-2">
              <h4 className="text-xs uppercase font-bold text-red-400">Featured Brands Available</h4>
              <div className="flex flex-wrap gap-2 pt-1">
                {retailBrands.map((brand) => (
                  <span key={brand} className="px-3 py-1 bg-slate-950 text-slate-300 border border-slate-800 rounded-lg text-xs font-semibold">
                    {brand}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="https://www.baginnov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-xl flex items-center gap-2 transition-all hover:scale-105"
              >
                <span>Visit Official baginnov.in</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href="/BAGINNOV 2026 .pdf"
                download
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm rounded-xl flex items-center gap-2 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download Retail Catalog</span>
              </a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-800">
            <img src="/assets/businesses/baginnov-hq.jpg" alt="BAGINNOV Megastore" className="w-full h-96 object-cover" />
          </div>
        </div>

        {/* Corporate Gifting Section */}
        <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="p-3 bg-rose-500/20 text-rose-400 rounded-xl w-fit">
              <Gift className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold">Corporate & Festive Bulk Gifting</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We supply custom co-branded luggage, backpacks, travel accessories & duffel bags for corporate events, employee rewards, and festive gifting.
            </p>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Custom Logo Embossing & Printing</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Direct Bulk Factory Pricing</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Pan-India Doorstep Delivery</li>
            </ul>
          </div>

          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center space-y-4">
            <h4 className="text-lg font-bold text-white">Need Corporate Gifting Quotation?</h4>
            <p className="text-xs text-slate-400">Specify your order quantity and preferred brand for customized bulk pricing.</p>
            <button
              onClick={() => onOpenEnquiry("BAGINNOV Corporate Gifting")}
              className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-xl transition-all"
            >
              Request Bulk Quotation
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
