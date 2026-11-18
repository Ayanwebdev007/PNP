import React from 'react';

import { ArrowRight, Check, Download, Phone, ShieldCheck, Wallet, Wind } from 'lucide-react';
import CtaBannerSection from '../components/CtaBannerSection';
import HaoAirflow from '../components/HaoAirflow';
import { brands, findBrand } from '../data/tradingData';
import { Breadcrumb, MoreBrands, ProductCard, img } from '../components/TradingCommon';

const LOGO = '/assets/businesses/logo-hao.webp';

// The nine benefits from the catalogue and pnpind.com, grouped under short headlines.
const benefitGroups = [
  { icon: Wallet, title: 'Saves Money', items: [
    ['Zero running cost', 'No operating & maintenance cost'],
    ['100% power saving', 'Economical, runs on wind energy'],
    ['80% depreciation', 'Under section 32 of the IT Act'],
  ] },
  { icon: Wind, title: 'Fresh Air', items: [
    ['Always fresh', 'Continuously circulates fresh air inside the shed'],
    ['Clears the air', 'Removes trapped hot air, gas fumes, smoke & stale air'],
    ['Cooler sheds', 'Reduces temperature & humidity'],
  ] },
  { icon: ShieldCheck, title: 'Built to Last', items: [
    ['No leakage', 'Guarantee against water leakage'],
    ['Works 24/7', 'Free of cost ventilation, round the clock'],
    ['Sizes & grades', 'Available in different sizes & grades'],
  ] },
];

// Applications per grade, split from the catalogue's application lines.
const gradeApps = [
  { code: 'SS 304', material: 'Stainless Steel, Grade 304', uses: [[null, 'Pickling plants'], [null, 'Chemical plants']] },
  { code: 'SS 430', material: 'Stainless Steel, Grade 430', uses: [[null, 'Factories'], [null, 'Workshops'], [null, 'Warehouses'], [null, 'Automobile industry'], [null, 'Power generation houses'], [null, 'Boiler houses'], [null, 'Pharmaceutical industry']] },
  { code: 'PP', material: 'Polypropylene, 3 colours', uses: [[null, 'Where an aesthetic look is needed']] },
];

const heroStats = [
  ['24/7', 'Free ventilation'],
  ['100%', 'Power saving'],
  ['80%', 'Depreciation, sec. 32 IT Act'],
];

// Steps paraphrase the "How it works" text from pnpind.com.
const steps = [
  ['Wind turns the vanes', 'Wind energy rotates the turbo vanes by centrifugal action.'],
  ['Low pressure forms', 'The spinning vanes create a low pressure zone inside the shed.'],
  ['Hot air out, fresh air in', 'Hot, polluted air is thrown out while fresh air is drawn in, 24/7.'],
];

export default function HaoBrandPage({ onOpenEnquiry }) {
  const b = findBrand('hao');
  const others = brands.filter((x) => x.id !== b.id);

  return (
    <div className="bg-white text-neutral-900">

      {/* Hero: brand panel + roof photo */}
      <section className="relative overflow-hidden bg-neutral-50">
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-[52%]">
          <img src={img(b.hero)} alt={b.heroAlt} className="w-full h-64 sm:h-96 lg:h-full object-cover lg:[clip-path:polygon(12%_0,100%_0,100%_100%,0_100%)]" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-4 md:px-8 py-10 lg:py-0 lg:min-h-[calc(100svh-89px)] flex items-center">
          <div className="lg:w-[48%] lg:pr-10">
            <img src={LOGO} alt="HAO, Hot Air Out" className="h-20 sm:h-24 lg:h-28 max-sm:h-16 w-auto" />
            <h1 className="mt-8 max-sm:mt-6 max-sm:text-[2.1rem] text-4xl sm:text-5xl xl:text-6xl font-medium tracking-tight leading-[1.05]">
              Quality Natural <span className="text-[#ed1c23]">Air Ventilation</span> System
            </h1>

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

      {/* Products */}
      <section id="products" className="scroll-mt-24 pt-6 lg:pt-8 pb-14 lg:pb-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-3xl lg:text-5xl font-medium tracking-tight">HAO <span className="text-[#ed1c23]">Products</span></h2>
            <a href={b.catalogue} download className="w-fit text-sm font-bold text-[#ed1c23] hover:underline flex items-center gap-1.5">
              <Download className="w-4 h-4" /> Catalogue
            </a>
          </div>
          <ul className="mt-8 lg:mt-10 grid max-sm:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-sm:gap-3 lg:gap-5">
            {b.products.map((p) => <li key={p.id} className="h-full"><ProductCard brandId={b.id} p={p} /></li>)}
          </ul>
        </div>
      </section>


      {/* Intro + benefits */}
      <section className="pt-8 lg:pt-12 pb-14 lg:pb-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <h2 className="text-3xl lg:text-5xl font-medium tracking-tight">Ventilation That <span className="text-[#ed1c23]">Costs Nothing</span> to Run</h2>
              <p className="mt-5 text-lg max-sm:text-base text-neutral-600 leading-relaxed">Eco friendly, wind powered air ventilators. An ideal solution<br className="max-sm:hidden" /> for warehouses and factories.</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {b.badges.map((t) => (
                  <li key={t} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#ed1c23]/[0.07] text-[#ed1c23] text-xs font-bold">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} /> {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Photo with stat cards */}
            <div className="lg:col-span-6 relative pb-10 sm:pb-12">
              <img src={img('hao-range')} alt="HAO turbo ventilators in steel, green, blue and black with HAO boxes" loading="lazy" className="w-full aspect-[16/10] rounded-2xl object-cover" />
              <dl className="absolute inset-x-3 sm:inset-x-6 bottom-0 grid grid-cols-3 bg-white rounded-2xl shadow-xl ring-1 ring-neutral-200 divide-x divide-neutral-200">
                {heroStats.map(([v, l]) => (
                  <div key={l} className="px-3 py-3.5 sm:px-5 sm:py-4 max-sm:px-1.5 max-sm:py-3 text-center">
                    <dd className="text-2xl sm:text-3xl lg:text-4xl max-sm:text-xl font-medium tracking-tight text-[#ed1c23]">{v}</dd>
                    <dt className="mt-0.5 text-[11px] sm:text-xs text-neutral-500 leading-snug">{l}</dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Benefits, grouped so they scan fast */}
          <div className="mt-14 lg:mt-20 max-sm:mt-10 grid md:grid-cols-3 gap-4 lg:gap-6">
            {benefitGroups.map(({ icon: Icon, title, items }) => (
              <article key={title} className="rounded-3xl max-sm:rounded-2xl bg-neutral-50 p-6 lg:p-8 max-sm:p-5">
                <div className="flex items-center gap-3">
                  <span className="w-11 h-11 rounded-xl bg-[#ed1c23] text-white flex items-center justify-center"><Icon className="w-5 h-5" strokeWidth={2} /></span>
                  <h3 className="text-xl lg:text-2xl font-medium tracking-tight">{title}</h3>
                </div>
                <ul className="mt-6 max-sm:mt-5 space-y-4">
                  {items.map(([head, detail]) => (
                    <li key={head} className="border-l-2 border-[#ed1c23] pl-4">
                      <p className="font-semibold text-lg leading-tight">{head}</p>
                      <p className="mt-0.5 text-sm text-neutral-500">{detail}</p>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How it works: airflow diagram */}
      <section className="pb-14 lg:pb-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="rounded-3xl bg-neutral-50 ring-1 ring-neutral-200 p-5 sm:p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">
              <h2 className="text-3xl lg:text-5xl font-medium tracking-tight">How It <span className="text-[#ed1c23]">Works</span></h2>
              <div className="flex flex-wrap gap-2 text-sm font-semibold max-sm:text-xs max-sm:gap-1.5">
                <span className="flex items-center gap-2 px-3.5 py-2 max-sm:px-3 max-sm:py-1.5 rounded-full bg-white ring-1 ring-neutral-200"><span className="w-6 max-sm:w-4 h-1 rounded-full bg-neutral-400" /> Wind</span>
                <span className="flex items-center gap-2 px-3.5 py-2 max-sm:px-3 max-sm:py-1.5 rounded-full bg-white ring-1 ring-neutral-200"><span className="w-6 max-sm:w-4 h-1 rounded-full bg-[#ed1c23]" /> Hot air out</span>
                <span className="flex items-center gap-2 px-3.5 py-2 max-sm:px-3 max-sm:py-1.5 rounded-full bg-white ring-1 ring-neutral-200"><span className="w-6 max-sm:w-4 h-1 rounded-full bg-sky-500" /> Fresh air in</span>
              </div>
            </div>

            <HaoAirflow className="mt-8 lg:mt-10 max-sm:mt-6 w-full max-w-4xl mx-auto h-auto" />


            <ol className="mt-8 lg:mt-10 grid md:grid-cols-3 gap-4 lg:gap-6">
              {steps.map(([t, d], i) => (
                <li key={t} className="flex gap-4 max-sm:gap-3 bg-white rounded-2xl p-5 max-sm:p-4 ring-1 ring-neutral-200">
                  <span className="w-10 h-10 shrink-0 rounded-full bg-[#ed1c23] text-white font-bold flex items-center justify-center">{i + 1}</span>
                  <div>
                    <h3 className="font-semibold text-lg leading-snug">{t}</h3>
                    <p className="mt-0.5 text-sm text-neutral-500">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Built with */}
      <section className="py-14 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <h2 className="text-center text-3xl lg:text-5xl font-medium tracking-tight">Engineered for <span className="text-[#ed1c23]">Performance</span></h2>
          <ul className="mt-8 lg:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
            {b.builtWith.map(([src, t]) => (
              <li key={t} className="group bg-white rounded-2xl overflow-hidden ring-1 ring-neutral-200 max-sm:flex max-sm:flex-col">
                <div className="overflow-hidden max-sm:shrink-0">
                  <img src={img(src)} alt={t} loading="lazy" className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <h3 className="px-4 py-3.5 lg:px-5 max-sm:flex-1 max-sm:flex max-sm:items-center max-sm:min-h-[3.25rem] max-sm:px-3 max-sm:py-2.5 max-sm:text-sm font-semibold leading-snug bg-[#ed1c23] text-white">{t}</h3>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Grades & applications: image + aligned table */}
      <section className="py-14 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <h2 className="text-center text-3xl lg:text-5xl font-medium tracking-tight">Grades & <span className="text-[#ed1c23]">Applications</span></h2>

          <div className="mt-8 lg:mt-12 grid lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">
            <img src={img('hao-mat-both')} alt="HAO turbo ventilators in blue polypropylene and stainless steel" loading="lazy" className="lg:col-span-5 w-full h-full min-h-64 max-sm:min-h-0 max-sm:h-auto max-sm:aspect-[4/3] object-cover object-top rounded-2xl" />

            <div className="lg:col-span-7 rounded-2xl ring-1 ring-neutral-200 overflow-hidden">
              <div className="hidden md:grid grid-cols-[110px_200px_1fr] gap-6 px-6 py-3 bg-neutral-50 text-xs font-bold uppercase tracking-widest text-neutral-500">
                <span>Grade</span><span>Material</span><span>Applications</span>
              </div>
              <ul className="divide-y divide-neutral-200">
                {gradeApps.map((g) => (
                  <li key={g.code} className="grid md:grid-cols-[110px_200px_1fr] gap-1 md:gap-6 px-6 py-5 max-sm:px-4 max-sm:py-4 md:items-center">
                    <span className="text-2xl lg:text-3xl font-bold tracking-tight text-[#ed1c23]">{g.code}</span>
                    <span className="font-semibold">{g.material}</span>
                    <span className="text-neutral-600 leading-relaxed">{g.uses.map(([, t]) => t).join(', ')}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Do's & Don'ts */}
      <section className="py-14 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <h2 className="text-center text-3xl lg:text-5xl font-medium tracking-tight">Where to Fit It: <span className="text-[#ed1c23]">Do's & Don'ts</span></h2>
          <ul className="mt-8 lg:mt-12 grid sm:grid-cols-3 gap-6 lg:gap-10 max-sm:gap-8 max-sm:max-w-sm max-w-5xl mx-auto">
            {b.tips.map(([src, t, d]) => (
              <li key={t}>
                <img src={img(src)} alt={`${t}: ${d}`} loading="lazy" className="w-full rounded-2xl" />
                <h3 className="mt-3 text-center text-lg lg:text-xl font-medium tracking-tight">{t}</h3>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Buy across India */}
      <section className="pb-14 lg:pb-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="rounded-2xl bg-[#ed1c23] text-white p-6 sm:p-8 lg:p-12 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <img src={LOGO} alt="" className="h-14 w-auto" />
              <h2 className="mt-5 text-2xl lg:text-4xl font-medium tracking-tight">Buy HAO Across India</h2>
              <button type="button" onClick={() => onOpenEnquiry('HAO Air Ventilators')} className="mt-6 max-sm:w-full max-sm:justify-center px-7 py-3.5 bg-white text-[#ed1c23] hover:bg-neutral-100 text-sm font-bold rounded-full flex items-center gap-2 transition-colors">
                Request a Quote <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <ul className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 max-sm:gap-2">
              {b.contacts.map(([city, num]) => (
                <li key={city}>
                  <a href={`tel:+91${num.replace(/\s/g, '')}`} className="block rounded-xl bg-white/10 hover:bg-white/20 px-3 py-2.5 max-sm:px-2.5 transition-colors">
                    <span className="block text-[11px] font-bold uppercase tracking-widest text-white/75">{city}</span>
                    <span className="mt-0.5 flex items-center gap-1.5 max-sm:gap-1 font-medium whitespace-nowrap max-sm:text-sm"><Phone className="w-3.5 h-3.5 shrink-0" />{num}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <MoreBrands brands={others} />

      <CtaBannerSection onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
}
