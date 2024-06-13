import { API_URL } from '@env';
import axios from 'axios';

const client = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  maxRedirects: 10,
});

export default client;
