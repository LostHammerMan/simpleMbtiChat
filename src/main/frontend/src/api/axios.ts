import axios from "axios";

const instance = axios.create({
    baseURL: '/api',
    timeout: 5000,
    headers: {
        'content-Type': 'application/json',
    },
});

export default instance;