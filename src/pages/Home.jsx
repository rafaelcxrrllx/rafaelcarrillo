import Hero from '../components/Hero.jsx'
import Nav from '../components/Nav.jsx'
import Experience from '../components/Experience.jsx'
import Projects from '../components/Projects.jsx'
import Skills from '../components/Skills.jsx'
import Contact from '../components/Footer.jsx'
import { useFadeIn } from '../components/useFadeIn.js'

import { experience, personal, projects, skills } from '../data'

export default function Home() {

    useFadeIn();
  return (
    <>
        <Nav />
        <br/>
        <br/>
        <Hero personal={personal} />
        <Projects projects={projects} />
        <Skills skills={skills} />
        <Experience experience={experience}/>
        <Contact personal={personal}/>  
    </>
  )
}