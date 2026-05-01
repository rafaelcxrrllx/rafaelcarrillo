import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Nav({ name }) {
 const { pathname } = useLocation();
 const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/work', label: 'Work' },
    { to: '/about', label: 'About' },
  ];

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <Link className='nav-logo' to="/home">RC ✦</Link>
          <ul className="nav-links">
            <li><Link to="/work">Work</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link className='nav-cta' to="/contact">Let's Talk</Link></li>
          </ul>
            <button
              className="nav-hamburger"
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label="Toggle menu"
            >
              <span className={`ham-line ${menuOpen ? 'open' : ''}`} />
              <span className={`ham-line ${menuOpen ? 'open' : ''}`} />
              <span className={`ham-line ${menuOpen ? 'open' : ''}`} />
            </button>
        </div>
      </nav>
            <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-inner">
          <ul className="mobile-links">
            {links.map(({ to, label }, i) => (
              <li
                key={to}
                style={{ transitionDelay: menuOpen ? `${i * 0.07}s` : '0s' }}
                className={`mobile-link-item ${menuOpen ? 'visible' : ''}`}
              >
                <Link
                  to={to}
                  className="mobile-link"
                  style={{ color: pathname === to ? 'var(--accent)' : '' }}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li
              style={{ transitionDelay: menuOpen ? '0.21s' : '0s' }}
              className={`mobile-link-item ${menuOpen ? 'visible' : ''}`}
            >
              <a href="mailto:hello@rafaelcarrillo.io" className="mobile-cta">
                Let's Talk →
              </a>
            </li>
          </ul>

          <div className={`mobile-footer ${menuOpen ? 'visible' : ''}`}>
            <a href="https://linkedin.com/in/rafaelcxrrllx" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/rafaelcxrrllx" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://instagram.com/rafaelcxrrllx" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>
    </>
    
  );
}
