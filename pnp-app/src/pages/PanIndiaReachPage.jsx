import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CountUp from '../components/CountUp';
import { ArrowRight, MapPin, Phone, Mail, Globe2, Network, Boxes, Handshake, Download, Building2 } from 'lucide-react';

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
});

const facts = [
  { value: '10', label: 'Offices in India' },
  { value: '20 Lakh+', label: 'Sq. ft. warehousing' },
  { value: '25%', label: 'Coated fabric share' },
];

const branches = [
  { city: 'Mumbai', tag: 'Head Office', region: 'West', address: 'A 601–607, Mangal Aarambh, Kora Kendra, Near McDonald’s, Borivali (W), Mumbai – 400 092', phone: '022 - 4014 0181 - 88 / +91 92233 91088', email: 'sales@pnpind.com' },
  { city: 'Bhilad', tag: 'NYTEX Plant', region: 'West', address: 'Survey No. 237/3, Paiki (2), Near Bhilad Railway Station, Village Sarigam, Tal. Umargam, Gujarat', phone: '+91 93275 31927' },
  { city: 'Surat', region: 'West', address: '3008, World Trade Center, Ring Road, Surat – 395 002', phone: '0261 236 5271 / +91 92769 09040', email: 'surat@pnpind.com' },
  { city: 'New Delhi', region: 'North', address: '907, P P Tower, Netaji Subhash Place, Pitampura, Delhi – 110 034', phone: '011 2735 1047 - 49 / +91 81305 95989', email: 'delhi@pnpind.com' },
  { city: 'Kanpur', region: 'North', address: '128/120, K-Block, Kidwai Nagar, Near Brihaspati Mahila College, Kanpur – 208 011', phone: '0512 261 3375 / +91 92355 05442', email: 'kanpur@pnpind.com' },
  { city: 'Kolkata', region: 'East', address: '308, Jindal Tower, 21/3, Darga Road, Kolkata – 700 017', phone: '033 2283 5953 / +91 92306 55308', email: 'kolkata@pnpind.com' },
  { city: 'Hyderabad', region: 'South', address: '308, Lala-II, Oasis Plaza, 4-1-898, Tilak Road, Abids, Hyderabad – 500 001', phone: '040 6683 5644 / +91 92462 01036', email: 'hydrabad@pnpind.com' },
  { city: 'Bengaluru', region: 'South', address: '207, Money Chambers, 6 K H Road, Bengaluru – 560 027', phone: '080 2211 2449 / +91 92434 21036', email: 'bangalore@pnpind.com' },
  { city: 'Chennai', region: 'South', address: '17/4, M.R.H. Road, Vadaperumpakkam, Opp. Indian Petrol Pump, Chennai – 600 060', phone: '+91 92821 34421', email: 'chennai@pnpind.com' },
  { city: 'Kochi', region: 'South', address: 'Door No. 131/42/948 A, JJD Complex, Cemetery Jn, Chittoor Road, Kochi – 682 018', phone: '0484 239 7064 / +91 98951 73817', email: 'kochin@pnpind.com' },
];
const regions = ['All', 'West', 'North', 'East', 'South'];

// Marker positions on /assets/presence/india-outline.svg (viewBox 612 x 696), from city lat/long.
const mapPins = {
  Mumbai: [99.4, 427.2], Bhilad: [99.0, 400.1], Surat: [98.4, 379.6], 'New Delhi': [186.3, 210.4],
  Kanpur: [248.9, 259.5], Kolkata: [410.0, 347.8], Hyderabad: [211.6, 465.7], Bengaluru: [193.9, 566.2],
  Chennai: [247.7, 563.7], Kochi: [167.4, 635.4],
};

function PhoneLinks({ phone }) {
  return (
    <span>
      {phone.split(' / ').map((part, i) => (
        <React.Fragment key={part}>
          {i > 0 && ' / '}
          <a href={`tel:${part.replace(/\s*-\s*\d{1,2}$/, '').replace(/[^\d+]/g, '')}`}>{part}</a>
        </React.Fragment>
      ))}
    </span>
  );
}

function OfficeMap({ region }) {
  return (
    <div className="relative w-full max-w-md mx-auto lg:max-w-none" style={{ aspectRatio: '612 / 696' }}>
      <img src="/assets/presence/india-outline.svg" alt="PNP offices across India" className="absolute inset-0 w-full h-full" />
      {branches.map((b) => {
        const [x, y] = mapPins[b.city];
        const active = region === 'All' || region === b.region;
        const hq = b.tag === 'Head Office';
        return (
          <div key={b.city} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${(x / 612) * 100}%`, top: `${(y / 696) * 100}%` }}>
            <span className={`relative flex ${hq ? 'w-3 h-3 sm:w-4 sm:h-4' : 'w-2 h-2 sm:w-3 sm:h-3'}`}>
              {active && <span className="absolute inset-0 rounded-full bg-[#ed1c23] opacity-50 animate-ping" />}
              <span className={`relative w-full h-full rounded-full ring-1 sm:ring-2 ring-white ${active ? 'bg-[#ed1c23]' : 'bg-slate-300'}`} />
            </span>
            <span className={`absolute top-1/2 -translate-y-1/2 whitespace-nowrap text-[9px] leading-none sm:leading-normal sm:text-xs font-bold ${b.city === 'Bengaluru' ? 'right-3 sm:right-4' : 'left-3 sm:left-4'} ${active ? 'text-slate-900' : 'text-slate-400'}`}>{b.city}</span>
          </div>
        );
      })}
    </div>
  );
}

const infrastructure = [
  { title: 'NYTEX Factory', place: 'Bhilad', text: 'World-class nylon filament yarn plant with Barmag machines from Germany and 40 acres for future expansion.', image: '/assets/businesses/nytex-hq-new.webp' },
  { title: 'PNP Warehouse', place: 'Kalwar', text: 'World-class coated fabric warehouse keeping a huge variety ready to ship.', image: '/assets/industries/warehousing-hq.webp' },
  { title: 'Warehouse cum Factory', place: 'Sonale', text: 'Home to PNP label tapes, Synwood and HAO ventilators.', image: '/assets/products/racking-hq.webp' },
  { title: 'PNP Warehouse', place: 'Delhi', text: 'Two-storey warehouse cum showroom for North India.', image: '/assets/industries/infrastructure-hq.webp' },
  { title: 'PNP House', place: 'Bengaluru', text: 'Four-storey storage, office and showroom for South India.', image: '/assets/industries/construction-hq.webp' },
  { title: 'BAGINNOV Mall', place: 'Mumbai', text: 'India’s largest multi-brand bags and luggage showroom.', image: '/assets/businesses/baginnov-hq.webp' },
];

const distribution = [
  { icon: Network, title: 'All-India Sales Network', text: 'The only coated cloth company with a sales network across all of India.', img: 'https://images.unsplash.com/photo-1761133381018-aed5063d22fe?auto=format&fit=crop&w=1200&q=75' },
  { icon: Boxes, title: 'Ready Inventory', text: 'A huge variety stocked in our own warehouses, ready when you need it.', img: 'https://images.unsplash.com/photo-1644079446600-219068676743?auto=format&fit=crop&w=1200&q=75' },
  { icon: Globe2, title: 'Global Sourcing', text: 'New and innovative products from the rest of the world, brought to India.', img: '/assets/presence/global-sourcing.webp' },
  { icon: Handshake, title: 'Jaquar Lighting, Mumbai', text: 'Authorised distributor of Jaquar Lighting from Bandra to Virar.', img: '/assets/businesses/jaquar-lighting-hq.webp' },
];

export default function PanIndiaReachPage({ onOpenEnquiry }) {
  const [region, setRegion] = useState('All');
  const shown = region === 'All' ? branches : branches.filter((b) => b.region === region);

  return (
    <div className="bg-white text-slate-900">

      {/* HERO */}
      <section className="relative h-[68svh] min-h-[420px] sm:h-[calc(100svh-56px)] sm:min-h-[480px] flex items-end overflow-hidden">
        <motion.img initial={{ scale: 1.12, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} src="/assets/heroes/hero_contact_network.webp" alt="PNP network across India" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-6 pt-24 pb-12 sm:pb-24 lg:pb-32 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-medium text-white tracking-tight leading-tight">
            Across India. <br className="sm:hidden" /><span className="text-[#fff100]">Connected to the World.</span>
          </h1>
        </motion.div>
      </section>

      {/* FACTS */}
      <section className="bg-[#ed1c23] text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-6 sm:py-8 grid grid-cols-3 divide-x divide-white/30">
          {facts.map((f, i) => (
            <motion.div key={f.label} {...reveal(i * 0.12)} className="text-center px-1.5 sm:px-3">
              <div className="text-lg min-[375px]:text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight whitespace-nowrap"><CountUp value={f.value} /></div>
              <div className="mt-0.5 sm:mt-0 text-[10px] sm:text-[11px] leading-tight sm:leading-normal font-semibold uppercase tracking-wide sm:tracking-wider text-white/80">{f.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BRANCHES */}
      <section id="branches" className="bg-[#fdfcf8] pt-10 sm:pt-16 lg:pt-20 pb-10 sm:pb-12 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div {...reveal()} className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ed1c23]">Nationwide Branches</span>
            <h2 className="mt-3 text-3xl lg:text-5xl font-medium tracking-tight">10 Offices. <span className="text-[#ed1c23]">One Network.</span></h2>
          </motion.div>

          <div className="mt-6 sm:mt-10 grid lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            <motion.div {...reveal()} className="lg:col-span-5 lg:sticky lg:top-24 bg-white rounded-2xl ring-1 ring-slate-200 p-3">
              <OfficeMap region={region} />
            </motion.div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-5 gap-1.5 sm:flex sm:flex-wrap sm:gap-2">
                {regions.map((r) => (
                  <button key={r} onClick={() => setRegion(r)}
                    className={`py-2.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-bold transition-colors ${region === r ? 'bg-[#ed1c23] text-white' : 'bg-white ring-1 ring-slate-200 text-slate-700'}`}>
                    {r}
                  </button>
                ))}
              </div>
              <div className="mt-4 sm:mt-6 grid sm:grid-cols-2 gap-3 sm:gap-4">
                {shown.map((b, i) => (
                  <motion.div key={b.city} {...reveal((i % 2) * 0.1)} className="bg-white rounded-2xl ring-1 ring-slate-200 overflow-hidden">
                    <div className="flex items-center justify-between px-4 sm:px-5 py-3 bg-[#ed1c23] text-white">
                      <h3 className="font-bold text-lg">{b.city}</h3>
                      {b.tag && <span className="text-[10px] font-bold uppercase tracking-widest text-[#fff100]">{b.tag}</span>}
                    </div>
                    <div className="p-4 sm:p-5 space-y-2.5 text-sm text-slate-600">
                      <p className="flex gap-2.5"><MapPin className="w-4 h-4 text-[#ed1c23] shrink-0 mt-0.5" />{b.address}</p>
                      <p className="flex gap-2.5"><Phone className="w-4 h-4 text-[#ed1c23] shrink-0 mt-0.5" /><PhoneLinks phone={b.phone} /></p>
                      {b.email && <a href={`mailto:${b.email}`} className="flex gap-2.5 hover:text-[#ed1c23]"><Mail className="w-4 h-4 text-[#ed1c23] shrink-0 mt-0.5" />{b.email}</a>}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* INFRASTRUCTURE — mosaic */}
      <section id="infrastructure" className="bg-[#fdfcf8] py-10 sm:py-12 lg:py-16 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div {...reveal()} className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ed1c23]">20 Lakh+ Sq. Ft. Owned</span>
              <h2 className="mt-3 text-3xl lg:text-5xl font-medium tracking-tight">Storage &amp; <span className="text-[#ed1c23]">Infrastructure</span></h2>
            </div>
            <p className="max-w-md text-sm sm:text-base text-slate-600">Our own factories, warehouses and showrooms keep a huge variety of products ready — the strength behind our unmatched service across India.</p>
          </motion.div>
          <div className="mt-6 sm:mt-10 grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            {infrastructure.map((f, i) => (
              <motion.div key={f.title + f.place} {...reveal(i * 0.05)}
                className="relative rounded-2xl overflow-hidden aspect-square sm:aspect-[4/3]">
                <motion.img initial={{ scale: 1.12, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} src={f.image} alt={`${f.title}, ${f.place}`} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 h-2/3 sm:h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute left-3 bottom-3 right-3 sm:left-5 sm:bottom-5 sm:right-5">
                  <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest text-[#fff100]">{f.place}</div>
                  <div className="mt-0.5 sm:mt-1 text-white text-sm leading-tight sm:text-lg lg:text-xl sm:leading-normal font-semibold">{f.title}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TAIPEI — full-width map with floating card */}
      <section id="taipei" className="relative overflow-hidden lg:overflow-visible scroll-mt-24">
        <motion.img initial={{ scale: 1.12, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} src="/assets/presence/taipei.webp" alt="Taipei skyline with Taipei 101" className="absolute inset-0 w-full h-full object-cover object-[70%_center]" />
        <div className="absolute inset-0 bg-black/65 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/85 sm:via-black/60 sm:to-black/10" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-14 sm:py-20 lg:py-28">
          <motion.div {...reveal()} className="max-w-xl text-white">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#fff100]">Taipei Global Office</span>
            <h2 className="mt-3 text-3xl lg:text-5xl font-medium tracking-tight">Our Bridge to <span className="text-[#fff100]">the Far East</span></h2>
            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-white/85 leading-relaxed">Connected with Taiwan’s top manufacturers since 1986, our Taipei office brings new and innovative products from the Far East to India.</p>
            <div className="mt-6 sm:mt-8 flex sm:inline-flex flex-col gap-3 rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-4 sm:p-6 text-sm sm:text-base">
              <div className="flex items-center gap-2 font-bold"><Building2 className="w-5 h-5 text-[#fff100]" />Taipei Global Office</div>
              <p className="flex gap-3 text-white/85"><MapPin className="w-5 h-5 text-[#fff100] shrink-0 mt-0.5" />8F-3, 171, Song De Road, Taipei, Taiwan, R.O.C.</p>
              <p className="flex gap-3 text-white/85"><Phone className="w-5 h-5 text-[#fff100] shrink-0 mt-0.5" /><PhoneLinks phone="+886 2 2728 1531" /></p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DISTRIBUTION — horizontal strip */}
      <section id="distribution" className="py-10 sm:py-12 lg:py-16 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div {...reveal()} className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ed1c23]">Reach That Delivers</span>
            <h2 className="mt-3 text-3xl lg:text-5xl font-medium tracking-tight">Distribution <span className="text-[#ed1c23]">Network</span></h2>          </motion.div>
          <div className="mt-6 sm:mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {distribution.map(({ icon: Icon, title, text, img }, i) => (
              <motion.div key={title} {...reveal(i * 0.06)} className="group">
                <div className="relative aspect-[16/10] sm:aspect-[4/5] rounded-2xl overflow-hidden">
                  <motion.img initial={{ scale: 1.12, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} src={img} alt={title} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                    <span className="w-10 h-10 rounded-xl bg-[#ed1c23] flex items-center justify-center"><Icon className="w-5 h-5 text-white" /></span>
                    <h3 className="mt-3 sm:mt-4 text-lg font-semibold text-white">{title}</h3>
                    <p className="mt-1 text-sm text-white/80 leading-snug">{text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — compact centred strip */}
      <section className="pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="rounded-2xl sm:rounded-3xl bg-[#fff100] px-5 sm:px-8 py-8 sm:py-10 lg:px-14 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl lg:text-4xl font-medium tracking-tight text-slate-900">Join the PNP Network</h3>
              <p className="mt-2 text-slate-700">Become a dealer or distributor, or reach the branch nearest you.</p>
            </div>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
              <button onClick={() => onOpenEnquiry('Dealer / Distributor Enquiry')} className="h-12 px-6 bg-[#ed1c23] text-white text-sm font-bold rounded-full inline-flex items-center justify-center gap-2">
                Become a Dealer <ArrowRight className="w-4 h-4" />
              </button>
              <a href="/PNP diary 2019.pdf" download className="h-12 px-5 bg-white text-slate-900 text-sm font-semibold rounded-full inline-flex items-center justify-center gap-2">
                <Download className="w-4 h-4" /> Corporate Profile
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
