import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

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

export default function Navbar({ onOpenEnquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
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
  }, [location]);

  const navLinkClass = (path) => `
    px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-1.5
    ${location.pathname === path 
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
          <div className="relative group pointer-events-none">
            <span className={navLinkClass('/manufacturing')}>
              <span>Manufacturing</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-300" />
            </span>
            <div className={dropdownClass}>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#ed1c23] mb-4 flex items-center gap-2">
                  <span className="w-4 h-[2px] bg-[#ed1c23]"></span> NYTEX Division
                </h4>
                <ul className="space-y-3 text-sm text-slate-600 font-medium">
                  <li><Link to="/manufacturing" className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">Bhilad Plant (Est. 2018)</Link></li>
                  <li><Link to="/manufacturing" className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">German Barmag Machinery</Link></li>
                  <li><Link to="/manufacturing" className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">100% Wind & Solar Energy</Link></li>
                  <li><Link to="/manufacturing" className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">7 Leadership USPs</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#ed1c23] mb-4 flex items-center gap-2">
                  <span className="w-4 h-[2px] bg-[#ed1c23]"></span> Nytex Products
                </h4>
                <ul className="space-y-3 text-sm text-slate-600 font-medium">
                  <li><Link to="/manufacturing" className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">POY: Partially Oriented Yarn</Link></li>
                  <li><Link to="/manufacturing" className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">FDY: Fully Drawn Yarn</Link></li>
                  <li><Link to="/manufacturing" className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">HOY: Highly Oriented Yarn</Link></li>
                  <li><Link to="/manufacturing" className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">DTY: Drawn Textured Yarn</Link></li>
                  <li><Link to="/manufacturing" className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">ACY: Air Covered Yarn</Link></li>
                </ul>
              </div>
              <div className="rounded-xl overflow-hidden bg-slate-50 border border-slate-200 p-2.5 text-center group/card hover:shadow-lg transition-shadow">
                <div className="overflow-hidden rounded-lg mb-3">
                  <img src="/assets/businesses/nytex-hq.webp" alt="NYTEX Bhilad Facility" className="w-full h-36 object-cover transform group-hover/card:scale-110 transition-transform duration-700" />
                </div>
                <span className="text-sm font-bold text-slate-900 block leading-tight">NYTEX Operations</span>
                <span className="text-xs text-slate-500 block mt-1">Powered by Green Energy</span>
              </div>
            </div>
          </div>

          {/* Trading Mega Menu */}
          <div className="relative group pointer-events-none">
            <span className={navLinkClass('/trading')}>
              <span>Trading</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-300" />
            </span>
            <div className={dropdownClass}>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#ed1c23] mb-4 flex items-center gap-2">
                  <span className="w-4 h-[2px] bg-[#ed1c23]"></span> Own Brands
                </h4>
                <ul className="space-y-3 text-sm text-slate-600 font-medium">
                  <li><Link to="/trading" className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">PNP Fabrics (25% Market Share)</Link></li>
                  <li><Link to="/trading" className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">Synwood & Haowood (10% Share)</Link></li>
                  <li><Link to="/trading" className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">HAO Ventilators (Make in India)</Link></li>
                  <li><Link to="/trading" className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">TIE Fasteners (PEB Screws)</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#ed1c23] mb-4 flex items-center gap-2">
                  <span className="w-4 h-[2px] bg-[#ed1c23]"></span> Distribution
                </h4>
                <ul className="space-y-3 text-sm text-slate-600 font-medium">
                  <li><Link to="/trading" className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">JAQUAR LIGHTING (Partner)</Link></li>
                  <li><Link to="/trading" className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">Mumbai (Bandra to Virar)</Link></li>
                  <li><Link to="/downloads" className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">21 Synwood Catalogs</Link></li>
                  <li><a href="/Jaquar 2062.pdf" download className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">Jaquar 2026 Catalog (PDF)</a></li>
                </ul>
              </div>
              <div className="rounded-xl overflow-hidden bg-slate-50 border border-slate-200 p-2.5 text-center group/card hover:shadow-lg transition-shadow">
                <div className="overflow-hidden rounded-lg mb-3">
                  <img src="/assets/products/luggage-fabric-hq.webp" alt="Coated Fabrics" className="w-full h-36 object-cover transform group-hover/card:scale-110 transition-transform duration-700" />
                </div>
                <span className="text-sm font-bold text-slate-900 block leading-tight">Trading Network</span>
                <span className="text-xs text-slate-500 block mt-1">25% Fabric Share</span>
              </div>
            </div>
          </div>

          {/* Retail Mega Menu */}
          <div className="relative group pointer-events-none">
            <span className={navLinkClass('/retail')}>
              <span>Retail</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-300" />
            </span>
            <div className={dropdownClass}>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#ed1c23] mb-4 flex items-center gap-2">
                  <span className="w-4 h-[2px] bg-[#ed1c23]"></span> BAGINNOV Mall
                </h4>
                <ul className="space-y-3 text-sm text-slate-600 font-medium">
                  <li><Link to="/retail" className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">3-Floor 25,000 Sq. Ft. Mall</Link></li>
                  <li><Link to="/retail" className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">Mangal Aarambh, Borivali (W)</Link></li>
                  <li><a href="https://www.baginnov.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">baginnov.in Official Site</a></li>
                  <li><Link to="/retail" className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">Corporate Bulk Gifting</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#ed1c23] mb-4 flex items-center gap-2">
                  <span className="w-4 h-[2px] bg-[#ed1c23]"></span> Luggage Brands
                </h4>
                <ul className="space-y-3 text-sm text-slate-600 font-medium">
                  <li><Link to="/retail" className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">Samsonite & American Tourister</Link></li>
                  <li><Link to="/retail" className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">Delsey Paris & Carlton</Link></li>
                  <li><Link to="/retail" className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">VIP, Safari & Skybags</Link></li>
                  <li><a href="/BAGINNOV 2026 .pdf" download className="hover:text-[#ed1c23] hover:translate-x-1 inline-block transition-all">2026 Retail Catalog (PDF)</a></li>
                </ul>
              </div>
              <div className="rounded-xl overflow-hidden bg-slate-50 border border-slate-200 p-2.5 text-center group/card hover:shadow-lg transition-shadow">
                <div className="overflow-hidden rounded-lg mb-3">
                  <img src="/assets/businesses/baginnov-hq.webp" alt="BAGINNOV Mall" className="w-full h-36 object-cover transform group-hover/card:scale-110 transition-transform duration-700" />
                </div>
                <span className="text-sm font-bold text-slate-900 block leading-tight">BAGINNOV Iconic Mall</span>
                <span className="text-xs text-slate-500 block mt-1">25,000 Sq. Ft. Megastore</span>
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
          <span className="block py-2.5 px-4 text-slate-800 border-b border-slate-100 rounded-lg pointer-events-none">Manufacturing (NYTEX)</span>
          <span className="block py-2.5 px-4 text-slate-800 border-b border-slate-100 rounded-lg pointer-events-none">Trading & Own Brands</span>
          <span className="block py-2.5 px-4 text-slate-800 border-b border-slate-100 rounded-lg pointer-events-none">Retail (BAGINNOV Mall)</span>
          <span className="block py-2.5 px-4 text-slate-800 border-b border-slate-100 rounded-lg pointer-events-none">Application</span>
          <span className="block py-2.5 px-4 text-slate-800 border-b border-slate-100 rounded-lg pointer-events-none">Certifications & Awards</span>
          <span className="block py-2.5 px-4 text-slate-800 border-b border-slate-100 rounded-lg pointer-events-none">Contact Us</span>
        </div>
      )}
    </header>
  );
}
