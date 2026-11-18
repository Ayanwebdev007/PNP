import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowRight, Download } from 'lucide-react';

const aboutMobileGroups = [
  {
    title: 'Company Profile',
    to: '/about',
    links: [
      { label: 'Company Overview', to: '/about' },
      { label: 'Leadership & Vision', to: '/about#leadership' },
      { label: 'Corporate Values', to: '/about#values' },
      { label: 'Milestones Since 1997', to: '/about#milestones' },
    ],
  },
  {
    title: 'Pan-India Reach',
    to: '/about/pan-india-reach',
    links: [
      { label: '11 Nationwide Branches', to: '/about/pan-india-reach#branches' },
      { label: '20+ Lakh Sq. Ft. Storage', to: '/about/pan-india-reach#infrastructure' },
      { label: 'Taipei Global Office', to: '/about/pan-india-reach#taipei' },
      { label: 'Distribution Network', to: '/about/pan-india-reach#distribution' },
    ],
  },
];

const manufacturingMobileLinks = [
  { label: 'NYTEX Division', to: '/manufacturing/nytex-division' },
  { label: 'NYTEX Products', to: '/manufacturing/nytex-products' },
];

const retailMobileLinks = [
  { label: 'BAGINNOV Mall', to: '/retail' },
  { label: 'Our Brands', to: '/retail/brands' },
];

export default function Navbar({ onOpenEnquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileManufacturingOpen, setMobileManufacturingOpen] = useState(false);
  const [mobileRetailOpen, setMobileRetailOpen] = useState(false);
  const [mobileTradingOpen, setMobileTradingOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileAboutOpen(false);
    setMobileManufacturingOpen(false);
    setMobileRetailOpen(false);
    setMobileTradingOpen(false);
  }, [location]);

  const navLinkClass = (path) => `
    px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-1.5
    ${location.pathname === path || location.pathname.startsWith(`${path}/`)
      ? 'bg-red-50 text-[#ed1c23]'
      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'}
  `;

  // Center dropdown, make wider (760px), smooth entry animation, add invisible bridge to prevent losing hover
  const dropdownClass = "absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[760px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out transform translate-y-4 group-hover:translate-y-0 grid grid-cols-3 gap-8 before:absolute before:-top-4 before:left-0 before:w-full before:h-4";

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm py-3' : 'bg-white py-5'} border-b border-slate-200`}>
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img 
            src="/assets/logo.webp?v=trendsetters_v1" 
            alt="PNP Logo" 
            className="h-10 md:h-12 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-2 font-sans text-[14px]">
          <Link to="/" className={navLinkClass('/')}>
            Home
          </Link>

          {/* About Us Mega Menu */}
          <div className="relative group">
            <Link to="/about" className={navLinkClass('/about')}>
              <span>About Us</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-300" />
            </Link>
            <div className={dropdownClass}>
              <div>
                <Link to="/about" className="text-xs font-bold uppercase tracking-widest text-[#ed1c23] mb-3 flex items-center gap-2 hover:text-[#c9141a]">
                  Company Profile <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <ul className="space-y-3 text-sm text-slate-600 font-medium border-l-2 border-[#ed1c23]/30 pl-4 ml-0.5">
                  <li><Link to="/about" className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">Company Overview</Link></li>
                  <li><Link to="/about#leadership" className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">Leadership & Vision</Link></li>
                  <li><Link to="/about#values" className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">Corporate Values</Link></li>
                  <li><Link to="/about#milestones" className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">Milestones Since 1997</Link></li>
                </ul>
              </div>
              <div>
                <Link to="/about/pan-india-reach" className="text-xs font-bold uppercase tracking-widest text-[#ed1c23] mb-3 flex items-center gap-2 hover:text-[#c9141a]">
                  Pan-India Reach <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <ul className="space-y-3 text-sm text-slate-600 font-medium border-l-2 border-[#ed1c23]/30 pl-4 ml-0.5">
                  <li><Link to="/about/pan-india-reach#branches" className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">11 Nationwide Branches</Link></li>
                  <li><Link to="/about/pan-india-reach#infrastructure" className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">20+ Lakh Sq. Ft. Storage</Link></li>
                  <li><Link to="/about/pan-india-reach#taipei" className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">Taipei Global Office</Link></li>
                  <li><Link to="/about/pan-india-reach#distribution" className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">Distribution Network</Link></li>
                </ul>
              </div>
              <div className="rounded-xl overflow-hidden bg-slate-50 border border-slate-200 p-2.5 text-center group/card hover:shadow-lg transition-shadow">
                <div className="overflow-hidden rounded-lg mb-3">
                  <img src="/assets/about/building.webp" alt="PNP Headquarters" className="w-full h-36 object-cover transform group-hover/card:scale-110 transition-transform duration-700" />
                </div>
                <span className="text-sm font-bold text-slate-900 block leading-tight">PNP Headquarters</span>
                <span className="text-xs text-slate-500 block mt-1">Trusted Since 1997</span>
              </div>
            </div>
          </div>

          {/* Manufacturing Mega Menu */}
          <div className="relative group">
            <Link to="/manufacturing/nytex-division" className={navLinkClass('/manufacturing')}>
              <span>Manufacturing</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-300" />
            </Link>
            <div className={dropdownClass}>
              <div className="flex flex-col items-start h-full">
                <Link to="/manufacturing/nytex-division" className="text-xs font-bold uppercase tracking-widest text-[#ed1c23] mb-3 flex items-center gap-2 hover:text-[#c9141a]">
                  NYTEX Division <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <ul className="mb-6 space-y-3 text-sm text-slate-600 font-medium border-l-2 border-[#ed1c23]/30 pl-4 ml-0.5">
                  <li><Link to="/manufacturing/nytex-division#plant" className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">Bhilad Plant (Est. 2018)</Link></li>
                  <li><Link to="/manufacturing/nytex-division#machinery" className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">Oerlikon Barmag Machinery</Link></li>
                  <li><Link to="/manufacturing/nytex-division#green-energy" className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">Wind & Solar Energy</Link></li>
                </ul>
                <a href="/Nytex 2026 .pdf" download className="mt-auto px-6 py-3 bg-[#ed1c23] hover:bg-[#c9141a] text-white text-sm font-medium rounded-full inline-flex items-center gap-2 transition-colors"><Download className="w-4 h-4" /> Download Catalogue</a>
              </div>
              <div>
                <Link to="/manufacturing/nytex-products" className="text-xs font-bold uppercase tracking-widest text-[#ed1c23] mb-3 flex items-center gap-2 hover:text-[#c9141a]">
                  NYTEX Products <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <ul className="space-y-3 text-sm text-slate-600 font-medium border-l-2 border-[#ed1c23]/30 pl-4 ml-0.5">
                  <li><Link to="/manufacturing/nytex-products#poy" className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">POY: Partially Oriented Yarn</Link></li>
                  <li><Link to="/manufacturing/nytex-products#fdy" className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">FDY: Fully Drawn Yarn</Link></li>
                  <li><Link to="/manufacturing/nytex-products#hoy" className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">HOY: Highly Oriented Yarn</Link></li>
                  <li><Link to="/manufacturing/nytex-products#dty" className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">DTY: Draw Textured Yarn</Link></li>
                  <li><Link to="/manufacturing/nytex-products#acy" className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">ACY: Air Covered Yarn</Link></li>
                </ul>
              </div>
              <div className="rounded-xl overflow-hidden bg-slate-50 border border-slate-200 p-2.5 text-center group/card hover:shadow-lg transition-shadow">
                <div className="overflow-hidden rounded-lg mb-3">
                  <img src="/assets/manufacturing/plant-building.webp" alt="NYTEX Bhilad Facility" className="w-full h-36 object-cover transform group-hover/card:scale-110 transition-transform duration-700" />
                </div>
                <span className="text-sm font-bold text-slate-900 block leading-tight">NYTEX Operations</span>
                <span className="text-xs text-slate-500 block mt-1">Powered by Green Energy</span>
              </div>
            </div>
          </div>

          {/* Trading Mega Menu */}
          <div className="relative group">
            <Link to="/trading" className={navLinkClass('/trading')}>
              <span>Trading</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-300" />
            </Link>
            <div className={dropdownClass}>
              <div className="flex flex-col items-start h-full">
                <Link to="/trading" className="text-xs font-bold uppercase tracking-widest text-[#ed1c23] mb-3 flex items-center gap-2 hover:text-[#c9141a]">
                  Own Brands <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <ul className="space-y-3 text-sm text-slate-600 font-medium border-l-2 border-[#ed1c23]/30 pl-4 ml-0.5 mb-6">
                  <li><Link to="/trading/hao" className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">HAO Air Ventilators</Link></li>
                  <li><Link to="/trading/tie" className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">TIE Roofing Screws</Link></li>
                  <li><Link to="/trading/pnp" className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">PNP Fabric, Racking &amp; More</Link></li>
                  <li><Link to="/trading/synwood" className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">Synwood Synthetic Wood</Link></li>
                  <li><Link to="/trading/haowood" className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">Haowood Wall Panels</Link></li>
                </ul>
                <a href="/catalogues/PNP Trading Catalogues.zip" download className="mt-auto px-6 py-3 bg-[#ed1c23] hover:bg-[#c9141a] text-white text-sm font-medium rounded-full inline-flex items-center gap-2 transition-colors"><Download className="w-4 h-4" /> Download Catalogue</a>
              </div>
              <div className="flex flex-col items-start h-full">
                <Link to="/trading/jaquar" className="text-xs font-bold uppercase tracking-widest text-[#ed1c23] mb-3 flex items-center gap-2 hover:text-[#c9141a]">
                  Distribution <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <ul className="space-y-3 text-sm text-slate-600 font-medium border-l-2 border-[#ed1c23]/30 pl-4 ml-0.5 mb-6">
                  <li><Link to="/trading/jaquar" className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">Jaquar Lighting</Link></li>
                </ul>
              </div>
              <div className="rounded-xl overflow-hidden bg-slate-50 border border-slate-200 p-2.5 text-center group/card hover:shadow-lg transition-shadow">
                <div className="overflow-hidden rounded-lg mb-3">
                  <img src="/assets/trading/rack-hero.webp" alt="PNP warehouse racking" className="w-full h-36 object-cover transform group-hover/card:scale-110 transition-transform duration-700" />
                </div>
                <span className="text-sm font-bold text-slate-900 block leading-tight">PNP Trading</span>
                <span className="text-xs text-slate-500 block mt-1">Own brands &amp; Jaquar distribution</span>
              </div>
            </div>
          </div>

          {/* Retail Mega Menu */}
          <div className="relative group">
            <Link to="/retail" className={navLinkClass('/retail')}>
              <span>Retail</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-300" />
            </Link>
            <div className={dropdownClass}>
              <div className="flex flex-col items-start h-full">
                <Link to="/retail" className="text-xs font-bold uppercase tracking-widest text-[#ed1c23] mb-3 flex items-center gap-2 hover:text-[#c9141a]">
                  BAGINNOV Mall <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <ul className="space-y-3 text-sm text-slate-600 font-medium border-l-2 border-[#ed1c23]/30 pl-4 ml-0.5 mb-6">
                  <li><Link to="/retail" className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">3 Floor 25,000 Sq. Ft. Mall</Link></li>
                  <li><Link to="/retail#floors" className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">Floor Guide</Link></li>
                  <li><Link to="/retail#range" className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">Product Range</Link></li>
                  <li><Link to="/retail#visit" className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">Visit the Store</Link></li>
                </ul>
                <a href="/BAGINNOV 2026 .pdf" download className="mt-auto px-6 py-3 bg-[#ed1c23] hover:bg-[#c9141a] text-white text-sm font-medium rounded-full inline-flex items-center gap-2 transition-colors"><Download className="w-4 h-4" /> Download Catalogue</a>
              </div>
              <div className="flex flex-col items-start h-full">
                <Link to="/retail/brands" className="text-xs font-bold uppercase tracking-widest text-[#ed1c23] mb-3 flex items-center gap-2 hover:text-[#c9141a]">
                  Our Brands <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <ul className="space-y-3 text-sm text-slate-600 font-medium border-l-2 border-[#ed1c23]/30 pl-4 ml-0.5 mb-6">
                  <li><Link to="/retail/brands#handbags" className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">Handbag Brands</Link></li>
                  <li><Link to="/retail/brands#backpacks" className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">Backpack Brands</Link></li>
                  <li><Link to="/retail/brands#luggage" className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">Luggage Brands</Link></li>
                  <li><Link to="/retail/brands#more" className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">More Brands</Link></li>
                </ul>
              </div>
              <div className="rounded-xl overflow-hidden bg-slate-50 border border-slate-200 p-2.5 text-center group/card hover:shadow-lg transition-shadow">
                <div className="overflow-hidden rounded-lg mb-3">
                  <img src="/assets/retail/storefront.webp" alt="BAGINNOV storefront" className="w-full h-36 object-cover transform group-hover/card:scale-110 transition-transform duration-700" />
                </div>
                <span className="text-sm font-bold text-slate-900 block leading-tight">BAGINNOV Iconic Mall</span>
                <span className="text-xs text-slate-500 block mt-1">India's Largest Multi Brands Bags &amp; Luggage Mall</span>
              </div>
            </div>
          </div>

          <span className={`${navLinkClass('/application')} pointer-events-none`}>
            Application
          </span>

          <span className={`${navLinkClass('/certifications')} pointer-events-none`}>
            Awards
          </span>

          <span className={`${navLinkClass('/contact')} pointer-events-none`}>
            Contact
          </span>
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => onOpenEnquiry()}
            className="px-6 py-2.5 bg-[#ed1c23] hover:bg-[#c9141a] text-white text-sm font-bold rounded-full shadow-lg shadow-red-600/20 flex items-center gap-2 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-red-600/30 active:translate-y-0"
          >
            <span>Enquire Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-[#ed1c23] bg-slate-50 rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-3 text-sm animate-fade-in shadow-inner absolute w-full left-0 top-full max-h-[calc(100vh-5rem)] overflow-y-auto">
          <Link to="/" className="block py-2.5 px-4 text-slate-800 border-b border-slate-100 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors">Home</Link>
          <div className="border-b border-slate-100">
            <button
              type="button"
              onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
              aria-expanded={mobileAboutOpen}
              className="w-full flex items-center justify-between py-2.5 px-4 text-slate-800 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors"
            >
              <span>About Us</span>
              <ChevronDown className={`w-4 h-4 opacity-60 transition-transform duration-300 ${mobileAboutOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileAboutOpen && (
              <div className="px-4 pt-2 pb-3 space-y-4">
                {aboutMobileGroups.map((group) => (
                  <div key={group.title}>
                    <Link to={group.to} className="text-xs font-bold uppercase tracking-widest text-[#ed1c23] flex items-center gap-2">
                      {group.title} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <ul className="mt-2 border-l-2 border-[#ed1c23]/30 pl-3 ml-0.5 text-slate-600 font-medium">
                      {group.links.map((link) => (
                        <li key={link.label}>
                          <Link to={link.to} className="block py-1.5 hover:text-[#ed1c23] transition-colors">{link.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="border-b border-slate-100">
            <button
              type="button"
              onClick={() => setMobileManufacturingOpen(!mobileManufacturingOpen)}
              aria-expanded={mobileManufacturingOpen}
              className="w-full flex items-center justify-between py-2.5 px-4 text-slate-800 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors"
            >
              <span>Manufacturing (NYTEX)</span>
              <ChevronDown className={`w-4 h-4 opacity-60 transition-transform duration-300 ${mobileManufacturingOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileManufacturingOpen && (
              <ul className="px-4 pt-1 pb-3 ml-0.5 text-slate-600 font-medium">
                {manufacturingMobileLinks.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="block py-1.5 hover:text-[#ed1c23] transition-colors">{link.label}</Link>
                  </li>
                ))}
                <li><a href="/Nytex 2026 .pdf" download className="block py-1.5 font-bold text-[#ed1c23]">Download Catalogue</a></li>
              </ul>
            )}
          </div>
          <div className="border-b border-slate-100">
            <button
              type="button"
              onClick={() => setMobileTradingOpen(!mobileTradingOpen)}
              aria-expanded={mobileTradingOpen}
              className="w-full flex items-center justify-between py-2.5 px-4 text-slate-800 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors"
            >
              <span>Trading</span>
              <ChevronDown className={`w-4 h-4 opacity-60 transition-transform duration-300 ${mobileTradingOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileTradingOpen && (
              <ul className="px-4 pt-1 pb-3 ml-0.5 text-slate-600 font-medium">
                <li><Link to="/trading" className="block py-1.5 hover:text-[#ed1c23] transition-colors">Own Brands</Link></li>
                <li><Link to="/trading/hao" className="block py-1.5 pl-3 hover:text-[#ed1c23] transition-colors">HAO Air Ventilators</Link></li>
                <li><Link to="/trading/tie" className="block py-1.5 pl-3 hover:text-[#ed1c23] transition-colors">TIE Roofing Screws</Link></li>
                <li><Link to="/trading/pnp" className="block py-1.5 pl-3 hover:text-[#ed1c23] transition-colors">PNP Fabric, Racking &amp; More</Link></li>
                <li><Link to="/trading/synwood" className="block py-1.5 pl-3 hover:text-[#ed1c23] transition-colors">Synwood Synthetic Wood</Link></li>
                <li><Link to="/trading/haowood" className="block py-1.5 pl-3 hover:text-[#ed1c23] transition-colors">Haowood Wall Panels</Link></li>
                <li className="pt-1.5 pb-1 text-slate-800">Distribution</li>
                <li><Link to="/trading/jaquar" className="block py-1.5 pl-3 hover:text-[#ed1c23] transition-colors">Jaquar Lighting</Link></li>
                <li><a href="/catalogues/PNP Trading Catalogues.zip" download className="block py-1.5 font-bold text-[#ed1c23]">Download Catalogue</a></li>
              </ul>
            )}
          </div>
          <div className="border-b border-slate-100">
            <button
              type="button"
              onClick={() => setMobileRetailOpen(!mobileRetailOpen)}
              aria-expanded={mobileRetailOpen}
              className="w-full flex items-center justify-between py-2.5 px-4 text-slate-800 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors"
            >
              <span>Retail (BAGINNOV)</span>
              <ChevronDown className={`w-4 h-4 opacity-60 transition-transform duration-300 ${mobileRetailOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileRetailOpen && (
              <ul className="px-4 pt-1 pb-3 ml-0.5 text-slate-600 font-medium">
                {retailMobileLinks.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="block py-1.5 hover:text-[#ed1c23] transition-colors">{link.label}</Link>
                  </li>
                ))}
                <li><a href="/BAGINNOV 2026 .pdf" download className="block py-1.5 font-bold text-[#ed1c23]">Download Catalogue</a></li>
              </ul>
            )}
          </div>
          <span className="block py-2.5 px-4 text-slate-800 border-b border-slate-100 rounded-lg pointer-events-none">Application</span>
          <span className="block py-2.5 px-4 text-slate-800 border-b border-slate-100 rounded-lg pointer-events-none">Certifications & Awards</span>
          <span className="block py-2.5 px-4 text-slate-800 border-b border-slate-100 rounded-lg pointer-events-none">Contact Us</span>
        </div>
      )}
    </header>
  );
}
