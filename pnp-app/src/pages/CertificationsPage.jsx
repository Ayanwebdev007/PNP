import React from 'react';
import { ShieldCheck, Award, CheckCircle2, FileCheck2 } from 'lucide-react';

export default function CertificationsPage({ onOpenEnquiry }) {
  const certs = [
    { title: "ISO 9001:2015 Certification", subtitle: "Quality Management System", desc: "Certified quality management across manufacturing, raw material inspection, spinning, and dispatch." },
    { title: "OEKO-TEX Standard 100", subtitle: "Textile Eco-Safety", desc: "Strict eco-friendly textile certification guaranteeing harmful chemical-free nylon yarns & coated fabrics." },
    { title: "REACH & RoHS Compliance", subtitle: "Global Material Safety", desc: "European hazardous substance compliance for international exports and environmental safety." },
    { title: "Times of India Brand Icon Award", subtitle: "Industry Leadership", desc: "Recognized as India's premier industrial materials and manufacturing group." }
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest text-red-500 font-bold">Certifications & Accreditations</span>
          <h1 className="text-4xl md:text-5xl font-extrabold">Quality Control & Industry Awards</h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Adhering to strict international quality standards with 10-point QA testing across every production batch.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certs.map((c, i) => (
            <div key={i} className="bg-slate-900 p-8 rounded-3xl border border-slate-800 space-y-4 hover:border-red-500/40 transition-all flex items-start gap-4">
              <div className="p-4 bg-red-600/20 text-red-400 rounded-2xl shrink-0">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-red-400 uppercase tracking-wider">{c.subtitle}</span>
                <h3 className="text-xl font-bold text-white">{c.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed pt-1">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
