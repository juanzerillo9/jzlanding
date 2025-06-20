import React from 'react';
import './Contact.css';

const Contact = () => {
  // NOTA: Deberás configurar EmailJS y reemplazar 'YOUR_SERVICE_ID', etc.
  // Es muy sencillo, sigue su tutorial en https://www.emailjs.com/docs/examples/reactjs/
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de emailjs.sendForm(...)
    alert('Formulario enviado (simulación). ¡Configura EmailJS!');
  };

  return (
    <section id="contact" className="contact section">
      <h2 className="section-title">Hablemos de tu Proyecto</h2>
      <p>Estoy listo para transformar tu visión en una realidad digital. Completa el formulario y me pondré en contacto a la brevedad.</p>
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="user_name" placeholder="Tu Nombre" required />
        <input type="email" name="user_email" placeholder="Tu Email" required />
        <textarea name="message" placeholder="Cuéntame sobre tu proyecto..." required></textarea>
        <button type="submit" className="cta-button">Enviar Mensaje</button>
      </form>
    </section>
  );
};

export default Contact;