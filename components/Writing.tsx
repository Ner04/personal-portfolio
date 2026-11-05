"use client";

import { useState } from "react";
import type { Post } from "@/lib/data";

const fmt = (iso: string) =>
  new Date(iso + "T00:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

export default function Writing({ posts, mediumUrl }: { posts: Post[]; mediumUrl: string }) {
  const [all, setAll] = useState(false);
  const shown = all ? posts : posts.slice(0, 3);

  return (
    <section id="writing" className="container section">
      <div className="section-head">
        <h2>
          I also <span className="serif">write</span>
        </h2>
        <a href={mediumUrl} target="_blank" rel="noreferrer">on Medium ↗</a>
      </div>
      <div className="post-grid">
        {shown.map((p) => (
          <a key={p.url} className="post lift rise" href={p.url} target="_blank" rel="noreferrer">
            <span className="post-cover">
              <img src={p.image} alt="" loading="lazy" />
            </span>
            <span className="post-body">
              <span className="post-meta">
                {fmt(p.date)} · {p.tag}
              </span>
              <span className="post-title">{p.title}</span>
            </span>
          </a>
        ))}
      </div>
      {posts.length > 3 && (
        <div className="more">
          <button type="button" className="pop" aria-expanded={all} onClick={() => setAll(!all)}>
            {all ? "show fewer ↑" : `show all ${posts.length} articles ↓`}
          </button>
        </div>
      )}
    </section>
  );
}
