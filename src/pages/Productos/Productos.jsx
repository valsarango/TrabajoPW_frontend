// Productos.jsx
import React, { useEffect, useState } from 'react';
import productos from '../../api/productos';
import TarjetaProducto from '../../components/TarjetaProducto/TarjetaProducto';
import { useNavigate, useLocation } from 'react-router-dom';
import './Productos.css';

const Productos = () => {
  const [productList, setProductList] = useState([]);
  const navigate = useNavigate(); 
  const location = useLocation(); // Obtener la ubicación actual para los parámetros de búsqueda

  // Extrae el término de búsqueda de la URL
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('search') || '';

  const handleVerDetalles = (producto) => {
    navigate(`/products/${producto.id}`);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      let data = await productos.findAll();

      // Si hay un término de búsqueda, filtra los productos
      if (searchTerm) {
        data = data.filter((producto) =>
          producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      setProductList(data);
    };

    fetchProducts();
  }, [searchTerm]); // Actualiza la lista cuando cambie el término de búsqueda

  return (
    <div className="productos">
      <nav className="nav-inicio">
        <a href="/" title="Volver al Inicio">Inicio</a>
        <span className="divider" aria-hidden="true">|</span>
        <span>Productos</span>
      </nav>
      <hr />
      <div className='products-header'>
        <h2>Todos los Funko Pops!</h2>
      </div>
      <div className="products-container">
        {productList.length > 0 ? (
          productList.map((producto) => (
            <TarjetaProducto key={producto.id} producto={producto} onVerDetalles={handleVerDetalles} />
          ))
        ) : (
        <>
        <br />
          <p className='producto-no-encontrado'>No se encontraron productos que coincidan con "{searchTerm}".</p>
        <br />
        </>
        )}
      </div>
    </div>
  );
};

export default Productos;