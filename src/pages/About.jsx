import Hero from '../components/Hero.jsx'
import Nav from '../components/Nav.jsx'
import Experience from '../components/Experience.jsx'
import Projects from '../components/Projects.jsx'
import Skills from '../components/Skills.jsx'
import Contact from '../components/Footer.jsx'
import { experience, personal, projects, skills } from '../data'
import { useFadeIn } from '../components/useFadeIn.js'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main style={{ paddingTop: 'var(--nav-h)' }}>

      <Nav/>
      {/* Hero */}
      <section>
        <div className="container">
          <div className="about-hero-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center',
          }}>
            {/* Text */}
            <div>
              <p className="section-label fade-up">About</p>
              <h1 className="fade-up" style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginBottom: '28px',
              }}>
                Designed in<br />
                <em style={{ fontStyle: 'normal', color: 'var(--accent)' }}>South Central.</em>
              </h1>
              <div className="fade-up" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="#about" className="btn btn-primary" rel="noopener noreferrer">
                  Read more →
                </a>
              </div>
            </div>

            {/* Photo */}
            <div className="fade-up" style={{ transitionDelay: '0.15s' }}>
              <div style={{
                width: '100%',
                aspectRatio: '4/5',
                borderRadius: 'var(--radius)',
                overflow: 'hidden',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                {personal.photo ? (
                  <img
                    src={personal.photo}
                    alt={personal.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <div style={{ textAlign: 'center', color: 'var(--ink-3)' }}>
                    <div style={{ fontSize: '4rem', marginBottom: '12px' }}>◎</div>
                    <p style={{ fontSize: '0.85rem' }}>Add photo.jpg to /public</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section id="about" style={{ background: 'var(--surface)' }}>
        <div  className="container" style={{ maxWidth: '760px' }}>
          <p className="section-label fade-up">My Story</p>

          {[
          "I grew up in South Central Los Angeles, a place that taught me resilience, curiosity, and the value of community. From an early age, I was fascinated by two things: technology and creativity. Whether I was drawing, playing video games, or teaching myself how things worked, I was always driven by a desire to learn and play.",
          "That curiosity led me to UC Irvine, where I studied the intersection of computer science, human psychology, and design-thinking. Over time, I discovered that my passion wasn't limited to one discipline—it was about understanding systems, learning continuously, and using technology to create meaningful impact.", 
          "Today, my work spans from research operations, project management, web development, academia, and emerging technologies. I'm particularly interested in how technology can empower people, improve everyday experiences, and help build a better future. Whether I'm developing software, studying IT and cloud technologies, or exploring new ideas, I'm motivated by a simple belief: learning is a lifelong pursuit, and innovation starts with curiosity.", 
          "Outside of work, you'll find me at the gym, hiking local trails, reading, watching anime, exploring new places, spending time with family and friends, or hanging out with my dog, Zeus."
       
          ].map((para, i) => (
            <p key={i} className="fade-up" style={{
              fontSize: '1.1rem',
              color: 'var(--ink-2)',
              lineHeight: '1.85',
              fontWeight: 300,
              marginBottom: '24px',
              transitionDelay: `${i * 0.1}s`
            }}>
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* Interests */}
      <section>
        <div className="container">
          <p className="section-label fade-up">Outside of Work</p>
          <h2 className="section-title fade-up">Interests</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: "center", gap: '16px', marginTop: '40px' }}>
            {[
              { icon: '✝️', label: 'Faith' },
              { icon: '⛰️', label: 'Nature' },
              { icon: '🔭', label: 'Space' },
              { icon: '🍵', label: 'Matcha' },
              { icon: '🏖️', label: 'Beach' },
              { icon: '🎌', label: 'Anime' },
              { icon: '🔬', label: 'HCI' },
              { icon: '🖥️', label: 'Tech' },
              { icon: '🎧', label: 'Music' },
              { icon: '🍽️', label: 'Food' },
              { icon: '🇲🇽', label: 'Travel' },
              { icon: '🏀', label: 'Sports' },
              { icon: '📚', label: 'Books' },
              { icon: '💨', label: 'Runs' },
              { icon: '🐕', label: 'Zeus' },
              { icon: '🏋️', label: 'Gym' },

            ].map(({ icon, label }, i) => (
              <div key={label} className="fade-up" style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '20px 28px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                transitionDelay: `${i * 0.06}s`
              }}>
                <span style={{ fontSize: '1.5rem' }}>{icon}</span>
                <span style={{ fontWeight: 500, fontSize: '0.95rem' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section style={{ background: 'var(--surface)' }}>
        <div className="container">
          <p className="section-label fade-up">Background</p>
          <h2 className="section-title fade-up">Experience</h2>
          <div className="experience-list">
            {experience.map((exp, i) => (
              <div key={i} className="exp-item fade-up" style={{ transitionDelay: `${i * 0.1}s` }}>
                <p className="exp-period">{exp.period}</p>
                <div>
                  <h3 className="exp-role">{exp.role}</h3>
                  <p className="exp-company">{exp.company}</p>
                  <p className="exp-desc">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section>
        <div className="container">
          <p className="section-label fade-up">Capabilities</p>
          <h2 className="section-title fade-up">Skills &amp; Tools</h2>
          <div className="skills-grid" style={{ marginTop: '48px' }}>
            {skills.map((skill, i) => (
              <div key={skill.name} className="skill-card fade-up" style={{ transitionDelay: `${i * 0.05}s` }}>
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-cat">{skill.category}</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-fill"
                    style={{
                      transform: `scaleX(${skill.level / 100})`,
                      transition: `transform 1s ${i * 0.05}s cubic-bezier(0.4,0,0.2,1)`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--ink)', color: 'var(--bg)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2 className="fade-up" style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            marginBottom: '20px'
          }}>
            Let's Connect!
          </h2>
          <p className="fade-up" style={{
            color: 'rgba(247,245,240,0.6)',
            marginBottom: '40px',
            fontSize: '1.05rem',
            fontWeight: 300
          }}>
            I'm open to new opportunities, project collaborations, and new friends. If any of that sounds like you — let's chat!
          </p>
          <div className="fade-up" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`mailto:${personal.email}`} className="btn" style={{ background: 'var(--accent)', color: 'white' }}>
              Say Hello →
            </a>
            <a href={personal.instagram} className="btn"
              style={{ background: 'rgba(255,255,255,0.08)', color: 'var(--bg)', border: '1px solid rgba(255,255,255,0.15)' }}
              target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}