import React, { useState, useEffect } from 'react';
import { featuredProducts } from '../data/pnpData';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Robust Absolute Crossfade Slide
const Slide = ({ p, index, direction }) => {
  const isEven = index % 2 === 0;
  const cardBg = isEven ? 'bg-white' : 'bg-[#ed1c23] text-white';

  return (
    <motion.div
      initial={{ opacity: 0, x: direction === 1 ? 50 : -50 }}
      animate={{ opacity: 1, x: 0, zIndex: 10 }}
      exit={{ opacity: 0, x: direction === 1 ? -50 : 50, zIndex: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="absolute inset-0 w-full h-full max-w-6xl mx-auto group"
    >
      {/* justify-start keeps the image exactly at the top */}
      <div className="relative w-full h-full flex flex-col lg:block items-center justify-start">
        
        {/* Image Base - 480px tall on desktop */}
        <div className={`w-full lg:w-[65%] h-[320px] lg:h-[480px] rounded-3xl overflow-hidden relative z-0 shadow-lg shadow-slate-200/50 ${isEven ? 'mr-auto' : 'ml-auto'}`}>
          <img 
            src={p.image} 
            alt={p.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/10" />
        </div>

        {/* Overlapping Content Card 
            Desktop: explicitly centered to the 480px image height (top-[240px])
            Mobile: overlaps image via -mt-16 and expands downwards naturally
        */}
        <div className={`lg:absolute lg:top-[240px] lg:-translate-y-1/2 w-[95%] sm:w-[85%] lg:w-[45%] z-10 -mt-16 lg:mt-0 ${isEven ? 'lg:right-0' : 'lg:left-0'}`}>
          <div className={`${cardBg} p-6 sm:p-10 lg:p-14 rounded-3xl shadow-2xl shadow-black/10 ring-1 ring-black/5`}>
            
            <div className="mb-5 lg:mb-8">
              <div className={`inline-block ${isEven ? '' : 'bg-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl shadow-sm'}`}>
                <img 
                  src={p.brandLogo} 
                  alt={p.brand} 
                  className="h-5 sm:h-6 lg:h-8 object-contain" 
                />
              </div>
            </div>

            <h3 className={`text-[26px] sm:text-3xl lg:text-4xl xl:text-5xl font-medium mb-3 sm:mb-4 lg:mb-6 leading-tight ${isEven ? 'text-slate-900' : 'text-white'}`}>
              {p.title}
            </h3>
            
            <p className={`text-[15px] sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 lg:mb-10 ${isEven ? 'text-slate-600' : 'text-white/95'}`}>
              {p.desc}
            </p>
            
            <Link 
              to={p.link}
              className={`group/link inline-flex items-center gap-2 sm:gap-3 font-medium transition-colors ${isEven ? 'text-slate-900 hover:text-[#ed1c23]' : 'text-white hover:text-white/80'}`}
            >
              <span className={`uppercase tracking-widest text-[13px] sm:text-sm border-b pb-1 transition-colors ${isEven ? 'border-slate-300 group-hover/link:border-[#ed1c23]' : 'border-white/50 group-hover/link:border-white'}`}>
                Explore Division
              </span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover/link:translate-x-2 transition-transform" />
            </Link>

          </div>
        </div>
        
      </div>
    </motion.div>
  );
};

export default function FeaturedProductsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % featuredProducts.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length);
  };

  const handleManualNext = () => {
    setIsAutoPlaying(false);
    nextSlide();
  };

  const handleManualPrev = () => {
    setIsAutoPlaying(false);
    prevSlide();
  };

  const handleDotClick = (idx) => {
    setIsAutoPlaying(false);
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      nextSlide();
    }, 2000); // 2 second interval

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const activeP = featuredProducts[currentIndex];

  return (
    <section className="bg-slate-50 text-slate-900 py-24 overflow-hidden" id="divisions">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-[#ed1c23]"></div>
              <span className="text-[#ed1c23] font-bold tracking-widest uppercase text-sm">
                Our Divisions
              </span>
            </div>
            <h2 className="text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 leading-[1.1] sm:leading-tight">
              A brand for every <br />
              <span className="text-slate-500">industry need.</span>
            </h2>
          </motion.div>
          
          {/* Restored paragraph to balance the right side */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-500 max-w-sm lg:text-right text-base leading-relaxed lg:pb-2"
          >
            Explore our comprehensive range of high-performance products, engineered and distributed to the highest global standards.
          </motion.p>
        </div>

        {/* Dynamic Absolute Slider Container */}
        <motion.div layout className="relative w-full mt-8">
          
          {/* Dynamic Spacer: Matches the exact height of the ACTIVE slide perfectly */}
          <div className="w-full invisible pointer-events-none max-w-6xl mx-auto">
            <div className="relative w-full flex flex-col lg:block items-center">
              <div className="w-full lg:w-[65%] h-[320px] lg:h-[480px]"></div>
              <div className="w-[95%] sm:w-[85%] lg:w-[45%] -mt-16 lg:mt-0 lg:absolute lg:top-0">
                <div className="p-6 sm:p-10 lg:p-14">
                  <div className="mb-5 lg:mb-8 h-8"></div>
                  <h3 className="text-[26px] sm:text-3xl lg:text-4xl xl:text-5xl font-medium mb-3 sm:mb-4 lg:mb-6 leading-tight">
                    {activeP.title}
                  </h3>
                  <p className="text-[15px] sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 lg:mb-10">
                    {activeP.desc}
                  </p>
                  <div className="h-6"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-0">
            {/* Navigation Arrows - Vertically centered exactly on the image (320px mobile / 480px desktop) */}
            <div className="absolute top-[160px] lg:top-[240px] -translate-y-1/2 -left-1 -right-1 sm:-left-3 sm:-right-3 md:-left-6 md:-right-6 lg:-left-10 lg:-right-10 xl:-left-16 xl:-right-16 z-30 flex items-center justify-between pointer-events-none">
              <button 
                onClick={handleManualPrev}
                className="pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-[#ed1c23] shadow-lg shadow-[#ed1c23]/30 flex items-center justify-center text-white hover:bg-red-700 hover:shadow-xl transition-all duration-300 hover:scale-110"
                aria-label="Previous Division"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
              </button>
              <button 
                onClick={handleManualNext}
                className="pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-[#ed1c23] shadow-lg shadow-[#ed1c23]/30 flex items-center justify-center text-white hover:bg-red-700 hover:shadow-xl transition-all duration-300 hover:scale-110"
                aria-label="Next Division"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
              </button>
            </div>

            <AnimatePresence initial={false} custom={direction}>
              <Slide 
                key={currentIndex} 
                p={activeP} 
                index={currentIndex} 
                direction={direction} 
              />
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Progress Dots */}
        <div className="flex justify-center items-center gap-3 mt-8 lg:mt-12 relative z-20">
          {featuredProducts.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`h-2.5 rounded-full transition-all duration-500 ${idx === currentIndex ? 'w-10 bg-[#ed1c23]' : 'w-2.5 bg-slate-300 hover:bg-slate-400'}`}
              aria-label={`Go to division ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
