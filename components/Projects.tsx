import { profile, projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="container section">
      <div className="section-head">
        <h2>
          Things I&apos;ve <span className="serif">built</span>
        </h2>
        <a href={profile.links.github} target="_blank" rel="noreferrer">all repos on GitHub ↗</a>
      </div>
      <div className="project-grid">
        {projects.map((p) => (
          <article key={p.name} className="project lift">
            <a className="project-cover" href={p.code} target="_blank" rel="noreferrer" tabIndex={-1} aria-hidden="true">
              <img src={p.image} alt={p.imageAlt} loading="lazy" />
            </a>
            <div className="project-body">
              <h3>{p.name}</h3>
              <p>{p.summary}</p>
              <div className="project-foot">
                <div className="tags">
                  {p.stack.map((s) => (
                    <span key={s} className="tag">{s}</span>
                  ))}
                </div>
                <div className="project-links">
                  {p.story && (
                    <a className="link-btn" href={p.story} target="_blank" rel="noreferrer">
                      story ↗
                    </a>
                  )}
                  <a className="link-btn solid" href={p.code} target="_blank" rel="noreferrer">
                    code ↗
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
