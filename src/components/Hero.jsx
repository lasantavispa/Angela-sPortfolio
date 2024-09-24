import React, {useEffect} from 'react';

const Hero = () => {
  useEffect(() => {
    // Selecciona todos los spans con la clase 'word'
    const spans = document.querySelectorAll('.word span');

    // Añadir listeners a cada span
    spans.forEach((span, idx) => {
      const handleMouseOver = (e) => {
        e.target.classList.add('active');
      };

      const handleAnimationEnd = (e) => {
        e.target.classList.remove('active');
      };

      // Añadir eventos de ratón y animación a cada span
      span.addEventListener('mouseover', handleMouseOver);
      span.addEventListener('animationend', handleAnimationEnd);

      // Animación inicial con un pequeño retraso entre letras
      setTimeout(() => {
        span.classList.add('active');
      }, 750 * (idx + 1));

      // Limpieza de event listeners al desmontar el componente
      return () => {
        span.removeEventListener('mouseover', handleMouseOver);
        span.removeEventListener('animationend', handleAnimationEnd);
      };
    });
  }, []);

  return (
    <div className='pt-3'>
      <div
        id="home"
        className="flex flex-col gap-15 md:flex-row justify-center items-center md:gap-24"
      >
        <img
          src="photoAngela.png"
          alt="profile"
          className="p-4 w-72 rounded-full"
        />
        <div className="flex-col gap-20">
          <div className="word text-center p-3">
            <span>Á</span>
            <span>n</span>
            <span>g</span>
            <span>e</span>
            <span>l</span>
            <span>a</span>
          </div>
          <div className="word text-center p-3">
            <span>Á</span>
            <span>v</span>
            <span>i</span>
            <span>l</span>
            <span>a</span>
          </div>
          <div className="word text-center p-3">
            <span>L</span>
            <span>a</span>
            <span>s</span>
            <span>a</span>
            <span>n</span>
            <span>t</span>
            <span>a</span>
          </div>
        </div>
      </div>
      {/* <div>
        <p>
          Bienvenido a mi portafolio web. Aquí podrás encontrar mis habilidades
          y proyectos relacionados con la programación web.
        </p>
        <p>
          Para más información, contacta conmigo a través de mi correo
          electrónico o mis redes sociales.
        </p>
      </div> */}
    </div>
  );
};

export default Hero;
