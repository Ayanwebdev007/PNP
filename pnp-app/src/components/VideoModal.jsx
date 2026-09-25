import React from 'react';
import { X, Play } from 'lucide-react';

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-slate-900 border-b border-slate-800">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-red-500 bg-red-950/80 px-2 py-0.5 rounded border border-red-500/30">
              CORPORATE FILM
            </span>
            <h3 className="text-sm font-bold text-white mt-1">
              NYTEX Nylon 6 Yarn Manufacturing | Factory Tour, Bhilad
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Wrapper */}
        <div className="aspect-video w-full bg-black">
          <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
            title="PNP Factory Tour & Corporate Documentary" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Official Video from PNP Polymers Pvt. Ltd.</span>
          <a 
            href="https://www.youtube.com/@pnpind" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg flex items-center gap-1.5 transition-colors"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Visit YouTube Channel (@pnpind)</span>
          </a>
        </div>

      </div>
    </div>
  );
}
