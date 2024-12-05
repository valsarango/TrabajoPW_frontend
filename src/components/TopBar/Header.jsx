import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../TopBar/Header.css';

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

  // Navegación hacia el inicio de sesión
  const handleLogin = () => {
    navigate('/login');
  };

  // Navegación hacia crear cuenta
  const handleSignup = () => {
    navigate('/signup');
  };

  // Navegación hacia el carrito de compras
  const handleCart = () => {
    navigate('/cart');
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <button onClick={() => navigate('/')} className="logo-button" title="Inicio">
            <img src="src/assets/img/Logo FunkoSpace.JPG" alt="Logo" />
          </button>
        </div>
        <div className="header-options">
          <div className="site-header-text">
            <span className="site-header-links">
              <span onClick={handleLogin} className="header-link" title="Inicio Sesion">Iniciar Sesión</span>
              <span className="site-header-spacer">o</span>
              <span onClick={handleSignup} className="header-link" title="Crear Cuenta">Crear una cuenta</span>
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
              <img src="src/assets/img/buscador.png" alt="Buscar" />
            </button>
            <button className="cart-button" onClick={handleCart}>
              <img src="src/assets/img/carrito de compras.png" alt="Carrito" />
              <span>CARRITO</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;