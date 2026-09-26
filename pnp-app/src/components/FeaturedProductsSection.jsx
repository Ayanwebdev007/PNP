import React, { useState, useRef, useEffect } from 'react';
import { featuredProducts } from '../data/pnpData';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function FeaturedProductsSection() {
  const [activeBrand, setActiveBrand] = useState(featuredProducts[0].brand);
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  const uniqueBrands = [...new Set(featuredProducts.map(p => p.brand))];

  const getBrandLogo = (brandName) => {
    const product = featuredProducts.find(p => p.brand === brandName);
    return product ? product.brandLogo : null;
  };

  useEffect(() => {
    const handleScroll = () => {
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

  const scrollToBrand = (brand) => {
    if (!sectionRef.current || !trackRef.current) return;
    
    const index = featuredProducts.findIndex(p => p.brand === brand);
    if (index === -1) return;
    
    const track = trackRef.current;
    const card = track.children[index];
    const targetOffset = card.offsetLeft;
    
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
      <section className="bg-slate-50 text-slate-900 pt-24 pb-8" id="products">
        <motion.div 
          className="max-w-7xl mx-auto px-4 md:px-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#ed1c23]"></span>
            <span className="text-sm font-bold tracking-[0.2em] text-[#ed1c23] uppercase">
              Our Divisions
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
            A brand for every <br />
            <span className="text-slate-400">industry need.</span>
          </h2>
        </motion.div>
      </section>

      {/* Sticky Gallery Section */}
      <section ref={sectionRef} className="h-[350vh] bg-slate-50 text-slate-900">
        {/* Sticky Container clears the 80px navbar and uses pure flex-centering */}
        <div className="sticky top-[80px] h-[calc(100vh-80px)] w-full flex flex-col justify-center overflow-hidden">
          
          <div className="max-w-7xl mx-auto px-4 md:px-6 w-full h-full flex flex-col justify-center">
            
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 relative items-center">
              
              {/* Left Sidebar (Logos) */}
              <div className="w-full lg:w-1/4 flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {uniqueBrands.map((brand) => (
                  <button
                    key={brand}
                    onClick={() => scrollToBrand(brand)}
                    className={`relative flex items-center justify-start p-4 lg:p-6 rounded-2xl transition-all duration-300 shrink-0 lg:shrink border ${
                      activeBrand === brand 
                        ? 'bg-white border-transparent shadow-xl scale-[1.02]' 
                        : 'bg-transparent border-transparent hover:bg-white/50 opacity-40 grayscale hover:grayscale-0'
                    }`}
                  >
                    <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1/2 bg-[#ed1c23] rounded-r-full transition-all duration-300 ${activeBrand === brand ? 'opacity-100' : 'opacity-0'}`} />
                    <img 
                      src={getBrandLogo(brand)} 
                      alt={brand} 
                      className={`h-8 lg:h-12 object-contain ml-2`}
                    />
                  </button>
                ))}
              </div>

              {/* Right Content (Swiping Cards) */}
              <div className="w-full lg:w-3/4 overflow-hidden relative">
                <div 
                  ref={trackRef}
                  className="flex gap-6 w-max will-change-transform items-center"
                  style={{ transition: 'transform 0.1s ease-out' }}
                >
                  {featuredProducts.map((p) => (
                    <div 
                      key={p.id}
                      className="shrink-0 w-[85vw] md:w-[400px] lg:w-[450px]"
                    >
                      <Link 
                        to={p.link}
                        className="group relative bg-white rounded-3xl overflow-hidden block h-[450px] lg:h-[500px] xl:h-[550px] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100"
                      >
                        <div className="absolute inset-0">
                          <img 
                            src={p.image} 
                            alt={p.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent transition-opacity duration-500" />
                        </div>

                        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                          <img src={p.brandLogo} alt={p.brand} className="h-4 object-contain" />
                        </div>

                        <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8 flex flex-col justify-end transform transition-transform duration-500">
                          <div className="flex items-end justify-between gap-4">
                            <div>
                              <h3 className="text-xl lg:text-3xl font-medium text-white mb-2 leading-tight group-hover:text-[#ed1c23] transition-colors duration-300">
                                {p.title}
                              </h3>
                              <p className="text-slate-300 font-medium text-sm">
                                {p.desc}
                              </p>
                            </div>
                            <div className="w-10 h-10 lg:w-12 lg:h-12 shrink-0 bg-[#ed1c23] rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-lg shadow-red-500/30">
                              <ArrowUpRight className="w-5 h-5" />
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
