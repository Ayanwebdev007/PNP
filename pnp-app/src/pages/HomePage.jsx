import React from 'react';
import Hero from '../components/Hero';
import BusinessesGrid from '../components/BusinessesGrid';
import StatsTrustSection from '../components/StatsTrustSection';
import AboutPnpSection from '../components/AboutPnpSection';
import FeaturedProductsSection from '../components/FeaturedProductsSection';
import IndustriesServeSection from '../components/IndustriesServeSection';
import MediaSection from '../components/MediaSection';
import PresenceSection from '../components/PresenceSection';
import CtaBannerSection from '../components/CtaBannerSection';

export default function HomePage({ onOpenEnquiry, onOpenVideoModal, onOpenSynwoodModal }) {
  return (
    <div className="bg-white text-slate-900 min-h-screen">
      
      {/* 1. HERO SECTION */}
      <Hero onOpenEnquiry={onOpenEnquiry} onOpenVideoModal={onOpenVideoModal} />

      {/* 2. OUR BUSINESSES (MINIMALIST EXECUTIVE LOGO TILES & FILTER BAR) */}
      <BusinessesGrid onOpenSynwoodModal={onOpenSynwoodModal} />

      {/* 3. RED STATISTICS + DARK TRUST SECTION */}
      <StatsTrustSection />

      {/* 4. ABOUT PNP / LEGACY SECTION */}
      <AboutPnpSection onOpenVideoModal={onOpenVideoModal} />

      {/* 5. FEATURED PRODUCTS SECTION */}
      <FeaturedProductsSection />

      {/* 6. INDUSTRIES WE SERVE SECTION */}
      <IndustriesServeSection />

      {/* 7. IN THE MEDIA SECTION */}
      <MediaSection />

      {/* 8. OUR PRESENCE SECTION (MARKET REACH & 10+1 OFFICES) */}
      <PresenceSection />

      {/* 9. FINAL CTA BANNER (CONTACT US) */}
      <CtaBannerSection onOpenEnquiry={onOpenEnquiry} />

    </div>
  );
}
