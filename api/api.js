import axios from 'axios';

// Axios instance with base URL
const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/mobile', // replace with your real backend URL
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// Optional: Add token to all requests
apiClient.interceptors.request.use(async config => {
  // Example: Get token from storage if needed
  // const token = await AsyncStorage.getItem('token');
  const token = null;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


export const visit = () => apiClient.post('/visit');

export const homeRoute = () => apiClient.get('/home');

export const watchRoute = () => apiClient.get('/watch');

export const typesRoute = () => apiClient.get('/types');

export const docsRoute = () => apiClient.get('/docs');

export const toolImages = (data) => apiClient.get('/tool-images' , data);


