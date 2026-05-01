import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data.js';
import Nav from '../components/Nav.jsx';

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [activeFilter]);

  const allTags = useMemo(() => {
    const tags = new Set();
    projects.forEach(p => p.tags.forEach(t => tags.add(t)));
    return ['All', ...tags];
  }, []);

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(activeFilter));

  return (
    <main style={{ paddingTop: 'var(--nav-h)' }}>
      <Nav/>
      <section>
        <div className="container">
          <p className="section-label fade-up">Portfolio</p>
          <h1 className="fade-up" style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            marginBottom: '16px'
          }}>
            Case Studies
          </h1>
          <p className="section-desc fade-up" style={{ marginBottom: 0 }}>
            UX projects spanning healthcare, logistics, and eCommerce — each one a real problem, a real process, and a real solution.
          </p>

          {/* <div className="filter-bar fade-up">
            {allTags.map(tag => (
              <button
                key={tag}
                className={`filter-btn ${activeFilter === tag ? 'active' : ''}`}
                onClick={() => setActiveFilter(tag)}
              >
                {tag}
              </button>
            ))}
          </div> */}

          <div className="projects-grid" style={{ marginTop: '48px' }}>
            {filtered.map((project, i) => (
              <Link
                key={project.id}
                to={`/work/${project.slug}`}
                className="project-card fade-up"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="project-thumb" style={{ background: project.color, color: project.accent }}>
                  {project.image
                    ? <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    : <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.02em', textAlign: 'center', padding: '0 24px' }}>{project.title}</span>
                  }
                </div>
                <div className="project-body">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <p className="project-year">{project.year}</p>
                    <span style={{ fontSize: '0.75rem', color: 'var(--ink-3)' }}>{project.team} · {project.role}</span>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p className="project-desc">{project.description}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="tags">
                      {project.tags.slice(0, 3).map(tag => <span key={tag} className="tag">{tag}</span>)}
                    </div>
                    <span style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 600 }}>Read Case Study →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}