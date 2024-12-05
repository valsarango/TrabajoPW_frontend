import React from 'react';
import '../TopBar/Nav.css';

const navItems = [
  { 
    text: 'TODO', 
    imgSrc: 'src/assets/img/urano.png',
    submenu: [
      { text: 'Todos los Productos', link: '/Productos' }, 
      { text: 'Todo en STOCK' },
      { text: 'Todo en PRE-VENTA' },
      { text: 'Próximamente' },
      { text: 'Liquidación' }
    ] 
  },
  { 
    text: 'POPS!', 
    imgSrc: 'src/assets/img/robotica.png',
    submenu: [
      { text: 'Stock' },
      { text: 'Pre-venta' },
      { text: 'Colecciones' }
    ] 
  },
  { 
    text: 'LLAVEROS', 
    imgSrc: 'src/assets/img/llavero.png',
    submenu: [
      { text: 'Llaveros de Peluche' },
      { text: 'Llaveros Metálicos' },
      { text: 'Llaveros Temáticos' }
    ] 
  },
  { 
    text: 'BITY POP', 
    imgSrc: 'src/assets/img/dinosaurio.png',
    submenu: [
      { text: 'Tamaño Pequeño' },
      { text: 'Ediciones Especiales' },
      { text: 'Series Limitadas' }
    ] 
  },
  { 
    text: 'BOX & PLUSH', 
    imgSrc: 'src/assets/img/paquete.png'
  },
  { 
    text: 'COVER & ALBUMS', 
    imgSrc: 'src/assets/img/idea.png'
  },
  { 
    text: 'MÁS', 
    imgSrc: 'src/assets/img/signo-de-mas.png',
    submenu: [
      { text: 'Accesorios' },
      { text: 'Nuevas Colecciones' },
      { text: 'Ofertas' }
    ]
  }
];

function Nav() {
  return (
    <div>
      <nav className="nav">
        <div className='nav-container'>
          <ul className="nav-links">
            {navItems.map((item, index) => (
              <li key={index} className="nav-item">
                <img src={item.imgSrc} alt={`Icono de ${item.text}`} className="nav-item-icon" />
                <span>{item.text}</span>
                {item.submenu && (
                  <ul className="nav-submenu">
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex} className="nav-submenu-item">
                        {subItem.link ? (
                          <a href={subItem.link}>{subItem.text}</a>
                        ) : (
                          subItem.text
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;