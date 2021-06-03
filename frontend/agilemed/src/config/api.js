import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:49156/api/'
});

export default api;