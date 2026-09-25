import React from 'react';
import PanIndiaReachMap from '../components/PanIndiaReachMap';
import { Send, Phone, Mail, MapPin, Globe } from 'lucide-react';

export default function ContactPage({ onOpenEnquiry }) {
  return (
    <div className="bg-slate-950 text-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest text-red-500 font-bold">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl font-extrabold">Contact PNP Industrial Group</h1>
          <p className="text-slate-300 text-sm md:text-base">
            Reach out to our corporate headquarters in Mumbai, Bhilad manufacturing plant, or Taipei global sourcing office.
          </p>
        </div>

        {/* Top Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-3">
            <MapPin className="w-8 h-8 text-red-500" />
            <h3 className="text-lg font-bold">Mumbai Headquarters</h3>
            <p className="text-xs text-slate-400">PNP House, Borivali West, Mumbai - 400092, Maharashtra, India</p>
            <div className="text-xs text-red-400 font-semibold pt-1">+91 22 2800 0000</div>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-3">
            <Globe className="w-8 h-8 text-red-500" />
            <h3 className="text-lg font-bold">Taipei Global Office</h3>
            <p className="text-xs text-slate-400">Sec 1, Dunhua South Rd, Songshan District, Taipei, Taiwan</p>
            <div className="text-xs text-red-400 font-semibold pt-1">+886 2 2700 8899</div>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-3">
            <Mail className="w-8 h-8 text-red-500" />
            <h3 className="text-lg font-bold">Sales & Trade Enquiries</h3>
            <p className="text-xs text-slate-400">Direct inquiries for nylon yarn, coated fabrics & synthetic wood</p>
            <div className="text-xs text-red-400 font-semibold pt-1">sales@pnp.co.in / info@pnp.co.in</div>
          </div>
        </div>

        {/* Instant Quote Form trigger section */}
        <div className="bg-gradient-to-r from-red-700 to-rose-700 rounded-3xl p-8 text-center space-y-4">
          <h2 className="text-3xl font-extrabold text-white">Have a Specific Material Requirement?</h2>
          <p className="text-red-100 text-sm max-w-xl mx-auto">
            Our technical sales representatives will respond with pricing, specs & sample swatches within 24 hours.
          </p>
          <button
            onClick={() => onOpenEnquiry("Direct Contact Request")}
            className="px-8 py-3.5 bg-white text-red-700 font-bold rounded-xl shadow-lg hover:bg-slate-100 transition-all hover:scale-105"
          >
            Launch Quote Request Form
          </button>
        </div>

        {/* Branch directory */}
        <PanIndiaReachMap />

      </div>
    </div>
  );
}
