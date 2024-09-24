import React from 'react'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


const Contact = ({t}) => {
  return (
    <>
    <div id="contact" className="font-font-title font-bold text-color-white text-2xl pt-4" >{t.contact}</div>
    <p className="text-lg mt-4 pr-10 text-color-white">
        {t.message}
      </p>
    <div className="flex flex-col mt-4">
        {/* Email */}
        <a 
          href={`mailto:angela.avilasanta@gmail.com`} 
          className="flex items-center hover:bg-color-pink text-white font-bold py-2 px-4 rounded mb-2 w-96" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
          {t.email}: angela.avilasanta@gmail.com
        </a>
        
        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/angela-avila-lasanta/" 
          className="flex items-center hover:bg-color-pink text-white font-bold py-2 px-4 rounded mb-2 w-80" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
          LinkedIn: angela-avila-lasanta
        </a>
        
        {/* GitHub */}
        <a 
          href="https://github.com/lasantavispa" 
          className="flex items-center  hover:bg-color-pink text-white font-bold py-2 px-4 rounded w-80" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="mr-2" />
          GitHub: lasantavispa
        </a>
      </div>
      </>
  )
}

Contact.propTypes = {
  t: PropTypes.shape({                      // t es un objeto con las traducciones
    contact: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired,}

export default Contact