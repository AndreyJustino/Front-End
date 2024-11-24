import axios from 'axios';

const api = axios.create({
  baseURL: 'https://back-end-216p.onrender.com',
});


export default api;