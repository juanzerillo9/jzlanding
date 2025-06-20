import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero section">
      <h1 className="hero-title">Software a medida, entregado con Calidad y Rapidez.</h1>
      <p className="hero-subtitle">Convertimos tus ideas en aplicaciones web robustas y escalables. Tu visión, construida con código de excelencia.</p>
      <a href="#portfolio" className="cta-button">Ver mis proyectos</a>
    </section>
  );
};

export default Hero;