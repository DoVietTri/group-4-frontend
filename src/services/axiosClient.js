import axios from 'axios';
import getCookie from './../helpers/getCookie';
import { BASE_API_URL } from '../constants/config';
import history from '../history';

const axiosClient = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
    "Authorization": 'Bearer ' + getCookie('token')
  }
});

axiosClient.interceptors.request.use(async (config) => {
  config.headers['Authorization'] = 'Bearer ' + getCookie('token');

  return await config;
});

axiosClient.interceptors.response.use((response) => {
  return response;
}, (error) => {
  if (error.response.status === 401) {
    document.cookie = `token=;path=/`;
    history.push('/login');
  }
  return Promise.reject(error);
});

export default axiosClient;
