import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';

export default function EnquiryModal({ isOpen, onClose, initialProduct = "" }) {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    emailAddr: '',
    phoneNum: '',
    interestCategory: initialProduct || 'trading-textiles',
    enquiryMessage: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-red-500 bg-red-950/80 px-2 py-0.5 rounded border border-red-500/30">
              QUICK CONNECT
            </span>
            <h3 className="text-lg font-bold text-white mt-1">Business & Technical Inquiry</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="py-10 text-center space-y-3">
              <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto animate-bounce" />
              <h4 className="text-xl font-bold text-slate-900">Inquiry Submitted!</h4>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Thank you! Your inquiry has been forwarded to PNP Industrial Solutions. Our technical sales team will contact you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-semibold text-slate-700">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:outline-none font-normal"
                  />
                </div>
                <div>
                  <label className="block mb-1">Company / Organization *</label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="Company name"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:outline-none font-normal"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1">Business Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.emailAddr}
                    onChange={(e) => setFormData({ ...formData, emailAddr: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:outline-none font-normal"
                  />
                </div>
                <div>
                  <label className="block mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phoneNum}
                    onChange={(e) => setFormData({ ...formData, phoneNum: e.target.value })}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:outline-none font-normal"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1">Area of Interest *</label>
                <select
                  required
                  value={formData.interestCategory}
                  onChange={(e) => setFormData({ ...formData, interestCategory: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:outline-none font-normal"
                >
                  <option value="">Select Division / Catalog</option>
                  <option value="nytex">Manufacturing: NYTEX Nylon 6 Filament Yarn (POY/FDY/HOY/DTY/ACY - 2nd Largest in India)</option>
                  <option value="trading-textiles">Trading: PNP Coated Cloth Fabric (25% Market Share)</option>
                  <option value="trading-synwood">Trading: Synwood & Haowood Synthetic Wood (10% Market Share, 21 Catalogs)</option>
                  <option value="trading-ventilators">Trading: HAO Natural Turbo Ventilators (Assembled in India)</option>
                  <option value="trading-fasteners">Trading: TIE Self-Drilling PEB Roofing Screws</option>
                  <option value="trading-racking">Trading: PNP Warehouse Racking Storage Systems</option>
                  <option value="jaquar">Distribution: JAQUAR LIGHTING (Mumbai Bandra to Virar Corridor)</option>
                  <option value="retail-baginnov">Retail: BAGINNOV 25,000 Sq. Ft. Mall & Corporate Bulk Gifting</option>
                  <option value="dealer">Dealership & Distribution Application</option>
                  <option value="downloads">Download Technical Data Sheets & Catalogs</option>
                  <option value="export">International Sourcing & Export Inquiry (Taipei / Global)</option>
                </select>
              </div>

              <div>
                <label className="block mb-1">Specific Requirement / Message *</label>
                <textarea
                  rows="3"
                  required
                  value={formData.enquiryMessage}
                  onChange={(e) => setFormData({ ...formData, enquiryMessage: e.target.value })}
                  placeholder="Please specify denier, GSM, volume requirements, delivery branch, or corporate gifting details..."
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:outline-none resize-none font-normal"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-slate-600 hover:text-slate-900 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg shadow-md shadow-red-600/20 flex items-center gap-2 transition-all hover:scale-105"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
