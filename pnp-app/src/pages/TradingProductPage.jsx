import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { ArrowRight, ArrowRightLeft, Award, Feather, FlaskConical, IndianRupee, Layers, Link2, MapPinned, Move, PaintBucket, Palette, PenLine, Ruler, Scale, SlidersVertical, Sparkles, Sun, Truck, Wrench, Zap, ZapOff, Check, CircleDot, CloudFog, Download, ExternalLink, Fan, Forklift, LayoutGrid, PackageOpen, RefreshCw, Rows3, Thermometer, Wind } from 'lucide-react';
import CtaBannerSection from '../components/CtaBannerSection';
import { Gallery, RangeTable } from '../components/ProductGallery';
import { findBrand, findProduct } from '../data/tradingData';
import { Breadcrumb, ChipGroup, ProductCard, img } from '../components/TradingCommon';

// Picks an icon for a feature line by its wording.
const iconRules = [
  [/fresh/i, Wind], [/hot air|fumes|smoke/i, CloudFog], [/temperature|humidity/i, Thermometer],
  [/bearing/i, CircleDot], [/fin/i, Fan], [/exhaust/i, RefreshCw], [/base/i, LayoutGrid],
  [/retrieval/i, PackageOpen], [/aisle/i, Rows3], [/first in/i, ArrowRightLeft], [/pallet|forklift/i, Forklift],
  [/fixing/i, Link2], [/logo|print/i, PenLine], [/chemical/i, FlaskConical], [/conductiv/i, Zap], [/insulation/i, ZapOff], [/uv/i, Sun],
  [/slab/i, SlidersVertical], [/powder/i, PaintBucket], [/assemble/i, Wrench], [/tailor|sizes/i, Ruler],
  [/portable/i, Move], [/attractive/i, Sparkles], [/smooth/i, Feather], [/price/i, IndianRupee], [/available all across|across india/i, MapPinned],
  [/branded|first company/i, Award], [/hundred|varieties/i, Layers], [/colour/i, Palette], [/transparent/i, Scale], [/quality|delivery/i, Truck],
];
const featureIcon = (text) => iconRules.find(([re]) => re.test(text))?.[1] || Check;
const featureCols = (n) => (n % 4 === 0 ? 'lg:grid-cols-4' : n === 5 ? 'sm:grid-cols-3 lg:grid-cols-5' : n % 3 === 0 ? 'lg:grid-cols-3' : 'lg:grid-cols-4');

export default function TradingProductPage({ onOpenEnquiry }) {
  const { brandId, productId } = useParams();
  const b = findBrand(brandId);
  const p = findProduct(b, productId);
  if (!b) return <Navigate to="/trading" replace />;
  if (!p) return <Navigate to={`/trading/${brandId}`} replace />;
  return <ProductView key={p.id} b={b} p={p} onOpenEnquiry={onOpenEnquiry} />;
}

function ProductView({ b, p, onOpenEnquiry }) {
  const others = b.products.filter((x) => x.id !== p.id);
  const specBlocks = [...(p.specs ? [['Specifications', p.specs]] : []), ...(p.specGroups || [])];

  return (
    <div className="bg-white text-neutral-900">
      <Breadcrumb trail={[['Trading', '/trading'], [b.name, `/trading/${b.id}`], [p.name]]} />

      <section className="pt-6 lg:pt-8 pb-12 lg:pb-16">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 grid lg:grid-cols-12 gap-x-14 gap-y-8 items-start">
          <div className="lg:col-span-7 lg:row-start-1">
            <Gallery images={p.images} />
          </div>

          <div className="lg:col-span-5 lg:col-start-8 lg:row-start-1">
            {b.logos?.[0] && <img src={b.logos[0]} alt={b.name} className="h-10 lg:h-12 w-auto" />}
            <h1 className="mt-5 max-sm:mt-4 text-3xl lg:text-5xl max-sm:text-[1.75rem] font-medium tracking-tight leading-tight">{p.name}</h1>
            <p className="mt-2 inline-block px-3 py-1 rounded-full bg-[#ed1c23]/[0.07] text-[#ed1c23] text-sm font-semibold">{p.short}</p>
            <p className="mt-5 text-[15px] lg:text-base text-neutral-600 leading-relaxed">{p.desc}</p>

            {p.chips && <div className="mt-6"><ChipGroup title={p.chipsLabel} items={p.chips} /></div>}
            {p.chipGroups && <div className="mt-6 space-y-5">{p.chipGroups.map(([t, items]) => <ChipGroup key={t} title={t} items={items} />)}</div>}

            <div className="mt-8 max-sm:mt-6 flex flex-wrap gap-3 max-sm:gap-2.5">
              <button type="button" onClick={() => onOpenEnquiry(`${b.name}: ${p.name}`)} className="max-sm:w-full max-sm:justify-center px-6 py-3 bg-[#ed1c23] hover:bg-[#c9141a] text-white text-sm font-bold rounded-full flex items-center gap-2 transition-colors">
                Request a Quote <ArrowRight className="w-4 h-4" />
              </button>
              {(p.catalogues?.[0]?.[1] || b.catalogue) && (
                <a href={p.catalogues?.[0]?.[1] || b.catalogue} download className="max-sm:flex-1 max-sm:justify-center px-6 py-3 ring-1 ring-neutral-300 hover:ring-[#ed1c23] hover:text-[#ed1c23] text-sm font-bold rounded-full flex items-center gap-2 transition-colors">
                  <Download className="w-4 h-4" /> Catalogue
                </a>
              )}
              {b.link && (
                <a href={b.link[0]} target="_blank" rel="noopener noreferrer" className="max-sm:flex-1 max-sm:justify-center px-6 py-3 ring-1 ring-neutral-300 hover:ring-[#ed1c23] hover:text-[#ed1c23] text-sm font-bold rounded-full flex items-center gap-2 transition-colors">
                  {b.link[1]} <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Key features: icon cards, columns picked so no row is left with one card */}
      {p.features && (
        <section className="pb-12 lg:pb-16">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8">
            <h2 className="text-2xl lg:text-4xl font-medium tracking-tight">Key <span className="text-[#ed1c23]">Features</span></h2>
            <ul className={`mt-6 lg:mt-8 grid gap-2.5 lg:gap-3 grid-cols-1 sm:grid-cols-2 ${featureCols(p.features.length)}`}>
              {p.features.map((f) => {
                const Icon = featureIcon(f);
                return (
                  <li key={f} className="group flex items-center gap-3 rounded-xl bg-neutral-50 ring-1 ring-neutral-200 hover:bg-[#ed1c23] hover:ring-[#ed1c23] px-3.5 py-3 transition-colors duration-300">
                    <span className="w-8 h-8 shrink-0 rounded-lg bg-white text-[#ed1c23] shadow-sm flex items-center justify-center">
                      <Icon className="w-4 h-4" strokeWidth={2} />
                    </span>
                    <p className="text-sm font-medium leading-snug group-hover:text-white transition-colors">{f}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      )}

      {/* Point blocks side by side (e.g. pallet racking + benefits) */}
      {p.blocks && (
        <section className="pb-12 lg:pb-16">
          <div className={`max-w-[1400px] mx-auto px-4 md:px-8 grid gap-4 lg:gap-6 ${p.blocks.length > 1 ? 'lg:grid-cols-2' : ''}`}>
            {p.blocks.map(([title, items]) => (
              <div key={title} className="flex flex-col rounded-2xl ring-1 ring-neutral-200 overflow-hidden">
                <h2 className="px-5 lg:px-7 py-4 max-sm:px-4 max-sm:py-3.5 bg-neutral-50 border-b border-neutral-200 text-lg lg:text-xl font-medium tracking-tight">{title}</h2>
                <ol className={`flex-1 ${items.every((t) => t.length < 20) ? 'grid grid-cols-2 [&>li]:border-b [&>li]:border-neutral-100' : 'divide-y divide-neutral-100'}`}>
                  {items.map((t, i) => (
                    <li key={t} className="flex items-center gap-4 px-5 lg:px-7 py-3.5 max-sm:gap-2.5 max-sm:px-3 max-sm:py-3">
                      <span className="w-7 h-7 shrink-0 rounded-full bg-[#ed1c23]/[0.08] text-[#ed1c23] text-xs font-bold flex items-center justify-center tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                      <span className="text-[15px] max-sm:text-sm leading-snug min-w-0">{t}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Applications: photo tiles */}
      {p.apps && (
        <section className="pb-12 lg:pb-16">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8">
            <h2 className="text-2xl lg:text-4xl font-medium tracking-tight">Applications</h2>
            <ul className={`mt-6 lg:mt-8 grid grid-cols-2 gap-3 lg:gap-4 ${p.apps.length === 5 ? 'sm:grid-cols-3 lg:grid-cols-5' : 'lg:grid-cols-4'}`}>
              {p.apps.map(([name, src]) => (
                <li key={name} className="group relative rounded-2xl overflow-hidden bg-neutral-100">
                  <img src={img(src)} alt={name} loading="lazy" className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/75 to-transparent" />
                  <p className="absolute inset-x-0 bottom-0 p-4 max-sm:p-3 max-sm:text-sm text-white font-medium leading-snug">{name}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Range: grouped cards with a photo each */}
      {p.rangeGroups && (
        <section className="pb-12 lg:pb-16">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8">
            <h2 className="text-2xl lg:text-4xl font-medium tracking-tight">Our <span className="text-[#ed1c23]">Range</span></h2>
            <ul className="mt-6 lg:mt-8 grid md:grid-cols-3 gap-4 lg:gap-6">
              {p.rangeGroups.map(([title, src, items]) => (
                <li key={title} className="flex flex-col rounded-2xl ring-1 ring-neutral-200 overflow-hidden">
                  <img src={img(src)} alt={items.join(', ')} loading="lazy" className="w-full aspect-[4/3] object-cover" />
                  <div className="flex-1 p-5 lg:p-6 max-sm:p-4 border-t border-neutral-200">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-[#ed1c23]">{title}</h3>
                    <ul className="mt-3 space-y-2">
                      {items.map((t) => <li key={t} className="flex items-center gap-2.5 font-medium"><Check className="w-4 h-4 shrink-0 text-[#ed1c23]" strokeWidth={3} />{t}</li>)}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {p.range && (
        <section className="pb-12 lg:pb-16">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8">
            <RangeTable range={p.range} />
          </div>
        </section>
      )}

      {/* Design codes */}
      {(p.designs || p.designGroups) && (
        <section className="pb-12 lg:pb-16">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8">
            <h2 className="text-2xl lg:text-4xl font-medium tracking-tight">Designs & <span className="text-[#ed1c23]">Codes</span></h2>
            {(p.designGroups || [[null, p.designs]]).map(([title, items]) => (
              <div key={title || 'all'} className="mt-6 lg:mt-8">
                {title && <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-[#ed1c23]">{title}</h3>}
                <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 gap-3 max-sm:gap-2">
                  {items.map(([code, src, note]) => (
                    <li key={code + src} className="group">
                      <div className="overflow-hidden rounded-xl ring-1 ring-neutral-200 bg-neutral-100">
                        <img src={img(src)} alt={`${p.name} ${code}`} loading="lazy" className="w-full aspect-[3/5] object-cover transition-transform duration-500 group-hover:scale-105" />
                      </div>
                      <p className="mt-2 max-sm:mt-1.5 text-sm max-sm:text-xs font-semibold leading-tight">{code}</p>
                      {note && <p className="text-xs text-neutral-500">{note}</p>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Tables */}
      {p.tables?.map((t) => (
        <section key={t.title} className="pb-12 lg:pb-16">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8">
            <h2 className="text-2xl lg:text-4xl font-medium tracking-tight">{t.title}</h2>
            <div className="mt-6 rounded-2xl ring-1 ring-neutral-200 overflow-x-auto">
              <table className="w-full min-w-[560px] max-sm:min-w-[480px] text-left text-sm max-sm:text-[13px]">
                <thead className="bg-neutral-50 text-xs font-bold uppercase tracking-widest text-neutral-500">
                  <tr>{t.columns.map((c) => <th key={c} className="px-5 py-3 max-sm:px-3">{c}</th>)}</tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {t.rows.map((r, i) => (
                    <tr key={i}>{r.map((v, j) => <td key={j} className={`px-5 py-3 max-sm:px-3 ${j === 0 ? 'font-semibold' : 'text-neutral-600'}`}>{v}</td>)}</tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      ))}

      {/* Installation steps */}
      {p.steps && (
        <section className="pb-12 lg:pb-16">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8">
            <h2 className="text-2xl lg:text-4xl font-medium tracking-tight">{p.steps.title}</h2>
            <ol className="mt-6 grid md:grid-cols-2 gap-3 lg:gap-4">
              {p.steps.items.map((t, i) => (
                <li key={t} className="flex gap-4 max-sm:gap-3 rounded-2xl ring-1 ring-neutral-200 p-4 lg:p-5">
                  <span className="w-8 h-8 shrink-0 rounded-full bg-[#ed1c23] text-white text-sm font-bold flex items-center justify-center">{i + 1}</span>
                  <p className="leading-relaxed max-sm:text-[15px]">{t}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Notes */}
      {p.notes && (
        <section className="pb-12 lg:pb-16">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8">
            <h2 className="text-2xl lg:text-4xl font-medium tracking-tight">Advantages of <span className="text-[#ed1c23]">PVC</span></h2>
            <ul className="mt-6 grid md:grid-cols-2 gap-3 lg:gap-4">
              {p.notes.map((n) => <li key={n} className="rounded-2xl bg-neutral-50 p-5 max-sm:p-4 max-sm:text-[15px] leading-relaxed">{n}</li>)}
            </ul>
          </div>
        </section>
      )}

      {/* Specifications: one spec sheet, balanced columns */}
      {specBlocks.length > 0 && (
        <section className="pb-12 lg:pb-16">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8">
            <h2 className="text-2xl lg:text-4xl font-medium tracking-tight">Technical <span className="text-[#ed1c23]">Specifications</span></h2>
            <div className="mt-6 lg:mt-8 rounded-2xl ring-1 ring-neutral-200 p-5 lg:p-8 max-sm:p-4">
              <div className={specBlocks.length > 1 ? 'md:columns-2 gap-10 lg:gap-14' : 'max-w-2xl'}>
                {specBlocks.map(([title, rows]) => (
                  <div key={title} className="break-inside-avoid mb-6 last:mb-0">
                    <h3 className="pb-2 mb-1 border-b-2 border-[#ed1c23] text-xs font-bold uppercase tracking-widest text-[#ed1c23]">{title}</h3>
                    <dl>
                      {rows.map(([k, v]) => (
                        <div key={k} className="flex justify-between gap-4 max-sm:gap-3 py-2 border-b border-neutral-100 text-sm max-sm:text-[13px]">
                          <dt className="text-neutral-500 max-sm:shrink-0 max-sm:max-w-[45%]">{k}</dt>
                          <dd className="font-semibold text-right max-sm:min-w-0 max-sm:break-words">{v}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {p.catalogues?.length > 1 && (
        <section className="pb-12 lg:pb-16">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8">
            <h2 className="text-2xl lg:text-4xl font-medium tracking-tight">Download <span className="text-[#ed1c23]">Catalogues</span></h2>
            <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {p.catalogues.map(([label, href]) => (
                <li key={href}>
                  <a href={href} download className="group flex items-center gap-3 rounded-xl ring-1 ring-neutral-200 hover:ring-[#ed1c23] px-4 py-3.5 transition-colors">
                    <Download className="w-5 h-5 shrink-0 text-[#ed1c23]" />
                    <span className="font-medium group-hover:text-[#ed1c23] transition-colors">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Other products from this brand */}
      {others.length > 0 && (
        <section className="border-t border-neutral-200 py-12 lg:py-16">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8">
            <h2 className="text-center text-2xl lg:text-4xl font-medium tracking-tight">More from <span className="text-[#ed1c23]">{b.name}</span></h2>
            <ul className="mt-6 lg:mt-8 flex flex-wrap justify-center gap-4 max-sm:gap-3 lg:gap-5">
              {others.map((o) => <li key={o.id} className="w-full max-sm:w-[calc(50%-0.375rem)] sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.84rem)] xl:w-[calc(25%-0.94rem)]"><ProductCard brandId={b.id} p={o} red={b.id === 'jaquar'} /></li>)}
            </ul>
          </div>
        </section>
      )}

      <CtaBannerSection onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
}
