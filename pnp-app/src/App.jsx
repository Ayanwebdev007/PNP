import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';
import VideoModal from './components/VideoModal';
import SynwoodModal from './components/SynwoodModal';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ManufacturingPage from './pages/ManufacturingPage';
import TradingPage from './pages/TradingPage';
import RetailPage from './pages/RetailPage';
import ApplicationsPage from './pages/ApplicationsPage';
import CertificationsPage from './pages/CertificationsPage';
import DownloadsPage from './pages/DownloadsPage';
import ContactPage from './pages/ContactPage';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
}

import Lenis from 'lenis';

export default function App() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [synwoodModalOpen, setSynwoodModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleOpenEnquiry = (productName = '') => {
    setSelectedProduct(productName);
    setEnquiryModalOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white font-sans text-slate-800 antialiased selection:bg-red-600 selection:text-white">
        
        {/* Top Navbar */}
        <Navbar onOpenEnquiry={handleOpenEnquiry} />

        {/* Main Content Area */}
        <main className="flex-1">
          <Routes>
            <Route 
              path="/" 
              element={
                <HomePage 
                  onOpenEnquiry={handleOpenEnquiry} 
                  onOpenVideoModal={() => setVideoModalOpen(true)}
                  onOpenSynwoodModal={() => setSynwoodModalOpen(true)}
                />
              } 
            />
            {/* FORCE ANY OTHER URL TO IMMEDIATELY REDIRECT TO HOME */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Corporate Footer */}
        <Footer />

        {/* All Modals */}
        <EnquiryModal
          isOpen={enquiryModalOpen}
          onClose={() => setEnquiryModalOpen(false)}
          initialProduct={selectedProduct}
        />

        <VideoModal
          isOpen={videoModalOpen}
          onClose={() => setVideoModalOpen(false)}
        />

        <SynwoodModal
          isOpen={synwoodModalOpen}
          onClose={() => setSynwoodModalOpen(false)}
        />

      </div>
    </Router>
  );
}
