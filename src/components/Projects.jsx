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
        {/* <div className="w-96 md:h-187">
          <img
            src="Proyectosmolones.png"
            alt="Proyectos molones"
            className="w-full h-full object-cover rounded-md"
          />
        </div> */}
        <div className='relative w-96 md:h-187 group'>
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
        </div>
        {/* <div className="w-96 md:h-187">
          <img
            src="Police360.png"
            alt="Police360"
            className="w-full h-full object-cover rounded-md"
          />
        </div> */}
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
        {/* <div className="w-96 md:h-187">
          <img
            src="BlogAUJ.png"
            alt="BlogAUJ"
            className="w-full h-full object-cover rounded-md"
          />
        </div> */}
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
        {/* <div className="w-96 md:h-187">
          <img
            src="WTHB.png"
            alt="WTHB"
            className="w-full h-full object-cover rounded-md"
          />
        </div> */}
         <div className='relative w-96 md:h-187 group'>
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
        </div>
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
  }).isRequired,
};
export default Projects;
