import React, { useEffect, useState, useRef } from 'react';

// Custom component to handle scroll-triggered number counting
function AnimatedNumber({ targetString }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);

  // Extract prefix (e.g., "#"), number (e.g., "25"), and suffix (e.g., "%")
  const prefixMatch = targetString.match(/^[^0-9]+/);
  const suffixMatch = targetString.match(/[^0-9]+$/);
  const numberMatch = targetString.match(/[0-9]+/);

  const prefix = prefixMatch ? prefixMatch[0] : "";
  const suffix = suffixMatch ? suffixMatch[0] : "";
  const targetNumber = numberMatch ? parseInt(numberMatch[0], 10) : 0;

  useEffect(() => {
    let observer;
    let frameId;
    let startTimestamp;
    const duration = 2000; // 2 seconds animation

    const animate = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // easeOutExpo for a fast start and smooth deceleration
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(targetNumber * easeProgress));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setCount(targetNumber); // Ensure it lands exactly on target
      }
    };

    observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        startTimestamp = null; // Reset animation start time
        frameId = requestAnimationFrame(animate);
      } else {
        // Reset count to 0 when it leaves the screen so it animates again next time
        setCount(0);
        if (frameId) cancelAnimationFrame(frameId);
      }
    }, { threshold: 0.2 });

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [targetNumber]);

  return (
    <span ref={nodeRef}>
      {prefix}{count}{suffix}
    </span>
  );
}

export default function StatsTrustSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { number: "1997", label: "Established" },
    { number: "25%", label: "Coated Fabric Share" },
    { number: "11", label: "Offices Pan-India" },
    { number: "4", label: "Business Verticals" },
    { number: "28+", label: "Years of Trust" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      } else {
        setIsVisible(false); // Reset to re-animate on scroll
      }
    }, { threshold: 0.2 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-8 lg:py-12 overflow-hidden border-y border-black/10 bg-white">
      
      {/* Full-width User Uploaded Background Image */}
      <img 
        src="/assets/stats-bg.webp"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none object-[65%_top] scale-[1.3] origin-top sm:scale-100 sm:origin-center sm:object-[right_30%]"
      />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 flex">
        
        {/* Container restricted to the Left Side */}
        <div className="w-[85%] min-[375px]:w-[75%] sm:w-full lg:w-[60%]">
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-2 sm:gap-x-6 gap-y-6 sm:gap-y-8">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col items-start text-left transition-all duration-1000 ease-out transform ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                } ${idx % 2 !== 0 ? 'max-sm:-ml-6' : ''}`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                {/* Giant Red Number */}
                <div className="text-[32px] sm:text-4xl lg:text-6xl font-bold text-[#ed1c23] tracking-tighter mb-1 transform hover:scale-105 transition-transform duration-300 leading-none">
                  <AnimatedNumber targetString={stat.number} />
                </div>
                
                {/* Bold Black Label */}
                <div className="text-[10.5px] min-[375px]:text-[11px] sm:text-xs lg:text-[14px] font-bold text-slate-900 uppercase tracking-wider sm:tracking-widest leading-snug whitespace-normal sm:whitespace-nowrap pr-2 sm:pr-0">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
