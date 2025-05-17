import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo">BlogAprendizaje</Link>
        <button
          className={`navbar__toggle ${open ? 'is-open' : ''}`}
          aria-label="Menú"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
        <div className={`navbar__menu ${open ? 'is-open' : ''}`}>
          <Link to="/posts/technology" className="navbar__link">Tecnología</Link>
          <Link to="/posts/taller" className="navbar__link">Taller</Link>
          <Link to="/posts/practica-supervisada" className="navbar__link">Práctica Supervisada</Link>
          <Link to="/categories" className="navbar__link">Categorías</Link>
        </div>
      </div>
    </nav>
  );
};
