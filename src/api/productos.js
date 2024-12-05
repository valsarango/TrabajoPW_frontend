import base from './base.js'

const endpoint = 'Productos'

const findAll = async () => await base.get(endpoint)

const create = async (payload) => await base.post(endpoint, payload)

const update = async (payload) => await base.put(endpoint, payload)

const remove = async (id) => await base.remove(`${endpoint}/${id}`)

const findById = async (id) => await base.get(`${endpoint}/${id}`);

const api = { findAll, create, update, remove, findById };

export default api;