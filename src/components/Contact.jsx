export default function Contact({ personal }) {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <p className="section-label fade-up">Get In Touch</p>
        <h2 className="section-title fade-up">Let's build something<br />great together</h2>

        <div className="contact-grid">
          <div className="contact-info fade-up">
            <h3>Open to new opportunities</h3>
            <p>
              Whether you have a project in mind, a role to fill, or just want to connect — I'd love to hear from you. I'm currently available for full-time, contract, and freelance work.
            </p>
            <div className="contact-links">
              <a href={`mailto:${personal.email}`} className="contact-link">
                <span className="contact-link-icon">✉</span>
                {personal.email}
              </a>
              <a href={personal.linkedin} className="contact-link" target="_blank" rel="noopener noreferrer">
                <span className="contact-link-icon">in</span>
                LinkedIn
              </a>
              <a href={personal.github} className="contact-link" target="_blank" rel="noopener noreferrer">
                <span className="contact-link-icon">⌥</span>
                GitHub
              </a>
            </div>
          </div>

          <div className="fade-up" style={{ transitionDelay: '0.15s' }}>
            <div style={{
              background: 'var(--bg)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}>
              <p style={{ fontSize: '0.8rem', color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>Based in</p>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em' }}>{personal.location}</p>
              <div style={{ borderTop: '1px solid var(--border)', marginTop: '12px', paddingTop: '24px' }}>
                <p style={{ fontSize: '0.8rem', color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: '12px' }}>Availability</p>
                <span style={{
                  background: '#E6F4EA',
                  color: '#2D7A3A',
                  padding: '6px 14px',
                  borderRadius: '40px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#2D7A3A', display: 'block' }} />
                  Available Now
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
