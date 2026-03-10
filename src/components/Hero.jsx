import './Hero.css';

const Hero = () => {
  return (
    <section id="hero">
      <div className="section-bg" style={{ bottom: '-2rem', left: '-1rem', fontSize: 'clamp(8rem, 16vw, 16rem)' }}>MMM</div>
      <div className="section-bg" style={{ top: '-2rem', right: '-2rem', fontSize: 'clamp(5rem, 10vw, 10rem)' }}>MM.</div>
      <div className="hero-left">
        <p className="hero-eyebrow">Based in Kerala, India · 2026</p>
        <h1 className="hero-name">
          Mohammed<br />
          <em>Mahir</em><br />
          Mobin
        </h1>
        <p className="hero-descriptor">
          UI/UX Designer, Branding Specialist<br />& Front-End Developer — bridging<br />human-centred design with functional engineering.
        </p>
        <a href="#work" className="hero-cta">
          View Selected Work
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      <div className="hero-right">
        <span className="hero-index">Portfolio · 2026 · Kerala</span>
      </div>
      <div className="scroll-line">
        <span>Scroll</span>
        <div className="scroll-line-bar"></div>
      </div>
    </section>
  );
};

export default Hero;
