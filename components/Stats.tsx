"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/data";

/** Numbers count up once the strip scrolls into view. */
export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  // Starts at full value so the server-rendered HTML (and search engines) see real numbers.
  const [p, setP] = useState(1);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setP(0);
    let frame = 0;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / 1100);
          setP(1 - Math.pow(1 - t, 3));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section ref={ref} className="container stats" aria-label="Highlights">
      {stats.map((s) => (
        <div key={s.label} className={`stat lift ${s.tone}`}>
          <div className="stat-value">
            {s.prefix}
            {(s.value * p).toFixed(s.decimals)}
            {s.suffix}
          </div>
          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </section>
  );
}
