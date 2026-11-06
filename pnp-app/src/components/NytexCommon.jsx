import React from 'react';
import { ArrowRight, Download, MapPin, Phone, Mail } from 'lucide-react';
import { NYTEX_CATALOGUE, NYTEX_ENQUIRY } from '../data/nytexData';

export const Eyebrow = ({ children, light }) => (
  <span className={`text-xs font-bold uppercase tracking-[0.2em] ${light ? 'text-[#fff100]' : 'text-[#ed1c23]'}`}>{children}</span>
);

export const CatalogueLink = ({ onLight = false }) => (
  <a href={NYTEX_CATALOGUE} download className={`px-7 py-3.5 text-sm font-bold rounded-full flex items-center justify-center gap-2 transition-colors ${onLight ? 'ring-1 ring-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white' : 'ring-1 ring-white/50 bg-white/10 hover:bg-white/20 text-white'}`}>
    <Download className="w-4 h-4" /> Download Catalogue
  </a>
);

export const QuoteButton = ({ onOpenEnquiry, className = '' }) => (
  <button onClick={() => onOpenEnquiry(NYTEX_ENQUIRY)} className={`px-7 py-3.5 bg-[#ed1c23] hover:bg-[#c9141a] text-white text-sm font-bold rounded-full flex items-center justify-center gap-2 transition-colors ${className}`}>
    Request a Quote <ArrowRight className="w-4 h-4" />
  </button>
);

export const HeroStats = ({ stats }) => (
  <dl className="mt-14 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6 border-t border-white/20 pt-6">
    {stats.map((s) => (
      <div key={s.label}>
        <dd className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight whitespace-nowrap">{s.value}</dd>
        <dt className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-white/75">{s.label}</dt>
      </div>
    ))}
  </dl>
);

export function NytexContact({ onOpenEnquiry, heading }) {
  return (
    <section className="py-16 lg:py-24 bg-[#fff100] text-neutral-900">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl lg:text-5xl font-medium tracking-tight">{heading}</h2>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <QuoteButton onOpenEnquiry={onOpenEnquiry} />
            <CatalogueLink onLight />
          </div>
        </div>
        <address className="not-italic space-y-3 lg:border-l lg:border-neutral-900/30 lg:pl-10">
          <div className="text-[11px] font-bold uppercase tracking-widest text-neutral-800">PNP Polymers Pvt. Ltd. · Factory</div>
          <p className="flex gap-3"><MapPin className="w-5 h-5 shrink-0 mt-0.5" /> Survey No. 237/3, Paiki (2), Sarigam, Bhilad, Gujarat - 396 105</p>
          <a href="tel:+919223391019" className="flex gap-3 hover:underline"><Phone className="w-5 h-5 shrink-0" /> 92233 91019</a>
          <a href="mailto:sales@pnpind.com" className="flex gap-3 hover:underline"><Mail className="w-5 h-5 shrink-0" /> sales@pnpind.com</a>
          <div className="pt-3 text-[11px] font-bold uppercase tracking-widest text-neutral-800">Head Office · Inquiries</div>
          <p className="flex gap-3"><MapPin className="w-5 h-5 shrink-0 mt-0.5" /> A 601-607, Mangal Aarambh, Kora Kendra, Borivali (W), Mumbai - 400 092</p>
          <a href="tel:+912240140181" className="flex gap-3 hover:underline"><Phone className="w-5 h-5 shrink-0" /> 022 - 4014 0181 - 88 · Fax: 022 - 6725 9600</a>
        </address>
      </div>
    </section>
  );
}
