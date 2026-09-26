import React, { useState } from 'react';
import { ArrowRight, X, ZoomIn } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const mediaArticles = [
  {
    id: "bt1",
    logo: "/assets/media/logo-business-today.webp",
    channel: "Business Today",
    headline: "Hurdles in India's Economic Growth",
    image: "/assets/media/00fffe_7cb6a5f1bba84df3830344e6823d386f~mv2.webp"
  },
  {
    id: "et",
    logo: "/assets/media/logo-economic-times.webp",
    channel: "The Economic Times",
    headline: "The Trendsetter India Needs",
    image: "/assets/media/00fffe_9aa6e92a7fef4c64a00cee75f9ee197d~mv2.webp",
    logoClass: "h-10 md:h-11"
  },
  {
    id: "forbes",
    logo: "/assets/media/logo-forbes.webp",
    channel: "Forbes India",
    headline: "Sincerity is a Secret For Success",
    image: "/assets/media/00fffe_e983c35809ef431da9c283c7af2c42ae~mv2.webp",
    objectPosition: "object-right-top"
  },
  {
    id: "bt2",
    logo: "/assets/media/logo-business-today.webp",
    channel: "Business Today",
    headline: "The Indian Tax Paradox",
    image: "/assets/media/f07f21_351a5c3376ff499aaeb0cf114a3a62a1~mv2.webp"
  }
];

export default function MediaSection() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleClose = () => {
    setSelectedArticle(null);
    setIsZoomed(false);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-20 lg:py-24 bg-slate-50 text-slate-900 border-t border-slate-200 relative" id="media">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header Section */}
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#ed1c23]"></span>
              <span className="text-xs lg:text-sm font-bold tracking-[0.2em] text-[#ed1c23] uppercase">
                In The Media
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 leading-tight">
              Recognised <span className="text-slate-400">Nationwide.</span>
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-xl">
              Our journey, leadership, and industrial impact have been featured by India's top publications.
            </p>
          </div>

          <Link to="/certifications" className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-[#ed1c23] hover:text-red-700 transition-colors group">
            <span>View All Media</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Articles Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {mediaArticles.map((article) => (
            <motion.div 
              key={article.id}
              variants={cardVariants}
              onClick={() => setSelectedArticle(article)}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-slate-200 flex flex-col h-[300px] lg:h-[360px]"
            >
              {/* Article Image Background */}
              <div className="absolute inset-0 w-full h-full bg-slate-100 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.headline} 
                  className={`w-full h-full object-cover ${article.objectPosition || 'object-left-top'} transform group-hover:scale-105 transition-transform duration-700 ease-out`}
                />
              </div>

              {/* Precise Bottom White Gradient Overlay */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" 
                style={{ background: 'linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%)' }}
              />

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 bg-white/50 backdrop-blur-md p-2 rounded-full text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110 shadow-sm">
                <ZoomIn className="w-5 h-5" />
              </div>

              {/* Content */}
              <div className="relative mt-auto p-6 md:p-8 flex justify-center items-center">
                {/* Channel Logo */}
                <img src={article.logo} alt={article.channel} className={`${article.logoClass || 'h-8'} object-contain group-hover:scale-110 transition-transform duration-300 mix-blend-multiply`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile View All Link */}
        <motion.div 
          className="mt-8 md:hidden flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link to="/certifications" className="inline-flex items-center gap-2 text-sm font-bold text-[#ed1c23] hover:text-red-700 transition-colors">
            <span>View All Media</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      {/* Image Modal for Reading */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm transition-opacity cursor-pointer"
            onClick={handleClose}
          />
          
          {/* Modal Content */}
          <div className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10 animate-in fade-in zoom-in duration-300">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-white shadow-sm z-20">
              <div className="flex items-center gap-3">
                <img src={selectedArticle.logo} alt={selectedArticle.channel} className={`${selectedArticle.logoClass || 'h-6'} object-contain`} />
                <span className="text-sm font-medium text-slate-500 hidden sm:inline-block">| {selectedArticle.headline}</span>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-lg text-xs font-bold text-slate-700 transition-colors flex items-center gap-1"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                  {isZoomed ? 'Zoom Out' : 'Zoom In'}
                </button>
                <button 
                  onClick={handleClose}
                  className="p-1.5 bg-slate-100 hover:bg-red-50 hover:text-red-600 rounded-full text-slate-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Scrollable Image Area */}
            <div className="overflow-auto p-4 md:p-8 bg-slate-100 flex justify-center items-start">
              <img 
                src={selectedArticle.image} 
                alt={selectedArticle.headline} 
                onClick={() => setIsZoomed(!isZoomed)}
                className={`shadow-md transition-all duration-300 ${isZoomed ? 'w-[150%] md:w-[200%] max-w-none cursor-zoom-out' : 'w-full max-w-full h-auto cursor-zoom-in'}`}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
