import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = ({ changeLanguage, t, language }) => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const closeNav = () => {
    setNav(false);
  };

  return (
    <div className="h-10" id="navbar">
      <div className="hidden md:flex w-full justify-between items-center gap-4">
        <div className="font-font-title text-color-white font-bold text-2xl">
          Full-Stack Developer
        </div>
        <div className='flex items-center gap-4'>
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
      </div>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10 transition-opacity duration-300 ${
          nav ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeNav} // Cierra el menú al hacer clic fuera del menú
      />

        

      <div
        className=" md:hidden text-color-white flex justify-between"
      >
         <div className="font-font-title font-bold text-xl">
          Full-Stack Developer
        </div>
   
        <div className="absolute z-10 right-5 cursor-pointer" onClick={handleNav}
        >
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </div>
      </div>

      

      <div
        className={`${
          nav ? 'translate-x-0' : 'hidden'
        } flex-col bg-color-turquoise absolute mt-7 top-10 right-0 w-[40%] md:hidden p-4 rounded-lg shadow-lg z-20 transition-transform duration-300 ease-in-out`}
      >
        <ul className="flex-col justify-end items-end text-white">
          <li className="p-2" onClick={closeNav}>
            <a href="#home">{t.home}</a>
          </li>
          <li className="p-2" onClick={closeNav}>
            <a href="#technologies">{t.technologies}</a>
          </li>
          <li className="p-2" onClick={closeNav}>
            <a href="#projects">{t.projects}</a>
          </li>
          <li className="p-2" onClick={closeNav}>
            <a href="#timeline">{t.timeline}</a>
          </li>
          <li className="p-2" onClick={closeNav}>
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
  t: PropTypes.shape({
    // t es un objeto con las traducciones
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
