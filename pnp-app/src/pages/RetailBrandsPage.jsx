import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, MapPin } from 'lucide-react';
import CtaBannerSection from '../components/CtaBannerSection';
import { RETAIL_BRANDS } from '../data/retailData';

// Sources: BAGINNOV 2026 catalogue (brands per floor) and pnpind.com/bagginov-pnp (extra brand logos).
const IMG = '/assets/retail';
const CATALOGUE = '/BAGINNOV 2026 .pdf';
const DIRECTIONS = 'https://www.google.com/maps/dir/?api=1&destination=BAGINNOV%2C%20R.%20M.%20Bhattad%20Road%2C%20Borivali%20West%2C%20Mumbai%20400092';

const groups = [
  { id: 'handbags', code: 'G', floor: 'Ground Floor', title: 'Handbag Brands', logos: 'brands-handbags', brands: RETAIL_BRANDS.handbags },
  { id: 'backpacks', code: '1', floor: 'First Floor', title: 'Backpack Brands', logos: 'brands-backpacks', brands: RETAIL_BRANDS.backpacks },
  { id: 'luggage', code: 'B1', floor: 'B1 Floor', title: 'Luggage Brands', logos: 'brands-luggage', brands: RETAIL_BRANDS.luggage },
];

// Extra brands shown on the client's live site, not in the catalogue lists.
const moreBrands = [
  ['hidesign', 'Hidesign'], ['carlton', 'Carlton'], ['victorinox', 'Victorinox'], ['swiss-gear', 'Swiss Gear'], ['satya-paul', 'Satya Paul'],
  ['head', 'Head'], ['puma', 'Puma'], ['esbeda', 'Esbeda'], ['university-of-oxford', 'University of Oxford'], ['simba', 'Simba'],
];

export default function RetailBrandsPage({ onOpenEnquiry }) {
  return (
    <div className="bg-white text-neutral-900">

      {/* Hero: same pattern as the other division pages */}
      <section className="relative flex flex-col justify-end min-h-[calc(100svh-89px)] overflow-hidden text-white">
        <img src={`${IMG}/luggage-aisle.webp`} alt="Long aisle of branded trolley bags at BAGINNOV" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black via-black/65 to-transparent" />
        <div className="relative w-full flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-8 text-center px-4 md:px-8 pb-10 lg:pb-12">
          <h1 className="text-3xl xl:text-4xl font-medium tracking-tight max-lg:text-balance lg:whitespace-nowrap">70+ Top Brands Under One Roof</h1>
          <a href={CATALOGUE} download className="max-sm:w-full max-sm:max-w-xs px-7 py-3.5 bg-[#ed1c23] hover:bg-[#c9141a] text-white text-sm font-bold rounded-full flex items-center justify-center gap-2 whitespace-nowrap transition-colors">
            <Download className="w-4 h-4" /> Download Catalogue
          </a>
        </div>
      </section>

      {/* Floor jump bar */}
      <nav aria-label="Brand groups" className="border-b border-neutral-200">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-3 flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {groups.map((g) => (
            <a key={g.id} href={`#${g.id}`} className="shrink-0 flex items-center gap-2 pl-1 pr-4 py-1 rounded-full ring-1 ring-neutral-200 hover:ring-[#ed1c23] text-sm font-semibold transition-colors">
              <span className="w-7 h-7 rounded-full bg-[#ed1c23] text-white flex items-center justify-center text-xs font-bold">{g.code}</span>
              {g.title}
            </a>
          ))}
          <a href="#more" className="shrink-0 px-4 py-1 rounded-full ring-1 ring-neutral-200 hover:ring-[#ed1c23] text-sm font-semibold flex items-center transition-colors">More Brands</a>
        </div>
      </nav>

      {/* Brands by floor */}
      <section className="pt-10 lg:pt-14">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 space-y-6 lg:space-y-8">
          {groups.map((g) => (
            <article key={g.id} id={g.id} className="scroll-mt-28 rounded-2xl ring-1 ring-neutral-200 overflow-hidden">
              <header className="flex items-center gap-4 max-sm:gap-3 px-4 py-3 max-sm:px-3 lg:px-6 lg:py-4 bg-neutral-50 border-b border-neutral-200">
                <span className="text-3xl lg:text-4xl max-sm:text-2xl max-sm:w-10 font-bold tracking-tighter text-[#ed1c23] leading-none w-12 lg:w-14">{g.code}</span>
                <div className="min-w-0">
                  <h2 className="text-xl lg:text-2xl max-sm:text-lg font-medium tracking-tight leading-tight">{g.title}</h2>
                  <span className="text-xs max-sm:text-[11px] max-sm:tracking-wider font-bold uppercase tracking-widest text-neutral-500">{g.floor} · {g.brands.length} brands</span>
                </div>
              </header>
              <div className="bg-white p-3 sm:p-5 lg:p-6">
                <img src={`${IMG}/${g.logos}.webp?v=2`} alt={`${g.title}: ${g.brands.join(', ')}`} loading="lazy" className="w-full h-auto" />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* More brands */}
      <section id="more" className="scroll-mt-28 pt-12 lg:pt-16">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <h2 className="text-center text-3xl lg:text-5xl font-medium tracking-tight">More Brands <span className="text-[#ed1c23]">in Store</span></h2>
          <ul className="mt-8 lg:mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 max-sm:gap-2.5 lg:gap-4">
            {moreBrands.map(([file, name]) => (
              <li key={file} className="group aspect-[3/2] rounded-2xl ring-1 ring-neutral-200 hover:ring-[#ed1c23] bg-white flex items-center justify-center p-5 max-sm:p-4 lg:p-7 transition-colors">
                <img src={`${IMG}/logos/${file}.webp`} alt={name} loading="lazy" className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Visit strip */}
      <section className="py-12 lg:py-16">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="rounded-2xl bg-[#ed1c23] text-white px-6 py-6 max-sm:px-5 sm:px-10 lg:py-8 flex flex-col lg:flex-row lg:items-center justify-between gap-5">
            <h2 className="text-2xl lg:text-3xl max-sm:text-xl font-medium tracking-tight">Find them all at BAGINNOV, Borivali West</h2>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link to="/retail" className="px-7 py-3.5 bg-white text-[#ed1c23] hover:bg-neutral-100 text-sm font-bold rounded-full flex items-center justify-center gap-2 transition-colors">
                BAGINNOV Mall <ArrowRight className="w-4 h-4" />
              </Link>
              <a href={DIRECTIONS} target="_blank" rel="noopener noreferrer" className="px-7 py-3.5 ring-1 ring-white/60 hover:bg-white/10 text-sm font-bold rounded-full flex items-center justify-center gap-2 transition-colors">
                <MapPin className="w-4 h-4" /> Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaBannerSection onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
}
