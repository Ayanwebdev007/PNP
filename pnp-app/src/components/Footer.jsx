import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <Link to="/" className="inline-block">
              <img src="/assets/footer-logo.png?v=trendsetters_v1" alt="PNP Logo" className="h-12 w-auto bg-white p-2 rounded-lg" />
            </Link>
            <p className="text-[#fff100] font-normal uppercase tracking-wider text-[11px]">
              BUILDING A STRONGER INDIA SINCE 1997
            </p>
            <p className="text-slate-400 text-xs leading-relaxed">
              Delivering innovative materials and industrial solutions for a stronger, smarter and more sustainable tomorrow.
            </p>
          </div>

          {/* Col 2: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white text-xs font-normal uppercase tracking-wider border-l-2 border-[#ed1c23] pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><a href="#businesses" className="hover:text-white transition-colors">Our Businesses</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
              <li><a href="#businesses" className="hover:text-white transition-colors">Infrastructure</a></li>
              <li><a href="#media" className="hover:text-white transition-colors">Media</a></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Col 3: Our Businesses (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white text-xs font-normal uppercase tracking-wider border-l-2 border-[#ed1c23] pl-2.5">
              Our Businesses
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/trading" className="hover:text-white transition-colors">PNP Polytex</Link></li>
              <li><Link to="/manufacturing" className="hover:text-white transition-colors">Nytex</Link></li>
              <li><Link to="/trading" className="hover:text-white transition-colors">Synwood</Link></li>
              <li><Link to="/trading" className="hover:text-white transition-colors">HAO</Link></li>
              <li><Link to="/trading" className="hover:text-white transition-colors">TIE</Link></li>
              <li><Link to="/retail" className="hover:text-white transition-colors">Baginnov</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact Us (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white text-xs font-normal uppercase tracking-wider border-l-2 border-[#ed1c23] pl-2.5">
              Contact Us
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#ed1c23] shrink-0 mt-0.5" />
                <span>A 601–607, Mangal Aarambh, Kora Kendra, Near McDonald's, Borivali (W), Mumbai – 400 092</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#ed1c23] shrink-0" />
                <span>022 - 4014 0181 - 88 / +91 92233 91088</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#ed1c23] shrink-0" />
                <span>sales@pnpind.com</span>
              </div>
            </div>
          </div>

          {/* Col 5: World Map & Pillars (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <img src="/assets/presence/world-map.png" alt="PNP Global Presence" className="w-full h-auto object-contain opacity-70" />
            <div className="flex items-center gap-2 border-l-2 border-[#ed1c23] pl-2 text-[10px] font-normal uppercase text-slate-300 tracking-wider flex-col items-start leading-tight">
              <span>MATERIALS</span>
              <span>PEOPLE</span>
              <span>PROGRESS</span>
              <span className="text-[#fff100]">A STRONGER INDIA</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Sub-Footer */}
      <div className="border-t border-slate-900 bg-slate-950 py-4 px-4 text-[11px] text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© 2026 PNP IND. All Rights Reserved.</span>
          <div className="flex items-center gap-3">
            <Link to="/contact" className="hover:text-slate-300">Privacy Policy</Link>
            <span>|</span>
            <Link to="/contact" className="hover:text-slate-300">Terms of Use</Link>
            <span>|</span>
            <Link to="/contact" className="hover:text-slate-300">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
