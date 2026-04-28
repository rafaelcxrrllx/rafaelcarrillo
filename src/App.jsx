import { useEffect } from 'react';
import './index.css';
import { personal, skills, projects, experience } from './data.js';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import AIAssistant from './components/AIAssistant.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    const els = document.querySelectorAll('.fade-up');
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Nav name={personal.name} />
      <main>
        <Hero personal={personal} />
        <Projects projects={projects} />
        <Skills skills={skills} />
        {/* <AIAssistant /> */}
        <Experience experience={experience} />
        <Contact personal={personal} />
      </main>
      <footer>
        <span>© {new Date().getFullYear()} {personal.name}</span>
        <span>Designed + Coded with ♡ in Los Angeles</span>
      </footer>
    </>
  );
}
