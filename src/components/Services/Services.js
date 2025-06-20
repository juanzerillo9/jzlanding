import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services section">
      <h2 className="section-title">Soluciones para tu Negocio</h2>
      <div className="services-container">
        
        <div className="service-card">
          <h3>Desarrollo Web a Medida</h3>
          <p>Creación de aplicaciones web completas utilizando tecnologías modernas como React y Node.js para ofrecer una experiencia de usuario fluida y un rendimiento excepcional.</p>
        </div>
        
        <div className="service-card value-add-card">
          <span className="value-add-badge">Valor Agregado</span>
          <h3>Servicios de Datos</h3>
          <p>No solo construimos software. Aprovechamos el poder de tus datos para generar insights, crear dashboards interactivos y optimizar procesos. Una solución inteligente de principio a fin.</p>
        </div>

      </div>
    </section>
  );
};

export default Services;