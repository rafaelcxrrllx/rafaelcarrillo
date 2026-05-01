import { Link, useLocation } from 'react-router-dom';

export default function Nav({ name }) {
 const { pathname } = useLocation();

  return (
    
    <nav className="nav">
      <div className="nav-inner">
        <Link className='nav-logo' to="/home">RC ✦</Link>
        <ul className="nav-links">
          <li><Link to="/work">Work</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link className='nav-cta' to="/contact">Let's Talk</Link></li>
        </ul>
      </div>
    </nav>
  );
}
