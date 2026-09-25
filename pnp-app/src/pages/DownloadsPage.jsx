import React from 'react';
import DownloadsSection from '../components/DownloadsSection';

export default function DownloadsPage() {
  return (
    <div className="bg-slate-950 text-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-red-500 font-bold">Document Repository</span>
          <h1 className="text-4xl font-extrabold">Technical Catalogues & Brochures</h1>
          <p className="text-slate-300 text-sm">Download official PDF catalogues for NYTEX, BAGINNOV, Synwood, Jaquar, and PNP Fasteners.</p>
        </div>
        <DownloadsSection />
      </div>
    </div>
  );
}
