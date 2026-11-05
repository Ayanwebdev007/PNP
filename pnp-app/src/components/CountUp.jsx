import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

// Counts up the first number in a string ("20 Lakh+", "25%", "1997") each time it scrolls into view.
export default function CountUp({ value, duration = 1600 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.6 });
  const match = String(value).match(/^(\D*)(\d+)(.*)$/);
  const [display, setDisplay] = useState(match ? 0 : value);

  useEffect(() => {
    if (!match) return;
    if (!inView) { setDisplay(0); return; }
    const target = parseInt(match[2], 10);
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!match) return <span ref={ref}>{value}</span>;
  return <span ref={ref}>{match[1]}{display}{match[3]}</span>;
}
