import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

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
    <div className='h-10'>
      <div className="hidden md:flex w-full justify-end gap-4">
        <ul className="flex text-color-white">
          <li className="p-2">
            <a href="#home">{t.home}</a>
          </li>
          <li className="p-2">
            <a href="#technologies">{t.technologies}</a>
          </li>
          <li className="p-2">
            <a href="#projects">{t.projects}</a>
          </li>
          <li className="p-2">
            <a href="#timeline">{t.timeline}</a>
          </li>
          <li className="p-2">
            <a href="#contact">{t.contact}</a>
          </li>
        </ul>
        <div className="flex items-center">
          <span className="text-white mr-2">EN</span>
          {/* Language toggle switch */}
          <label className="switch">
            <input
              type="checkbox"
              checked={language === 'es'}
              onChange={changeLanguage}
            />
            <span className="slider round"></span>
          </label>
          <span className="text-white ml-2">ES</span>
        </div>
      </div>

      <div
        onClick={handleNav} className=' md:hidden text-color-white'
        
      >
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      

      <div className={nav ? 'flex-col bg-color-turquoise' : 'hidden'}>
        <ul className="flex-col justify-end items-end text-white">
          <li className="p-2">
            <a href="#home">{t.home}</a>
          </li>
          <li className="p-2">
            <a href="#technologies">{t.technologies}</a>
          </li>
          <li className="p-2">
            <a href="#projects">{t.projects}</a>
          </li>
          <li className="p-2">
            <a href="#timeline">{t.timeline}</a>
          </li>
          <li className="p-2">
            <a href="#contact">{t.contact}</a>
          </li>
        </ul>
        <div className="p-2 flex items-center">
          <span className="text-white mr-2">EN</span>
          {/* Language toggle switch */}
          <label className="switch">
            <input
              type="checkbox"
              checked={language === 'es'}
              onChange={changeLanguage}
            />
            <span className="slider round"></span>
          </label>
          <span className="text-white ml-2">ES</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
