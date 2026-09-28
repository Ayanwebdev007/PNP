import React, { useState, useRef, useEffect } from 'react';
import { featuredProducts } from '../data/pnpData';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function FeaturedProductsSection() {
  const [activeBrand, setActiveBrand] = useState(featuredProducts[0].brand);
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const logoContainerRef = useRef(null);

  const uniqueBrands = [...new Set(featuredProducts.map(p => p.brand))];

  useEffect(() => {
    if (!logoContainerRef.current) return;
    const activeBtn = logoContainerRef.current.querySelector(`[data-brand="${activeBrand}"]`);
    if (activeBtn && window.innerWidth < 1024) {
      const container = logoContainerRef.current;
      const scrollLeft = activeBtn.offsetLeft - container.offsetWidth / 2 + activeBtn.offsetWidth / 2;
      container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
  }, [activeBrand]);

  const getBrandLogo = (brandName) => {
    const product = featuredProducts.find(p => p.brand === brandName);
    return product ? product.brandLogo : null;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 1024) {
        if (trackRef.current) trackRef.current.style.transform = `none`;
        return;
      }
      if (!sectionRef.current || !trackRef.current) return;
      
      const section = sectionRef.current;
      const track = trackRef.current;
      
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Assuming a standard 80px navbar height. 
      // The sticky container triggers when the section reaches 80px from the top.
      const stickyOffset = 80;
      
      const totalScrollableDistance = rect.height - viewportHeight + stickyOffset;
      // Progress starts exactly when rect.top hits stickyOffset
      let progress = (stickyOffset - rect.top) / totalScrollableDistance;
      progress = Math.max(0, Math.min(progress, 1));
      
      const containerWidth = track.parentElement.offsetWidth;
      const maxTranslate = Math.max(0, track.scrollWidth - containerWidth);
      
      const currentScrollX = maxTranslate * progress;
      track.style.transform = `translate3d(-${currentScrollX}px, 0, 0)`;
      
      const activeIndex = Math.round(progress * (featuredProducts.length - 1));
      const safeIndex = Math.max(0, Math.min(activeIndex, featuredProducts.length - 1));
      
      const newBrand = featuredProducts[safeIndex]?.brand;
      if (newBrand) {
        setActiveBrand(prev => (prev !== newBrand ? newBrand : prev));
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 1024) return;
    if (!trackRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(trackRef.current.children).indexOf(entry.target);
            const newBrand = featuredProducts[index]?.brand;
            if (newBrand) {
              setActiveBrand(newBrand);
            }
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );

    Array.from(trackRef.current.children).forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, []);

  const scrollToBrand = (brand) => {
    if (!sectionRef.current || !trackRef.current) return;
    
    const index = featuredProducts.findIndex(p => p.brand === brand);
    if (index === -1) return;
    
    const track = trackRef.current;
    const card = track.children[index];
    const targetOffset = card.offsetLeft;
    
    if (window.innerWidth < 1024) {
      const yOffset = -180; 
      const y = card.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      return;
    }
    
    const containerWidth = track.parentElement.offsetWidth;
    const maxTranslate = Math.max(0, track.scrollWidth - containerWidth);
    
    if (maxTranslate === 0) return;
    
    let targetProgress = targetOffset / maxTranslate;
    targetProgress = Math.max(0, Math.min(targetProgress, 1));
    
    const section = sectionRef.current;
    const viewportHeight = window.innerHeight;
    const stickyOffset = 80;
    const totalScrollableDistance = section.offsetHeight - viewportHeight + stickyOffset;
    
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    
    window.scrollTo({
      top: sectionTop - stickyOffset + targetProgress * totalScrollableDistance,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Normal Text Header Section */}
      <section className="bg-slate-50 text-slate-900 pt-16 sm:pt-24 pb-0 sm:pb-8" id="products">
        <motion.div 
          className="max-w-7xl mx-auto px-4 md:px-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <span className="w-6 sm:w-8 h-[2px] bg-[#ed1c23]"></span>
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#ed1c23] uppercase">
              Our Divisions
            </span>
          </div>
          <h2 className="text-3xl min-[375px]:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
            A brand for every <br className="hidden sm:block" />
            <span className="text-slate-400">industry need.</span>
          </h2>
        </motion.div>
      </section>

      {/* Sticky Gallery Section */}
      <section ref={sectionRef} className="lg:h-[350vh] bg-slate-50 text-slate-900 pb-12 lg:pb-0">
        {/* Sticky Container clears the 80px navbar and uses pure flex-centering */}
        <div className="lg:sticky lg:top-[80px] lg:h-[calc(100vh-80px)] w-full flex flex-col justify-start pt-6 lg:pt-0 lg:justify-center lg:overflow-hidden">
          
          <div className="max-w-7xl mx-auto px-4 md:px-6 w-full h-full flex flex-col justify-start lg:justify-center">
            
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 relative items-start lg:items-center">
              
              {/* Left Sidebar (Logos) */}
              <div 
                ref={logoContainerRef}
                className="w-screen -ml-4 px-4 sm:-ml-6 sm:px-6 lg:w-1/4 lg:m-0 lg:p-0 flex lg:flex-col gap-2 sm:gap-4 overflow-x-auto lg:overflow-visible pb-2 sm:pb-4 lg:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] sticky top-[64px] md:top-[64px] lg:static bg-slate-50/95 backdrop-blur-md lg:bg-transparent z-20 pt-4 lg:pt-0 mb-6 lg:mb-0 border-b border-slate-200/50 lg:border-none shadow-sm lg:shadow-none"
              >
                {uniqueBrands.map((brand) => (
                  <button
                    key={brand}
                    data-brand={brand}
                    onClick={() => scrollToBrand(brand)}
                    className={`relative flex items-center justify-center p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl transition-all duration-300 shrink-0 lg:shrink border ${
                      activeBrand === brand 
                        ? 'bg-white border-transparent shadow-md sm:shadow-xl scale-[1.02]' 
                        : 'bg-transparent border-transparent hover:bg-white/50 opacity-40 grayscale hover:grayscale-0'
                    }`}
                  >
                    {/* Active Indicator Line (Bottom on Mobile, Left on Desktop) */}
                    <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 rounded-t-full lg:bottom-auto lg:top-1/2 lg:left-0 lg:-translate-x-0 lg:-translate-y-1/2 lg:w-1.5 lg:h-1/2 bg-[#ed1c23] lg:rounded-t-none lg:rounded-r-full transition-all duration-300 ${activeBrand === brand ? 'opacity-100' : 'opacity-0'}`} />
                    
                    <img 
                      src={getBrandLogo(brand)} 
                      alt={brand} 
                      className={`h-6 min-[375px]:h-7 sm:h-8 lg:h-12 object-contain mx-auto`}
                    />
                  </button>
                ))}
              </div>

              {/* Right Content (Cards) */}
              <div className="w-full lg:w-3/4 lg:overflow-hidden relative pb-4 lg:pb-0">
                <div 
                  ref={trackRef}
                  className="flex flex-col lg:flex-row gap-8 lg:gap-6 w-full lg:w-max will-change-transform lg:items-center px-0"
                  style={{ transition: 'transform 0.1s ease-out' }}
                >
                  {featuredProducts.map((p) => (
                    <div 
                      key={p.id}
                      className="w-full lg:shrink-0 md:w-[400px] lg:w-[450px]"
                    >
                      <Link 
                        to={p.link}
                        className="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden block h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100"
                      >
                        <div className="absolute inset-0">
                          <img 
                            src={p.image} 
                            alt={p.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent transition-opacity duration-500" />
                        </div>

                        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/90 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg">
                          <img src={p.brandLogo} alt={p.brand} className="h-3 sm:h-4 object-contain" />
                        </div>

                        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-8 flex flex-col justify-end transform transition-transform duration-500">
                          <div className="flex items-end justify-between gap-3 sm:gap-4">
                            <div>
                              <h3 className="text-lg min-[375px]:text-xl lg:text-3xl font-medium text-white mb-1.5 sm:mb-2 leading-tight group-hover:text-[#ed1c23] transition-colors duration-300">
                                {p.title}
                              </h3>
                              <p className="text-slate-300 font-medium text-xs sm:text-sm line-clamp-2 sm:line-clamp-none">
                                {p.desc}
                              </p>
                            </div>
                            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 shrink-0 bg-[#ed1c23] rounded-full flex items-center justify-center text-white opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transform translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-all duration-500 shadow-lg shadow-red-500/30">
                              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
