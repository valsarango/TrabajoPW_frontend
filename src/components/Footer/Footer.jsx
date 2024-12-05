import React from 'react';
import '../Footer/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Sobre Nosotros</h4>
          <ul>
            <li><a href="/Historia">Historia</a></li>
            <li><a href="/Points">Sistema de Puntos</a></li>
            <li><a href="/Blog">Blog</a></li>
            <li><a href="/ContactUs">Contáctanos</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Políticas</h4>
          <ul>
            <li><a href="">Políticas de envío</a></li>
            <li><a href="/PoliticasPre">Políticas de Pre-Orden</a></li>
            <li><a href="/PoliticasDevolucion">Políticas de Devolución</a></li>
            <li><a href="/Terms">Términos del Servicio</a></li>
            <li><a href="/PoliticasDev">Políticas de Devolución</a></li>
            <li><a href="/Subastas">Subastas</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><a href="/ventaMayor">Venta al por Mayor</a></li>
            <li><a href="/beneficios">Beneficios Funker</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Síguenos</h4>
          <div className="social-icons">
          <a href="https://www.x.com/Funkospacepe" target="_blank" rel="noopener noreferrer">
              <img src="src/assets/img/twitter.png" alt="Pinterest" />
            </a>
            <a href="https://www.facebook.com/funkospace" target="_blank" rel="noopener noreferrer">
              <img src="src/assets/img/facebook.png" alt="Facebook" />
            </a>
            <a href="https://www.pinterest.com/Funkospace/" target="_blank" rel="noopener noreferrer">
              <img src="src/assets/img/pinterest.png" alt="Pinterest" />
            </a>
            <a href="https://www.instagram.com/funkospace.pe/" target="_blank" rel="noopener noreferrer">
              <img src="src/assets/img/instagram.png" alt="Instagram" />
            </a>
            <a href="https://www.youtube.com/channel/UCkc0lJWaRSzdecaFHp-Wj4Q" target="_blank" rel="noopener noreferrer">
              <img src="src/assets/img/youtube.png" alt="Pinterest" />
            </a>
          </div>
        </div>
      </div>
      
      <hr className="footer-separator" />

      <div className="footer-bottom">
        <p>© 2024 <a href="/">Funkospace</a></p>
      </div>
    </footer>
  );
}

export default Footer;