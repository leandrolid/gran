import axios from 'axios';

const api = axios.create({
  baseURL: 'https://610d719e48beae001747b860.mockapi.io/api/v0'
})

export default api;