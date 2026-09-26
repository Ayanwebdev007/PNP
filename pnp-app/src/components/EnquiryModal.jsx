import React, { useState } from 'react';
import { X, Send, User, Mail, Phone, Building2, MessageSquare, CheckCircle2, Handshake, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function EnquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '', company: '', email: '', phone: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 4000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-300">
        
        {/* Modal Backdrop Click to Close */}
        <div className="absolute inset-0 cursor-pointer" onClick={onClose}></div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative w-full max-w-6xl z-10"
        >
          
          {/* Close Button (Floating outside or top right of banner) */}
          <button 
            onClick={onClose}
            className="absolute -top-4 -right-4 md:-top-6 md:-right-6 p-2 md:p-3 bg-white text-slate-900 rounded-full hover:bg-red-500 hover:text-white transition-colors shadow-2xl z-20 group"
          >
            <X className="w-5 h-5 md:w-6 md:h-6 transform group-hover:rotate-90 transition-transform duration-300" />
          </button>

          {/* Full Banner Design */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[480px] flex items-center w-full">
            
            {/* Background Image */}
            <img 
              src="/assets/cta/banner-bg.webp" 
              alt="PNP Manufacturing Facility" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Dark overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>
            
            {/* Content */}
            <div className="relative z-10 w-full px-6 py-10 md:px-12 md:py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              
              {/* Left: Text Content */}
              <div className="space-y-6 hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-0.5 bg-[#ed1c23]"></div>
                  <span className="text-sm font-semibold tracking-[0.2em] text-[#ed1c23] uppercase">
                    Partner With Us
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight max-w-md">
                  Let's Build a Stronger <span className="text-[#fff100]">Tomorrow.</span>
                </h2>

                <div className="pt-4">
                  <div className="text-white/40 text-xs uppercase tracking-wider mb-1">People · Products · Progress</div>
                  <div className="text-[#fff100] font-bold text-sm tracking-wider">A STRONGER INDIA</div>
                </div>
              </div>

              {/* Right: Enquiry Form */}
              <div className="flex justify-center lg:justify-end">
                <div className="bg-white rounded-2xl p-6 md:p-8 max-w-md w-full shadow-2xl relative overflow-hidden">
                  <h3 className="text-slate-900 font-bold text-xl mb-1 pr-8">Quick Enquiry</h3>
                  <p className="text-slate-500 text-sm mb-6">We'll get back to you within 24 hours.</p>

                  {submitted ? (
                    <div className="text-center py-10 space-y-3 animate-in fade-in zoom-in duration-300">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-green-600" />
                      </div>
                      <div className="text-slate-900 font-bold text-xl">Thank You!</div>
                      <p className="text-slate-500 text-sm">Your enquiry has been submitted successfully.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                        <input
                          type="text"
                          placeholder="Your Name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#ed1c23] focus:ring-1 focus:ring-[#ed1c23] transition-colors"
                        />
                      </div>

                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                        <input
                          type="text"
                          placeholder="Company Name"
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                          className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#ed1c23] focus:ring-1 focus:ring-[#ed1c23] transition-colors"
                        />
                      </div>

                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                        <input
                          type="email"
                          placeholder="Email Address"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#ed1c23] focus:ring-1 focus:ring-[#ed1c23] transition-colors"
                        />
                      </div>

                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                        <input
                          type="tel"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#ed1c23] focus:ring-1 focus:ring-[#ed1c23] transition-colors"
                        />
                      </div>

                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3.5 w-4.5 h-4.5 text-slate-400" />
                        <textarea
                          placeholder="Your Message"
                          rows={3}
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#ed1c23] focus:ring-1 focus:ring-[#ed1c23] transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3.5 mt-2 bg-[#ed1c23] hover:bg-[#c9141a] text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-lg shadow-red-600/20 cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        Submit Enquiry
                      </button>
                    </form>
                  )}
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
