import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { ArrowRight, Bug, Building2, Check, Download, Drill, Droplet, Droplets, Factory, Feather, FileText, FlaskConical, Flame, Gem, GraduationCap, Hammer, Hand, Hospital, Hotel, Leaf, Maximize2, Paintbrush, PenTool, Printer, Scissors, Shield, ShieldCheck, ShieldPlus, Ship, Sparkles, Timer, VolumeX, Wrench, X, Zap } from 'lucide-react';
import CtaBannerSection from '../components/CtaBannerSection';
import { brands, findBrand } from '../data/tradingData';
import { Breadcrumb, ChipGroup, MoreBrands, ProductCard, img } from '../components/TradingCommon';
import HaoBrandPage from './HaoBrandPage';
import TieBrandPage from './TieBrandPage';
import PnpBrandPage from './PnpBrandPage';
import JaquarBrandPage from './JaquarBrandPage';
import { Gallery, RangeTable } from '../components/ProductGallery';


// Icon picks for characteristics, tools and client industries.
const charRules = [
  [/corrosion/i, ShieldCheck], [/print/i, Printer], [/screw/i, Hammer], [/impact/i, Shield], [/fire|flame/i, Flame],
  [/speedy/i, Timer], [/installation/i, Zap], [/maintenance/i, Sparkles], [/chemical/i, FlaskConical], [/termite|pest/i, Bug],
  [/environment|eco/i, Leaf], [/water/i, Droplets], [/toxic/i, ShieldPlus], [/sound/i, VolumeX], [/light/i, Feather],
  [/splinter/i, Hand], [/shrink/i, Maximize2], [/aesthetic/i, Gem], [/paint/i, Paintbrush],
];
const certIcon = (t) => (/flam/i.test(t) ? Flame : /phthal/i.test(t) ? FlaskConical : Leaf);
const charIcon = (t) => charRules.find(([re]) => re.test(t))?.[1] || Check;
const toolIcons = { Screws: Wrench, Cutting: Scissors, Nailing: Hammer, Drilling: Drill, Painting: Paintbrush, Gluing: Droplet, Routing: PenTool };
const industryRules = [[/hospital|health/i, Hospital], [/hotel|hospitality/i, Hotel], [/educat/i, GraduationCap], [/yacht|ship/i, Ship], [/industr|engineer|mill|chemical|petroleum|manufact/i, Factory]];
const industryIcon = (t) => industryRules.find(([re]) => re.test(t))?.[1] || Building2;

// Yes/No with icons; "good" flips meaning for rows like Cracking.
const Verdict = ({ v, good = true, muted }) => {
  if (v !== 'Yes' && v !== 'No') return <span>{v}</span>;
  const positive = (v === 'Yes') === good;
  const Icon = positive ? Check : X;
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className={`w-5 h-5 rounded-full flex items-center justify-center ${positive ? (muted ? 'bg-neutral-200 text-neutral-600' : 'bg-[#ed1c23] text-white') : 'bg-neutral-100 text-neutral-400'}`}><Icon className="w-3 h-3" strokeWidth={3} /></span>{v}
    </span>
  );
};

const Section = ({ id, className = '', children }) => (
  <section id={id} className={`scroll-mt-24 py-12 lg:py-16 ${className}`}>
    <div className="max-w-[1400px] mx-auto px-4 md:px-8">{children}</div>
  </section>
);
const Title = ({ a, b, center }) => (
  <h2 className={`text-3xl lg:text-5xl font-medium tracking-tight ${center ? 'text-center' : ''}`}>{a} <span className="text-[#ed1c23]">{b}</span></h2>
);

export default function TradingBrandPage({ onOpenEnquiry }) {
  const { brandId } = useParams();
  const b = findBrand(brandId);
  if (!b) return <Navigate to="/trading" replace />;
  if (b.id === 'hao') return <HaoBrandPage onOpenEnquiry={onOpenEnquiry} />;
  if (b.id === 'tie') return <TieBrandPage onOpenEnquiry={onOpenEnquiry} />;
  if (b.id === 'pnp') return <PnpBrandPage onOpenEnquiry={onOpenEnquiry} />;
  if (b.id === 'jaquar') return <JaquarBrandPage onOpenEnquiry={onOpenEnquiry} />;

  const groups = b.productGroups
    ? b.productGroups.map(([title, ids]) => [title, ids.map((id) => b.products.find((p) => p.id === id))])
    : [[null, b.products]];
  const others = brands.filter((x) => x.id !== b.id);
  const logo = b.logos?.[0];

  return (
    <div className="bg-white text-neutral-900">

      {/* Hero: brand panel + photo */}
      <section className="relative overflow-hidden bg-neutral-50">
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-[52%]">
          <img src={img(b.hero)} alt={b.heroAlt} className="w-full h-64 sm:h-96 lg:h-full object-cover lg:[clip-path:polygon(12%_0,100%_0,100%_100%,0_100%)]" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-4 md:px-8 py-10 lg:py-0 lg:min-h-[calc(100svh-89px)] flex items-center">
          <div className="lg:w-[48%] lg:pr-10">
            {logo ? <img src={logo} alt={b.name} className="h-16 sm:h-20 lg:h-24 w-auto max-w-[80%] object-contain object-left" /> : <p className="text-4xl font-medium">{b.name}</p>}
            <h1 className="mt-8 max-sm:mt-6 max-sm:text-[2.1rem] text-4xl sm:text-5xl xl:text-6xl font-medium tracking-tight leading-[1.05]">{b.product}</h1>
            <div className="mt-8 max-sm:mt-6 flex flex-col sm:flex-row gap-3">
              <a href={b.products.length ? '#products' : '#overview'} className="px-7 py-3.5 bg-[#ed1c23] hover:bg-[#c9141a] text-white text-sm font-bold rounded-full flex items-center justify-center gap-2 transition-colors">
                {b.products.length ? 'View Products' : 'Explore'} <ArrowRight className="w-4 h-4" />
              </a>
              {b.catalogue ? (
                <a href={b.catalogue} download className="px-7 py-3.5 ring-1 ring-neutral-900 hover:bg-neutral-900 hover:text-white text-sm font-bold rounded-full flex items-center justify-center gap-2 transition-colors">
                  <Download className="w-4 h-4" /> Download Catalogue
                </a>
              ) : b.catalogueList && (
                <a href="#catalogues" className="px-7 py-3.5 ring-1 ring-neutral-900 hover:bg-neutral-900 hover:text-white text-sm font-bold rounded-full flex items-center justify-center gap-2 transition-colors">
                  <Download className="w-4 h-4" /> Catalogues
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      <Breadcrumb trail={[['Trading', '/trading'], [b.name]]} />

      {/* Overview */}
      <Section id="overview" className="!pt-8 lg:!pt-12">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          <div className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ed1c23]">{b.full}</p>
            <p className="mt-3 text-2xl lg:text-3xl font-medium tracking-tight leading-snug">{b.tagline}</p>
            <p className="mt-4 text-neutral-600 leading-relaxed">{b.intro}</p>
            {b.badges?.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-2">
                {b.badges.map((t) => (
                  <li key={t} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#ed1c23]/[0.07] text-[#ed1c23] text-xs font-bold"><Check className="w-3.5 h-3.5" strokeWidth={3} /> {t}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="lg:col-span-7 space-y-7">
            {b.features && (
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {b.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 rounded-xl ring-1 ring-neutral-200 px-3.5 py-3 text-sm font-medium">
                    <span className="w-6 h-6 shrink-0 rounded-full bg-[#ed1c23] text-white flex items-center justify-center"><Check className="w-3.5 h-3.5" strokeWidth={3} /></span>{f}
                  </li>
                ))}
              </ul>
            )}
            {b.chipGroups?.map(([t, items]) => <ChipGroup key={t} title={t} items={items} />)}
          </div>
        </div>
      </Section>

      {/* Certifications */}
      {b.certifications && (
        <Section id="certifications" className="!pt-0">
          <div className="rounded-3xl bg-neutral-50 ring-1 ring-neutral-200 p-6 sm:p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
              <div className="flex items-center gap-5 max-sm:gap-4">
                <span className="w-36 h-24 lg:w-44 lg:h-28 max-sm:w-24 max-sm:h-16 max-sm:px-3 max-sm:py-2 shrink-0 rounded-2xl bg-white ring-1 ring-neutral-200 flex items-center justify-center px-5 py-4">
                  <img src={b.certifications.logo} alt="SGS" className="w-full h-auto" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ed1c23]">Independently Tested</p>
                  <h2 className="mt-1 text-3xl lg:text-5xl max-sm:text-2xl font-medium tracking-tight">SGS <span className="text-[#ed1c23]">Certified</span></h2>
                </div>
              </div>
              <p className="lg:ml-auto lg:max-w-md text-neutral-600 leading-relaxed">
                Synwood material has been tested by {b.certifications.body} for formaldehyde emission, phthalates content and fire performance.
              </p>
            </div>

            <ul className="mt-8 lg:mt-10 grid md:grid-cols-3 gap-4 lg:gap-6">
              {b.certifications.reports.map((r) => (
                <li key={r.no} className="flex flex-col rounded-2xl bg-white ring-1 ring-neutral-200 overflow-hidden">
                  <div className="flex-1 flex flex-col p-5 lg:p-6 max-sm:p-4">
                    <div className="flex items-center justify-between gap-3">
                      <img src={b.certifications.logo} alt="SGS" className="h-10 w-auto" />
                      <span className="w-11 h-11 rounded-xl bg-[#ed1c23]/[0.08] text-[#ed1c23] flex items-center justify-center">{React.createElement(certIcon(r.title), { className: 'w-5 h-5', strokeWidth: 1.75 })}</span>
                    </div>
                    <h3 className="mt-3 text-xl lg:text-2xl font-medium tracking-tight">{r.title}</h3>
                    <p className="mt-2 inline-flex w-fit items-center gap-1.5 px-3 py-1 rounded-full bg-[#ed1c23] text-white text-xs font-bold"><Check className="w-3.5 h-3.5" strokeWidth={3} /> {r.result}</p>
                    <p className="mt-3 text-sm text-neutral-600 leading-relaxed">{r.detail}</p>
                    <dl className="mt-auto pt-4 grid grid-cols-3 gap-2 text-xs border-t border-neutral-100">
                      <div><dt className="text-neutral-400">Report No.</dt><dd className="mt-0.5 font-semibold break-all">{r.no}</dd></div>
                      <div><dt className="text-neutral-400">Date</dt><dd className="mt-0.5 font-semibold">{r.date}</dd></div>
                      <div><dt className="text-neutral-400">Sample</dt><dd className="mt-0.5 font-semibold">{r.sample}</dd></div>
                    </dl>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      )}

      {/* Single product shown directly on the brand page */}
      {b.single && (
        <Section id="products" className="!pt-0">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            <div className="lg:col-span-7"><Gallery images={b.single.images} /></div>
            <div className="lg:col-span-5">
              <h2 className="text-3xl lg:text-4xl font-medium tracking-tight leading-tight">{b.single.name}</h2>
              <p className="mt-5 text-neutral-600 leading-relaxed">{b.single.desc}</p>
              <button type="button" onClick={() => onOpenEnquiry(`${b.name}: ${b.single.name}`)} className="mt-7 max-sm:w-full max-sm:justify-center px-6 py-3 bg-[#ed1c23] hover:bg-[#c9141a] text-white text-sm font-bold rounded-full flex items-center gap-2 transition-colors">
                Request a Quote <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          {b.single.range && <div className="mt-12 lg:mt-16"><RangeTable range={b.single.range} /></div>}
        </Section>
      )}

      {/* Gallery for brands without product pages */}
      {b.gallery && !b.single && (
        <Section className="!pt-0">
          <div className="grid grid-cols-3 gap-3 lg:gap-4 max-sm:gap-2">
            {b.gallery.map(([src, alt]) => <img key={src} src={img(src)} alt={alt} loading="lazy" className="w-full aspect-[4/3] rounded-2xl max-sm:rounded-xl object-cover" />)}
          </div>
        </Section>
      )}

      {/* Products */}
      {b.products.length > 0 && (
        <Section id="products" className="bg-neutral-50">
          <Title a={b.name} b="Products" center />
          {groups.map(([title, items]) => (
            <div key={title || 'all'} className="mt-8 lg:mt-10">
              {title && <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-[#ed1c23]">{title}</h3>}
              {/* Dense grid only when every row can hold at most one wide card; a row of only wide cards has no height. */}
              {items.length % 4 !== 0 && 4 - (items.length % 4) < items.length && 4 - (items.length % 4) <= (items.length + 4 - (items.length % 4)) / 4 ? (
                // A few cards span two columns so every row of the 4 column grid is full.
                <ul className="grid grid-cols-2 lg:grid-cols-4 grid-flow-dense gap-4 lg:gap-5">
                  {items.map((p, i) => {
                    const wideCount = 4 - (items.length % 4);
                    const step = Math.floor(items.length / wideCount);
                    const wide = i % step === 0 && i / step < wideCount;
                    return (
                      <li key={p.id} className={wide ? 'col-span-2 max-sm:col-span-1' : 'col-span-1'}>
                        <ProductCard brandId={b.id} p={p} featured={wide} />
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <ul className="flex flex-wrap justify-center gap-4 max-sm:gap-3 lg:gap-5">
                  {items.map((p) => <li key={p.id} className={`w-full max-sm:w-[calc(50%-0.375rem)] sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.84rem)] ${items.length === 5 ? '' : 'xl:w-[calc(25%-0.94rem)]'}`}><ProductCard brandId={b.id} p={p} compact={items.length === 5} /></li>)}
                </ul>
              )}
            </div>
          ))}
        </Section>
      )}

      {/* Characteristics: icon cards */}
      {b.characteristics && (
        <Section>
          <Title a="Characteristics of" b={b.name} center />
          <ul className="mt-8 lg:mt-12 flex flex-wrap justify-center gap-3 lg:gap-4">
            {b.characteristics.map((c) => {
              const Icon = charIcon(c);
              return (
                <li key={c} className="group w-[calc(50%-0.375rem)] sm:w-[calc(33.333%-0.5rem)] lg:w-[calc(20%-0.8rem)] xl:w-[calc(14.285%-0.86rem)] flex flex-col items-center text-center gap-3 rounded-2xl ring-1 ring-neutral-200 hover:ring-[#ed1c23] px-3 py-5 transition-colors">
                  <span className="w-12 h-12 rounded-xl bg-[#ed1c23]/[0.08] text-[#ed1c23] group-hover:bg-[#ed1c23] group-hover:text-white flex items-center justify-center transition-colors">
                    <Icon className="w-6 h-6" strokeWidth={1.75} />
                  </span>
                  <span className="text-sm font-semibold leading-snug">{c}</span>
                </li>
              );
            })}
          </ul>
        </Section>
      )}

      {/* Synwood vs plywood */}
      {b.compare && (
        <Section className="bg-neutral-50">
          <Title a={`${b.name} vs`} b="Plywood" center />
          <div className="mt-8 lg:mt-12 max-w-4xl mx-auto rounded-3xl bg-white ring-1 ring-neutral-200 overflow-hidden">
            <div className="grid grid-cols-[1.3fr_1fr_1fr] text-sm font-bold uppercase tracking-widest max-sm:text-[11px] max-sm:tracking-wider">
              <span className="px-5 py-4 max-sm:px-3 max-sm:py-3 text-neutral-400">Property</span>
              <span className="px-5 py-4 max-sm:px-2 max-sm:py-3 bg-[#ed1c23] text-white text-center">{b.name}</span>
              <span className="px-5 py-4 max-sm:px-2 max-sm:py-3 text-neutral-500 text-center">Plywood</span>
            </div>
            {b.compare.rows.map(([k, a, c]) => (
              <div key={k} className="grid grid-cols-[1.3fr_1fr_1fr] border-t border-neutral-100 text-sm max-sm:text-[13px]">
                <span className="px-5 py-3.5 max-sm:px-3 max-sm:py-3 font-semibold">{k}</span>
                <span className="px-5 py-3.5 max-sm:px-2 max-sm:py-3 bg-[#ed1c23]/[0.05] text-center font-semibold text-[#ed1c23]"><Verdict v={a} good={k !== 'Cracking'} /></span>
                <span className="px-5 py-3.5 max-sm:px-2 max-sm:py-3 text-center text-neutral-500"><Verdict v={c} good={k !== 'Cracking'} muted /></span>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Works like wood */}
      {b.tools && (
        <Section>
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            <div className="lg:col-span-4">
              <Title a="Works Like" b="Wood" />
              <p className="mt-4 text-lg max-sm:text-base text-neutral-600">{b.name} can be worked with standard woodworking tools, just like wood.</p>
            </div>
            <ul className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
              {b.tools.map((t) => {
                const Icon = toolIcons[t] || Wrench;
                return (
                  <li key={t} className="flex flex-col items-center gap-3 rounded-2xl bg-neutral-50 px-3 py-5 max-sm:py-4">
                    <span className="w-12 h-12 rounded-full bg-white ring-1 ring-neutral-200 text-[#ed1c23] flex items-center justify-center"><Icon className="w-5 h-5" strokeWidth={1.75} /></span>
                    <span className="text-sm font-semibold">{t}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </Section>
      )}

      {/* Clients + certificate */}
      {b.clients && (
        <Section className="bg-neutral-50">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            <div className="lg:col-span-12">
              <Title a="Our" b="Clients" />
              <ul className="mt-6 grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
                {b.clients.map(([name, place, industry]) => {
                  const Icon = industryIcon(industry);
                  return (
                    <li key={name} className="flex items-center gap-3 rounded-xl bg-white ring-1 ring-neutral-200 px-3.5 py-3">
                      <span className="w-9 h-9 shrink-0 rounded-lg bg-[#ed1c23]/[0.08] text-[#ed1c23] flex items-center justify-center"><Icon className="w-4 h-4" strokeWidth={1.75} /></span>
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold leading-tight truncate">{name}</span>
                        <span className="block text-xs text-neutral-500 truncate">{industry} · {place}</span>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Section>
      )}

      {/* Catalogue downloads */}
      {b.catalogueList && (
        <Section id="catalogues">
          <Title a="Download" b="Catalogues" />
          <ul className="mt-6 lg:mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {b.catalogueList.map(([label, href]) => (
              <li key={href}>
                <a href={href} download className="group flex items-center gap-3 rounded-xl ring-1 ring-neutral-200 hover:ring-[#ed1c23] px-4 py-3.5 transition-colors">
                  <FileText className="w-5 h-5 shrink-0 text-[#ed1c23]" />
                  <span className="flex-1 font-medium leading-snug group-hover:text-[#ed1c23] transition-colors">{label}</span>
                  <Download className="w-4 h-4 text-neutral-400 group-hover:text-[#ed1c23]" />
                </a>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {/* Contact + branches */}
      {b.contact && (
        <Section>
          <div className="rounded-3xl bg-[#ed1c23] text-white p-6 sm:p-8 lg:p-12">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
              <div className="lg:col-span-4">
                <h2 className="text-2xl lg:text-4xl font-medium tracking-tight">Buy {b.name}</h2>
                <p className="mt-4 font-semibold">{b.contact.company}</p>
                <p className="mt-1 text-sm text-white/85">{b.contact.address}</p>
                <ul className="mt-4 space-y-1.5 text-sm">
                  <li>Tel: {b.contact.tel}</li><li>Fax: {b.contact.fax}</li>
                  <li><a href={`mailto:${b.contact.email}`} className="underline break-all">{b.contact.email}</a></li>
                  <li>{b.contact.web.join(' · ')}</li>
                </ul>
                <button type="button" onClick={() => onOpenEnquiry(`${b.name} enquiry`)} className="mt-6 max-sm:w-full max-sm:justify-center px-6 py-3 bg-white text-[#ed1c23] hover:bg-neutral-100 text-sm font-bold rounded-full flex items-center gap-2 transition-colors">
                  Request a Quote <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <ul className="lg:col-span-8 grid sm:grid-cols-2 gap-3">
                {b.branches.map(([city, addr, tel]) => (
                  <li key={city} className="rounded-2xl bg-white/10 p-4">
                    <p className="font-semibold">{city}</p>
                    <p className="mt-1 text-xs text-white/80 leading-relaxed">{addr}</p>
                    <a href={`tel:${tel.replace(/\s/g, '')}`} className="mt-2 block text-sm font-medium hover:underline">{tel}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      )}

      {/* Applications */}
      {b.applications && (
        <Section>
          <Title a="" b="Applications" />
          <dl className="mt-6 grid md:grid-cols-3 gap-3 lg:gap-4">
            {b.applications.map(([k, v]) => (
              <div key={k} className="rounded-2xl bg-neutral-50 p-5 lg:p-6">
                <dt className="text-lg font-bold text-[#ed1c23]">{k}</dt>
                <dd className="mt-1 text-sm text-neutral-600 leading-relaxed">{v}</dd>
              </div>
            ))}
          </dl>
        </Section>
      )}

      <MoreBrands brands={others} />
      <CtaBannerSection onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
}
