import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { NYTEX_CATALOGUE, NYTEX_IMG as IMG, yarns, yarnOptions, benefits, applications, otherYarnProducts, yarnGrades, crimpGrades } from '../data/nytexData';
import { Eyebrow } from '../components/NytexCommon';
import CtaBannerSection from '../components/CtaBannerSection';

// Representative photos, all CC0 or public domain on Wikimedia Commons, so no credit line is needed.
const BENEFIT_IMAGES = {
  'Skin Friendly': 'benefit-skin',
  'Higher Strength': 'benefit-strength',
  'High Stretchability': 'benefit-stretch',
  'Better Wicking': 'benefit-wicking',
  'Light in Weight': 'benefit-light',
  'Better Drapability': 'benefit-drape',
  'Abrasion Resistance': 'benefit-abrasion',
  'Easily Dyeable': 'benefit-dye',
  'Shape Retention': 'benefit-shape',
  'Soft & Bulky': 'benefit-soft',
};

const developments = [
  { title: 'Colour Yarn in Nylon', text: 'Nylon yarn produced in colour, alongside raw white.' },
  { title: 'Spindex Yarn in Nylon', text: 'For sportswear and swimwear, a growing trend in India.' },
];

const optionValues = (label) => yarnOptions.find((o) => o.label === label).values;

const LUSTER_NAMES = { SD: 'Semi Dull', FD: 'Full Dull', BRT: 'Bright' };
const lusterName = (code) => code.split('/').map((c) => LUSTER_NAMES[c]).join(' / ');

function SpecTile({ label, onRed, inline = false, children }) {
  return (
    <div className={`rounded-xl px-3 py-2.5 ${inline ? 'flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-3' : ''} ${onRed ? 'bg-white/15' : 'bg-red-50'}`}>
      <dt className={`shrink-0 text-sm sm:text-base font-medium ${onRed ? 'text-[#fff100]' : 'text-[#ed1c23]'}`}>{label}</dt>
      <dd className={inline ? '' : 'mt-1'}>{children}</dd>
    </div>
  );
}

function Chips({ items, onRed }) {
  return (
    <span className={`font-medium ${onRed ? 'text-white' : 'text-neutral-900'}`}>
      {items.map((item, i) => (
        <span key={item} className="inline-block">
          {item}{i < items.length - 1 && <span className="mr-2">,</span>}
        </span>
      ))}
    </span>
  );
}

function GradeChart({ grades, onRed = false }) {
  const head = onRed ? 'text-[#fff100]' : 'text-[#ed1c23]';
  const rule = onRed ? 'border-white/40' : 'border-neutral-200';
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-[13px] sm:text-[15px] font-medium">
        <thead className={`text-sm sm:text-base ${head}`}>
          <tr>
            <th className="py-2 pr-2 sm:pr-4 font-medium">Denier</th>
            <th className="py-2 pr-2 sm:pr-4 font-medium">Shape</th>
            <th className="py-2 pr-2 sm:pr-4 font-medium">Luster</th>
            <th className="py-2 font-medium">Filaments</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((g) => (
            <tr key={`${g.denier}-${g.shape}`} className={`border-t ${rule}`}>
              <td className="py-2 pr-2 sm:pr-4 whitespace-nowrap">{g.denier}</td>
              <td className="py-2 pr-2 sm:pr-4">{g.shape}</td>
              <td className="py-2 pr-2 sm:pr-4">
                <span className="hidden sm:inline">{lusterName(g.luster)}</span>
                <span className="sm:hidden">{lusterName(g.luster).replace(/(Semi|Full) Dull/g, '$1 Dull')}</span>
              </td>
              <td className="py-2 sm:whitespace-nowrap">{g.filaments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function BenefitPhoto({ name, textClass }) {
  return (
    <>
      <img src={`${IMG}/${BENEFIT_IMAGES[name]}.webp`} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
      <p className={`absolute inset-x-0 bottom-0 font-medium tracking-tight text-white ${textClass}`}>{name}</p>
    </>
  );
}

export default function NytexProductsPage({ onOpenEnquiry }) {
  return (
    <div className="bg-white text-neutral-900">

      {/* Hero: what this page covers */}
      <section className="relative flex flex-col justify-end min-h-[calc(100svh-89px)] overflow-hidden text-white">
        <img src={`${IMG}/yarn-spools.webp`} alt="NYTEX nylon yarn spools" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black via-black/65 to-transparent" />
        <div className="relative w-full flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-8 text-center px-4 md:px-8 pb-10 lg:pb-12">
          <h1 className="text-3xl xl:text-5xl font-medium tracking-tight max-lg:text-balance lg:whitespace-nowrap">Nylon 6 Yarns, Under One Roof</h1>
          <a href={NYTEX_CATALOGUE} download className="px-7 py-3.5 bg-[#ed1c23] hover:bg-[#c9141a] text-white text-sm font-bold rounded-full flex items-center justify-center gap-2 whitespace-nowrap transition-colors">
            <Download className="w-4 h-4" /> Download Catalogue
          </a>
        </div>
      </section>

      {/* What's new: a single looping strip */}
      <section id="new" aria-label="What's new at NYTEX" className="scroll-mt-24 bg-[#ed1c23] text-white overflow-hidden">
        {/* Phones: each line is wider than the screen, so show them still instead of scrolling */}
        <ul className="sm:hidden px-4 py-4 space-y-3">
          {developments.map((d) => (
            <li key={d.title} className="flex items-start gap-3">
              <span className="shrink-0 mt-0.5 px-2.5 py-0.5 rounded-full bg-white text-[#ed1c23] text-xs font-bold tracking-widest">NEW</span>
              <div className="min-w-0">
                <p className="font-medium text-[#fff100]">{d.title}</p>
                <p className="mt-0.5 text-sm leading-snug">{d.text}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="hidden sm:block group/ticker overflow-x-auto motion-safe:overflow-hidden">
          <ul className="flex w-max py-3.5 motion-safe:animate-[nytex-loop_45s_linear_infinite] group-hover/ticker:[animation-play-state:paused]">
            {Array.from({ length: 8 }, () => developments).flat().map((d, i) => (
              <li key={i} aria-hidden={i >= developments.length} className="flex items-center gap-3 pr-14 whitespace-nowrap">
                <span className="px-2.5 py-0.5 rounded-full bg-white text-[#ed1c23] text-xs font-bold tracking-widest">NEW</span>
                <span className="text-lg font-medium text-[#fff100]">{d.title}</span>
                <span>{d.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Yarn range: one full-width spread per yarn */}
      <section id="range" className="scroll-mt-24">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12 lg:py-16 text-center">
          <Eyebrow>Our Products</Eyebrow>
          <h2 className="mt-3 text-3xl lg:text-5xl font-medium tracking-tight max-lg:text-balance">Five Types of <span className="text-[#ed1c23]">Nylon Yarn</span></h2>
          <nav aria-label="Jump to a yarn" className="mt-6 grid grid-cols-5 gap-2 sm:flex sm:flex-wrap sm:justify-center">
            {yarns.map((y) => (
              <a key={y.code} href={`#${y.code.toLowerCase()}`} className="flex items-center justify-center h-11 lg:h-auto sm:px-5 lg:py-2 rounded-full ring-1 ring-neutral-300 hover:ring-[#ed1c23] hover:bg-[#ed1c23] hover:text-white text-sm font-bold transition-colors">{y.code}</a>
            ))}
          </nav>
        </div>

        {yarns.map((y, i) => {
          const red = i % 2 === 1;
          return (
            <article key={y.code} id={y.code.toLowerCase()} className={`scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 ${red ? 'bg-[#ed1c23] text-white' : 'bg-white text-neutral-900'}`}>
              <div className={`relative h-56 sm:h-96 lg:h-auto overflow-hidden group/photo ${red ? 'lg:order-last' : ''}`}>
                <img src={`${IMG}/yarn-${y.code.toLowerCase()}.webp`} alt={`${y.name} (representative image)`} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover/photo:scale-105 transition-transform duration-700" />
              </div>

              <div className="px-4 md:px-8 lg:px-10 xl:px-12 py-6 lg:py-8">
                <h3 className="flex flex-wrap items-baseline gap-x-3">
                  <span className={`text-5xl lg:text-6xl font-medium tracking-tighter leading-none ${red ? 'text-[#fff100]' : 'text-[#ed1c23]'}`}>{y.code}</span>
                  <span className="text-xl lg:text-2xl font-medium tracking-tight">{y.name}</span>
                </h3>
                {y.note && <p className="mt-1 text-sm font-semibold">{y.note}</p>}
                <p className={`mt-2 leading-relaxed ${red ? 'text-white' : 'text-neutral-600'}`}>{y.description} Typical uses: {y.uses}.</p>

                <dl className="mt-4 space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <SpecTile label="Denier" onRed={red} inline><span className={`text-xl xl:text-2xl font-medium tracking-tight whitespace-nowrap ${red ? 'text-white' : 'text-neutral-900'}`}>{y.min}D–{y.max}D</span></SpecTile>
                    <SpecTile label="Filaments" onRed={red} inline><span className={`text-xl xl:text-2xl font-medium tracking-tight whitespace-nowrap ${red ? 'text-white' : 'text-neutral-900'}`}>{y.filaments.replace(' to ', '–')}</span></SpecTile>
                    <SpecTile label="Luster" onRed={red} inline><Chips items={optionValues('Luster')} onRed={red} /></SpecTile>
                    <SpecTile label="Available In" onRed={red} inline><Chips items={optionValues('Colour')} onRed={red} /></SpecTile>
                  </div>
                  <SpecTile label="Filament Shapes" onRed={red}><Chips items={optionValues('Shape')} onRed={red} /></SpecTile>
                </dl>

                {yarnGrades[y.code] && (
                  <div className="mt-4">
                    <h4 className="font-bold">Standard Grades</h4>
                    <div className="mt-2 sm:px-3"><GradeChart grades={yarnGrades[y.code]} onRed={red} /></div>
                  </div>
                )}

                <button onClick={() => onOpenEnquiry(`NYTEX ${y.code} - ${y.name}`)} className={`mt-4 w-full sm:w-auto px-6 py-3.5 sm:py-2.5 text-sm font-bold rounded-full inline-flex items-center justify-center gap-2 transition-colors ${red ? 'bg-white text-[#ed1c23] hover:bg-[#fff100]' : 'bg-[#ed1c23] text-white hover:bg-[#c9141a]'}`}>
                  Enquire About {y.code} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          );
        })}

        <div className="bg-[#fffaa7]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <h3 className="text-2xl lg:text-3xl font-medium tracking-tight">Crimp <span className="text-[#ed1c23]">Yarn</span></h3>
            <div className="mt-4 lg:max-w-[92%]"><GradeChart grades={crimpGrades} /></div>
          </div>
          <div>
            <h3 className="text-2xl lg:text-3xl font-medium tracking-tight">Also in Our <span className="text-[#ed1c23]">Product Category</span></h3>
            <p className="mt-4 text-lg text-neutral-900 leading-relaxed">{otherYarnProducts.join(', ')}</p>
          </div>
        </div></div>
      </section>

      {/* Benefits: why nylon */}
      <section id="benefits" className="scroll-mt-24 py-14 lg:py-20 bg-white overflow-hidden">
        <h2 className="px-4 text-center text-3xl lg:text-5xl font-medium tracking-tight max-lg:text-balance">Benefits of <span className="text-[#ed1c23]">Nylon Yarn</span></h2>
        {/* Phones: all ten at a glance, since the moving strip below can't be swiped */}
        <ul className="sm:hidden mt-8 px-4 grid grid-cols-2 gap-3">
          {benefits.map((b) => (
            <li key={b} className="relative h-40 rounded-2xl overflow-hidden">
              <BenefitPhoto name={b} textClass="px-3 pb-3 text-base leading-snug" />
            </li>
          ))}
        </ul>
        <div className="hidden sm:block group/loop mt-10 overflow-x-auto motion-safe:overflow-hidden">
          <ul className="flex w-max gap-4 px-2 motion-safe:animate-[nytex-loop_50s_linear_infinite] group-hover/loop:[animation-play-state:paused]">
            {[...benefits, ...benefits].map((b, i) => (
              <li key={`${b}-${i}`} aria-hidden={i >= benefits.length} className="relative w-56 lg:w-64 h-64 lg:h-80 shrink-0 rounded-2xl overflow-hidden">
                <BenefitPhoto name={b} textClass="px-4 pb-4 text-xl" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Applications: where it goes */}
      <section id="applications" className="scroll-mt-24 pb-14 lg:pb-20">
        <div className="px-4 text-center">
          <Eyebrow>Applications</Eyebrow>
          <h2 className="mt-3 text-3xl lg:text-5xl font-medium tracking-tight max-lg:text-balance">Where Nylon Yarn <span className="text-[#ed1c23]">Is Used</span></h2>
        </div>
        <ul className="mt-10 lg:mt-12 flex flex-col lg:flex-row gap-1 lg:h-[480px]">
          {applications.map((a) => (
            <li key={a.title} className="relative h-56 sm:h-72 lg:h-auto lg:flex-1 lg:hover:flex-[1.8] overflow-hidden text-white transition-[flex-grow] duration-500 ease-out">
              <img src={`${IMG}/${a.image}.webp`} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 h-full lg:h-3/4 bg-gradient-to-t from-black/90 via-black/60 lg:via-black/50 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6">
                <h3 className="text-2xl font-medium tracking-tight">{a.title}</h3>
                <p className="mt-1.5 leading-relaxed">{a.items.join(', ')}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <CtaBannerSection onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
}
