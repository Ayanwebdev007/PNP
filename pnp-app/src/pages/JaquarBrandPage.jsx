import React, { useState } from 'react';
import { ArrowRight, Download, ExternalLink, MapPin } from 'lucide-react';
import CtaBannerSection from '../components/CtaBannerSection';
import { Breadcrumb, ProductCard } from '../components/TradingCommon';
import { jaquar as b } from '../data/tradingData';

export default function JaquarBrandPage({ onOpenEnquiry }) {
  const [group, setGroup] = useState('All');
  const shown = group === 'All' ? b.products : b.products.filter((p) => p.group === group);

  return (
    <div className="bg-white text-neutral-900">
      {/* Hero: brand panel + product photo, same layout as the other trading brands */}
      <section className="relative overflow-hidden bg-neutral-50">
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-[52%]">
          <img src="https://www.studiomatrx.org/guides/home-lighting-design-guide-india/hero.jpg" alt="Living room lit with modern lighting" className="w-full h-64 sm:h-96 lg:h-full object-cover lg:[clip-path:polygon(12%_0,100%_0,100%_100%,0_100%)]" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-4 md:px-8 py-10 lg:py-0 lg:min-h-[calc(100svh-89px)] flex items-center">
          <div className="lg:w-[48%] lg:pr-10">
            <img src={b.logos[0]} alt="Jaquar Lighting" className="h-12 sm:h-14 lg:h-16 w-auto" />
            <h1 className="mt-8 max-sm:mt-6 max-sm:text-[2.1rem] text-4xl sm:text-5xl xl:text-6xl font-medium tracking-tight leading-[1.05]">
              Indoor, Outdoor &amp; Decorative <span className="text-[#ed1c23]">Lighting</span>
            </h1>
            <p className="mt-6 inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#ed1c23]/[0.07] text-[#ed1c23] text-sm font-semibold">
              <MapPin className="w-4 h-4" /> Distribution · {b.region}
            </p>
            <div className="mt-8 max-sm:mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#products" className="px-7 py-3.5 bg-[#ed1c23] hover:bg-[#c9141a] text-white text-sm font-bold rounded-full flex items-center justify-center gap-2 transition-colors">
                View Products <ArrowRight className="w-4 h-4" />
              </a>
              <a href={b.catalogue} download className="px-7 py-3.5 ring-1 ring-neutral-900 hover:bg-neutral-900 hover:text-white text-sm font-bold rounded-full flex items-center justify-center gap-2 transition-colors">
                <Download className="w-4 h-4" /> Download Catalogue
              </a>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumb trail={[['Trading', '/trading'], [b.name]]} />

      {/* Link out to Jaquar's own site */}
      <section className="pt-6 lg:pt-8">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 rounded-2xl ring-1 ring-neutral-200 px-5 py-5 max-sm:px-4 lg:px-8 lg:py-6">
            <img src={b.logos[0]} alt="Jaquar Lighting" className="h-9 lg:h-10 w-auto self-start sm:self-center" />
            <p className="flex-1 text-neutral-600 leading-relaxed">Explore the complete Jaquar world on the official Jaquar global website.</p>
            <a href={b.site} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-neutral-900 hover:bg-[#ed1c23] text-white text-sm font-bold rounded-full flex items-center justify-center gap-2 transition-colors shrink-0">
              Visit Jaquar Global Site <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Product cards */}
      <section id="products" className="scroll-mt-24 pt-10 lg:pt-14 pb-14 lg:pb-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          {/* Heading and filters on one line; filters scroll sideways on small screens */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 lg:gap-8">
            <h2 className="shrink-0 text-3xl lg:text-5xl font-medium tracking-tight">Our Jaquar <span className="text-[#ed1c23]">Range</span></h2>
            <div className="-mx-4 px-4 md:mx-0 md:px-0 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex flex-nowrap gap-2 w-max">
                {['All', ...b.groups].map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setGroup(g)}
                    aria-pressed={group === g}
                    className={`shrink-0 whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-colors ${group === g ? 'bg-[#ed1c23] text-white' : 'bg-white ring-1 ring-inset ring-neutral-200 text-neutral-700 hover:ring-[#ed1c23] hover:text-[#ed1c23]'}`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <ul className="mt-8 lg:mt-10 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
            {shown.map((p) => <li key={p.id}><ProductCard brandId={b.id} p={p} red /></li>)}
          </ul>
        </div>
      </section>

      <CtaBannerSection onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
}
