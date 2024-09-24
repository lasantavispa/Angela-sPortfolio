import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = ({changeLanguage, t, language}) => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };


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

Navbar.propTypes = {
  changeLanguage: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired, // changeLanguage es una función requerida
  t: PropTypes.shape({                      // t es un objeto con las traducciones
    home: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    technologies: PropTypes.string.isRequired,
    projects: PropTypes.string.isRequired,
    timeline: PropTypes.string.isRequired,
    contact: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
  }).isRequired,
};

export default Navbar;
