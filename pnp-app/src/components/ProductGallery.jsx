import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { img } from './TradingCommon';

export function Gallery({ images }) {
  const [shown, setShown] = useState(0);
  const strip = useRef(null);
  const n = images.length;
  const go = (d) => setShown((i) => (i + d + n) % n);

  // Keep the active thumbnail in view inside the strip.
  useEffect(() => {
    const el = strip.current?.children[shown];
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }, [shown]);

  const [mainSrc, mainAlt] = images[shown];
  const scrollStrip = (d) => strip.current?.scrollBy({ left: d * strip.current.clientWidth * 0.8, behavior: 'smooth' });

  return (
    <div>
      <div className="relative rounded-2xl overflow-hidden bg-white ring-1 ring-neutral-200">
        <img key={mainSrc} src={img(mainSrc)} alt={mainAlt} className="w-full aspect-[4/3] lg:aspect-auto lg:h-[min(52vh,520px)] object-cover animate-[fadeUp_.4s_ease]" />
        {n > 1 && (
          <>
            <button type="button" onClick={() => go(-1)} aria-label="Previous photo" className="absolute left-3 max-sm:left-2 top-1/2 -translate-y-1/2 w-10 h-10 max-sm:w-9 max-sm:h-9 rounded-full bg-white/90 ring-1 ring-neutral-200 hover:bg-[#ed1c23] hover:text-white hover:ring-[#ed1c23] flex items-center justify-center transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button type="button" onClick={() => go(1)} aria-label="Next photo" className="absolute right-3 max-sm:right-2 top-1/2 -translate-y-1/2 w-10 h-10 max-sm:w-9 max-sm:h-9 rounded-full bg-white/90 ring-1 ring-neutral-200 hover:bg-[#ed1c23] hover:text-white hover:ring-[#ed1c23] flex items-center justify-center transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
            <span className="absolute right-3 bottom-3 px-2.5 py-1 rounded-full bg-black/60 text-white text-xs font-semibold tabular-nums">{shown + 1} / {n}</span>
          </>
        )}
      </div>

      {n > 1 && (
        <div className="relative mt-3">
          <ul ref={strip} className="flex gap-2 lg:gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {images.map(([src, alt], i) => (
              <li key={src} className="snap-start shrink-0 w-[22%] sm:w-[18%] lg:w-[15%]">
                <button
                  type="button"
                  onClick={() => setShown(i)}
                  aria-label={`Show photo: ${alt}`}
                  aria-pressed={i === shown}
                  className={`block w-full rounded-xl overflow-hidden ring-2 transition-all ${i === shown ? 'ring-[#ed1c23]' : 'ring-transparent opacity-70 hover:opacity-100'}`}
                >
                  <img src={img(src)} alt="" loading="lazy" className="w-full aspect-square object-cover" />
                </button>
              </li>
            ))}
          </ul>
          {n > 5 && (
            <>
              <button type="button" onClick={() => scrollStrip(-1)} aria-label="Scroll thumbnails left" className="hidden sm:flex absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow ring-1 ring-neutral-200 items-center justify-center hover:text-[#ed1c23]">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button type="button" onClick={() => scrollStrip(1)} aria-label="Scroll thumbnails right" className="hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow ring-1 ring-neutral-200 items-center justify-center hover:text-[#ed1c23]">
                <ChevronRight className="w-4 h-4" />
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export function RangeTable({ range, title = true }) {
  return (
    <div>
      {title && <h2 className="text-2xl lg:text-4xl font-medium tracking-tight">Full <span className="text-[#ed1c23]">Range</span></h2>}
      <div className="mt-6 lg:mt-8 rounded-2xl ring-1 ring-neutral-200 overflow-x-auto">
        <table className="w-full min-w-[640px] max-sm:min-w-[520px] text-left text-sm">
          <thead className="bg-neutral-50 text-xs font-bold uppercase tracking-widest text-neutral-500">
            <tr>{range.columns.map((c) => <th key={c} className="px-5 py-3 max-sm:px-3">{c}</th>)}</tr>
          </thead>
          <tbody className="divide-y divide-neutral-200">
            {range.rows.map(([type, series, lengths, tag]) => (
              <tr key={series + lengths}>
                <td className="px-5 py-3.5 max-sm:px-3 max-sm:py-3 font-semibold text-[#ed1c23]">{type}</td>
                <td className="px-5 py-3.5 max-sm:px-3 max-sm:py-3 font-semibold whitespace-nowrap">{series}</td>
                <td className="px-5 py-3.5 max-sm:px-3 max-sm:py-3 text-neutral-600">
                  {lengths}
                  {tag && <span className="ml-2 inline-block px-2 py-0.5 rounded-full bg-[#ed1c23] text-white text-[11px] font-bold">{tag}</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
