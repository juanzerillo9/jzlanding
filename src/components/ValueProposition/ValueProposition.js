import React from 'react';
import './ValueProposition.css';

const ValueProposition = () => {
  return (
    <section id="why-us" className="value-proposition section">
      <h2 className="section-title">¿Por qué JZ Software Development?</h2>
      <div className="proposition-container">
        <div className="proposition-item">
          <h4>Velocidad de Entrega</h4>
          <p>Procesos ágiles para entregar tu producto funcional en tiempo récord, sin sacrificar la calidad.</p>
        </div>
        <div className="proposition-item">
          <h4>Calidad de Código</h4>
          <p>Software construido sobre bases sólidas, escalable, mantenible y utilizando las mejores prácticas del mercado.</p>
        </div>
        <div className="proposition-item">
          <h4>Enfoque en Datos</h4>
          <p>Mi experiencia como Data Developer me permite crear soluciones que no solo funcionan, sino que también te dan la inteligencia de negocio que necesitas.</p>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;