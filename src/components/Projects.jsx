import React from 'react';
import PropTypes from 'prop-types';

const Projects = ({ t }) => {
  return (
    <>
      <div
        id="projects"
        className="font-font-title font-bold text-color-white text-2xl pt-10"
      >
        {t.projects}
      </div>
      <div className="flex flex-wrap pt-4 justify-center md:gap-24 gap-10">

        <a href='https://project-promo-v-module-4-team-1.onrender.com/' className='relative w-96 md:h-187 group cursor-pointer' target="_blank">
          <img
            src="Proyectosmolones.png"
            alt="Proyectos molones"
            className="w-full h-full object-cover rounded-md transition-opacity duration-300 group-hover:opacity-0"
          />
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
            <p className="text-center p-4">
              {t.projectDescription1}
            </p>
          </div>
        </a>
       
        <div className='relative w-96 md:h-187 group'>
          <img
            src="Police360.png"
            alt="Police360"
            className="w-full h-full object-cover rounded-md transition-opacity duration-300 group-hover:opacity-0"
          />
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
            <p className="text-center p-4">
              {t.projectDescription2}
            </p>
          </div>
        </div>
    
        <div className='relative w-96 md:h-187 group'>
          <img
            src="BlogAUJ.png"
            alt="BlogAUJ"
            className="w-full h-full object-cover rounded-md transition-opacity duration-300 group-hover:opacity-0"
          />
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
            <p className="text-center p-4">
              {t.projectDescription3}
            </p>
          </div>
        </div>
      
        <a href='https://www.figma.com/proto/hRA48qOpGr1Bgmb7r2IpEI/Untitled?page-id=0%3A1&node-id=273-233&node-type=canvas&viewport=1121%2C326%2C0.51&t=3kHUVeGTuxrbPZaF-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=54%3A123&show-proto-sidebar=1' className='relative w-96 md:h-187 group cursor-pointer' target="_blank">
          <img
            src="WTHB.png"
            alt="WTHB"
            className="w-full h-full object-cover rounded-md transition-opacity duration-300 group-hover:opacity-0"
          />
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
            <p className="text-center p-4">
              {t.projectDescription4}
            </p>
          </div>
        </a>

        <a href='https://lasantavispa.github.io/HarryPotter/' className='relative w-96 md:h-187 group cursor-pointer' target="_blank"  >
          <img
            src="HarryPotter.png"
            alt="harry"
            className="w-full h-full object-cover rounded-md transition-opacity duration-300 group-hover:opacity-0"
          />
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
            <p className="text-center p-4">
              {t.projectDescription5}
            </p>
          </div>
        </a>

        <a href='https://snake-game-xi-eight.vercel.app/' className='relative w-96 md:h-187 group cursor-pointer' target="_blank"  >
          <img
            src="snake-screenshot.png"
            alt="harry"
            className="w-full h-full object-cover rounded-md transition-opacity duration-300 group-hover:opacity-0"
          />
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
            <p className="text-center p-4">
              {t.projectDescription6}
            </p>
          </div>
        </a>

        <a href='https://flixbuzz.vercel.app/' className='relative w-96 md:h-187 group cursor-pointer' target="_blank"  >
          <img
            src="flixbuzz.png"
            alt="harry"
            className="w-full h-full object-cover rounded-md transition-opacity duration-300 group-hover:opacity-0"
          />
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
            <p className="text-center p-4">
              {t.projectDescription7}
            </p>
          </div>
        </a>

        

      </div>
    </>
  );
};

Projects.propTypes = {
  t: PropTypes.shape({
    // t es un objeto con las traducciones
    home: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    technologies: PropTypes.string.isRequired,
    projects: PropTypes.string.isRequired,
    timeline: PropTypes.string.isRequired,
    contact: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    projectDescription1: PropTypes.string.isRequired, 
    projectDescription2: PropTypes.string.isRequired,
    projectDescription3: PropTypes.string.isRequired,
    projectDescription4: PropTypes.string.isRequired,
    projectDescription5: PropTypes.string.isRequired,
  }).isRequired,
};
export default Projects;
