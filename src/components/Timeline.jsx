import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

const Timeline = ({ t }) => {
  useEffect(() => {
    // Selecciona todos los elementos de la timeline
    const targets = document.querySelectorAll('.timeline ol li');
    const threshold = 0.5;
    const ANIMATED_CLASS = 'in-view';

    // Callback para el IntersectionObserver
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        const elem = entry.target;
        if (entry.intersectionRatio >= threshold) {
          elem.classList.add(ANIMATED_CLASS);
          observer.unobserve(elem);
        } else {
          elem.classList.remove(ANIMATED_CLASS);
        }
      });
    };

    // Configura el IntersectionObserver
    const observer = new IntersectionObserver(callback, { threshold });

    // Observa cada elemento objetivo
    targets.forEach(target => observer.observe(target));

    // Limpia el IntersectionObserver al desmontar el componente
    return () => {
      targets.forEach(target => observer.unobserve(target));
    };
  }, []); // El array vacío asegura que solo se ejecute una vez cuando el componente se monta


  return (
    <>
      <h3
        id="timeline"
        className="font-font-title font-bold text-color-white text-2xl pt-10"
      >
        {t.timeline}
      </h3>

      <section className="timeline">
        <ol>
          <li>
            <div className="item-inner">
              <div className="time-wrapper">
                <time>{t.timelineTitle1}</time>
              </div>
              <div className="details">
                <h3>{t.timelineSubtitle1}</h3>
                <p>{t.timelineYear1}</p>
              </div>
            </div>
          </li>
          <li>
            <div className="item-inner">
              <div className="time-wrapper">
                <time>{t.timelineTitle2}</time>
              </div>
              <div className="details">
                <h3>{t.timelineSubtitle2}</h3>
                <p>{t.timelineYear2}</p>
              </div>
            </div>
          </li>
          <li>
            <div className="item-inner">
              <div className="time-wrapper">
                <time>{t.timelineTitle3}</time>
              </div>
              <div className="details">
                <h3> {t.timelineSubtitle3}</h3>
                <p>
                {t.timelineYear3}
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="item-inner">
              <div className="time-wrapper">
                <time>{t.timelineTitle4}</time>
              </div>
              <div className="details">
                <h3>{t.timelineSubtitle4}</h3>
                <p>
                {t.timelineYear4}
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="item-inner">
              <div className="time-wrapper">
                <time>{t.timelineTitle5}</time>
              </div>
              <div className="details">
                <h3>{t.timelineSubtitle5}</h3>
                <p>
                {t.timelineYear5}
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="item-inner">
              <div className="time-wrapper">
                <time>{t.timelineTitle6}</time>
              </div>
            </div>
          </li>   
          
        </ol>
      </section>
    </>
  );
};

Timeline.propTypes = {
  t: PropTypes.shape({
    // t es un objeto con las traducciones
    home: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    technologies: PropTypes.string.isRequired,
    projects: PropTypes.string.isRequired,
    timeline: PropTypes.string.isRequired,
    contact: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    timelineTitle1: PropTypes.string.isRequired,
    timelineTitle2: PropTypes.string.isRequired,
    timelineTitle3: PropTypes.string.isRequired,
    timelineTitle4: PropTypes.string.isRequired,
    timelineTitle5: PropTypes.string.isRequired,
    timelineTitle6: PropTypes.string.isRequired,
    timelineYear1: PropTypes.string.isRequired,
    timelineYear2: PropTypes.string.isRequired,
    timelineYear3: PropTypes.string.isRequired,
    timelineYear4: PropTypes.string.isRequired,
    timelineYear5: PropTypes.string.isRequired,
    timelineSubtitle1: PropTypes.string.isRequired,
    timelineSubtitle2: PropTypes.string.isRequired,
    timelineSubtitle3: PropTypes.string.isRequired,
    timelineSubtitle4: PropTypes.string.isRequired,
    timelineSubtitle5: PropTypes.string.isRequired,
  }).isRequired,
};

export default Timeline;
