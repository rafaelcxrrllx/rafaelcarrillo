import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { useFadeIn } from '../components/useFadeIn.js'
import { experience, personal, projects, skills } from '../data'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {

    useFadeIn();
  return (
    <>
        <Nav />
        <br/>
        <br/>
        <Footer personal={personal}/>  
    </>
  )
}