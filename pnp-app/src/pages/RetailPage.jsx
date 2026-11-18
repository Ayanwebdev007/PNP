import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, AtSign, Download, ExternalLink, Mail, MapPin, Phone } from 'lucide-react';
import { Eyebrow } from '../components/NytexCommon';
import CtaBannerSection from '../components/CtaBannerSection';
import { RETAIL_BRANDS } from '../data/retailData';

// Source: client's BAGINNOV 2026 catalogue + client email (Retail Division).
const IMG = '/assets/retail';
const CATALOGUE = '/BAGINNOV 2026 .pdf';
const SITE = 'https://www.baginnov.in';

// Store facts from the BAGINNOV 2026 catalogue.
const facts = [
  { value: '25,000', unit: 'Sq. Ft.', label: 'Bags & luggage mall' },
  { value: '3', unit: 'Floors', label: 'Ground, First & B1' },
  { value: '70+', unit: 'Brands', label: 'Top brands, one roof' },
];

// Floor names, photos and brands from the BAGINNOV 2026 catalogue.
const floors = [
  {
    code: 'G', name: 'Ground Floor', tag: 'Hand Bags Floor', title: 'Handbags & Accessories',
    image: 'pano-ground', alt: 'Hand bags floor with Lavie, Baggit and Caprese displays around the BAGINNOV front desk',
    image2: 'floor-ground', alt2: 'Handbag displays from Nautica, Giordano and Kenneth Cole',
    image3: 'handbags', alt3: 'Belle Sac handbag wall and leather bag displays',
    brands: RETAIL_BRANDS.handbags, logos: 'brands-handbags', short: 'Handbags', anchor: 'handbags',
  },
  {
    code: '1', name: 'First Floor', tag: 'Backpack, Belts, Wallets Floor', title: 'Backpacks & Men\u2019s Accessories',
    image: 'pano-first', alt: 'Backpack floor with Wildcraft, VIP and Skybags sections',
    image2: 'floor-first', alt2: 'Backpack walls from VIP, Skybags and Wildcraft',
    image3: 'backpack-wall', alt3: 'Wall of colourful backpacks',
    brands: RETAIL_BRANDS.backpacks, logos: 'brands-backpacks', short: 'Backpacks', anchor: 'backpacks',
  },
  {
    code: 'B1', name: 'B1 Floor', tag: 'Luggage Floor', title: 'Luggage & Trolley Bags',
    image: 'pano-b1', alt: 'Luggage floor with Victorinox, Samsonite and Carlton trolley walls',
    image2: 'floor-b1', alt2: 'Rows of Samsonite and Carlton trolley bags',
    image3: 'luggage-aisle', alt3: 'Long aisle of trolley bags under a Tommy Hilfiger sign',
    brands: RETAIL_BRANDS.luggage, logos: 'brands-luggage', short: 'Luggage', anchor: 'luggage',
    // Catalogue page 8: entrance sign and list for the luggage lounge.
    lounge: ['Business Trolley', 'Duffle Bag / Trolley', 'Utility Product', 'Briefcases', 'Luggage Trolley', 'Travel Accessories'],
  },
];

// Category names and photos from pnpind.com/bagginov-pnp (client's live site).
const categories = [
  { name: 'Sling Bags', image: 'sling-bags', alt: 'Wall of sling bags in leather and fabric' },
  { name: 'Office Bags', image: 'office-bags', alt: 'Black office bags and backpacks on a display wall' },
  { name: 'Briefcases', image: 'briefcases', alt: 'Shelves of hard shell briefcases' },
  { name: 'Leather Bags', image: 'leather-bags', alt: 'Carlton leather bags on a display wall' },
  { name: 'Executive Bags', image: 'executive-bags', alt: 'Rows of executive bags on wooden walls' },
  { name: 'School Bags', image: 'school-bags', alt: 'Colourful school backpacks on a wall' },
  { name: 'Trekking Bags', image: 'trekking-bags', alt: 'Trekking rucksacks and duffles on display' },
  { name: 'Gym Bags', image: 'gym-bags', alt: 'Gym bags hanging on a wall' },
  { name: 'Duffle Bags', image: 'duffle-bags', alt: 'Aisle of duffle bags on shelves' },
  { name: 'Utility Bags', image: 'utility-bags', alt: 'Shelves of utility pouches and kits' },
  { name: 'Travel Accessories', image: 'travel-accessories', alt: 'Neck pillows, eye masks and travel accessories' },
  { name: 'Umbrellas & Raincoats', image: 'umbrellas-raincoats', alt: 'Umbrellas and raincoats on display' },
  { name: 'Belts', image: 'belts', alt: 'Rack of leather belts from several brands' },
  { name: 'Wallets', image: 'wallets', alt: 'Brown leather wallets' },
];

// Bento tile sizes (4 col grid, 24 cells).
const bento = {
  'sling-bags': 'col-span-2 row-span-2',
  briefcases: 'row-span-2',
  'executive-bags': 'col-span-2',
  'school-bags': 'row-span-2',
  'duffle-bags': 'col-span-2',
  'travel-accessories': 'col-span-2',
  'umbrellas-raincoats': 'lg:col-span-2',
  wallets: 'lg:col-span-2',
};

// Further items from the BAGINNOV 2026 catalogue list.
const moreItems = ['Handbags', 'Backpacks', 'Luggage & Trolley Bags', 'Business Trolley', 'Laptop Bags', 'Neck Pillow', 'Makeup Kit', 'Tiffin Bags', 'Coin Bags', 'Shoe Pouch', 'Saree Cover', 'Winter Jacket', 'Kids Trolleys'];

const gallery = [
  { image: 'entrance', title: 'Luggage Lounge', alt: 'Luggage lounge entrance with brand boards for Carlton, Skybags, VIP and Safari' },
  { image: 'handbags', title: 'Handbags', alt: 'Belle Sac handbag wall and leather bag displays' },
  { image: 'leather-shelf', title: 'Leather Bags', alt: 'Shelves of leather office bags' },
  { image: 'backpack-zone', title: 'Backpacks & Samsonite', alt: 'Backpack floor and the Samsonite section' },
  { image: 'executive-bags', title: 'Executive Bags', alt: 'Executive bags hanging on a wooden wall' },
  { image: 'backpack-wall', title: 'School Bags', alt: 'Wall of colourful school backpacks' },
  { image: 'kids-zone', title: 'Kids Trolleys', alt: 'Kids trolley section with cartoon print trolley bags' },
  { image: 'luggage-aisle', title: 'Trolley Aisle', alt: 'Long aisle of trolley bags under a Tommy Hilfiger sign' },
];

function FloorRow({ f }) {
  return (
    <article className="relative grid grid-cols-[56px_1fr] lg:grid-cols-[80px_1fr] gap-x-4 max-sm:grid-cols-[44px_1fr] max-sm:gap-x-3 lg:gap-x-10">
      {/* Lift stop */}
      <div className="relative flex flex-col items-center lg:items-start">
        <span className="relative z-10 w-14 h-14 lg:w-20 lg:h-20 max-sm:w-11 max-sm:h-11 max-sm:ring-[3px] max-sm:text-base rounded-full bg-white ring-4 ring-[#ed1c23] flex items-center justify-center text-xl lg:text-3xl font-bold text-[#ed1c23] lg:ml-0">
          {f.code}
        </span>
      </div>

      <div className="min-w-0">
        <span className="block text-xs max-sm:text-[11px] font-bold uppercase tracking-widest max-sm:tracking-wider text-neutral-500">{f.name} · <span className="text-[#ed1c23]">{f.tag}</span></span>
        <h3 className="mt-1.5 text-2xl lg:text-4xl max-sm:text-xl font-medium tracking-tight">{f.title}</h3>

        <figure className="mt-5 lg:mt-6 max-sm:mt-4 relative rounded-2xl max-sm:rounded-xl overflow-hidden">
          <img src={`${IMG}/${f.image}.webp`} alt={f.alt} loading="lazy" className="w-full aspect-[16/7] max-sm:aspect-[16/9] lg:aspect-[21/8] object-cover" />
        </figure>

        <div className="mt-4 flex items-center gap-4">
          <img src={`${IMG}/${f.logos}.webp?v=2`} alt={`Brands on the ${f.name}: ${f.brands.join(', ')}`} loading="lazy" className="w-full h-auto min-w-0" />
        </div>

        {f.lounge && (
          <p className="mt-5 max-sm:mt-4 text-[15px] max-sm:text-sm text-neutral-600 leading-relaxed">
            <span className="font-semibold text-neutral-900">Luggage Lounge: </span>
            {f.lounge.join(' · ')}
          </p>
        )}
      </div>
    </article>
  );
}

function FloorGuide() {
  return (
    <section id="floors" className="scroll-mt-24 pt-10 lg:pt-14 pb-8 lg:pb-10">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="text-center">
          <Eyebrow>Floor Guide</Eyebrow>
          <h2 className="mt-3 text-3xl lg:text-5xl font-medium tracking-tight">Three Floors, <span className="text-[#ed1c23]">Every Kind of Bag</span></h2>
        </div>

        <div className="relative mt-8 lg:mt-10">
          {/* Lift shaft */}
          <span aria-hidden="true" className="absolute top-7 lg:top-10 bottom-10 left-[27px] lg:left-[38px] max-sm:top-6 max-sm:left-[21px] w-0.5 bg-[#ed1c23]/30" />

          <div className="space-y-14 lg:space-y-20 max-sm:space-y-10">
            {floors.map((f) => <FloorRow key={f.code} f={f} />)}
          </div>
        </div>

        <div className="mt-8 lg:mt-10 flex justify-center">
          <Link to="/retail/brands" className="px-7 py-3.5 bg-[#ed1c23] hover:bg-[#c9141a] text-white text-sm font-bold rounded-full flex items-center gap-2 transition-colors">
            See All Brands <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function StoreCoverflow() {
  const [active, setActive] = useState(0);
  const touchX = useRef(null);
  const dragged = useRef(false);
  const n = gallery.length;
  const go = (d) => setActive((a) => (a + d + n) % n);

  // Auto slide in a loop; the timer restarts after every change, so a manual move never stops it.
  useEffect(() => {
    const t = setTimeout(() => setActive((a) => (a + 1) % n), 3500);
    return () => clearTimeout(t);
  }, [active, n]);

  return (
    <section id="gallery" className="scroll-mt-24 pb-16 lg:pb-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="text-center">
          <Eyebrow>Inside the Store</Eyebrow>
          <h2 className="mt-3 text-3xl lg:text-5xl font-medium tracking-tight">Take a Look <span className="text-[#ed1c23]">Around</span></h2>
        </div>

        <div
          className="relative mt-10 lg:mt-14 max-sm:mt-8 h-[260px] max-sm:h-[230px] sm:h-[380px] lg:h-[520px] [perspective:1600px] select-none touch-pan-y cursor-grab active:cursor-grabbing"
          onPointerDown={(e) => { touchX.current = e.clientX; dragged.current = false; }}
          onPointerMove={(e) => { if (touchX.current !== null && Math.abs(e.clientX - touchX.current) > 8) dragged.current = true; }}
          onPointerUp={(e) => {
            if (touchX.current === null) return;
            const dx = e.clientX - touchX.current;
            if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
            touchX.current = null;
          }}
          onPointerLeave={() => { touchX.current = null; }}
        >
          {gallery.map((g, i) => {
            let o = i - active;
            if (o > n / 2) o -= n;
            if (o < -n / 2) o += n;
            const abs = Math.abs(o);
            const hidden = abs > 2;
            return (
              <figure
                key={g.image}
                aria-hidden={o !== 0}
                onClick={() => { if (!dragged.current && o !== 0) setActive(i); }}
                className={`absolute top-0 left-1/2 h-full w-[78%] sm:w-[62%] lg:w-[54%] rounded-2xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(.22,.8,.3,1)] ${o !== 0 ? 'cursor-pointer' : ''}`}
                style={{
                  transform: `translateX(calc(-50% + ${o * 58}%)) rotateY(${o * -28}deg) scale(${1 - abs * 0.14})`,
                  zIndex: 10 - abs,
                  opacity: hidden ? 0 : 1 - abs * 0.25,
                  pointerEvents: hidden ? 'none' : 'auto',
                }}
              >
                <img src={`${IMG}/${g.image}.webp`} alt={g.alt} loading="lazy" draggable={false} className="w-full h-full object-cover pointer-events-none" />
                <div className={`absolute inset-0 transition-colors duration-700 ${o === 0 ? 'bg-transparent' : 'bg-white/30'}`} />
                <figcaption className={`absolute inset-x-0 bottom-0 bg-[#ed1c23] text-white text-center px-4 py-[9px] sm:py-2.5 lg:py-3 text-lg sm:text-xl lg:text-2xl leading-none font-medium transition-opacity duration-500 ${o === 0 ? 'opacity-100' : 'opacity-0'}`}>
                  {g.title}
                </figcaption>
              </figure>
            );
          })}
        </div>

        <div className="mt-8 max-sm:mt-6 flex items-center justify-center gap-5 max-sm:gap-3">
          <button type="button" onClick={() => go(-1)} aria-label="Previous photo" className="w-11 h-11 rounded-full ring-1 ring-neutral-300 hover:bg-[#ed1c23] hover:text-white hover:ring-[#ed1c23] flex items-center justify-center transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            {gallery.map((g, i) => (
              <button key={g.image} type="button" onClick={() => setActive(i)} aria-label={`Show ${g.title}`} className={`h-2 rounded-full transition-all duration-500 ${i === active ? 'w-8 bg-[#ed1c23]' : 'w-2 bg-neutral-300 hover:bg-neutral-400'}`} />
            ))}
          </div>
          <button type="button" onClick={() => go(1)} aria-label="Next photo" className="w-11 h-11 rounded-full ring-1 ring-neutral-300 hover:bg-[#ed1c23] hover:text-white hover:ring-[#ed1c23] flex items-center justify-center transition-colors">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

function ProductRange() {
  return (
    <section id="range" className="scroll-mt-24 pt-8 lg:pt-10 pb-16 lg:pb-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-12 gap-5 lg:gap-16 items-end">
          <div className="lg:col-span-6">
            <Eyebrow>Product Range</Eyebrow>
            <h2 className="mt-3 text-3xl lg:text-5xl font-medium tracking-tight">One Stop Shop For <span className="text-[#ed1c23]">All Kinds</span></h2>
          </div>
          <p className="lg:col-span-6 text-lg max-sm:text-base text-neutral-600 leading-relaxed">From everyday sling bags to business briefcases, every category has its own space across the three floors.</p>
        </div>

        <ul className="mt-10 lg:mt-14 grid grid-cols-2 lg:grid-cols-4 grid-flow-dense auto-rows-[170px] max-sm:auto-rows-[140px] max-sm:gap-2.5 sm:auto-rows-[220px] lg:auto-rows-[240px] gap-3 lg:gap-4">
          {categories.map((c) => (
            <li key={c.name} className={`group relative overflow-hidden rounded-2xl bg-neutral-200 ${bento[c.image] || ''}`}>
              <img src={`${IMG}/categories/${c.image}.webp`} alt={c.alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <h3 className="absolute left-4 right-4 bottom-4 max-sm:left-3 max-sm:right-3 max-sm:bottom-3 max-sm:text-base lg:left-6 lg:right-6 lg:bottom-6 text-white text-lg sm:text-xl lg:text-2xl font-medium tracking-tight leading-tight">
                {c.name}
              </h3>
            </li>
          ))}
        </ul>

        <div className="mt-8 lg:mt-10 rounded-2xl bg-[#ed1c23]/[0.06] py-4 sm:py-5 pl-4 sm:pl-6 flex items-center gap-4 sm:gap-6 max-sm:gap-3 overflow-hidden">
          <span className="text-xs max-sm:text-[11px] max-sm:tracking-wider max-sm:w-14 max-sm:leading-tight font-bold uppercase tracking-widest text-[#ed1c23] shrink-0">Also in store</span>
          <div className="group relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
            <ul className="flex w-max animate-[nytex-loop_35s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
              {[...moreItems, ...moreItems].map((m, i) => (
                <li key={i} aria-hidden={i >= moreItems.length} className="mr-2 px-3 py-1.5 bg-white rounded-full text-[13px] font-medium text-neutral-800 shadow-sm whitespace-nowrap">{m}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function RetailPage({ onOpenEnquiry }) {
  return (
    <div className="bg-white text-neutral-900">

      {/* Hero: storefront full bleed, same pattern as the other division pages */}
      <section className="relative flex flex-col justify-end min-h-[calc(100svh-89px)] overflow-hidden text-white">
        <img src={`${IMG}/storefront.webp`} alt="BAGINNOV storefront with brand displays for American Tourister, Samsonite and Carlton" className="absolute inset-0 w-full h-full object-cover object-top" />
        <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black via-black/65 to-transparent" />
        <div className="relative w-full flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-8 text-center px-4 md:px-8 pb-10 lg:pb-12">
          <h1 className="text-3xl xl:text-4xl font-medium tracking-tight max-lg:text-balance lg:whitespace-nowrap">India’s Largest Multi Brands Bags &amp; Luggage Mall</h1>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0 max-sm:w-full max-sm:max-w-xs">
            <a href={SITE} target="_blank" rel="noopener noreferrer" className="px-7 py-3.5 bg-[#ed1c23] hover:bg-[#c9141a] text-white text-sm font-bold rounded-full flex items-center justify-center gap-2 whitespace-nowrap transition-colors">
              Visit baginnov.in <ExternalLink className="w-4 h-4" />
            </a>
            <a href={CATALOGUE} download className="px-7 py-3.5 ring-1 ring-white/50 bg-white/10 hover:bg-white/20 text-white text-sm font-bold rounded-full flex items-center justify-center gap-2 whitespace-nowrap transition-colors">
              <Download className="w-4 h-4" /> Download Catalogue
            </a>
          </div>
        </div>
      </section>

      {/* Store facts */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 pt-6 lg:pt-8">
        <dl className="grid grid-cols-3 border-y border-neutral-200 divide-x divide-neutral-200">
          {facts.map((f) => (
            <div key={f.unit} className="py-3 lg:py-4 px-2 sm:px-6 text-center">
              <dd className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#ed1c23]">
                {f.value}<span className="block sm:inline sm:ml-2 text-sm sm:text-lg lg:text-xl max-sm:text-xs max-sm:mt-0.5 text-neutral-900">{f.unit}</span>
              </dd>
              <dt className="mt-0.5 text-xs sm:text-sm max-sm:text-[11px] max-sm:leading-snug text-neutral-500">{f.label}</dt>
            </div>
          ))}
        </dl>
      </section>

      {/* Shop online: snapshot of baginnov.in */}
      <section id="online" className="scroll-mt-24 pt-10 lg:pt-14">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <h2 className="text-center text-3xl lg:text-5xl font-medium tracking-tight">Visit <span className="text-[#ed1c23]">BAGINNOV</span> Website</h2>

          <div className="relative mt-6 lg:mt-8 rounded-2xl ring-1 ring-neutral-200 bg-white overflow-hidden">
            <div className="flex items-center gap-3 px-4 py-2 max-sm:px-3 max-sm:py-1.5 bg-neutral-100 border-b border-neutral-200">
              <span className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ed1c23]" />
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
              </span>
              <span className="flex-1 max-w-sm mx-auto px-4 py-0.5 rounded-full bg-white text-xs text-neutral-500 text-center truncate">www.baginnov.in</span>
            </div>
            <img src={`${IMG}/baginnov-site.webp?v=2`} alt="BAGINNOV website home page banner: Travel Smart, Travel in Style" loading="lazy" className="w-full h-auto" />
            <a href={SITE} target="_blank" rel="noopener noreferrer" className="absolute left-1/2 -translate-x-1/2 bottom-4 max-sm:bottom-2.5 max-sm:px-4 max-sm:py-2 max-sm:text-xs max-sm:gap-1.5 sm:bottom-6 lg:bottom-8 px-7 py-3.5 shadow-xl whitespace-nowrap bg-white hover:bg-neutral-100 text-[#ed1c23] text-sm font-bold rounded-full flex items-center gap-2 transition-colors">
              Visit Website <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>

      {/* Floor guide: lift style tabs */}
      <FloorGuide />

      {/* Product range: name list + live photo preview */}
      <ProductRange />

      {/* Gallery: coverflow slider */}
      <StoreCoverflow />

      {/* Visit: map with a luggage tag style store card */}
      <section id="visit" className="scroll-mt-24 pb-16 lg:pb-24">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="relative rounded-2xl overflow-hidden ring-1 ring-neutral-200">
            <iframe
              title="BAGINNOV location on Google Maps"
              src="https://maps.google.com/maps?q=BAGINNOV%2C%20R.%20M.%20Bhattad%20Road%2C%20Borivali%20West%2C%20Mumbai%20400092&z=16&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full h-64 sm:h-80 lg:h-[440px] border-0 bg-neutral-100 grayscale-[35%]"
            />

            {/* Luggage tag */}
            <div className="relative lg:absolute lg:top-3 lg:left-3 lg:w-[360px] bg-white lg:rounded-2xl lg:shadow-2xl flex">
              <div className="w-12 lg:w-14 max-sm:w-10 shrink-0 bg-[#ed1c23] lg:rounded-l-2xl flex flex-col items-center justify-between py-5">
                <span aria-hidden="true" className="w-4 h-4 rounded-full bg-white ring-4 ring-[#ed1c23]/40" />
                <span className="text-white text-[11px] font-bold uppercase tracking-[0.3em] [writing-mode:vertical-rl] rotate-180">Visit Us</span>
              </div>
              <div className="flex-1 min-w-0 p-5 lg:p-6 max-sm:p-4">
                <img src="/assets/businesses/logo-baginnov.webp" alt="BAGINNOV, An Iconic Bags and Luggage Mall" className="h-9 w-auto" />
                <p className="mt-4 text-sm text-neutral-600 leading-relaxed">R. M. Bhattad Road, Next to Kora Kendra Ground, Borivali West, Mumbai 400092</p>
                <ul className="mt-4 space-y-2.5 text-sm font-medium">
                  <li className="flex items-center gap-3"><Phone className="w-4 h-4 shrink-0 text-[#ed1c23]" /> <span><a href="tel:+919223391082" className="hover:text-[#ed1c23]">92233 91082</a> / 83 / 84</span></li>
                  <li className="flex items-center gap-3 min-w-0"><Mail className="w-4 h-4 shrink-0 text-[#ed1c23]" /> <a href="mailto:customercare@baginnov.in" className="hover:text-[#ed1c23] truncate min-w-0">customercare@baginnov.in</a></li>
                  <li className="flex items-center gap-3"><AtSign className="w-4 h-4 shrink-0 text-[#ed1c23]" /> <a href="https://www.instagram.com/baginnov" target="_blank" rel="noopener noreferrer" className="hover:text-[#ed1c23]">@baginnov</a></li>
                </ul>
                <a href="https://www.google.com/maps/dir/?api=1&destination=BAGINNOV%2C%20R.%20M.%20Bhattad%20Road%2C%20Borivali%20West%2C%20Mumbai%20400092" target="_blank" rel="noopener noreferrer" className="mt-5 w-full px-5 py-3 bg-[#ed1c23] hover:bg-[#c9141a] text-white text-sm font-bold rounded-full flex items-center justify-center gap-2 transition-colors">
                  <MapPin className="w-4 h-4" /> Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBannerSection onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
}
