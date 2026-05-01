import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { projects } from '../data.js';
import Nav from '../components/Nav.jsx';

function CaseSection({ label, children, delay = 0 }) {
  return (
    <div className="fade-up" style={{ marginBottom: '72px', transitionDelay: `${delay}s` }}>
      <p className="section-label" style={{ marginBottom: '16px' }}>{label}</p>
      <p style={{ fontSize: '1.05rem', color: 'var(--ink-2)', lineHeight: '1.85', fontWeight: 300 }}>
        {children}
      </p>
    </div>
  );
}

export default function CaseStudy() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [slug]);

  if (!project) return <Navigate to="/work" replace />;

  const { caseStudy } = project;
  const currentIndex = projects.findIndex(p => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main style={{ paddingTop: 'var(--nav-h)' }}>

      {/* Header */}
      <Nav/>
      <section style={{ paddingBottom: '0' }}>
        <div className="container">
          <Link
            to="/work"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--ink-3)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '48px', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--ink)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--ink-3)'}
          >
            ← All Case Studies
          </Link>

          <p className="section-label fade-up">{project.subtitle}</p>
          <h1 className="fade-up" style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 7vw, 6rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.0,
            marginBottom: '40px',
          }}>
            {project.title}
          </h1>

          {/* Meta */}
          <div className="fade-up" style={{
            display: 'flex',
            gap: '48px',
            flexWrap: 'wrap',
            paddingBottom: '48px',
            borderBottom: '1px solid var(--border)',
            marginBottom: '0',
          }}>
            {[
              { label: 'Year', value: project.year },
              { label: 'Role', value: project.role },
              { label: 'Duration', value: project.duration },
              { label: 'Team', value: project.team },
            ].map(({ label, value }) => (
              <div key={label}>
                <p style={{ fontSize: '0.72rem', color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: 6 }}>{label}</p>
                <p style={{ fontWeight: 500, fontSize: '0.95rem' }}>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cover */}
      <div className="fade-up" style={{
        width: '100%',
        aspectRatio: '21/9',
        background: project.color,
        color: project.accent,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(3rem, 8vw, 8rem)',
        fontWeight: 800,
        letterSpacing: '-0.03em',
        margin: '0 0 80px 0',
      }}>
        {project.image
          ? <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          : project.title
        }
      </div>

      {/* Case Study Body */}
      <section style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <CaseSection label="Overview" delay={0}>{caseStudy.overview}</CaseSection>
          <CaseSection label="The Problem" delay={0.05}>{caseStudy.problem}</CaseSection>
          <CaseSection label="Research" delay={0.1}>{caseStudy.research}</CaseSection>

          {/* Image slot */}
          {caseStudy.images && caseStudy.images.length > 0 && (
            <div className="fade-up" style={{ marginBottom: '72px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
              {caseStudy.images.map((src, i) => (
                <img key={i} src={src} alt={`${project.title} — screen ${i + 1}`}
                  style={{ width: '100%', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }} />
              ))}
            </div>
          )}

          <CaseSection label="Design Process" delay={0.15}>{caseStudy.process}</CaseSection>
          <CaseSection label="The Solution" delay={0.2}>{caseStudy.solution}</CaseSection>

          {/* Outcome — highlighted */}
          <div className="fade-up" style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderLeft: `4px solid var(--accent)`,
            borderRadius: 'var(--radius)',
            padding: '32px',
            marginBottom: '72px',
          }}>
            <p className="section-label" style={{ marginBottom: '16px' }}>Outcome &amp; Impact</p>
            <p style={{ fontSize: '1.05rem', color: 'var(--ink-2)', lineHeight: '1.85', fontWeight: 300 }}>
              {caseStudy.outcome}
            </p>
          </div>

          {/* Tags */}
          <div className="fade-up" style={{ marginBottom: '80px' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: '12px' }}>Tags</p>
            <div className="tags">
              {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <p className="section-label fade-up" style={{ marginBottom: '32px' }}>Next Case Study</p>
          <Link to={`/work/${nextProject.slug}`} className="project-card fade-up" style={{ maxWidth: '560px', display: 'block' }}>
            <div className="project-thumb" style={{ background: nextProject.color, color: nextProject.accent }}>
              {nextProject.image
                ? <img src={nextProject.image} alt={nextProject.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                : <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '2rem' }}>{nextProject.title}</span>
              }
            </div>
            <div className="project-body">
              <p className="project-year">{nextProject.year}</p>
              <h3 className="project-title">{nextProject.title}</h3>
              <p className="project-subtitle">{nextProject.subtitle}</p>
              <span style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 600 }}>Read Case Study →</span>
            </div>
          </Link>
        </div>
      </section>

    </main>
  );
}