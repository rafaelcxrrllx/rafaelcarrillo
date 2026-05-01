import './App.css'

import { useFadeIn } from './components/useFadeIn.js'
import { experience, personal, projects, skills } from './data'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { Routes, Route } from 'react-router-dom'

import About from './pages/About.jsx'
import Hero from './components/Hero.jsx'
import Nav from './components/Nav.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Work from './pages/Work'
import CaseStudy from './pages/CaseStudy.jsx';




function App() {
  const [count, setCount] = useState(0)
  useFadeIn();
  return (
    <>

      {/* navbar can go here */}

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:slug" element={<CaseStudy />} />

      </Routes>

    </>
  )
}

export default App
