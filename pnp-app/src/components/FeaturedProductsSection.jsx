import React from 'react';
import { featuredProducts } from '../data/pnpData';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FeaturedProductsSection() {
  return (
    <section className="py-16 bg-slate-50 text-slate-900 border-t border-slate-200" id="products">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-6 bg-[#ed1c23] rounded-full"></span>
            <h2 className="text-xl md:text-2xl font-normal tracking-wider uppercase text-slate-900">
              FEATURED PRODUCTS
            </h2>
          </div>
          <Link to="/trading" className="inline-flex items-center gap-2 text-xs font-normal text-[#ed1c23] hover:text-[#c9141a] transition-colors">
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {featuredProducts.map(p => (
            <div 
              key={p.id} 
              className="bg-white rounded-2xl border border-slate-200 hover:border-[#ed1c23] overflow-hidden flex flex-col justify-between group transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <div className="relative h-44 overflow-hidden bg-slate-100">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              </div>

              <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-normal text-slate-900 group-hover:text-[#ed1c23] transition-colors">{p.title}</h3>
                  <p className="text-xs text-slate-500 font-normal">{p.desc}</p>
                </div>

                <div className="pt-3 flex justify-end">
                  <Link 
                    to={p.link}
                    className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#ed1c23] text-slate-600 group-hover:text-white flex items-center justify-center transition-all"
                    aria-label={`Explore ${p.title}`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
