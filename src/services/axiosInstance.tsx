import { BASE_URL } from '@/constants/ENV';
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    responseType: 'json',
    responseEncoding: 'utf8',
    timeout: 5000,
    validateStatus: function (status) {
        return true;
    }
});

export default axiosInstance;