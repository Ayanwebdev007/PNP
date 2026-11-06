import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cog, Download, FlaskConical, Palette, Spool, Sun, Wind, Zap } from 'lucide-react';
import { NYTEX_IMG as IMG, NYTEX_CATALOGUE, NYTEX_PRODUCTS_PATH, yarns, machinery } from '../data/nytexData';
import { Eyebrow } from '../components/NytexCommon';
import CtaBannerSection from '../components/CtaBannerSection';
import PresenceSection from '../components/PresenceSection';

const storyPoints = [
  { title: 'The Founder', text: 'Mr. Pawan Kumar Kaushik, a first generation entrepreneur, started his business in Taiwan in 1986 and built close ties with Nan Ya Plastics and the Formosa Group.' },
  { title: 'PNP in India', text: 'PNP started its operations in India in 2001 with filament yarn, and has since grown a diversified portfolio.' },
  { title: 'NYTEX', text: 'Established in 2018 as a greenfield project to manufacture world class nylon filament yarn, on Oerlikon Barmag spinning systems.' },
  { title: 'Today', text: 'NYTEX makes POY, FDY, HOY, DTY and ACY for ready made garments, lingerie, sportswear and swimwear.' },
];

const plantFacts = [
  { icon: Spool, label: 'We Make', value: '5 Types of Nylon Yarn', detail: 'POY, FDY, HOY, DTY, ACY' },
  { icon: Cog, label: 'Spinning System', value: 'Oerlikon Barmag', detail: 'From extruders to winders' },
  { icon: Wind, label: 'Powered By', value: 'Wind & Solar', detail: 'Renewable energy' },
  { icon: Palette, label: 'Available In', value: 'Raw White & Colours', detail: '3 lusters, 8 filament shapes' },
];

const machineryIcons = {
  'Spinning System': Cog,
  Utilities: Zap,
  'Testing Lab': FlaskConical,
};

const yarnImageAlt = {
  POY: 'Large package of yarn wound on a core',
  FDY: 'Three cones of filament yarn in black, white and green',
  HOY: 'Rows of bobbins on a thread winding machine',
  DTY: 'Close-up of textured yarn filaments',
  ACY: 'Close-up of a white spandex yarn package',
};

const greenSources = [
  { title: 'Windmill', icon: Wind, image: 'green-wind', alt: 'Wind turbines above green fields' },
  { title: 'Solar', icon: Sun, image: 'green-solar', alt: 'Rows of solar panels in a green field' },
];

export default function NytexDivisionPage({ onOpenEnquiry }) {

  return (
    <div className="bg-white text-neutral-900">

      {/* Hero: who NYTEX is */}
      <section className="relative flex flex-col justify-end min-h-[calc(100svh-89px)] overflow-hidden text-white">
        <img src="/assets/businesses/nytex-hq-new.webp" alt="NYTEX team member in a branded jacket beside a yarn spool on the factory floor" className="absolute inset-0 w-full h-full object-cover object-[45%_top]" />
        <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black via-black/65 to-transparent" />
        <div className="relative w-full flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-8 text-center px-4 md:px-8 pb-10 lg:pb-12">
          <h1 className="text-3xl xl:text-5xl font-medium tracking-tight max-lg:text-balance lg:whitespace-nowrap">World Class Nylon Filament Yarn</h1>
          <a href={NYTEX_CATALOGUE} download className="px-7 py-3.5 bg-[#ed1c23] hover:bg-[#c9141a] text-white text-sm font-bold rounded-full flex items-center justify-center gap-2 whitespace-nowrap transition-colors">
            <Download className="w-4 h-4" /> Download Catalogue
          </a>
        </div>
      </section>

      {/* Story: why NYTEX exists */}
      <section id="story" className="scroll-mt-24 py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <figure className="rounded-2xl overflow-hidden">
            <img src={`${IMG}/story-yarn-floor.webp`} alt="Worker checking rows of yarn spools on a factory floor" loading="lazy" className="w-full aspect-[16/10] object-cover" />
            <div className="bg-[#ed1c23] text-white px-6 py-5 lg:px-8 lg:py-6">
              <blockquote className="text-lg lg:text-xl font-medium tracking-tight leading-snug">
                "I decided to do something in India for my Indian brothers. So I established a world-class nylon production plant in India."
              </blockquote>
              <figcaption className="mt-2 text-sm">Mr. Pawan Kumar Kaushik, Founder</figcaption>
            </div>
          </figure>
          <div>
            <img src={`${IMG}/nytex-logo.webp`} alt="NYTEX, Made for Fine Fabric" className="h-20 lg:h-28 w-auto mb-6 lg:mb-8" />
            <Eyebrow>Our Story</Eyebrow>
            <h2 className="mt-3 text-3xl lg:text-5xl font-medium tracking-tight">Spun From <span className="text-[#ed1c23]">Filament Yarn</span></h2>
            <svg aria-hidden="true" viewBox="0 0 200 16" className="mt-4 w-40 h-4">
              <path d="M2 8 C18 0 34 16 50 8 C66 0 82 16 98 8 C114 0 130 16 146 8 C162 0 178 16 198 8" fill="none" stroke="#ed1c23" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            <dl className="mt-8 grid sm:grid-cols-2 gap-x-10 gap-y-7">
              {storyPoints.map((p) => (
                <div key={p.title}>
                  <dt className="font-bold">{p.title}</dt>
                  <dd className="mt-1.5 text-[15px] text-neutral-600 leading-relaxed">{p.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Plant: where it is made */}
      <section id="plant" className="scroll-mt-24 pb-16 lg:pb-24">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-12 gap-5 lg:gap-16 items-end">
            <div className="lg:col-span-5">
              <Eyebrow>Our Plant</Eyebrow>
              <h2 className="mt-3 text-4xl lg:text-6xl font-medium tracking-tight">Bhilad, <span className="text-[#ed1c23]">Gujarat</span></h2>
            </div>
            <p className="lg:col-span-7 text-lg text-neutral-600 leading-relaxed">
              <strong className="font-semibold text-neutral-900">One of India's biggest nylon filament yarn producers.</strong> Established in 2018 as a greenfield project by PNP Group, with everything in nylon multifilament under one roof.
            </p>
          </div>

          <div className="relative mt-8 lg:mt-12 rounded-2xl overflow-hidden">
            <img src={`${IMG}/plant-panorama.webp`} alt="Aerial view of the NYTEX plant with the NYTEX logo on its roofs" loading="lazy" className="w-full h-56 sm:h-80 lg:h-auto lg:aspect-[21/9] object-cover" />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          <dl className="relative -mt-8 lg:-mt-16 mx-3 lg:mx-10 bg-[#ed1c23] text-white rounded-2xl grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-white/30">
            {plantFacts.map((f) => (
              <div key={f.label} className="flex items-center gap-4 p-5 lg:p-7">
                <f.icon aria-hidden="true" className="w-12 h-12 lg:w-14 lg:h-14 shrink-0 text-white" strokeWidth={1.5} />
                <div>
                  <dt className="font-bold leading-snug">{f.value}</dt>
                  <dd className="mt-1 text-sm text-white">{f.detail}</dd>
                </div>
              </div>
            ))}
          </dl>

          <div className="mt-6 lg:mt-8 lg:px-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <p className="text-sm text-neutral-600">Survey No. 237/3, Paiki (2), Sarigam, Near Bhilad Railway Station, Tal. Umargam, Gujarat - 396 105</p>
            <a href="https://www.google.com/maps/search/?api=1&query=Survey%20No.%20237%2F3%2C%20Sarigam%2C%20Bhilad%2C%20Gujarat%20396105" target="_blank" rel="noopener noreferrer" className="shrink-0 self-start sm:self-auto min-h-11 lg:min-h-0 text-sm font-bold text-[#ed1c23] hover:text-[#c9141a] flex items-center gap-1.5">
              Get Directions <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Machinery: what it is made on */}
      <section id="machinery" className="scroll-mt-24 grid lg:grid-cols-2 bg-[#ed1c23] text-white">
        <div className="px-4 md:px-8 lg:pl-[max(2rem,calc((100vw-1400px)/2+2rem))] lg:pr-16 py-14 lg:py-10 lg:flex lg:flex-col lg:justify-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-white">Machinery</span>
          <h2 className="mt-3 text-3xl lg:text-5xl font-medium tracking-tight leading-tight">
            India's Only Nylon POY on <span className="text-[#fff100]">Barmag Wings</span>
          </h2>
          <p className="mt-4 text-lg text-white">All our machines are sourced from world technology leaders.</p>

          <ul className="mt-8 lg:mt-10 space-y-6 lg:space-y-7">
            {machinery.map((m) => {
              const Icon = machineryIcons[m.area];
              return (
                <li key={m.area} className="flex items-center gap-5">
                  <Icon aria-hidden="true" className="w-11 h-11 lg:w-12 lg:h-12 shrink-0 text-white" strokeWidth={1.5} />
                  <div>
                    <p className="text-xl lg:text-2xl font-medium tracking-tight text-[#fff100]">{m.brands.join(', ')}</p>
                    <h3 className="mt-0.5 text-sm">{m.area} · {m.detail}</h3>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <img src={`${IMG}/machinery-spinning.webp`} alt="Rows of filament yarn spinning machines in a factory" loading="lazy" className="w-full h-64 sm:h-80 lg:h-full lg:min-h-[560px] object-cover" />
      </section>

      {/* Green energy: how it is powered */}
      <section id="green-energy" className="scroll-mt-24 py-12 lg:py-16">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 grid lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          <div className="lg:col-span-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-700">Green Energy</span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-medium tracking-tight">Powered by <span className="text-green-700">Wind &amp; Solar</span></h2>
            <p className="mt-3 text-neutral-600 leading-relaxed">We use renewable energy from windmill <br className="hidden lg:inline" />and solar for our factory.</p>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 gap-3 lg:gap-4">
            {greenSources.map((g) => (
              <figure key={g.title} className="relative rounded-2xl overflow-hidden">
                <img src={`${IMG}/${g.image}.webp`} alt={g.alt} loading="lazy" className="w-full h-40 sm:h-52 lg:h-60 object-cover" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
                <figcaption className="absolute left-3 bottom-3 lg:left-5 lg:bottom-4 flex items-center gap-2 text-white">
                  <g.icon aria-hidden="true" className="w-6 h-6 lg:w-7 lg:h-7" strokeWidth={1.5} />
                  <span className="text-lg lg:text-xl font-medium tracking-tight">{g.title}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Products: what we make, in brief */}
      <section id="products" className="scroll-mt-24 pt-16 lg:pt-24 pb-8 lg:pb-10 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-[1fr_auto_1fr] items-center justify-items-center gap-4 lg:gap-8 text-center">
            <span className="lg:justify-self-start"><Eyebrow>What We Make</Eyebrow></span>
            <h2 className="text-3xl lg:text-5xl font-medium tracking-tight max-lg:text-balance lg:whitespace-nowrap">Five Types of <span className="text-[#ed1c23]">Nylon Yarn</span></h2>
            <Link to={NYTEX_PRODUCTS_PATH} className="lg:justify-self-end min-h-11 lg:min-h-0 text-sm font-bold text-[#ed1c23] hover:text-[#c9141a] flex items-center gap-2 whitespace-nowrap">
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-5 gap-4">
            {yarns.map((y) => (
              <Link key={y.code} to={`${NYTEX_PRODUCTS_PATH}#${y.code.toLowerCase()}`} className="group/yarn bg-[#ed1c23] text-white rounded-2xl overflow-hidden last:col-span-2 lg:last:col-span-1">
                <div className="overflow-hidden">
                  <img src={`${IMG}/yarn-${y.code.toLowerCase()}.webp`} alt={yarnImageAlt[y.code]} loading="lazy" className="w-full h-44 sm:h-56 lg:h-64 object-cover group-hover/yarn:scale-105 transition-transform duration-500" />
                </div>
                <div className="px-4 pt-3 pb-3">
                  <span className="flex flex-wrap xl:flex-nowrap items-baseline gap-x-2">
                    <span className="text-2xl font-bold tracking-tight">{y.code}</span>
                    <span className="text-sm xl:whitespace-nowrap">{y.name}</span>
                  </span>
                  <span className="mt-2 pt-2 border-t border-white/40 grid grid-cols-1 group-last/yarn:grid-cols-2 sm:grid-cols-2 gap-x-3 gap-y-1 text-sm">
                    <span>
                      <span className="block text-xs">Denier</span>
                      <span className="block font-semibold whitespace-nowrap">{y.min}D to {y.max}D</span>
                    </span>
                    <span>
                      <span className="block text-xs">Filaments</span>
                      <span className="block font-semibold whitespace-nowrap">{y.filaments}</span>
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Network: where to find us */}
      <PresenceSection />

      <CtaBannerSection onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
}
