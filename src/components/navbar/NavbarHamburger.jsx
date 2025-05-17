import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Utiliza Link para navegar
import '../styles/navbarHamburger.css';

function NavbarHamburger() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">Blog de Aprendizaje</Link>
        <div className="hamburger-icon" onClick={toggleMenu}>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="menu">
          <Link to="/" className="menu-link" onClick={toggleMenu}>Inicio</Link>
          <Link to="/posts/technology" className="menu-link" onClick={toggleMenu}>Tecnología</Link>
          <Link to="/posts/taller" className="menu-link" onClick={toggleMenu}>Taller</Link>
          <Link to="/posts/practica-supervisada" className="menu-link" onClick={toggleMenu}>Práctica Supervisada</Link>
          <Link to="/login" className="menu-link" onClick={toggleMenu}>Iniciar Sesión</Link>
          <Link to="/register" className="menu-link" onClick={toggleMenu}>Registrar</Link>
        </div>
      )}
    </nav>
  );
}

export default NavbarHamburger;
