import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Bath, Check, Droplets, Flame, IndianRupee, Link2, MapPinned, Package, PenLine, Ruler, Shirt, Sun, Tag, Zap, ZapOff } from 'lucide-react';
import CtaBannerSection from '../components/CtaBannerSection';
import { brands, findBrand } from '../data/tradingData';
import { Breadcrumb, MoreBrands, ProductCard, img } from '../components/TradingCommon';

// PNP brand page: one highlight band per product, using only what the client's brochures and pnpind.com say.
// Content lives in tradingData.js under brand "pnp" (page.*). Full specs stay on the product pages.

const Wrap = ({ id, className = '', children }) => (
  <section id={id} className={`scroll-mt-24 py-14 lg:py-20 ${className}`}>
    <div className="max-w-[1400px] mx-auto px-4 md:px-8">{children}</div>
  </section>
);

// Band header: number, product name, link to its product page.
const BandHead = ({ n, title, to, line }) => (
  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 lg:pb-8 border-b border-neutral-200">
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#ed1c23]">0{n} / PNP Product</p>
      <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">{title}</h2>
      {line && <p className="mt-2 text-lg max-sm:text-base text-neutral-600">{line}</p>}
    </div>
    <Link to={`/trading/pnp/${to}`} className="shrink-0 self-start sm:self-auto px-6 py-3 ring-1 ring-neutral-300 hover:ring-[#ed1c23] hover:text-[#ed1c23] text-sm font-bold rounded-full inline-flex items-center gap-2 transition-colors">
      View {title} <ArrowRight className="w-4 h-4" />
    </Link>
  </div>
);

const Label = ({ children }) => <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500">{children}</h3>;
const Chips = ({ items, strong }) => (
  <ul className="mt-3 flex flex-wrap gap-2">
    {items.map((t) => <li key={t} className={`px-3 py-1.5 rounded-full text-sm font-medium ${strong ? 'bg-[#ed1c23] text-white' : 'bg-white ring-1 ring-neutral-200'}`}>{t}</li>)}
  </ul>
);
const Ticks = ({ items, className = '' }) => (
  <ul className={`space-y-2.5 ${className}`}>
    {items.map((t) => (
      <li key={t} className="flex gap-3 leading-snug"><span className="w-5 h-5 mt-0.5 shrink-0 rounded-full bg-[#ed1c23] text-white flex items-center justify-center"><Check className="w-3 h-3" strokeWidth={3} /></span>{t}</li>
    ))}
  </ul>
);
// Photo tiles with a caption, used for applications.
const AppTiles = ({ items, cols }) => (
  <ul className={`grid grid-cols-2 ${cols} gap-3 lg:gap-4`}>
    {items.map(([name, src]) => (
      <li key={name} className="group relative rounded-2xl overflow-hidden bg-neutral-100">
        <img src={img(src)} alt={name} loading="lazy" className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/75 to-transparent" />
        <p className="absolute inset-x-0 bottom-0 p-4 max-sm:p-3 max-sm:text-sm text-white font-medium leading-snug">{name}</p>
      </li>
    ))}
  </ul>
);

const webbingIcons = [Link2, PenLine, Flame, Zap, ZapOff, Sun];
// Swatch colours are a visual cue from each name only; the sources give no colours or tiers.
const subBrandColour = { Premium: "#262626", Ruby: "#be123c", Gold: "#d97706", "A-One": "#ed1c23", Sapphire: "#1d4ed8", Eco: "#059669" };
const labelUseIcons = [Bath, Package, Shirt, Tag, Award];
const labelFeatureIcons = [Ruler, IndianRupee, MapPinned];

export default function PnpBrandPage({ onOpenEnquiry }) {
  const b = findBrand('pnp');
  const { fabric, racking, webbings, labels, furniture } = b.page;
  const others = brands.filter((x) => x.id !== b.id);

  return (
    <div className="bg-white text-neutral-900">

      {/* Hero: brand panel + photo (same pattern as the other brand pages) */}
      <section className="relative overflow-hidden bg-neutral-50">
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-[52%]">
          <img src={img(b.hero)} alt={b.heroAlt} className="w-full h-64 sm:h-96 lg:h-full object-cover lg:[clip-path:polygon(12%_0,100%_0,100%_100%,0_100%)]" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-4 md:px-8 py-10 lg:py-0 lg:min-h-[calc(100svh-89px)] flex items-center">
          <div className="lg:w-[48%] lg:pr-10">
            <img src={b.logos[0]} alt={b.name} className="h-16 sm:h-20 lg:h-24 w-auto max-w-[80%] object-contain object-left" />
            <h1 className="mt-8 max-sm:mt-6 max-sm:text-[2.1rem] text-4xl sm:text-5xl xl:text-6xl font-medium tracking-tight leading-[1.05]">{b.product}</h1>
            <div className="mt-8 max-sm:mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#products" className="px-7 py-3.5 bg-[#ed1c23] hover:bg-[#c9141a] text-white text-sm font-bold rounded-full flex items-center justify-center gap-2 transition-colors">
                View Products <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumb trail={[['Trading', '/trading'], [b.name]]} />

      {/* Overview */}
      <Wrap className="!pt-8 lg:!pt-12 !pb-10 lg:!pb-14">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-14 items-end">
          <div className="lg:col-span-6">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#ed1c23]">{b.full}</p>
            <p className="mt-3 text-3xl lg:text-[2.75rem] max-sm:text-[1.65rem] font-medium tracking-tight leading-[1.12]">{b.tagline}</p>
          </div>
          <div className="lg:col-span-6">
            <p className="text-neutral-600 leading-relaxed">{b.intro}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {b.badges.map((t) => (
                <li key={t} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#ed1c23]/[0.07] text-[#ed1c23] text-xs font-bold"><Check className="w-3.5 h-3.5" strokeWidth={3} /> {t}</li>
              ))}
            </ul>
          </div>
        </div>
      </Wrap>

      {/* Products */}
      <Wrap id="products" className="bg-neutral-50 !py-12 lg:!py-16">
        <h2 className="text-center text-3xl lg:text-5xl font-medium tracking-tight">PNP <span className="text-[#ed1c23]">Products</span></h2>
        <ul className="mt-8 lg:mt-10 flex flex-wrap justify-center gap-4 max-sm:gap-3 lg:gap-5">
          {b.products.map((p) => (
            <li key={p.id} className="w-full max-sm:w-[calc(50%-0.375rem)] sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.84rem)]"><ProductCard brandId={b.id} p={p} compact /></li>
          ))}
        </ul>
      </Wrap>

      {/* 01 Coated fabric: varieties, brands, highlights, applications */}
      <Wrap>
        <BandHead n={1} title="Coated Fabric" to="coated-fabric" line="Branded luggage fabric, in more than a hundred varieties." />
        <div className="mt-8 lg:mt-10 grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-5 relative">
            <img src={img(fabric.image[0])} alt={fabric.image[1]} loading="lazy" className="w-full h-full min-h-72 max-sm:min-h-0 max-sm:h-auto max-sm:aspect-[4/3] rounded-3xl max-sm:rounded-2xl object-cover" />
            <div className="absolute left-4 bottom-4 right-4 max-sm:left-3 max-sm:bottom-3 max-sm:right-3 sm:right-auto flex gap-2">
              {fabric.brands.map(([n, logo]) => (
                <span key={n} className="h-14 px-4 max-sm:h-11 max-sm:px-3 rounded-xl bg-white shadow-lg flex items-center"><img src={logo} alt={n} className="h-8 max-sm:h-6 w-auto" /></span>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 space-y-7">
            <div className="rounded-3xl max-sm:rounded-2xl bg-neutral-50 ring-1 ring-neutral-200 p-5 lg:p-7 max-sm:p-4">
              <Label>Varieties · Nylon & polyester, all deniers</Label>
              <div className="mt-3 flex items-center gap-3 sm:gap-5">
                <span className="text-2xl sm:text-4xl font-medium tracking-tight">{fabric.denier[0]}</span>
                <span className="flex-1 h-1.5 rounded-full bg-gradient-to-r from-[#ed1c23]/30 to-[#ed1c23]" />
                <span className="text-2xl sm:text-4xl font-medium tracking-tight text-[#ed1c23]">{fabric.denier[1]}</span>
              </div>
              <div className="mt-6 grid sm:grid-cols-2 gap-6">
                <div><Label>Weaving Patterns</Label><Chips items={fabric.weaves} /></div>
                <div><Label>Coatings</Label><Chips items={fabric.coatings} /></div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <Label>Sub Brands</Label>
                <ul className="mt-3 grid grid-cols-3 gap-2">
                  {fabric.subBrands.map((t) => (
                    <li key={t} className="group rounded-xl bg-white ring-1 ring-neutral-200 hover:ring-[#ed1c23] overflow-hidden transition-colors">
                      <span className="block h-6 group-hover:h-8 transition-all" style={{ background: `repeating-linear-gradient(45deg, ${subBrandColour[t] || "#ed1c23"} 0 4px, ${subBrandColour[t] || "#ed1c23"}b3 4px 7px)` }} />
                      <span className="block px-2.5 py-2 max-sm:px-1.5 text-sm max-sm:text-[13px] font-semibold text-center">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Label>Highlights</Label>
                <Ticks items={fabric.highlights} className="mt-3 text-[15px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Label>Applications</Label>
          <div className="mt-4"><AppTiles items={fabric.apps} cols="sm:grid-cols-3 lg:grid-cols-5" /></div>
        </div>
      </Wrap>

      {/* 02 Warehouse racking: how pallet racking works + spec tiles + features & benefits */}
      <Wrap className="bg-neutral-50">
        <BandHead n={2} title="Warehouse Racking" to="warehouse-racking" line="Ideas that create space." />
        <div className="mt-8 lg:mt-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-6 grid grid-cols-3 gap-3">
            <img src={img(racking.images[0][0])} alt={racking.images[0][1]} loading="lazy" className="col-span-3 w-full aspect-[16/10] rounded-3xl max-sm:rounded-2xl object-cover" />
            {racking.images.slice(1).map(([src, alt]) => <img key={src} src={img(src)} alt={alt} loading="lazy" className="w-full aspect-square rounded-2xl max-sm:rounded-xl object-cover" />)}
          </div>
          <div className="lg:col-span-6 flex flex-col">
            <p className="text-xl lg:text-2xl max-sm:text-lg font-medium tracking-tight leading-snug">{racking.text}</p>
            <h3 className="mt-8 text-sm font-bold uppercase tracking-widest text-[#ed1c23]">Heavy Duty Pallet Racking</h3>
            <ul className="mt-4 flex-1 grid grid-cols-2 gap-3 max-sm:gap-2.5">
              {racking.pallet.map(([key, label, text], i) => (
                <li key={key} className={`group flex flex-col justify-between rounded-2xl p-5 max-sm:p-4 transition-colors ${i === 0 ? 'bg-[#ed1c23] text-white' : 'bg-white ring-1 ring-neutral-200 hover:ring-[#ed1c23]'} ${i === racking.pallet.length - 1 && racking.pallet.length % 2 ? 'col-span-2' : ''}`}>
                  <div>
                    <p className={`text-3xl lg:text-4xl max-sm:text-2xl font-medium tracking-tight break-words ${i === 0 ? '' : 'text-[#ed1c23]'}`}>{key}</p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-widest max-sm:tracking-wider max-sm:text-[11px] opacity-70">{label}</p>
                  </div>
                  <p className={`mt-4 max-sm:mt-3 text-sm max-sm:text-[13px] leading-snug ${i === 0 ? 'text-white/90' : 'text-neutral-600'}`}>{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Rack bay drawing with dimension lines and spec callouts (figures from PNP Racking 2026) */}
        <div className="mt-8 lg:mt-10 grid lg:grid-cols-12 gap-6 lg:gap-10 items-center rounded-3xl bg-white ring-1 ring-neutral-200 p-5 sm:p-8 lg:p-10 max-sm:p-4">
          <div className="lg:col-span-7">
            <svg viewBox="0 0 520 360" className="w-full h-auto" role="img" aria-label="Rack bay: 10 ft upright, 8 ft beam, 4 ft depth">
              <defs>
                <pattern id="holes" width="6" height="10" patternUnits="userSpaceOnUse"><rect x="2" y="3" width="2" height="4" rx="1" fill="#fff" /></pattern>
                <marker id="arw" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#ed1c23" /></marker>
              </defs>
              {/* back uprights (depth) */}
              <g opacity="0.35">
                <rect x="150" y="20" width="12" height="280" fill="#1d4ed8" />
                <rect x="410" y="20" width="12" height="280" fill="#1d4ed8" />
                <line x1="108" y1="60" x2="150" y2="20" stroke="#1d4ed8" strokeWidth="3" />
                <line x1="368" y1="60" x2="410" y2="20" stroke="#1d4ed8" strokeWidth="3" />
              </g>
              {/* beams */}
              {[110, 200, 290].map((y) => (
                <g key={y}>
                  <polygon points={`120,${y} 380,${y} 422,${y - 40} 162,${y - 40}`} fill="#34d399" opacity="0.18" />
                  <rect x="120" y={y - 6} width="260" height="14" rx="2" fill="#34d399" />
                </g>
              ))}
              {/* front uprights with punch holes */}
              {[108, 368].map((x) => (
                <g key={x}>
                  <rect x={x} y="60" width="12" height="280" fill="#1d4ed8" />
                  <rect x={x} y="60" width="12" height="280" fill="url(#holes)" />
                </g>
              ))}
              {/* dimension lines */}
              <g stroke="#ed1c23" strokeWidth="1.5" fill="none">
                <line x1="80" y1="62" x2="80" y2="338" markerStart="url(#arw)" markerEnd="url(#arw)" />
                <line x1="112" y1="354" x2="376" y2="354" markerStart="url(#arw)" markerEnd="url(#arw)" />
                <line x1="392" y1="350" x2="436" y2="306" markerStart="url(#arw)" markerEnd="url(#arw)" />
              </g>
              <g fill="#ed1c23" fontSize="15" fontWeight="700" fontFamily="inherit">
                <text x="62" y="205" textAnchor="middle" transform="rotate(-90 62 205)">10 ft</text>
                <text x="244" y="348" textAnchor="middle">8 ft</text>
                <text x="448" y="338">4 ft</text>
              </g>
              {/* callout dots */}
              <circle cx="114" cy="150" r="9" fill="#fff" stroke="#ed1c23" strokeWidth="3" />
              <text x="114" y="155" textAnchor="middle" fontSize="11" fontWeight="700" fill="#ed1c23">1</text>
              <circle cx="300" cy="200" r="9" fill="#fff" stroke="#ed1c23" strokeWidth="3" />
              <text x="300" y="205" textAnchor="middle" fontSize="11" fontWeight="700" fill="#ed1c23">2</text>
            </svg>
          </div>
          <ol className="lg:col-span-5 space-y-5">
            {racking.specs.map(([name, big, sub, note], i) => (
              <li key={name} className="flex gap-4">
                <span className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center text-sm font-bold ${i < 2 ? 'ring-2 ring-[#ed1c23] text-[#ed1c23]' : 'bg-neutral-100 text-neutral-500'}`}>{i < 2 ? i + 1 : <span className="text-[10px]">ft</span>}</span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-neutral-500">{name}</p>
                  <p className="mt-0.5 text-2xl font-medium tracking-tight">{big}</p>
                  <p className="text-sm text-neutral-600">{sub} · {note}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          <div className="rounded-3xl max-sm:rounded-2xl bg-white ring-1 ring-neutral-200 p-6 lg:p-8 max-sm:p-5"><Label>Features</Label><Ticks items={racking.features} className="mt-4" /></div>
          <div className="rounded-3xl max-sm:rounded-2xl bg-white ring-1 ring-neutral-200 p-6 lg:p-8 max-sm:p-5"><Label>Benefits</Label><Ticks items={racking.benefits} className="mt-4" /></div>
        </div>
      </Wrap>

      {/* 03 Webbings: text + feature icons + applications */}
      <Wrap>
        <BandHead n={3} title="Webbings" to="webbings" line="High tenacity yarn imported from Taiwan." />
        <div className="mt-8 lg:mt-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <img src={img(webbings.image[0])} alt={webbings.image[1]} loading="lazy" className="lg:col-span-5 w-full aspect-[4/3] rounded-3xl max-sm:rounded-2xl object-cover" />
          <div className="lg:col-span-7">
            <p className="text-xl lg:text-2xl max-sm:text-lg font-medium tracking-tight leading-snug">{webbings.text}</p>
            <ul className="mt-7 max-sm:mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 max-sm:gap-2.5">
              {webbings.features.map((t, i) => {
                const Icon = webbingIcons[i] || Droplets;
                return (
                  <li key={t} className="rounded-2xl ring-1 ring-neutral-200 p-4 max-sm:p-3.5">
                    <span className="w-10 h-10 rounded-xl bg-[#ed1c23]/[0.08] text-[#ed1c23] flex items-center justify-center"><Icon className="w-5 h-5" strokeWidth={1.75} /></span>
                    <p className="mt-3 text-sm font-medium leading-snug">{t}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="mt-10">
          <Label>Applications</Label>
          <div className="mt-4"><AppTiles items={webbings.apps} cols="lg:grid-cols-4" /></div>
        </div>
      </Wrap>

      {/* 04 Label tapes: photos + varieties / used in / features */}
      <Wrap className="bg-neutral-50">
        <BandHead n={4} title="Label Tapes" to="label-tapes" line="Nylon taffeta, polyester taffeta & polyester satin." />
        <div className="mt-8 lg:mt-10 grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            <img src={img(labels.images[0][0])} alt={labels.images[0][1]} loading="lazy" className="col-span-2 w-full aspect-[16/10] rounded-3xl max-sm:rounded-2xl object-cover" />
            {labels.images.slice(1).map(([src, alt]) => <img key={src} src={img(src)} alt={alt} loading="lazy" className="w-full aspect-[4/3] rounded-2xl max-sm:rounded-xl object-cover" />)}
          </div>
          <div className="lg:col-span-7">
            <p className="text-xl lg:text-2xl max-sm:text-lg font-medium tracking-tight leading-snug">{labels.text}</p>
            <div className="mt-6">
              <Label>Varieties</Label>
              <ul className="mt-3 grid sm:grid-cols-2 gap-2.5">
                {labels.varieties.map((t, i) => (
                  <li key={t} className={`relative rounded-md px-4 py-3 text-sm font-semibold shadow-sm ${['bg-white text-neutral-900', 'bg-neutral-800 text-white', 'bg-[#ed1c23] text-white', 'bg-neutral-200 text-neutral-900'][i % 4]}`}>
                    <span className="absolute inset-x-2 top-1 border-t border-dashed border-current opacity-30" />
                    <span className="absolute inset-x-2 bottom-1 border-t border-dashed border-current opacity-30" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <Label>Used In</Label>
              <ul className="mt-3 flex flex-wrap gap-2.5">
                {labels.uses.map((t, i) => {
                  const Icon = labelUseIcons[i] || Check;
                  return (
                    <li key={t} className="group relative flex items-center gap-2.5 pl-8 pr-5 py-2.5 bg-[#ed1c23]/[0.1] hover:bg-[#ed1c23] hover:text-white transition-colors [clip-path:polygon(16px_0,100%_0,100%_100%,16px_100%,0_50%)] rounded-r-lg">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white" />
                      <Icon className="w-4 h-4 text-[#ed1c23] group-hover:text-white transition-colors" strokeWidth={2} />
                      <span className="text-sm font-medium whitespace-nowrap max-sm:whitespace-normal max-sm:text-[13px] max-sm:leading-snug">{t}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <ul className="mt-6 grid sm:grid-cols-3 rounded-2xl bg-[#ed1c23]/[0.05] ring-1 ring-[#ed1c23]/15 divide-y sm:divide-y-0 sm:divide-x divide-[#ed1c23]/15">
              {labels.features.map((t, i) => {
                const Icon = labelFeatureIcons[i] || Check;
                return (
                  <li key={t} className="flex items-center gap-3 px-4 py-4">
                    <span className="w-9 h-9 shrink-0 rounded-full bg-white text-[#ed1c23] shadow-sm flex items-center justify-center"><Icon className="w-4 h-4" strokeWidth={2} /></span>
                    <span className="text-sm font-semibold leading-snug">{t}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Wrap>

      {/* 05 Office automation furniture: photo + range + features */}
      <Wrap>
        <BandHead n={5} title="Office Furniture" to="office-furniture" line="Office automation furniture: cabinets, storage and tables." />
        <div className="mt-8 lg:mt-10 grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-5">
            <img src={img(furniture.image[0])} alt={furniture.image[1]} loading="lazy" className="w-full aspect-[4/3] rounded-3xl max-sm:rounded-2xl object-cover" />
            <ul className="mt-4 flex flex-wrap gap-2">
              {furniture.features.map((t) => <li key={t} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#ed1c23]/[0.07] text-[#ed1c23] text-sm font-semibold"><Check className="w-3.5 h-3.5" strokeWidth={3} />{t}</li>)}
            </ul>
          </div>
          <ul className="lg:col-span-7 space-y-4">
            {furniture.range.map(([name, src, items]) => (
              <li key={name} className="grid sm:grid-cols-[220px_1fr] gap-4 max-sm:gap-3 items-center rounded-3xl max-sm:rounded-2xl ring-1 ring-neutral-200 p-3 pr-5 max-sm:pr-3">
                <img src={img(src)} alt={items} loading="lazy" className="w-full aspect-[4/3] rounded-2xl object-cover" />
                <div className="px-2 sm:px-0 pb-2 sm:pb-0">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#ed1c23]">{name}</p>
                  <p className="mt-1 text-lg max-sm:text-base font-medium leading-snug">{items}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Wrap>

      <MoreBrands brands={others} />
      <CtaBannerSection onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
}
