import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Contact from './components/Contact.JSX'
import Footer from './components/Footer'
import { Route, Routes } from'react-router-dom'

function App() {

  const [language, setLanguage] = useState('en');

  const changeLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'es' : 'en'));
  };

  const translations = {
    en: {
      home: 'Home',
      about: 'About me',
      technologies: 'Technologies',
      projects: 'Projects',
      timeline: 'Timeline',
      contact: 'Contact',
      language: 'Language',
    },
    es: {
      home: 'Inicio',
      about: 'Sobre mí',
      technologies: 'Tecnologías',
      projects: 'Proyectos',
      timeline: 'Línea de tiempo',
      contact: 'Contacto',
      language: 'Lenguaje',
    },
  };

  const t = translations[language];

  return (
    <>
    <Navbar changeLanguage={changeLanguage} t={t} language={language}/>
    <Hero />
    <Technologies t={t} />
    <Projects t={t}/>
    <Timeline t={t}/>
    <Contact t={t}/>
    <Footer/>       
   </>
  )
}

export default App
