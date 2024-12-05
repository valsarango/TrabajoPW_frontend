import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productos from '../../api/productos';
import './DetalleProducto.css';

const DetalleProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const productoEncontrado = await productos.findById(id);
        setProducto(productoEncontrado);
      } catch (err) {
        setError('Error al cargar el producto');
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducto();
  }, [id]);

  if (isLoading) return <div>Cargando producto...</div>;
  if (error) return <div>{error}</div>;
  if (!producto) return <div>Producto no encontrado</div>;

  return (
    <div className="div-productos">
        <a href="/" title='Volver a Inicio'>Inicio</a>
        <span className="divider" aria-hidden="true">|</span>
        <a href="/Productos" title="Ir a productos">Productos</a>
        <span className="divider" aria-hidden="true">|</span>
        <span>Detalles de Producto</span>
        <hr />
    <div className="detalle-producto">
        <h1>{producto.nombre}</h1>
        <img src={producto.imagen || 'https://via.placeholder.com/150'} alt={producto.nombre} />
        <p className="precio">S/ {producto.precio}</p>
        <p>{producto.descripcion}</p>
        <button className="btn-agregar" title='Agregar al carrito'>Agregar al carrito</button>        
    </div>
    </div>
  );
};

export default DetalleProducto;
