import React, { useState } from 'react';
import api from '../../api/signup'; 
import '../SignUp/SignUp.css';
import { Modal, Box, Typography, Button } from '@mui/material';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [open, setOpen] = useState(false);
  const [mensaje, setMensaje] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    const payload = {
      correo: email,
      password, 
      nombre, 
      apellido, 
    };

    try {
      console.log('Enviando payload:', payload);
      const response = await api.register(payload);
      console.log('Respuesta del backend:', response);

      setMensaje('Usuario registrado correctamente.');
      setOpen(true);
    } catch (error) {
      console.error('Error en el registro:', error);

      if (error.response && error.response.data) {
        setMensaje(`Error: ${error.response.data.message}`);
      } else {
        setMensaje('Hubo un problema al registrar el usuario. Intenta nuevamente.');
      }
      setOpen(true);
    }
  };

  const handleClose = () => setOpen(false);

  return (
    <div className="signup">
      <h1>Crear Cuenta</h1>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          required
        />
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
        <button type="submit">Crear</button>
        <p className="signup-text">
          o <a href="/" className="mainpage">Volver a la tienda</a>
        </p>
      </form>

      <Modal open={open} onClose={handleClose}>
        <Box 
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" component="h2">
            {mensaje}
          </Typography>
          <Button onClick={handleClose} sx={{ mt: 2 }}>Aceptar</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Signup;