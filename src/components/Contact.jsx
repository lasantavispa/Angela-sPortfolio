import React from 'react'
import PropTypes from 'prop-types';


const Contact = ({t}) => {
  return (
    <>
    <div id="contact" className="font-font-title text-color-white text-2xl pt-4" >{t.contact}</div>
    <div className="flex flex-col mt-4">
        <a 
          href={`mailto:angela.avilasanta@gmail.com`} 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Enviar Correo
        </a>
        <a 
          href="https://www.linkedin.com/in/angela-avila-lasanta/" 
          className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded mb-2" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a 
          href="https://github.com/lasantavispa" 
          className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
      </>
  )
}

Contact.propTypes = {
  t: PropTypes.shape({                      // t es un objeto con las traducciones
    contact: PropTypes.string.isRequired,
  }).isRequired,}

export default Contact