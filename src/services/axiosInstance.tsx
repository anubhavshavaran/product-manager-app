import axios from 'axios';
import { getToken } from '../hooks/useToken';

let token;
getToken().then((t) => {
    token = t;
});

const axiosInstance = axios.create({
    baseURL: 'http://192.168.223.187:3000',
    responseType: 'json',
    responseEncoding: 'utf8',
    timeout: 5000,
    validateStatus: function (status) {
        return true;
    },
    headers: {
        Authorization: `Bearer ${token}`
    }
});

export default axiosInstance;