import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import CountUp from '../components/CountUp';
import {
  ArrowRight, Download, PlayCircle, Award, Users, Boxes, Truck, Globe2,
  Scale, Star, Flag, Quote, Target, Eye, ChevronRight, Factory, Handshake, Store,
} from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const inView = { initial: 'hidden', whileInView: 'visible', viewport: { once: false, amount: 0.15 } };
const YT = 'https://www.youtube.com/watch?v=2bj_SXejLSI';
const L = (n) => `/assets/businesses/logo-${n}.webp`;

function Eyebrow({ children, light }) {
  return (
    <span className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] ${light ? 'text-white/80' : 'text-[#ed1c23]'}`}>
      {children}
    </span>
  );
}

const heroBrands = ['nytex', 'pnp', 'synwood', 'haowood', 'hao', 'tie', 'baginnov'];

const keyFacts = [
  { value: '1997', label: 'Established' },
  { value: '25%', label: 'Coated fabric share' },
  { value: '11', label: 'Offices pan-India' },
  { value: '4', label: 'Business verticals', hideOnMobile: true },
  { value: '28+', label: 'Years of trust' },
];

const overviewPoints = [
  { title: 'Who We Are', text: 'India’s No. 1 coated cloth brand and the maker of NYTEX nylon filament yarn.' },
  { title: 'What We Do', text: 'Yarn, fabrics, synthetic wood, ventilators, roofing screws, racking and retail.' },
  { title: 'Whom We Serve', text: 'Industries and customers across India and abroad.' },
  { title: 'How We Add Value', text: 'Quality products, unmatched service, fair and transparent policies.' },
];

const divisions = [
  {
    name: 'Manufacturing', icon: Factory, to: '/manufacturing', image: '/assets/businesses/nytex-hq-new.webp',
    brands: [{ logo: L('nytex'), name: 'NYTEX', note: 'Nylon filament yarn' }],
  },
  {
    name: 'Trading & Distribution', icon: Handshake, to: '/trading', image: '/assets/products/synwood-boards-hq.webp',
    brands: [
      { logo: L('pnp'), name: 'PNP', small: true, note: 'PNP Polytex' },
      { logo: L('synwood'), name: 'Synwood', small: true, note: 'Synthetic wood' },
      { logo: L('haowood'), name: 'Haowood', small: true, note: 'Synthetic wood' },
      { logo: L('hao'), name: 'HAO', small: true, note: 'Air ventilators' },
      { logo: L('tie'), name: 'TIE', note: 'Roofing screws' },
      { logo: '/assets/businesses/logo-jaquar.webp', name: 'Jaquar', note: 'Lighting distribution' },
    ],
  },
  {
    name: 'Retail', icon: Store, to: '/retail', image: '/assets/businesses/baginnov-hq.webp',
    brands: [{ logo: L('baginnov'), name: 'BAGINNOV', note: 'Bags & luggage mall' }],
  },
];

const milestones = [
  { y: '1997', t: 'The Beginning', d: 'PNP begins its journey with filament yarn.', img: '/assets/products/nylon-yarn-hq.webp' },
  { y: '2001', t: 'PNP Polytex Incorporated', d: 'PNP Polytex Pvt. Ltd. incorporated.', img: 'https://images.unsplash.com/photo-1758519288905-38b7b00c1023?auto=format&fit=crop&w=1200&q=75' },
  { y: '2002', t: 'Branded Coated Cloth', d: 'Coated cloth launched under the brands PNP and Aasutex.', img: '/assets/products/luggage-fabric-hq.webp' },
  { y: '2003', t: 'Pan-India Expansion', d: 'Nine branches opened across India.', img: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=1200&q=75' },
  { y: '2004', t: 'Market Leader', d: 'No. 1 in luggage and bag fabric.', img: 'https://images.unsplash.com/photo-1640767760729-7bfb6ce43ad4?auto=format&fit=crop&w=1200&q=75' },
  { y: '2005', t: 'Echolac in India', d: 'Japan’s most reputed luggage brand brought to India.', img: 'https://images.unsplash.com/photo-1670888664952-efff442ec0d2?auto=format&fit=crop&w=1200&q=75' },
  { y: '2008', t: 'New Industrial Brands', d: 'HAO ventilators, PNP racking and TIE roofing screws launched.', img: '/assets/products/turbo-ventilators-hq.webp' },
  { y: '2009', t: 'Specified by Name', d: 'First BMC order specifying “PNP” fabric.', img: 'https://images.unsplash.com/photo-1569758267239-d08deb78bb1a?auto=format&fit=crop&w=1200&q=75' },
  { y: '2010', t: 'Synwood Launched', d: 'Third-generation synthetic wood, a 100% replacement for wood.', img: '/assets/products/synwood-boards-hq.webp' },
  { y: '2011', t: 'Texturising Unit', d: 'Texturising unit started at Silvassa.', img: 'https://images.unsplash.com/photo-1758270804188-8ca0b6d254bc?auto=format&fit=crop&w=1200&q=75' },
  { y: '2018', t: 'NYTEX, Bhilad', d: 'Nylon filament yarn plant with Barmag machines from Germany.', img: '/assets/businesses/nytex-hq-new.webp' },
  { y: '2026', t: 'Leading Today', d: '25% of India’s coated fabric market, 10 offices in India and 1 in Taipei.', img: '/assets/about/building.webp' },
];

const firsts = [
  { text: 'World’s first branded luggage fabric', image: 'https://images.unsplash.com/photo-1534534573898-db5148bc8b0c?auto=format&fit=crop&w=1200&q=75' },
  { text: 'First brand embossed on coated fabric', image: 'https://images.unsplash.com/photo-1601056639638-c53c50e13ead?auto=format&fit=crop&w=1200&q=75' },
  { text: 'Only all-India coated cloth network', image: 'https://images.unsplash.com/photo-1619392553201-3d9ab3169271?auto=format&fit=crop&w=1200&q=75' },
  { text: 'First double-exhaust air ventilator', image: '/assets/products/turbo-ventilators-hq.webp' },
  { text: 'First 17-bend heavy-duty rack', image: '/assets/products/racking-hq.webp' },
  { text: 'First PVC foamed sheet in India', image: '/assets/products/synwood-boards-hq.webp' },
];

const values = [
  { icon: Scale, title: 'Integrity', text: 'Fair and transparent in business.', img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=75' },
  { icon: Star, title: 'Excellence', text: 'The highest standards, every time.', img: 'https://images.unsplash.com/photo-1746737198845-e1e74bea786e?auto=format&fit=crop&w=1200&q=75' },
  { icon: Flag, title: 'Responsibility', text: 'Committed to India’s industrial growth.', img: 'https://images.unsplash.com/photo-1649587345666-0f4ad68aa723?auto=format&fit=crop&w=1200&q=75' },
];

const usps = [
  { icon: Award, title: 'Quality', desc: 'The best products and service, on time.' },
  { icon: Boxes, title: 'Huge Ready\nInventory', desc: 'Products always available for customers.' },
  { icon: Users, title: 'Customer Oriented', desc: 'Products tailored to customer needs.' },
  { icon: Truck, title: 'Strong Distribution', desc: '10 offices in India and 1 in Taipei.' },
  { icon: Globe2, title: 'New & Innovative Products', desc: 'Innovative products from the rest of the world to India.' },
  { icon: Scale, title: 'Fair & Transparent Policies', desc: 'Clear, honest dealings with every customer.' },
];

function MilestoneTimeline() {
  const [active, setActive] = useState(0);
  return (
    <div className="mt-10 sm:mt-14 grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
      {/* Left: scrolling milestones */}
      <div className="relative">
        <span className="absolute left-[9px] top-2 bottom-2 w-[2px] bg-white/40" />
        {milestones.map((item, i) => (
          <motion.div
            key={item.y}
            onViewportEnter={() => setActive(i)}
            viewport={{ amount: 0.4, margin: '-20% 0px -20% 0px' }}
            className="relative pl-10 sm:pl-12 py-6 sm:py-8 lg:py-10"
          >
            <span className={`absolute left-0 top-8 sm:top-10 lg:top-12 w-5 h-5 rounded-full transition-all duration-300 ${i === active ? 'bg-[#fff100] ring-[6px] ring-[#fff100]/30 scale-110' : 'bg-white ring-4 ring-white/20'}`} />
            <div className={`transition-opacity duration-300 ${i === active ? 'opacity-100' : 'opacity-60 lg:opacity-50'}`}>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#fff100] leading-none">{item.y}</div>
              <div className="mt-2.5 sm:mt-3 h-[3px] w-12 sm:w-14 bg-white" />
              <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl lg:text-2xl font-bold">{item.t}</h3>
              <p className="mt-1 sm:mt-1.5 text-sm sm:text-base text-white/85">{item.d}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Right: one sticky image */}
      <div className="hidden lg:block">
        <div className="sticky top-28 h-[560px] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/20">
          <motion.img initial={{ scale: 1.12, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} src="/assets/hero-corporate.webp" alt="PNP Group" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}

function BrandChip({ b }) {
  return (
    <div className="relative z-10 flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-[#ed1c23] hover:shadow-lg transition-all text-center">
      <div className="h-20 sm:h-24 w-full flex items-center justify-center px-3 sm:px-5 py-3 sm:py-4">
        {b.logo
          ? <img src={b.logo} alt={b.name} className={`${b.small ? 'max-h-9 sm:max-h-11 max-w-[100px] sm:max-w-[130px]' : 'max-h-12 sm:max-h-16 max-w-[140px] sm:max-w-[180px]'} object-contain`} />
          : <span className="text-lg sm:text-xl font-black tracking-[0.25em] sm:tracking-[0.3em] text-slate-900">{b.text}</span>}
      </div>
      <div className="bg-[#ed1c23] text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider py-2 sm:py-2.5 px-2.5 sm:px-3">{b.note}</div>
    </div>
  );
}

// Children must be rendered twice in a row: the scroll position wraps at half the scroll width.
function LoopScroller({ children, className = '', speed = 0.04, resumeDelay = 1500 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    let frame;
    let last = 0;
    let pos = el.scrollLeft;
    let touching = false;
    let resumeAt = 0;

    const holdAutoScroll = () => { resumeAt = performance.now() + resumeDelay; };
    const onTouchStart = () => { touching = true; };
    const onTouchEnd = () => { touching = false; holdAutoScroll(); };
    const onScroll = () => { if (Math.abs(el.scrollLeft - pos) > 2) holdAutoScroll(); };

    const tick = (now) => {
      const dt = Math.min(now - last, 50);
      last = now;
      const half = el.scrollWidth / 2;
      if (half > 0) {
        if (!touching && now >= resumeAt) {
          pos += dt * speed;
          if (pos >= half) pos -= half;
          el.scrollLeft = pos;
        } else {
          pos = el.scrollLeft;
          if (pos >= half) pos -= half;
          else if (pos <= 0) pos += half;
          if (pos !== el.scrollLeft) el.scrollLeft = pos;
        }
      }
      frame = requestAnimationFrame(tick);
    };

    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchend', onTouchEnd, { passive: true });
    el.addEventListener('touchcancel', onTouchEnd, { passive: true });
    el.addEventListener('scroll', onScroll, { passive: true });
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchend', onTouchEnd);
      el.removeEventListener('touchcancel', onTouchEnd);
      el.removeEventListener('scroll', onScroll);
    };
  }, [speed, resumeDelay]);

  return (
    <div ref={ref} className={`overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${className}`}>
      <div className="flex w-max">{children}</div>
    </div>
  );
}

export default function AboutPage({ onOpenEnquiry }) {
  return (
    <div className="bg-white text-slate-900">

      {/* HERO */}
      <section className="relative min-h-[500px] sm:min-h-[560px] lg:min-h-[640px] flex items-end overflow-hidden">
        <motion.img initial={{ scale: 1.12, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} src="/assets/hero-corporate.webp" alt="PNP Group headquarters" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/65" />
        <motion.div initial="hidden" animate="visible" variants={stagger} className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-6 pt-28 sm:pt-32 pb-10 sm:pb-12 lg:pb-16 flex flex-col items-center gap-5 sm:gap-6 text-center">
          <motion.h1 variants={fadeUp} className="text-2xl min-[380px]:text-3xl sm:text-4xl lg:text-6xl font-medium text-white tracking-tight leading-tight">
            One Group.<br className="sm:hidden" /> <span className="text-[#fff100]">Many Trusted Brands.</span>
          </motion.h1>
          <motion.div variants={fadeUp} className="w-full">
            {/* Mobile: infinite horizontal loop full bleed */}
            <div className="sm:hidden -mx-4 w-[calc(100%+2rem)] overflow-hidden py-1">
              <motion.div
                className="flex w-max"
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                  ease: 'linear',
                  duration: 14,
                  repeat: Infinity,
                }}
              >
                <div className="flex gap-3 pr-3 shrink-0">
                  {heroBrands.map((n, i) => (
                    <span key={`a-${n}-${i}`} className="bg-white/95 rounded-lg px-3 py-1.5 h-9 flex items-center shrink-0 shadow-sm">
                      <img src={L(n)} alt={n} className="h-6 w-auto object-contain" />
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pr-3 shrink-0">
                  {heroBrands.map((n, i) => (
                    <span key={`b-${n}-${i}`} className="bg-white/95 rounded-lg px-3 py-1.5 h-9 flex items-center shrink-0 shadow-sm">
                      <img src={L(n)} alt={n} className="h-6 w-auto object-contain" />
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Desktop: static centered row */}
            <div className="hidden sm:flex flex-wrap justify-center gap-2.5">
              {heroBrands.map((n) => (
                <span key={n} className="bg-white/95 rounded-lg px-3 py-2 h-11 flex items-center shadow-sm">
                  <img src={L(n)} alt={n} className="h-7 w-auto object-contain" />
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* KEY FACTS */}
      <section className="bg-[#ed1c23] text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 sm:py-8 grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-5">
          {keyFacts.map((f) => (
            <div
              key={f.label}
              className={`border-l-2 border-[#fff100] pl-3.5 sm:pl-4 ${f.hideOnMobile ? 'hidden md:block' : ''}`}
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight"><CountUp value={f.value} /></div>
              <div className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-white/80">{f.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* OVERVIEW */}
      <section id="overview" className="bg-[#fdfcf8] pt-12 sm:pt-16 lg:pt-24 pb-8 sm:pb-10 lg:pb-12 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-stretch">
          <motion.div {...inView} variants={fadeUp} className="relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[260px] sm:min-h-[340px] lg:min-h-[360px] shadow-xl">
            <motion.img style={{ originY: 0.778 }} initial={{ scale: 1.9, x: '-6%', opacity: 0 }} whileInView={{ scale: 1.75, x: '-6%', opacity: 1 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} src="https://static.wixstatic.com/media/00fffe_94943c358b384538941738c3c29eb61b~mv2.jpg/v1/fill/w_1618,h_1108,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/00fffe_94943c358b384538941738c3c29eb61b~mv2.jpg" alt="PNP Group" className="absolute inset-0 w-full h-full object-cover" />
          </motion.div>
          <motion.div {...inView} variants={stagger} className="flex flex-col justify-center">
            <motion.div variants={fadeUp}><Eyebrow>Company Overview</Eyebrow></motion.div>
            <motion.h2 variants={fadeUp} className="mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-tight">
              Built on Trust.<br /><span className="text-[#ed1c23]">Driven by Innovation.</span>
            </motion.h2>
            <div className="mt-6 sm:mt-8 grid sm:grid-cols-2 gap-x-8 border-t border-slate-200">
              {overviewPoints.map((p, i) => (
                <motion.div key={p.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.5, delay: i * 0.08 }} className="flex gap-3 sm:gap-4 py-4 sm:py-5 border-b border-slate-200">
                  <span className="text-xl sm:text-2xl font-bold text-[#ed1c23] leading-none">0{i + 1}</span>
                  <div>
                    <div className="font-bold text-sm sm:text-base text-slate-900">{p.title}</div>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">{p.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* GROUP STRUCTURE TREE */}
      <section id="businesses" className="pt-8 sm:pt-10 lg:pt-12 pb-12 sm:pb-16 lg:pb-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div {...inView} variants={fadeUp} className="text-center">
            <Eyebrow>Our Businesses</Eyebrow>
            <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">One Group. Three Divisions.</h2>
          </motion.div>

          {/* Root */}
          <motion.div {...inView} variants={fadeUp} className="mt-8 sm:mt-12 flex flex-col items-center">
            <div className="bg-white rounded-2xl shadow-xl border-2 border-[#ed1c23] px-6 sm:px-8 py-3.5 sm:py-4">
              <img src="/assets/logo.webp" alt="PNP Group" className="h-9 sm:h-12 w-auto" />
            </div>
            <div className="w-[2px] h-6 sm:h-10 bg-[#ed1c23]" />
          </motion.div>

          {/* Connector bar (desktop) */}
          <div className="hidden lg:block relative h-10">
            <div className="absolute top-0 left-[16.66%] right-[16.66%] h-[2px] bg-[#ed1c23]" />
            {[16.66, 50, 83.33].map((x) => (
              <div key={x} className="absolute top-0 w-[2px] h-10 bg-[#ed1c23]" style={{ left: `${x}%` }} />
            ))}
          </div>

          {/* Divisions + brands */}
          <motion.div {...inView} variants={stagger} className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {divisions.map(({ name, icon: Icon, to, image, brands }) => (
              <motion.div key={name} variants={fadeUp} className="flex flex-col">
                <Link to={to} className="group relative rounded-2xl overflow-hidden h-32 sm:h-36 shadow-lg">
                  <img src={image} alt={name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/30" />
                  <div className="relative h-full flex items-center gap-3 sm:gap-4 px-5 sm:px-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#ed1c23] flex items-center justify-center shrink-0"><Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" /></div>
                    <div>
                      <div className="text-white text-lg sm:text-xl font-bold">{name}</div>
                      <div className="text-[#fff100] text-[10px] sm:text-[11px] font-bold uppercase tracking-widest inline-flex items-center gap-1">Explore <ArrowRight className="w-3 h-3" /></div>
                    </div>
                  </div>
                </Link>
                <div className="relative pt-5 sm:pt-6 grid grid-cols-2 gap-3 sm:gap-4">
                  <span className="absolute left-1/2 top-0 bottom-6 -translate-x-1/2 border-l-2 border-dashed border-[#ed1c23]/50" />
                  {brands.map((b) => (
                    <div key={b.name} className={brands.length === 1 ? 'col-span-2 w-2/3 mx-auto' : ''}>
                      <BrandChip b={b} />
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MILESTONES */}
      <section id="milestones" className="relative bg-[#ed1c23] text-white py-12 sm:py-16 lg:py-24 scroll-mt-24">
        <div className="relative max-w-6xl mx-auto px-4 md:px-6">
          <motion.div {...inView} variants={fadeUp} className="text-center">
            <Eyebrow light>Our Journey</Eyebrow>
            <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">Milestones <span className="text-[#fff100]">1997 – 2026</span></h2>
          </motion.div>

          <MilestoneTimeline />
        </div>
      </section>

      {/* LEADERSHIP */}
      <section id="leadership" className="bg-[#fdfcf8] pt-12 sm:pt-16 lg:pt-24 pb-8 sm:pb-10 lg:pb-12 scroll-mt-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
            {/* Content left */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#ed1c23]">Leadership &amp; Vision</h2>
                <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                  A first-generation entrepreneur since 1978, based in Taiwan since 1986 and closely connected with <span className="font-semibold text-slate-900">Nan Ya Plastics</span> and the <span className="font-semibold text-slate-900">Formosa Group</span> — he built PNP on ethics, goodwill and innovation.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className="mt-6 sm:mt-8 grid grid-cols-3 gap-2.5 sm:gap-4 max-w-xl">
                {[['1978', 'Career began'], ['1986', 'Taiwan base'], ['1997', 'PNP founded']].map(([y, l]) => (
                  <div key={y} className="border-l-2 border-[#ed1c23] pl-2.5 sm:pl-4">
                    <div className="text-2xl sm:text-3xl font-bold text-[#ed1c23]">{y}</div>
                    <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-500">{l}</div>
                  </div>
                ))}
              </motion.div>

              <motion.blockquote initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="mt-8 sm:mt-10 max-w-2xl">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-medium text-slate-900 leading-tight">
                  Money is the by-product of our business.
                  <Quote className="inline-block align-top ml-2 w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9 text-[#ed1c23]" />
                </p>
                <footer className="mt-2.5 sm:mt-3 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#ed1c23]">— Mr. Pawan Kumar Kaushik</footer>
              </motion.blockquote>
            </div>

            {/* Image right */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.7 }}
              className="lg:col-span-5 order-1 lg:order-2 relative mt-2 sm:mt-0">
              <div className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 w-full h-full rounded-3xl border-2 border-[#ed1c23]" />
              <div className="absolute -bottom-3 sm:-bottom-5 -left-3 sm:-left-5 w-20 sm:w-28 h-20 sm:h-28 rounded-3xl bg-[#fff100]" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[360px] sm:h-[420px] lg:h-[480px] bg-slate-200">
                <img src="/assets/about/promoter.webp" alt="Mr. Pawan Kumar Kaushik, Founder & Leader, PNP Group" className="absolute inset-0 w-full h-full object-cover object-top scale-[1.8] origin-[100%_30%]" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/70 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <div className="text-white text-xl sm:text-2xl font-bold">Mr. Pawan Kumar Kaushik</div>
                  <div className="text-[#fff100] text-[11px] sm:text-xs font-bold uppercase tracking-widest mt-1">Founder &amp; Leader, PNP Group</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Vision & Mission */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }}
            className="relative mt-16 sm:mt-20 lg:mt-24 pt-16 sm:pt-20 md:pt-14 border-t border-slate-200 grid md:grid-cols-2 gap-4 md:gap-0">
            {/* Center divider + logo */}
            <span className="hidden md:block absolute left-1/2 top-14 bottom-0 w-px bg-slate-200" />
            <div className="absolute left-1/2 -top-10 sm:-top-12 -translate-x-1/2 bg-[#fdfcf8] px-3 sm:px-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white shadow-md ring-1 ring-slate-200 flex items-center justify-center">
                <img src="/assets/logo.webp" alt="PNP" className="h-7 sm:h-9 w-auto" />
              </div>
            </div>
            {[
              { icon: Eye, label: 'Vision', text: 'To develop PNP as a brand which carries the most innovative and creative products.' },
              { icon: Target, label: 'Mission', text: 'To provide full satisfaction to customers and all stakeholders through product, price, service, reach and goodwill.' },
            ].map(({ icon: Icon, label, text }) => (
              <div key={label} className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-sm ring-1 ring-slate-200 md:block md:text-center md:py-0 md:px-12 lg:px-16 md:bg-transparent md:rounded-none md:shadow-none md:ring-0">
                <div className="shrink-0 md:mx-auto w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#ed1c23] flex items-center justify-center shadow-lg shadow-red-600/25">
                  <Icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="md:mt-5 text-xs font-bold uppercase tracking-[0.3em] text-[#ed1c23]">Our {label}</h3>
                  <p className="mt-2 md:mt-4 text-base md:text-xl lg:text-2xl font-medium text-slate-900 leading-snug max-w-md md:mx-auto">{text}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TRENDSETTERS */}
      <section id="trendsetters" className="bg-white pt-10 lg:pt-12 pb-10 lg:pb-12 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <Eyebrow>The Trendsetters</Eyebrow>
            <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">Firsts That <span className="text-[#ed1c23]">Define Us</span></h2>
          </div>
          <div className="mt-8 sm:mt-12 grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {firsts.map((f, i) => (
              <motion.div key={f.text}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm ring-1 ring-slate-200 flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.img initial={{ scale: 1.12, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} src={f.image} alt={f.text} className="w-full h-full object-cover" />
                </div>
                <div className="relative flex-1 px-3 py-3 sm:px-4 sm:py-3.5 lg:px-5 lg:py-4 bg-[#ed1c23] flex items-center min-h-[76px] sm:min-h-[72px] lg:min-h-[92px]">
                  <p className="text-sm sm:text-base lg:text-lg font-semibold text-white leading-snug">
                    <span className="text-[#fff100] font-bold mr-2">0{i + 1}</span>{f.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES + WHY PNP */}
      <section id="values" className="bg-[#fdfcf8] pt-10 lg:pt-12 pb-12 lg:pb-16 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div {...inView} variants={fadeUp} className="text-center">
            <Eyebrow>Corporate Values</Eyebrow>
            <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">What We Stand For</h2>
          </motion.div>
          <LoopScroller className="md:hidden mt-8 sm:mt-12 -mx-4">
              {[0, 1].flatMap((copy) => values.map(({ icon: Icon, title, text, img }) => (
                <div key={`${title}-${copy}`} aria-hidden={copy === 1} className="w-[62vw] sm:w-[280px] shrink-0 pl-3 py-1">
                  <div className="h-full bg-white rounded-2xl overflow-hidden shadow-sm ring-1 ring-slate-200">
                    <div className="relative aspect-[16/10]">
                      <img src={img} alt={copy === 0 ? title : ''} className="w-full h-full object-cover" />
                      <div className="absolute -bottom-4 left-3 w-9 h-9 rounded-lg bg-[#ed1c23] flex items-center justify-center shadow-lg"><Icon className="w-4 h-4 text-white" /></div>
                    </div>
                    <div className="px-3 pt-6 pb-4">
                      <h3 className="text-sm font-bold">{title}</h3>
                      <p className="mt-1 text-xs text-slate-600">{text}</p>
                    </div>
                  </div>
                </div>
              )))}
          </LoopScroller>
          <div className="hidden md:grid mt-12 md:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, text, img }, i) => (
              <motion.div key={title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm ring-1 ring-slate-200">
                <div className="relative aspect-[16/10]">
                  <motion.img initial={{ scale: 1.12, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} src={img} alt={title} className="w-full h-full object-cover" />
                  <div className="absolute -bottom-4 sm:-bottom-6 left-3 sm:left-6 w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#ed1c23] flex items-center justify-center shadow-lg"><Icon className="w-4 h-4 sm:w-6 sm:h-6 text-white" /></div>
                </div>
                <div className="px-3 sm:px-6 pt-6 sm:pt-9 pb-4 sm:pb-6">
                  <h3 className="text-sm sm:text-xl font-bold">{title}</h3>
                  <p className="mt-1 text-xs sm:text-base text-slate-600">{text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Why Choose PNP */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 sm:mt-16 grid lg:grid-cols-2 gap-8 sm:gap-10 items-center">
            <div className="rounded-2xl overflow-hidden aspect-[16/11] shadow-sm ring-1 ring-slate-200">
              <motion.img initial={{ scale: 1.12, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} src="/assets/industries/warehousing-hq.webp" alt="PNP warehouse" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-center sm:text-left text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight">Why Choose <span className="text-[#ed1c23]">PNP</span></h3>
              <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-3 sm:gap-4">
                {usps.map(({ icon: Icon, title, desc }, i) => (
                  <div key={title} className="odd:last:col-span-2 sm:odd:last:col-span-1 flex flex-col sm:flex-row items-center justify-center sm:justify-start text-center sm:text-left gap-2.5 sm:gap-4 bg-white rounded-2xl p-4 sm:p-5 ring-1 ring-slate-200">
                    <span className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#ed1c23] flex items-center justify-center shrink-0"><Icon className="w-5 h-5 text-white" /></span>
                    <div className="text-sm sm:text-base font-bold leading-snug sm:leading-normal whitespace-pre-line sm:whitespace-normal text-slate-900">{title}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VIDEO + DOWNLOADS + CTA */}
      <section id="downloads" className="pb-12 sm:pb-16 lg:pb-20 scroll-mt-24 bg-[#fdfcf8]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
            <motion.img initial={{ scale: 1.12, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} src="/assets/hero-corporate.webp" alt="PNP Group" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#ed1c23] via-[#ed1c23]/90 to-[#ed1c23]/40" />
            <div className="relative p-6 sm:p-8 lg:p-14 flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-5xl font-medium text-white tracking-tight leading-tight">Partner with<br /><span className="text-[#fff100]">PNP Group</span></h3>
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3">
                <button onClick={() => onOpenEnquiry('General Corporate Enquiry')} className="h-11 sm:h-12 px-5 sm:px-6 bg-white text-[#ed1c23] text-sm font-bold rounded-full inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow">
                  Enquire Now <ArrowRight className="w-4 h-4" />
                </button>
                <button onClick={() => onOpenEnquiry('Dealer / Distributor Enquiry')} className="h-11 sm:h-12 px-5 sm:px-6 bg-[#fff100] text-slate-900 text-sm font-bold rounded-full inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow">
                  Become a Dealer <ArrowRight className="w-4 h-4" />
                </button>
                <a href={YT} target="_blank" rel="noopener noreferrer" className="h-11 sm:h-12 px-4 sm:px-5 bg-white/15 backdrop-blur border border-white/30 text-white text-xs sm:text-sm font-semibold rounded-full inline-flex items-center justify-center gap-2 hover:bg-white/25 transition-colors">
                  <PlayCircle className="w-4 h-4" /> Our Story
                </a>
                <a href="/PNP diary 2019.pdf" download className="h-11 sm:h-12 px-4 sm:px-5 bg-white/15 backdrop-blur border border-white/30 text-white text-xs sm:text-sm font-semibold rounded-full inline-flex items-center justify-center gap-2 hover:bg-white/25 transition-colors">
                  <Download className="w-4 h-4" /> Corporate Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
