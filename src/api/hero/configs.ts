import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.mobilelegends.com/m/hero',
});

export default API;