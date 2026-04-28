export default function Experience({ experience }) {
  return (
    <section id="experience">
      <div className="container">
        <p className="section-label fade-up">Background</p>
        <h2 className="section-title fade-up">Experience</h2>
        <p className="section-desc fade-up">
          A track record of designing thoughtfully and delivering meaningfully.
        </p>

        <div className="experience-list">
          {experience.map((exp, i) => (
            <div
              key={i}
              className="exp-item fade-up"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
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
  );
}
