import React, { useEffect, useState } from 'react';
import productos from '../../api/productos';
import TarjetaProducto from '../../components/TarjetaProducto/TarjetaProducto';
import Main from './Main';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleVerDetalles = (producto) => {
    navigate(`/products/${producto.id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await productos.findAll();
        setFeaturedProducts(data);
      } catch (err) {
        setError('Error al cargar los productos');
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) return <div>Cargando productos...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="home">
      <Main />
      <hr />
      <div className='products-header'>
        <h2>Funko Pops! en Stock</h2>
        </div>
      <div className="products-container">
        {featuredProducts.map((producto) => (
          <TarjetaProducto
            key={producto.id}
            producto={producto}
            onVerDetalles={handleVerDetalles}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
