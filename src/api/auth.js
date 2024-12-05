import base from './base.js';

const endpoint = 'auth/InicioSesion';

const login = async (payload) => await base.post(endpoint, payload);

const api = { login };

export default api;
