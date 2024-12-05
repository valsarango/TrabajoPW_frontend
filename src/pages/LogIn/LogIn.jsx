import React, { useState } from 'react';
import api from '../../api/auth'
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.login({ email, password });
      console.log('Usuario logueado:', response);
    } catch (error) {
      console.error('Error en el login:', error);
    }
  };

  return (
    <div className="login">
      <h1>Ingresar</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Correo Electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <p className="login-text">¿Olvidó su contraseña?</p>
        <button type="submit">Iniciar Sesión</button>
        <p className="login-text">o <a href="/" className="mainpage">Volver a la tienda</a></p>
      </form>
    </div>
  );
};

export default Login;