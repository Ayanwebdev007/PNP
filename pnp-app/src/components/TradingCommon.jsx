import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, ChevronRight } from 'lucide-react';
import { TRADING_IMG as IMG } from '../data/tradingData';

export const img = (name) => `${IMG}/${name}.webp`;

export const Chip = ({ children }) => (
  <li className="px-3 py-1.5 rounded-full bg-neutral-100 text-sm font-medium text-neutral-800">{children}</li>
);

export const ChipGroup = ({ title, items }) => (
  <div>
    <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500">{title}</h3>
    <ul className="mt-2 flex flex-wrap gap-2">{items.map((m) => <Chip key={m}>{m}</Chip>)}</ul>
  </div>
);

export const CheckList = ({ items, cols = 2 }) => (
  <ul className={`grid gap-x-6 gap-y-2.5 ${cols === 2 ? 'sm:grid-cols-2' : ''}`}>
    {items.map((f) => (
      <li key={f} className="flex gap-2.5 text-[15px]"><Check className="w-4 h-4 mt-1 shrink-0 text-[#ed1c23]" strokeWidth={3} />{f}</li>
    ))}
  </ul>
);

export const Badges = ({ items, light }) => items?.length > 0 && (
  <ul className="flex flex-wrap gap-2">
    {items.map((t) => (
      <li key={t} className={`px-3 py-1.5 rounded-full text-xs font-bold ${light ? 'bg-white/15 text-white ring-1 ring-white/30' : 'bg-[#ed1c23] text-white'}`}>{t}</li>
    ))}
  </ul>
);

export const SpecTable = ({ rows }) => (
  <dl className="rounded-xl ring-1 ring-neutral-200 divide-y divide-neutral-200 bg-white overflow-hidden">
    {rows.map(([k, v]) => (
      <div key={k} className="grid grid-cols-[130px_1fr] sm:grid-cols-[170px_1fr] gap-3 px-4 py-2.5 text-sm max-sm:grid-cols-[110px_1fr] max-sm:px-3">
        <dt className="font-semibold">{k}</dt><dd className="text-neutral-600">{v}</dd>
      </div>
    ))}
  </dl>
);

export const Breadcrumb = ({ trail }) => (
  <nav aria-label="Breadcrumb" className="max-w-[1400px] mx-auto px-4 md:px-8 pt-6">
    <ol className="flex flex-wrap items-center gap-1.5 text-sm text-neutral-500 max-sm:text-[13px]">
      {trail.map(([label, to], i) => (
        <li key={label} className="flex items-center gap-1.5">
          {i > 0 && <ChevronRight className="w-3.5 h-3.5" />}
          {to ? <Link to={to} className="hover:text-[#ed1c23]">{label}</Link> : <span className="font-semibold text-neutral-900">{label}</span>}
        </li>
      ))}
    </ol>
  </nav>
);

// Red footer variant (Jaquar cards): image on white, title + link on a red band.
const RedProductCard = ({ brandId, p }) => (
  <Link to={`/trading/${brandId}/${p.id}`} className="group h-full flex flex-col rounded-2xl overflow-hidden ring-1 ring-neutral-200 hover:ring-[#ed1c23] hover:shadow-lg bg-white transition-all">
    <div className="overflow-hidden bg-white">
      <img src={img(p.cover || p.images[0][0])} alt={p.images[0][1]} loading="lazy" className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105" />
    </div>
    <div className="flex-1 flex items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-3.5 bg-[#ed1c23] group-hover:bg-[#c9141a] text-white transition-colors">
      <h3 className="min-w-0 font-medium tracking-tight leading-snug text-[15px] sm:text-lg lg:text-xl">{p.name}</h3>
      <span className="w-7 h-7 sm:w-9 sm:h-9 shrink-0 rounded-full ring-1 ring-white/50 group-hover:bg-white group-hover:text-[#ed1c23] flex items-center justify-center transition-colors">
        <ArrowRight className="w-4 h-4" />
      </span>
    </div>
  </Link>
);

export const ProductCard = ({ red = false, ...props }) => (red ? <RedProductCard {...props} /> : <PlainProductCard {...props} />);

const PlainProductCard = ({ brandId, p, featured = false, compact = false }) => (
  <Link to={`/trading/${brandId}/${p.id}`} className="group h-full flex flex-col rounded-2xl overflow-hidden ring-1 ring-neutral-200 hover:ring-[#ed1c23] hover:shadow-lg bg-white transition-all">
    <div className={`overflow-hidden bg-neutral-100 ${featured ? 'relative flex-1 aspect-[4/3] lg:aspect-auto max-sm:flex-none' : ''}`}>
      <img src={img(p.cover || p.images[0][0])} alt={p.images[0][1]} loading="lazy" className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${featured ? 'absolute inset-0 h-full' : compact ? 'aspect-[16/9] max-sm:aspect-[4/3]' : 'aspect-[4/3]'}`} />
    </div>
    <div className={`flex flex-col ${compact ? 'p-4' : 'p-5'} max-sm:p-3 ${featured ? "max-sm:flex-1" : "flex-1"}`}>
      <h3 className={`font-medium tracking-tight leading-snug group-hover:text-[#ed1c23] transition-colors text-lg lg:text-xl max-sm:text-[15px] ${compact ? '' : 'min-h-[2.75em] max-sm:min-h-0'}`}>{p.name}</h3>
      <span className={`mt-auto ${compact ? 'pt-3' : 'pt-5'} max-sm:pt-2.5 flex items-center justify-between gap-2 text-sm max-sm:text-xs font-bold text-[#ed1c23]`}>
        View Product
        <span className="w-9 h-9 max-sm:w-7 max-sm:h-7 shrink-0 rounded-full ring-1 ring-[#ed1c23]/30 group-hover:bg-[#ed1c23] group-hover:text-white flex items-center justify-center transition-colors">
          <ArrowRight className="w-4 h-4 max-sm:w-3.5 max-sm:h-3.5" />
        </span>
      </span>
    </div>
  </Link>
);

// One card per brand logo.
export const MoreBrands = ({ brands }) => {
  const cards = [];
  brands.forEach((o) => {
    o.logos.forEach((src) => {
      const existing = cards.find((c) => c.src === src);
      if (existing) existing.labels.push(o.product);
      else cards.push({ src, to: `/trading/${o.id}`, labels: [o.product] });
    });
  });

  return (
    <section className="border-t border-neutral-200 py-10 lg:py-14">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <h2 className="text-center text-2xl lg:text-3xl font-medium tracking-tight">More <span className="text-[#ed1c23]">Brands</span></h2>
        <ul className="mt-6 lg:mt-8 flex flex-wrap justify-center gap-3 lg:gap-4">
          {cards.map((c) => (
            <li key={c.src} className="w-[calc(50%-0.375rem)] sm:w-52 lg:w-56">
              <Link to={c.to} aria-label={c.labels.join(", ")} className="group h-full flex items-center justify-center rounded-2xl ring-1 ring-neutral-200 hover:ring-[#ed1c23] hover:shadow-md bg-white px-4 py-6 max-sm:px-3 max-sm:py-4 transition-all">
                <span className="h-14 max-sm:h-11 w-full flex items-center justify-center">
                  <img src={c.src} alt="" className="max-h-full max-w-[80%] object-contain" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
