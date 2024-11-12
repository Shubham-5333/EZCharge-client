// src/api/api.js (or api.ts if using TypeScript)
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Replace with your server’s base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
