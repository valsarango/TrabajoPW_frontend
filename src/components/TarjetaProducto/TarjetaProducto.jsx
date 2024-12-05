import React from 'react';
import './TarjetaProducto.css';

const TarjetaProducto = ({ producto, onVerDetalles }) => {
  if (!producto) return null;

  return (
    <div className="product-card">
      <img
        src={producto.imagen || 'https://via.placeholder.com/150'}
        alt={producto.nombre}
        className="product-card-image"
      />
      <div className="product-card-details">
        <h3>{producto.nombre}</h3>
        <p>Precio: ${producto.precio}</p>
        <button onClick={() => onVerDetalles(producto)} className="product-card-button" title='Ver Detalles'>
          Ver Detalles
        </button>
      </div>
    </div>
  );
};

export default TarjetaProducto;
