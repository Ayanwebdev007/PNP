import React from 'react';
import { Award, Layers, Box, Leaf, MapPin } from 'lucide-react';

export default function StatsTrustSection() {
  return (
    <section className="bg-slate-950 text-white">
      {/* Red Statistics Banner */}
      <div className="bg-[#ed1c23] py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-red-500/40">
          
          {/* Stat 1 */}
          <div className="space-y-1 pt-2 md:pt-0">
            <div className="w-8 h-8 rounded-full bg-white/10 mx-auto flex items-center justify-center text-[#fff100] mb-2">
              <Award className="w-4 h-4" />
            </div>
            <div className="text-2xl lg:text-3xl font-normal text-[#fff100]">#2 Largest</div>
            <div className="text-xs font-normal text-white">Nylon Yarn Maker in India</div>
          </div>

          {/* Stat 2 */}
          <div className="space-y-1 pt-2 md:pt-0">
            <div className="w-8 h-8 rounded-full bg-white/10 mx-auto flex items-center justify-center text-[#fff100] mb-2">
              <Layers className="w-4 h-4" />
            </div>
            <div className="text-2xl lg:text-3xl font-normal text-[#fff100]">25%</div>
            <div className="text-xs font-normal text-white">Fabric Market Share in India</div>
          </div>

          {/* Stat 3 */}
          <div className="space-y-1 pt-2 md:pt-0">
            <div className="w-8 h-8 rounded-full bg-white/10 mx-auto flex items-center justify-center text-[#fff100] mb-2">
              <Box className="w-4 h-4" />
            </div>
            <div className="text-2xl lg:text-3xl font-normal text-[#fff100]">10%</div>
            <div className="text-xs font-normal text-white">Synwood Market Share in India</div>
          </div>

          {/* Stat 4 */}
          <div className="space-y-1 pt-2 md:pt-0">
            <div className="w-8 h-8 rounded-full bg-white/10 mx-auto flex items-center justify-center text-[#fff100] mb-2">
              <Leaf className="w-4 h-4 text-emerald-300" />
            </div>
            <div className="text-2xl lg:text-3xl font-normal text-[#fff100]">100%</div>
            <div className="text-xs font-normal text-white">Green Energy (Wind & Solar)</div>
          </div>

          {/* Stat 5 */}
          <div className="space-y-1 col-span-2 md:col-span-1 pt-2 md:pt-0">
            <div className="w-8 h-8 rounded-full bg-white/10 mx-auto flex items-center justify-center text-[#fff100] mb-2">
              <MapPin className="w-4 h-4" />
            </div>
            <div className="text-2xl lg:text-3xl font-normal text-[#fff100]">10 + 1</div>
            <div className="text-xs font-normal text-white">Pan-India & Taipei Offices</div>
          </div>

        </div>
      </div>

      {/* Dark Trust Quote Panel */}
      <div className="bg-[#111827] py-12 px-4 border-b border-slate-900">
        <div className="max-w-7xl mx-auto flex items-center justify-center text-center">
          <div className="flex items-center gap-4 max-w-xl text-left">
            <span className="w-1.5 h-16 bg-[#fff100] rounded-full shrink-0"></span>
            <p className="text-2xl sm:text-3xl font-normal text-white leading-tight">
              Trusted by industries.<br />
              <span className="text-[#fff100] font-normal">Driven by innovation.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
