export default function Hero({ personal }) {
  return (
    <section className="hero" id="hero">
      <div className="hero-inner">
        <div className="hero-badge">Research Operations @ Exponent </div>
        <h1>
          {personal.tagline.split(' ').slice(0, 2).join(' ')}<br />
          <em>{personal.tagline.split(' ').slice(2).join(' ')}</em>
        </h1>
        <p className="hero-sub">{personal.bio}</p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View My Work →
          </a>
          <a href={personal.resume} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
            Download Resume
          </a>
        </div>
      </div>
      {/* <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div> */}
    </section>
  );
}
