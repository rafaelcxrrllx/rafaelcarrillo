export default function Nav({ name }) {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#hero" className="nav-logo">RC ✦</a>
        <ul className="nav-links">
          <li><a href="#projects">Work</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#ai">Bio</a></li>
          <li><a href="#contact" className="nav-cta">Let's Talk</a></li>
        </ul>
      </div>
    </nav>
  );
}
