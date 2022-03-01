import axios from 'axios';

export const BASE_URL = 'http://172.20.10.3:8082/admin';
const api = axios.create({ baseURL: BASE_URL });

api.interceptors.request.use(
    async config => {
        const value = localStorage.getItem('auth');
        config.headers = {
            'Authorization': `Bearer ${value}`,
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        return config;
    },
    error => {
        Promise.reject(error)
});

api.interceptors.response.use((response) => {
    return response
}, async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 403 && !originalRequest._retry) {
        localStorage.setItem('auth', '');
        window.location.reload();
    }
    return Promise.reject(error);
});

export default api;