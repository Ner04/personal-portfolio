import { ChaosProvider } from "@/components/Chaos";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import { ArrowRight, GitHub, LinkedIn, Medium } from "@/components/Icons";
import Projects from "@/components/Projects";
import RotatingWord from "@/components/RotatingWord";
import Spotlight from "@/components/Spotlight";
import Stats from "@/components/Stats";
import StatusBar from "@/components/StatusBar";
import Writing from "@/components/Writing";
import { heroWords, profile, skills } from "@/lib/data";
import { getPosts } from "@/lib/medium";

// Re-build the page in the background at most every 6 hours (picks up new Medium posts).
export const revalidate = 21600;

export default async function Home() {
  const posts = await getPosts();

  return (
    <ChaosProvider>
      <div className="page">
        <div className="grid-bg" aria-hidden="true" />
        <Spotlight />
        <div className="content">
          <StatusBar />

          <header className="container nav">
            <a href="#top" className="brand">
              <img src="/images/avatar.jpg" alt="" />
              <span>shubham<b>.</b></span>
            </a>
            <nav className="nav-links" aria-label="Primary">
              <a href="#work">work</a>
              <a href="#projects">projects</a>
              <a href="#writing">writing</a>
              <a href="#contact">contact</a>
            </nav>
          </header>

          <main>
            <section id="top" className="container hero">
              <img className="hero-watermark" src="/images/watermark.webp" alt="" aria-hidden="true" />
              <div className="hero-text">
                <p className="eyebrow">{profile.tagline}</p>
                <h1>
                  I build backends
                  <br />
                  that <RotatingWord words={heroWords} />
                </h1>
                <p className="intro">
                  {profile.name} — {profile.intro}
                </p>
                <div className="hero-actions">
                  <a href="#contact" className="btn-primary pop">
                    Get in touch <ArrowRight />
                  </a>
                  <a className="icon-btn pop" href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                    <GitHub />
                  </a>
                  <a className="icon-btn pop" href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <LinkedIn />
                  </a>
                  <a className="icon-btn pop" href={profile.links.medium} target="_blank" rel="noreferrer" aria-label="Medium">
                    <Medium />
                  </a>
                </div>
              </div>
            </section>

            <Stats />

            <div className="marquee" aria-hidden="true">
              <div className="marquee-track">
                {[...skills, ...skills].map((s, i) => (
                  <span key={i}>
                    {s}
                    <i>●</i>
                  </span>
                ))}
              </div>
            </div>

            <Experience />
            <Projects />
            <Writing posts={posts} mediumUrl={profile.links.medium} />
          </main>

          <Contact />
        </div>
      </div>
    </ChaosProvider>
  );
}
