import { useState, useMemo } from 'react';


export default function Projects({ projects }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const allTags = useMemo(() => {
    const tags = new Set();
    projects.forEach(p => p.tags.forEach(t => tags.add(t)));
    return ['All', ...tags];
  }, [projects]);

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(activeFilter));

  return (
    <section id="projects">
      <div className="container">
        <p className="section-label fade-up">Selected Work</p>
        <h2 className="section-title fade-up">Projects that<br />made an impact</h2>
        <p className="section-desc fade-up">
          Each project is a story — a problem worth solving, and a solution worth sharing.
        </p>

        <div className="filter-bar fade-up">
          {allTags.map(tag => (
            <button
              key={tag}
              className={`filter-btn ${activeFilter === tag ? 'active' : ''}`}
              onClick={() => setActiveFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((project, i) => (
            <a
              key={project.id}
              href={project.link}
              className="project-card fade-up"
              style={{ transitionDelay: `${i * 0.08}s` }}
              target={project.link !== '#' ? '_blank' : undefined}
              rel="noopener noreferrer"
            >
              <div
                className="project-thumb"
                style={{ background: project.color, color: project.accent }}
              >
                {project.image
                  ? <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  : project.title.split(' ').slice(0, 2).join(' ')
                }
              </div>
              <div className="project-body">
                <p className="project-year">{project.year}</p>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p className="project-desc">{project.description}</p>
                <div className="tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
