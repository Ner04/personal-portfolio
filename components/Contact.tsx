"use client";

import { useState } from "react";
import { profile } from "@/lib/data";
import { ArrowRight } from "./Icons";
import Terminal from "./Terminal";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
    } catch {
      /* clipboard blocked: the label still confirms intent */
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-row">
          <div className="contact-text">
            <h2>
              Let&apos;s <span className="serif">talk.</span>
            </h2>
            <p>Open to backend and platform roles. I reply within a day.</p>
            <div className="contact-actions">
              <a className="btn-lime pop" href={`mailto:${profile.email}`}>
                Email me <ArrowRight size={20} />
              </a>
              <button type="button" className="btn-ghost mono pop" onClick={copy}>
                {copied ? "copied ✓" : "copy email"}
              </button>
              <a className="btn-ghost pop" href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a className="btn-ghost pop" href={profile.links.github} target="_blank" rel="noreferrer">GitHub ↗</a>
              <a className="btn-ghost pop" href={profile.links.medium} target="_blank" rel="noreferrer">Medium ↗</a>
            </div>
          </div>
          <Terminal />
        </div>
        <div className="giant" aria-hidden="true">shubham nayak</div>
        <footer className="footer">
          <span>© {new Date().getFullYear()} {profile.name} · {profile.location}</span>
          <span>{profile.education}</span>
          <a href="#top">back to top ↑</a>
        </footer>
      </div>
    </section>
  );
}
