"use client";

import { useState } from "react";
import { jobs } from "@/lib/data";

export default function Experience() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="work" className="container section">
      <div className="section-head">
        <h2>
          Where I&apos;ve <span className="serif">shipped</span>
        </h2>
      </div>
      <div className="jobs">
        {jobs.map((j, i) => {
          const isOpen = open === i;
          return (
            <div key={j.org} className={`job ${isOpen ? "open" : ""}`}>
              <button
                type="button"
                className="job-head"
                aria-expanded={isOpen}
                aria-controls={`job-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span className={`badge ${j.badgeTone}`}>{j.badge}</span>
                <span className="job-title">
                  <strong>{j.org}</strong>
                  <span>
                    {j.role} · {j.summary}
                  </span>
                </span>
                <span className="chips">
                  {j.chips.map((c) => (
                    <span key={c} className="chip">{c}</span>
                  ))}
                </span>
                <span className="job-when">{j.when}</span>
                <span className="toggle" aria-hidden="true">{isOpen ? "–" : "+"}</span>
              </button>
              {isOpen && (
                <div id={`job-${i}`} className="job-points rise">
                  {j.points.map((pt) => (
                    <div key={pt}>
                      <b>+</b>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
