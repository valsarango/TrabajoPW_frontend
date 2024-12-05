import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar/TopBar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import Productos from './pages/Productos/Productos.jsx';
import DetalleProducto from './pages/DetalleProducto/DetalleProducto.jsx';
import CarritoCompras from './pages/CarritoCompras/CarritoCompras.jsx';
import Login from './pages/LogIn/LogIn.jsx';
import Signup from './pages/SignUp/SignUp.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/products/:id" element={<DetalleProducto />} />
        <Route path="/cart" element={<CarritoCompras />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
