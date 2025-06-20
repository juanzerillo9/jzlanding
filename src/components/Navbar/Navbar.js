import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  }

  return (
    <header className="navbar-header">
      <nav className="navbar">
        <a href="#home" className="nav-logo" onClick={closeMenu}>
          JZ Software Development
        </a>
        
        {/* Menú de escritorio */}
        <ul className="nav-menu">
          <li><a href="#services">Servicios</a></li>
          <li><a href="#portfolio">Portafolio</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>

        {/* Botón de Hamburguesa para móvil */}
        <button className="hamburger-button" onClick={toggleMobileMenu}>
          <div className={`hamburger-line ${isMobileMenuOpen ? 'line-1-open' : ''}`}></div>
          <div className={`hamburger-line ${isMobileMenuOpen ? 'line-2-open' : ''}`}></div>
          <div className={`hamburger-line ${isMobileMenuOpen ? 'line-3-open' : ''}`}></div>
        </button>
      </nav>

      {/* Menú desplegable para móvil */}
      <div className={`mobile-nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <a href="#services" onClick={closeMenu}>Servicios</a>
        <a href="#portfolio" onClick={closeMenu}>Portafolio</a>
        <a href="#contact" onClick={closeMenu}>Contacto</a>
      </div>
    </header>
  );
};

export default Navbar;