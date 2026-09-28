import React, { useState } from 'react';
import { ArrowRight, Handshake, Send, User, Mail, Phone, Building2, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CtaBannerSection({ onOpenEnquiry }) {
  const [formData, setFormData] = useState({
    name: '', company: '', email: '', phone: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Could also call onOpenEnquiry with form data here
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="relative overflow-hidden bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        
        {/* Full-width image banner with overlay */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[480px] flex items-center">
          
          {/* Background Image */}
          <img 
            src="/assets/cta/banner-bg.webp" 
            alt="PNP Manufacturing Facility" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Dark overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
          
          {/* Content */}
          <div className="relative z-10 w-full px-5 py-10 sm:px-8 md:px-14 md:py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            {/* Left: Text Content */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-0.5 bg-[#ed1c23]"></div>
                <span className="text-sm font-semibold tracking-[0.2em] text-[#ed1c23] uppercase">
                  Partner With Us
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight">
                Let's Build a Stronger <span className="text-[#fff100]">Tomorrow.</span>
              </h2>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => onOpenEnquiry()}
                  className="px-8 py-3.5 bg-[#ed1c23] hover:bg-[#c9141a] text-white font-medium text-sm rounded-lg shadow-xl inline-flex items-center gap-2 transition-all hover:scale-105 cursor-pointer"
                >
                  <Handshake className="w-4 h-4" />
                  <span>Send an Enquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="pt-4">
                <div className="text-white/40 text-xs uppercase tracking-wider mb-1">People · Products · Progress</div>
                <div className="text-[#fff100] font-bold text-sm tracking-wider">A STRONGER INDIA</div>
              </div>
            </motion.div>

            {/* Right: Enquiry Form */}
            <motion.div 
              className="flex justify-center lg:justify-end w-full"
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 max-w-full sm:max-w-md lg:max-w-sm xl:max-w-md w-full shadow-2xl">
                <h3 className="text-slate-900 font-bold text-lg mb-1">Quick Enquiry</h3>
                <p className="text-slate-400 text-xs mb-5">We'll get back to you within 24 hours.</p>

                {submitted ? (
                  <div className="text-center py-10 space-y-3">
                    <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <Send className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="text-slate-900 font-bold text-lg">Thank You!</div>
                    <p className="text-slate-500 text-sm">Your enquiry has been submitted successfully.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Your Name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#ed1c23] focus:ring-1 focus:ring-[#ed1c23] transition-colors"
                      />
                    </div>

                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#ed1c23] focus:ring-1 focus:ring-[#ed1c23] transition-colors"
                      />
                    </div>

                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="email"
                        placeholder="Email Address"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#ed1c23] focus:ring-1 focus:ring-[#ed1c23] transition-colors"
                      />
                    </div>

                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#ed1c23] focus:ring-1 focus:ring-[#ed1c23] transition-colors"
                      />
                    </div>

                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                      <textarea
                        placeholder="Your Message"
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#ed1c23] focus:ring-1 focus:ring-[#ed1c23] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-[#ed1c23] hover:bg-[#c9141a] text-white font-medium text-sm rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-lg shadow-red-600/20 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      Submit Enquiry
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
