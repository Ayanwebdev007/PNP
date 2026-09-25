import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ onOpenEnquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
  }, [location]);

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-white py-4'} border-b border-slate-200`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/assets/logo.png?v=trendsetters_v1" 
            alt="PNP Logo" 
            className="h-10 md:h-11 w-auto object-contain"
          />
        </Link>

        {/* Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-1 font-sans text-[14px] text-slate-900">
          <Link to="/" className={`px-3.5 py-2 rounded-md hover:text-[#ed1c23] transition-colors ${location.pathname === '/' ? 'text-[#ed1c23] font-medium' : ''}`}>
            Home
          </Link>

          {/* About Us Mega Menu */}
          <div className="relative group">
            <Link to="/about" className={`px-3.5 py-2 rounded-md flex items-center gap-1 hover:text-[#ed1c23] transition-colors ${location.pathname === '/about' ? 'text-[#ed1c23] font-medium' : ''}`}>
              <span>About Us</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform" />
            </Link>
            <div className="absolute top-full left-0 w-[640px] bg-white rounded-xl shadow-2xl border border-slate-100 p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 grid grid-cols-3 gap-6">
              <div>
                <h4 className="text-xs font-medium uppercase tracking-wider text-[#ed1c23] mb-3 border-b border-red-100 pb-1">Company Profile</h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li><Link to="/about" className="hover:text-[#ed1c23] transition-colors">Company Overview</Link></li>
                  <li><Link to="/about#leadership" className="hover:text-[#ed1c23] transition-colors">Leadership & Vision</Link></li>
                  <li><Link to="/about#values" className="hover:text-[#ed1c23] transition-colors">Corporate Values</Link></li>
                  <li><Link to="/about#milestones" className="hover:text-[#ed1c23] transition-colors">Milestones Since 1997</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-medium uppercase tracking-wider text-[#ed1c23] mb-3 border-b border-red-100 pb-1">Pan-India Reach</h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li><Link to="/contact" className="hover:text-[#ed1c23] transition-colors">11 Nationwide Branches</Link></li>
                  <li><Link to="/contact" className="hover:text-[#ed1c23] transition-colors">20+ Lakh Sq. Ft. Storage</Link></li>
                  <li><Link to="/contact" className="hover:text-[#ed1c23] transition-colors">Taipei Global Office</Link></li>
                  <li><Link to="/contact" className="hover:text-[#ed1c23] transition-colors">Distribution Network</Link></li>
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden bg-slate-50 border border-slate-200 p-2 text-center">
                <img src="/assets/about/building.jpg" alt="PNP Headquarters" className="w-full h-28 object-cover rounded-md mb-2" />
                <span className="text-[11px] font-medium text-slate-900 block leading-tight">PNP Corporate Headquarters</span>
                <span className="text-[10px] text-slate-500 block">Trusted Solutions Since 1997</span>
              </div>
            </div>
          </div>

          {/* Manufacturing Mega Menu */}
          <div className="relative group">
            <Link to="/manufacturing" className={`px-3.5 py-2 rounded-md flex items-center gap-1 hover:text-[#ed1c23] transition-colors ${location.pathname === '/manufacturing' ? 'text-[#ed1c23] font-medium' : ''}`}>
              <span>Manufacturing</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform" />
            </Link>
            <div className="absolute top-full left-0 w-[640px] bg-white rounded-xl shadow-2xl border border-slate-100 p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 grid grid-cols-3 gap-6">
              <div>
                <h4 className="text-xs font-medium uppercase tracking-wider text-[#ed1c23] mb-3 border-b border-red-100 pb-1">NYTEX Division (#2 in India)</h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li><Link to="/manufacturing" className="hover:text-[#ed1c23] transition-colors">Bhilad Plant (Est. 2018)</Link></li>
                  <li><Link to="/manufacturing" className="hover:text-[#ed1c23] transition-colors">German Barmag Machinery</Link></li>
                  <li><Link to="/manufacturing" className="hover:text-[#ed1c23] transition-colors">100% Wind & Solar Energy</Link></li>
                  <li><Link to="/manufacturing" className="hover:text-[#ed1c23] transition-colors">7 Leadership USPs</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-medium uppercase tracking-wider text-[#ed1c23] mb-3 border-b border-red-100 pb-1">5 Technical Yarn Varieties</h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li><Link to="/manufacturing" className="hover:text-[#ed1c23] transition-colors">POY: Partially Oriented Yarn</Link></li>
                  <li><Link to="/manufacturing" className="hover:text-[#ed1c23] transition-colors">FDY: Fully Drawn Yarn</Link></li>
                  <li><Link to="/manufacturing" className="hover:text-[#ed1c23] transition-colors">HOY: Highly Oriented Yarn</Link></li>
                  <li><Link to="/manufacturing" className="hover:text-[#ed1c23] transition-colors">DTY: Drawn Textured Yarn</Link></li>
                  <li><Link to="/manufacturing" className="hover:text-[#ed1c23] transition-colors">ACY: Air Covered Yarn</Link></li>
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden bg-slate-50 border border-slate-200 p-2 text-center">
                <img src="/assets/businesses/nytex-hq.jpg" alt="NYTEX Bhilad Facility" className="w-full h-28 object-cover rounded-md mb-2" />
                <span className="text-[11px] font-medium text-slate-900 block leading-tight">NYTEX (#2 Largest in India)</span>
                <span className="text-[10px] text-slate-500 block">Oerlikon Barmag Tech • 100% Green Energy</span>
              </div>
            </div>
          </div>

          {/* Trading Mega Menu */}
          <div className="relative group">
            <Link to="/trading" className={`px-3.5 py-2 rounded-md flex items-center gap-1 hover:text-[#ed1c23] transition-colors ${location.pathname === '/trading' ? 'text-[#ed1c23] font-medium' : ''}`}>
              <span>Trading</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform" />
            </Link>
            <div className="absolute top-full left-0 w-[640px] bg-white rounded-xl shadow-2xl border border-slate-100 p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 grid grid-cols-3 gap-6">
              <div>
                <h4 className="text-xs font-medium uppercase tracking-wider text-[#ed1c23] mb-3 border-b border-red-100 pb-1">Own Brands</h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li><Link to="/trading" className="hover:text-[#ed1c23] transition-colors">PNP Fabrics (25% Market Share)</Link></li>
                  <li><Link to="/trading" className="hover:text-[#ed1c23] transition-colors">Synwood & Haowood (10% Share)</Link></li>
                  <li><Link to="/trading" className="hover:text-[#ed1c23] transition-colors">HAO Ventilators (Assembled in India)</Link></li>
                  <li><Link to="/trading" className="hover:text-[#ed1c23] transition-colors">TIE Fasteners (PEB Screws)</Link></li>
                  <li><Link to="/trading" className="hover:text-[#ed1c23] transition-colors">PNP Racking System (Warehousing)</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-medium uppercase tracking-wider text-[#ed1c23] mb-3 border-b border-red-100 pb-1">Distribution Division</h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li><Link to="/trading" className="hover:text-[#ed1c23] transition-colors">JAQUAR LIGHTING (Distributor)</Link></li>
                  <li><Link to="/trading" className="hover:text-[#ed1c23] transition-colors">Mumbai (Bandra to Virar)</Link></li>
                  <li><Link to="/downloads" className="hover:text-[#ed1c23] transition-colors">21 Synwood Download Catalogues</Link></li>
                  <li><a href="/Jaquar 2062.pdf" download className="hover:text-[#ed1c23] transition-colors">Jaquar 2026 Catalog (PDF)</a></li>
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden bg-slate-50 border border-slate-200 p-2 text-center">
                <img src="/assets/products/luggage-fabric-hq.jpg" alt="Coated Fabrics" className="w-full h-28 object-cover rounded-md mb-2" />
                <span className="text-[11px] font-medium text-slate-900 block leading-tight">Own Brands & Distribution</span>
                <span className="text-[10px] text-slate-500 block">25% Fabric Share • Jaquar Partner</span>
              </div>
            </div>
          </div>

          {/* Retail Mega Menu */}
          <div className="relative group">
            <Link to="/retail" className={`px-3.5 py-2 rounded-md flex items-center gap-1 hover:text-[#ed1c23] transition-colors ${location.pathname === '/retail' ? 'text-[#ed1c23] font-medium' : ''}`}>
              <span>Retail</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform" />
            </Link>
            <div className="absolute top-full left-0 w-[640px] bg-white rounded-xl shadow-2xl border border-slate-100 p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 grid grid-cols-3 gap-6">
              <div>
                <h4 className="text-xs font-medium uppercase tracking-wider text-[#ed1c23] mb-3 border-b border-red-100 pb-1">BAGINNOV Megastore</h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li><Link to="/retail" className="hover:text-[#ed1c23] transition-colors">3-Floor 25,000 Sq. Ft. Mall</Link></li>
                  <li><Link to="/retail" className="hover:text-[#ed1c23] transition-colors">Mangal Aarambh, Borivali (W)</Link></li>
                  <li><a href="https://www.baginnov.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#ed1c23] transition-colors">baginnov.in Official Site</a></li>
                  <li><Link to="/retail" className="hover:text-[#ed1c23] transition-colors">Corporate & Festive Bulk Gifting</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-medium uppercase tracking-wider text-[#ed1c23] mb-3 border-b border-red-100 pb-1">Premier Luggage Brands</h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li><Link to="/retail" className="hover:text-[#ed1c23] transition-colors">Samsonite & American Tourister</Link></li>
                  <li><Link to="/retail" className="hover:text-[#ed1c23] transition-colors">Delsey Paris & Carlton</Link></li>
                  <li><Link to="/retail" className="hover:text-[#ed1c23] transition-colors">VIP, Safari & Skybags</Link></li>
                  <li><a href="/BAGINNOV 2026 .pdf" download className="hover:text-[#ed1c23] transition-colors">2026 Retail Catalog (PDF)</a></li>
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden bg-slate-50 border border-slate-200 p-2 text-center">
                <img src="/assets/businesses/baginnov-hq.jpg" alt="BAGINNOV Mall" className="w-full h-28 object-cover rounded-md mb-2" />
                <span className="text-[11px] font-medium text-slate-900 block leading-tight">BAGINNOV Iconic Mall</span>
                <span className="text-[10px] text-slate-500 block">3-Floor 25,000 Sq. Ft. Mall</span>
              </div>
            </div>
          </div>

          <Link to="/application" className={`px-3.5 py-2 rounded-md hover:text-[#ed1c23] transition-colors ${location.pathname === '/application' ? 'text-[#ed1c23] font-medium' : ''}`}>
            Application
          </Link>

          <Link to="/certifications" className={`px-3.5 py-2 rounded-md hover:text-[#ed1c23] transition-colors ${location.pathname === '/certifications' ? 'text-[#ed1c23] font-medium' : ''}`}>
            Certifications & Awards
          </Link>

          <Link to="/contact" className={`px-3.5 py-2 rounded-md hover:text-[#ed1c23] transition-colors ${location.pathname === '/contact' ? 'text-[#ed1c23] font-medium' : ''}`}>
            Contact Us
          </Link>
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onOpenEnquiry()}
            className="px-5 py-2.5 bg-[#ed1c23] hover:bg-[#c9141a] text-white text-xs font-medium rounded-lg shadow-md shadow-red-600/20 flex items-center gap-1.5 transition-all hover:scale-105"
          >
            <span>Enquire Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-[#ed1c23]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-3 text-sm animate-fade-in">
          <Link to="/" className="block py-1.5 text-slate-800 border-b border-slate-100">Home</Link>
          <Link to="/about" className="block py-1.5 text-slate-800 border-b border-slate-100">About Us</Link>
          <Link to="/manufacturing" className="block py-1.5 text-slate-800 border-b border-slate-100">Manufacturing (NYTEX)</Link>
          <Link to="/trading" className="block py-1.5 text-slate-800 border-b border-slate-100">Trading & Own Brands</Link>
          <Link to="/retail" className="block py-1.5 text-slate-800 border-b border-slate-100">Retail (BAGINNOV Mall)</Link>
          <Link to="/application" className="block py-1.5 text-slate-800 border-b border-slate-100">Application</Link>
          <Link to="/certifications" className="block py-1.5 text-slate-800 border-b border-slate-100">Certifications & Awards</Link>
          <Link to="/contact" className="block py-1.5 text-slate-800 border-b border-slate-100">Contact Us</Link>
        </div>
      )}
    </header>
  );
}
