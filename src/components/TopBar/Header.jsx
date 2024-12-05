import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../TopBar/Header.css';

import buscadorIcon from '../../assets/img/buscador.png';

function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // Cambio en el input de búsqueda
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Clic en el botón de lupa para buscar producto
  const handleSearchSubmit = () => {
    if (searchTerm.trim() !== '') {
      // Redirige a la página de resultados de búsqueda
      navigate(`/productos?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <a href="/" title='Inicio'>
          <img src={logo} alt="Logo" />
          </a>
        </div>
        <div className="header-options">
          <div className='site-header-text'>
            <span className='site-header-links'>
              <a href="/login" className="header-link" title='Inicio Sesion'>Iniciar Sesión</a>
              <span className='site-header-spacer'>o</span>
              <a href="/signup" className="header-link" title='Crear Cuenta'>Crear una cuenta</a>
            </span>
          </div>
          <div className="header-search">
            <input
              type="text"
              placeholder="Buscar en todos los productos..."
              className="search-input"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className="search-button" onClick={handleSearchSubmit}>
              <img src={buscadorIcon} alt="Buscar" />
            </button>
            <button className="cart-button">
              <img src={carritoIcon} alt="Carrito" />
              <a href="/cart" title='Carrito de Compras'>CARRITO</a>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;