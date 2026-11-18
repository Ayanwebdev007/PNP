import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, ChevronLeft, ChevronRight, Download, Mail, Phone } from 'lucide-react';
import CtaBannerSection from '../components/CtaBannerSection';
import { brands, findBrand } from '../data/tradingData';
import { Breadcrumb, MoreBrands, img } from '../components/TradingCommon';
import { Gallery } from '../components/ProductGallery';

const LOGO = '/assets/businesses/logo-tie.webp';

// Colour hints for the four finishes on the range sheet.
const finishDot = { YZ: 'bg-amber-500', SZ: 'bg-sky-200', SS: 'bg-neutral-300', XY: 'bg-slate-400' };
const finishTag = { YZ: 'bg-amber-500 text-white', SZ: 'bg-sky-100 text-sky-900', SS: 'bg-neutral-200 text-neutral-800', XY: 'bg-slate-500 text-white' };

export function AppSlider({ items, title = <>Where TIE <span className="text-[#ed1c23]">Is Used</span></>, linkBase }) {
  const track = useRef(null);
  const loop = [...items, ...items];
  const step = () => {
    const el = track.current;
    const card = el?.firstElementChild;
    return card ? card.getBoundingClientRect().width + parseFloat(getComputedStyle(el).columnGap || 0) : 0;
  };
  const scroll = (d) => {
    const el = track.current;
    if (!el) return;
    const half = step() * items.length;
    if (d > 0 && el.scrollLeft >= half - 2) el.scrollLeft -= half;
    if (d < 0 && el.scrollLeft <= 2) el.scrollLeft += half;
    el.scrollBy({ left: d * step(), behavior: 'smooth' });
  };

  // Auto slide one card at a time, looping forever; pauses while hovered.
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return undefined;
    const t = setInterval(() => scroll(1), 3000);
    return () => clearInterval(t);
  }, [paused]);
  return (
    <section className="pb-14 lg:pb-20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl lg:text-5xl font-medium tracking-tight">{title}</h2>
          <div className="hidden sm:flex gap-2">
            <button type="button" onClick={() => scroll(-1)} aria-label="Previous applications" className="w-11 h-11 rounded-full ring-1 ring-neutral-300 hover:bg-[#ed1c23] hover:text-white hover:ring-[#ed1c23] flex items-center justify-center transition-colors"><ChevronLeft className="w-5 h-5" /></button>
            <button type="button" onClick={() => scroll(1)} aria-label="Next applications" className="w-11 h-11 rounded-full ring-1 ring-neutral-300 hover:bg-[#ed1c23] hover:text-white hover:ring-[#ed1c23] flex items-center justify-center transition-colors"><ChevronRight className="w-5 h-5" /></button>
          </div>
        </div>
        <ul ref={track} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onTouchStart={() => setPaused(true)} className="mt-8 lg:mt-10 flex gap-4 lg:gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {loop.map(([name, src, to], i) => {
            const card = (
              <figure className="group relative rounded-2xl overflow-hidden">
                <img src={img(src)} alt={name} loading="lazy" className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-5 max-sm:p-4">
                  <span className="block text-lg lg:text-xl max-sm:text-base font-medium leading-snug text-white">{name}</span>
                </figcaption>
              </figure>
            );
            return (
              <li key={`${name}-${i}`} aria-hidden={i >= items.length} className="snap-start shrink-0 w-[78%] max-sm:w-[70%] sm:w-[45%] lg:w-[calc(25%-15px)]">
                {to && linkBase ? <Link to={`${linkBase}/${to}`} tabIndex={i >= items.length ? -1 : undefined}>{card}</Link> : card}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default function TieBrandPage({ onOpenEnquiry }) {
  const b = findBrand('tie');
  const others = brands.filter((x) => x.id !== b.id);
  const s = b.single;
  const g = b.sizeGuide;

  return (
    <div className="bg-white text-neutral-900">

      {/* Hero: brand panel + roof photo */}
      <section className="relative overflow-hidden bg-neutral-50">
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-[52%]">
          <img src={img(b.hero)} alt={b.heroAlt} className="w-full h-64 sm:h-96 lg:h-full object-cover lg:[clip-path:polygon(12%_0,100%_0,100%_100%,0_100%)]" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-4 md:px-8 py-10 lg:py-0 lg:min-h-[calc(100svh-89px)] flex items-center">
          <div className="lg:w-[48%] lg:pr-10">
            <img src={LOGO} alt="TIE, The Permanent Bond" className="h-24 sm:h-28 lg:h-32 max-sm:h-20 w-auto" />
            <h1 className="mt-8 max-sm:mt-6 max-sm:text-[2.1rem] text-4xl sm:text-5xl xl:text-6xl font-medium tracking-tight leading-[1.05]">
              Roofing Screws for <span className="text-[#ed1c23]">Permanent Bonds</span>
            </h1>
            <div className="mt-8 max-sm:mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#range" className="px-7 py-3.5 bg-[#ed1c23] hover:bg-[#c9141a] text-white text-sm font-bold rounded-full flex items-center justify-center gap-2 transition-colors">
                View Range <ArrowRight className="w-4 h-4" />
              </a>
              <a href={b.catalogue} download className="px-7 py-3.5 ring-1 ring-neutral-900 hover:bg-neutral-900 hover:text-white text-sm font-bold rounded-full flex items-center justify-center gap-2 transition-colors">
                <Download className="w-4 h-4" /> Download Catalogue
              </a>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumb trail={[['Trading', '/trading'], [b.name]]} />

      {/* Intro + features */}
      <section className="pt-8 lg:pt-12 pb-14 lg:pb-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <h2 className="text-3xl lg:text-5xl font-medium tracking-tight">For <span className="text-[#ed1c23]">Pre-Engineering</span> Structures</h2>
            <p className="mt-5 text-lg max-sm:text-base text-neutral-600 leading-relaxed">{b.intro}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {b.badges.map((t) => (
                <li key={t} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#ed1c23]/[0.07] text-[#ed1c23] text-xs font-bold">
                  <Check className="w-3.5 h-3.5" strokeWidth={3} /> {t}
                </li>
              ))}
            </ul>
          </div>
          <ul className="lg:col-span-6 grid sm:grid-cols-2 gap-3">
            {b.features.map((f) => (
              <li key={f} className="flex items-start gap-3 rounded-2xl max-sm:rounded-xl ring-1 ring-neutral-200 p-4 max-sm:p-3.5">
                <span className="w-7 h-7 shrink-0 rounded-full bg-[#ed1c23] text-white flex items-center justify-center"><Check className="w-4 h-4" strokeWidth={3} /></span>
                <span className="font-medium leading-snug pt-0.5">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Product: gallery + details */}
      <section id="range" className="scroll-mt-24 pb-14 lg:pb-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            <div className="lg:col-span-7"><Gallery images={s.images} /></div>
            <div className="lg:col-span-5">
              <h2 className="text-3xl lg:text-4xl font-medium tracking-tight leading-tight">{s.name}</h2>
              <p className="mt-2 inline-block px-3 py-1 rounded-full bg-[#ed1c23]/[0.07] text-[#ed1c23] text-sm font-semibold">{s.short}</p>
              <p className="mt-5 text-neutral-600 leading-relaxed">{s.desc}</p>
              <h3 className="mt-7 text-xs font-bold uppercase tracking-widest text-neutral-500">Finish Codes</h3>
              <ul className="mt-2 grid grid-cols-2 gap-2">
                {b.finishes.map(([code, name]) => (
                  <li key={code} className="flex items-center gap-2.5 max-sm:gap-2 rounded-xl ring-1 ring-neutral-200 px-3 py-2 max-sm:px-2 text-sm max-sm:text-[13px] leading-snug">
                    <span className="w-9 h-7 shrink-0 rounded-md bg-[#ed1c23] text-white text-xs font-bold flex items-center justify-center">{code}</span>{name}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-3 max-sm:flex-col">
                <button type="button" onClick={() => onOpenEnquiry(`${b.name}: ${s.name}`)} className="max-sm:justify-center px-6 py-3 bg-[#ed1c23] hover:bg-[#c9141a] text-white text-sm font-bold rounded-full flex items-center gap-2 transition-colors">
                  Request a Quote <ArrowRight className="w-4 h-4" />
                </button>
                <a href={b.catalogue2[0]} download className="max-sm:justify-center px-6 py-3 ring-1 ring-neutral-300 hover:ring-[#ed1c23] hover:text-[#ed1c23] text-sm font-bold rounded-full flex items-center gap-2 transition-colors">
                  <Download className="w-4 h-4" /> {b.catalogue2[1]}
                </a>
              </div>
            </div>
          </div>
          {/* Full range, every screw from the range sheet */}
          <div className="mt-12 lg:mt-16">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
              <h2 className="text-2xl lg:text-4xl font-medium tracking-tight">Full <span className="text-[#ed1c23]">Range</span></h2>
              <ul className="flex flex-wrap gap-2 text-xs font-semibold">
                {b.finishes.map(([code, name]) => (
                  <li key={code} className="flex items-center gap-1.5 px-2.5 py-1 rounded-full ring-1 ring-neutral-200">
                    <span className={`w-3 h-3 rounded-full ${finishDot[code]}`} />{code}: {name}
                  </li>
                ))}
              </ul>
            </div>
            <ul className="mt-6 lg:mt-8 rounded-2xl ring-1 ring-neutral-200 divide-y divide-neutral-200 overflow-hidden">
              {s.series.map((x) => (
                <li key={x.name + x.screws[0][1]} className="grid md:grid-cols-[150px_220px_1fr] gap-3 max-md:gap-2 md:gap-6 items-center px-5 py-4 max-sm:px-4">
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#ed1c23]">{x.type}</span>
                  <span className="flex items-center gap-2 font-semibold">
                    {x.name}
                    {x.isNew && <span className="px-2 py-0.5 rounded-full bg-[#ed1c23] text-white text-[10px] font-bold">NEW</span>}
                  </span>
                  <ul className="flex flex-wrap gap-2">
                    {x.screws.map(([len, code, isNew]) => (
                      <li key={`${len}${code}`} className="relative flex items-center gap-1.5 rounded-lg bg-neutral-50 ring-1 ring-neutral-200 pl-2.5 pr-1.5 py-1">
                        <span className="font-bold">{len}</span><span className="text-xs text-neutral-500">mm</span>
                        <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${finishTag[code]}`}>{code}</span>
                        {isNew && <span className="absolute -top-2 -right-2 px-1.5 rounded-full bg-[#ed1c23] text-white text-[9px] font-bold">NEW</span>}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Anatomy */}
      <section className="pb-14 lg:pb-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <h2 className="text-center text-3xl lg:text-5xl font-medium tracking-tight">Anatomy of a <span className="text-[#ed1c23]">TIE Screw</span></h2>
          <img src={img(b.anatomy[0])} alt={b.anatomy[1]} loading="lazy" className="mt-8 lg:mt-10 w-full max-w-4xl mx-auto" />
          <ol className="mt-8 max-sm:mt-6 flex flex-wrap justify-center gap-3 max-sm:gap-2">
            {b.anatomyParts.map((part, i) => (
              <li key={part} className="flex items-center gap-2.5 max-sm:gap-2 pl-1.5 pr-4 max-sm:pr-3 py-1.5 rounded-full ring-1 ring-neutral-200 text-sm max-sm:text-[13px] font-semibold">
                <span className="w-7 h-7 rounded-full bg-[#ed1c23] text-white text-xs font-bold flex items-center justify-center">{i + 1}</span>{part}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Applications: horizontal slider */}
      <AppSlider items={b.applicationList} />

      {/* Size guide */}
      <section className="pb-14 lg:pb-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="rounded-3xl max-sm:rounded-2xl ring-1 ring-neutral-200 p-6 sm:p-8 lg:p-12 max-sm:p-4">
            <h2 className="text-3xl lg:text-5xl font-medium tracking-tight">How to Read a <span className="text-[#ed1c23]">Screw Size</span></h2>
            <p className="mt-4 text-lg max-sm:text-base text-neutral-600">{g.intro}</p>
            <ol className="mt-6 grid md:grid-cols-3 gap-3">
              {g.figures.map(([k, v]) => (
                <li key={k} className="rounded-2xl ring-1 ring-neutral-200 p-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#ed1c23]">{k}</span>
                  <p className="mt-1 font-medium">{v}</p>
                </li>
              ))}
            </ol>

            <div className="mt-8 grid md:grid-cols-2 gap-4">
              {g.examples.map(([size, meaning]) => (
                <div key={size} className="rounded-2xl bg-neutral-50 p-5 lg:p-6 max-sm:p-4">
                  <p className="text-3xl lg:text-4xl max-sm:text-2xl font-bold tracking-tight text-[#ed1c23] break-words">{size}</p>
                  <p className="mt-2 text-neutral-700">{meaning}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-neutral-600"><span className="font-semibold text-neutral-900">Gauge: </span>{g.gauge}</p>

            <h3 className="mt-10 text-xl lg:text-2xl font-medium tracking-tight">Measuring Length</h3>
            <div className="mt-5 grid md:grid-cols-2 gap-6">
              {g.length.map(([src, text]) => (
                <figure key={src}>
                  <img src={img(src)} alt={text} loading="lazy" className="w-full rounded-xl ring-1 ring-neutral-200 bg-white p-3" />
                  <figcaption className="mt-2 text-sm text-neutral-600">{text}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="pb-14 lg:pb-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="rounded-2xl bg-[#ed1c23] text-white p-6 sm:p-8 lg:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="flex items-center gap-5 max-sm:flex-col max-sm:items-start max-sm:gap-4">
              <img src={LOGO} alt="" className="h-16 max-sm:h-14 w-auto bg-white rounded-lg p-1.5" />
              <div className="min-w-0">
                <h2 className="text-2xl lg:text-4xl font-medium tracking-tight">Buy TIE Screws</h2>
                <p className="mt-1 font-semibold">{b.contact.company}</p>
                <p className="mt-0.5 text-sm text-white/85 max-w-sm">{b.contact.address}</p>
              </div>
            </div>
            <ul className="flex flex-col sm:flex-row flex-wrap gap-3">
              <li><a href={`tel:${b.contact.mob.replace(/\s/g, '')}`} className="flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 px-4 py-3 font-medium transition-colors"><Phone className="w-4 h-4" /> {b.contact.mob}</a></li>
              <li><span className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3 font-medium"><Phone className="w-4 h-4" /> Tel {b.contact.tel}</span></li>
              <li><span className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3 font-medium">Fax {b.contact.fax}</span></li>
              <li><a href={`mailto:${b.contact.email}`} className="max-sm:break-all flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 px-4 py-3 font-medium transition-colors"><Mail className="w-4 h-4 shrink-0" /> {b.contact.email}</a></li>
              <li>
                <button type="button" onClick={() => onOpenEnquiry('TIE Roofing Screws')} className="h-full max-sm:w-full max-sm:justify-center px-6 py-3 bg-white text-[#ed1c23] hover:bg-neutral-100 text-sm font-bold rounded-xl flex items-center gap-2 transition-colors">
                  Request a Quote <ArrowRight className="w-4 h-4" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <MoreBrands brands={others} />
      <CtaBannerSection onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
}
