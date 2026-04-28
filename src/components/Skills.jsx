import { useEffect, useRef } from 'react';

export default function Skills({ skills }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.skill-fill').forEach(fill => {
              fill.style.transform = `scaleX(${fill.dataset.level / 100})`;
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills-section" ref={ref}>
      <div className="container">
        <p className="section-label fade-up">Capabilities</p>
        <h2 className="section-title fade-up">Skills &amp; Tools</h2>
        <p className="section-desc fade-up">
          A blend of research rigor, design craft, and just enough code to collaborate effectively with engineers.
        </p>

        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className="skill-card fade-up"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-cat">{skill.category}</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-fill"
                  data-level={skill.level}
                  style={{ transform: 'scaleX(0)' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
