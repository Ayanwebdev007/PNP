import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#ed1c23] text-white text-xs">
      <div className="max-w-7xl mx-auto px-5 py-10 md:px-6 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <Link to="/" className="inline-block bg-white px-4 py-3 rounded-xl shadow-sm">
              <img src="/assets/logo.webp?v=trendsetters_v1" alt="PNP Logo" className="h-12 w-auto object-contain" />
            </Link>
            <p className="text-[#fff100] font-semibold uppercase tracking-wider text-[11px] mt-2">
              BUILDING A STRONGER INDIA SINCE 1997
            </p>
            <p className="text-white/70 text-xs leading-relaxed">
              Delivering innovative materials and industrial solutions for a stronger, smarter and more sustainable tomorrow.
            </p>
          </div>

          {/* Col 2: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider border-l-2 border-[#fff100] pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="text-white/70 hover:text-[#fff100] transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-white/70 hover:text-[#fff100] transition-colors">About Us</Link></li>
              <li><Link to="/trading" className="text-white/70 hover:text-[#fff100] transition-colors">Businesses</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-[#fff100] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Col 3: Our Businesses (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider border-l-2 border-[#fff100] pl-2.5">
              Our Businesses
            </h4>
            <ul className="space-y-3 text-sm">

              <li><Link to="/manufacturing" className="text-white/70 hover:text-[#fff100] transition-colors">Nytex</Link></li>
              <li><Link to="/trading" className="text-white/70 hover:text-[#fff100] transition-colors">Synwood</Link></li>
              <li><Link to="/trading" className="text-white/70 hover:text-[#fff100] transition-colors">HAO</Link></li>
              <li><Link to="/retail" className="text-white/70 hover:text-[#fff100] transition-colors">Baginnov</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact Us (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider border-l-2 border-[#fff100] pl-2.5">
              Contact Us
            </h4>
            <div className="space-y-3 text-sm text-white/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#fff100] shrink-0 mt-0.5" />
                <span>A 601–607, Mangal Aarambh, Kora Kendra, Near McDonald's, Borivali (W), Mumbai – 400 092</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#fff100] shrink-0" />
                <span>022 - 4014 0181 - 88 / +91 92233 91088</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#fff100] shrink-0" />
                <a href="mailto:sales@pnpind.com" className="hover:text-[#fff100] transition-colors">sales@pnpind.com</a>
              </div>
            </div>
          </div>

          {/* Col 5: Pillars (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4 flex flex-col justify-center">
            <div className="border-l-2 border-[#fff100] pl-3 space-y-1.5 text-sm font-bold uppercase tracking-wider">
              <div className="text-white/60">Materials</div>
              <div className="text-white/60">People</div>
              <div className="text-white/60">Progress</div>
              <div className="text-[#fff100] text-base mt-1">A Stronger India</div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Sub-Footer */}
      <div className="border-t border-white/20 bg-[#c9141a] py-4 px-4 text-[11px] text-white/60">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© 2026 PNP Group. All Rights Reserved.</span>
          <div className="flex items-center gap-3">
            <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-white/30">|</span>
            <Link to="/contact" className="hover:text-white transition-colors">Terms of Use</Link>
            <span className="text-white/30">|</span>
            <Link to="/contact" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
