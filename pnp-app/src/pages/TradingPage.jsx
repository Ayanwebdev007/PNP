import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import CtaBannerSection from '../components/CtaBannerSection';
import { brands } from '../data/tradingData';
import { img } from '../components/TradingCommon';


export default function TradingPage({ onOpenEnquiry }) {
  return (
    <div className="bg-white text-neutral-900">

      {/* Hero */}
      <section className="relative flex flex-col justify-end min-h-[calc(100svh-89px)] overflow-hidden text-white">
        <img src={img('hao-roof')} alt="HAO turbo ventilators on a factory roof" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black via-black/65 to-transparent" />
        <div className="relative w-full flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-8 text-center px-4 md:px-8 pb-10 lg:pb-12">
          <h1 className="text-3xl xl:text-4xl font-medium tracking-tight max-lg:text-balance lg:whitespace-nowrap">Our Own Brands, Built for Industry</h1>
          <a href="#brands" className="max-sm:w-full max-sm:max-w-xs px-7 py-3.5 bg-[#ed1c23] hover:bg-[#c9141a] text-white text-sm font-bold rounded-full flex items-center justify-center gap-2 whitespace-nowrap transition-colors">
            Explore Brands <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Brands */}
      <section id="brands" className="scroll-mt-24 py-12 lg:py-16">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <h2 className="text-center text-3xl lg:text-5xl font-medium tracking-tight">Own <span className="text-[#ed1c23]">Brands</span></h2>

          <ul className="mt-8 lg:mt-12 flex flex-wrap justify-center gap-4 lg:gap-5">
            {brands.map((b) => (
              <li key={b.id} className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.84rem)]">
                <Link to={`/trading/${b.id}`} className="group h-full flex flex-col rounded-2xl overflow-hidden ring-1 ring-neutral-200 hover:ring-[#ed1c23] bg-white transition-colors">
                  <div className="relative overflow-hidden">
                    <img src={img(b.card || b.hero)} alt={b.heroAlt} loading="lazy" className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 aspect-[4/3]`} />
                    {b.badges[0] && <span className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-[#ed1c23] text-white text-xs font-bold">{b.badges[0]}</span>}
                  </div>
                  <div className="flex-1 p-5 lg:p-6 max-sm:p-4 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-[#ed1c23]">{b.product}</p>
                      <h3 className="mt-1 text-2xl lg:text-3xl font-medium tracking-tight">{b.name}</h3>
                      <p className="mt-1 text-sm text-neutral-500">{b.products.length > 0 ? `${b.products.length} products` : b.tagline}</p>
                    </div>
                    <span className="shrink-0 w-11 h-11 max-sm:w-10 max-sm:h-10 rounded-full ring-1 ring-neutral-300 group-hover:bg-[#ed1c23] group-hover:ring-[#ed1c23] group-hover:text-white flex items-center justify-center transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBannerSection onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
}
