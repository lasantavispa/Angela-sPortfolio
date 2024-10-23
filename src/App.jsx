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
      email: 'Email',
      message: 'I hope you enjoyed my work. Feel free to get in touch with me! You can send me an email directly or connect with me through my social media. Click the links below to visit my LinkedIn profile, check out my GitHub repository, or send me an email. I look forward to hearing from you!',
      projectDescription1: 'Web platform developed with React and Node.js, designed to allow users to create and share posts in which they describe projects they have completed. These posts also include information a brief description of the author.',
      projectDescription2:'This project is a web application for managing a police station. It was developed using Angular for the frontend and SpringBoot for the backend, enabling users to manage information about inmates, cells, staff, and available vehicles, among other features.',
      projectDescription3: 'The developed project is a blog using Next.js and SpringBoot. It is a platform where users can publish and find content organized by categories, as well as interact through comments and nested replies.',
      projectDescription4: 'This project in Figma includes the following technical features: responsive design, styles saved in a library, layer and element naming conventions, components with properties, light and dark themes, and a navigation prototype.',
      projectDescription5: 'Harry Potter Character Finder. Developed with React and using an external API, this tool allows you to: Search for characters by name, house, and status (alive or dead), easily clear selected filters, and view detailed information for each character.',
      projectDescription6: 'A recreation of the classic Snake game, developed with Angular 18 and featuring an attractive pixel art design. Users control the snake, collecting food to grow while avoiding crashing into the walls or its own body, all while competing for the highest score.',
      projectDescription7: 'It is a website developed with Angular, where through a form you can add a review of a movie or series. The reviews are grouped in a specific route for quick access to those that have already been evaluated.',
      timelineTitle1:'Bilingual Education',
      timelineYear1:'2013 - 2017',
      timelineSubtitle1:'UAH - CUCC',
      timelineTitle2:'BOOTCAMP FULL STACK DEVELOPER',
      timelineYear2:'2023- 2024',
      timelineSubtitle2:'ADALAB',
      timelineTitle3:'BOOTCAMP DESIGN, INTERFACES, AND CSS FOR FRONTENDS',
      timelineYear3:'2024',
      timelineSubtitle3:'CÓDIGOFACILITO',
      timelineTitle4:'WEB DEVELOPER- FULL STACK',
      timelineYear4:'2024',
      timelineSubtitle4:'MelIT Technologies, S.L., Madrid',
      timelineTitle5:'WEB DEVELOPER- FULL STACK',
      timelineYear5:'2024',
      timelineSubtitle5:'Adopta Un Junior, Madrid',
      timelineTitle6: 'TO BE CONTINUED...'
    },
    es: {
      home: 'Inicio',
      about: 'Sobre mí',
      technologies: 'Tecnologías',
      projects: 'Proyectos',
      timeline: 'Línea del tiempo',
      contact: 'Contacto',
      language: 'Lenguaje',
      email: 'Correo electrónico',
      message: 'Espero que te haya gustado mi trabajo. ¡No dudes en ponerte en contacto conmigo! Puedes enviarme un correo electrónico directamente o conectar conmigo a través de mis redes sociales. Haz clic en los enlaces a continuación para visitar mi perfil de LinkedIn, mi repositorio en GitHub, o para enviarme un email.',
      projectDescription1: 'Plataforma web desarrollada con React y Node.js, diseñada para permitir a los usuarios crear y compartir publicaciones en la que describen proyectos que hayan realizado, además de informacón sobre el proyecto y incluye una pequeña descripción del autor.',
      projectDescription2:'Aplicación web que permite administrar una comisaría. Fue desarrollado con Angular en el frontend y SpringBoot en el backend, permitiendo a los usuarios gestionar información sobre presos, celdas, personal y vehículos disponibles, entre otros.',
      projectDescription3: 'El proyecto desarrollado es un blog utilizando Next.js y SpringBoot. Plataforma donde los usuarios pudieran publicar y encontrar contenido organizado por categorias, así como interactuar a través de comentarios y respuestas anidadas.',
      projectDescription4: 'Este proyecto en figma incluye las siguientes características técnicas : diseño responsive,estilos guardados en una librería, nomenclatura capas y elementos, componentes con propiedades, Light | Dark theme, prototipo de navegación.',
      projectDescription5: 'Buscador de personajes de Harry Potter. Desarrollada con React y utilizando una API externa, esta herramienta te permite: Buscar personajes por nombre, casa y estado (vivo o muerto), limpiar fácilmente los filtros seleccionados, información detallada por personaje',
      projectDescription6: 'Recreación del clásico juego Snake, desarrollada con Angular 18 y un atractivo diseño en pixel art. Los usuarios controlan la serpiente, obteniendo alimentos para crecer y evitando chocar contra las paredes o su propio cuerpo, todo mientras compiten por una puntuación más alta.',
      projectDescription7: 'Se trata de una página web desarrollada con Angular, donde a través de un formulario puedes añadir una valoración sobre una película o serie. Las valoraciones se agrupan en una ruta específica para acceder rápidamente a las que ya han sido evaluadas.',
      timelineTitle1:'Educación Bilingüe',
      timelineYear1:'2013 - 2017',
      timelineSubtitle1:'UAH - CUCC',
      timelineTitle2:'BOOTCAMP FULL STACK DEVELOPER',
      timelineYear2:'2023- 2024',
      timelineSubtitle2:'ADALAB',
      timelineTitle3:'BOOTCAMP DISEÑO, INTERFACES Y CSS PARA FRONTENDS',
      timelineYear3:'2024',
      timelineSubtitle3:'CÓDIGOFACILITO',
      timelineTitle4:'WEB DEVELOPER- FULL STACK',
      timelineYear4:'2024',
      timelineSubtitle4:'MelIT Technologies, S.L., Madrid',
      timelineTitle5:'WEB DEVELOPER- FULL STACK',
      timelineYear5:'2024',
      timelineSubtitle5:'Adopta Un Junior, Madrid',
      timelineTitle6: 'CONTINUARÁ...'

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
