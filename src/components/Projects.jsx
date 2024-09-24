import React from 'react'
import PropTypes from 'prop-types';


const Projects = ({t}) => {
  return (
    <div id="projects" className="font-font-title text-color-white text-2xl pt-4">{t.projects}</div>
  )
}

Projects.propTypes = {
  t: PropTypes.shape({                      // t es un objeto con las traducciones
    home: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    technologies: PropTypes.string.isRequired,
    projects: PropTypes.string.isRequired,
    timeline: PropTypes.string.isRequired,
    contact: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
  }).isRequired,
}
export default Projects