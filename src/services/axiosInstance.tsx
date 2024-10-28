import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://192.168.223.187:3000',
    responseType: 'json',
    responseEncoding: 'utf8',
    timeout: 5000,
    validateStatus: function (status) {
        return true;
    }
});

export default axiosInstance;