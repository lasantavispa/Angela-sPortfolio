// import { useState } from 'react'
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

  return (
    <>
    <Navbar/>
    <Hero />
    <Technologies />
    <Projects />
    <Timeline />
    <Contact />
    <Footer/>       
   </>
  )
}

export default App
