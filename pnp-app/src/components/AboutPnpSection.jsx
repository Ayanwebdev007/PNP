import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function AboutPnpSection({ onOpenVideoModal }) {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const slideRight = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const lineGrow = {
    hidden: { width: 0, opacity: 0 },
    visible: { width: "100%", opacity: 1, transition: { duration: 1, ease: "easeOut" } }
  };

  return (
    <section className="relative w-full bg-[#fdfcf8] overflow-hidden flex flex-col-reverse lg:block" id="about">
      
      {/* Right Side Video Box */}
      <motion.a 
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
        href="https://www.youtube.com/watch?v=2bj_SXejLSI"
        target="_blank"
        rel="noopener noreferrer"
        className="block relative lg:absolute z-30 lg:right-0 lg:top-12 lg:bottom-12 w-full lg:w-[55%] h-[320px] sm:h-[400px] md:h-[500px] lg:h-auto bg-slate-900 overflow-hidden rounded-t-[3rem] lg:rounded-t-none lg:rounded-tl-[4rem] lg:rounded-bl-[4rem] shadow-2xl cursor-pointer group flex flex-col justify-end"
      >
        <div className="absolute inset-0 z-10"></div>
        
        <div className="absolute inset-0 w-[400%] h-[200%] -left-[150%] -top-[50%] opacity-60 mix-blend-luminosity pointer-events-none">
          <iframe
            src="https://www.youtube.com/embed/2bj_SXejLSI?autoplay=1&mute=1&controls=0&loop=1&playlist=2bj_SXejLSI&showinfo=0&rel=0&modestbranding=1"
            className="w-full h-full border-0 pointer-events-none"
            allow="autoplay; encrypted-media"
            title="PNP Corporate Video Background"
          />
        </div>
        
        <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none"></div>

        <div className="relative z-10 p-6 sm:p-8 lg:p-14 flex flex-col items-start gap-3 sm:gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="transition-transform duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                <path fill="#FF0000" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/>
                <path fill="#FFFFFF" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </div>
            <div className="w-[1px] h-6 sm:h-8 bg-white/60"></div>
            <img src="/assets/logo.webp" alt="PNP" className="h-6 sm:h-7 lg:h-8 object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-xl" />
          </div>
          <h3 className="text-white font-medium text-lg sm:text-xl lg:text-3xl tracking-wide group-hover:translate-x-2 transition-transform duration-500 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
            Know our Story on Youtube
          </h3>
        </div>
      </motion.a>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 flex">
        
        {/* Left: Animated Text Content */}
        <motion.div 
          className="w-full lg:w-[45%] pt-10 pb-8 sm:py-16 lg:py-32 z-20 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.h2 variants={slideRight} className="text-[3.5rem] min-[375px]:text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-medium text-slate-900 leading-[0.9] sm:leading-[0.85] tracking-tight">
            Who we
            <div className="w-48 min-[375px]:w-64 sm:w-72 md:w-96 my-3 sm:my-4 ml-1">
              <motion.div variants={lineGrow} className="h-1 bg-[#ed1c23] origin-left"></motion.div>
            </div>
            are?
            <div className="w-32 min-[375px]:w-48 sm:w-48 md:w-64 mt-3 sm:mt-4 ml-1 mb-8 sm:mb-10">
              <motion.div variants={lineGrow} className="h-1 bg-[#ed1c23] origin-left"></motion.div>
            </div>
          </motion.h2>
          
          <motion.div variants={slideUp} className="max-w-md mt-6 sm:mt-10">
            <h3 className="text-lg sm:text-xl font-bold text-[#ed1c23] mb-3 sm:mb-4 pr-4 sm:pr-0">
              A Legacy of Trust & Market Leadership
            </h3>
            <p className="text-slate-600 leading-relaxed font-medium mb-6 sm:mb-8 text-[15px] sm:text-base">
              A trusted name in industrial trading and distribution since 1997. We trade across multiple product categories — from Nylon Yarns and Coated Fabrics to Building Materials and Ventilation — trusted by the market for unmatched quality and after-sales service.
            </p>
            
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 sm:gap-3 text-[13px] sm:text-sm font-bold text-slate-900 hover:text-[#ed1c23] transition-colors uppercase tracking-[0.15em]"
            >
              <span>Explore Company Profile</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
