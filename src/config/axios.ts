import axios from 'axios';
import { BASE_URL } from '../../config';

export const Axios = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  withCredentials: true,
});
