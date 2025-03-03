import axios from 'axios';
import { constants } from '../constants/constant';

const instance = axios.create({
    baseURL: constants.backendurl,
    withCredentials: true
});

instance.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response && error.response.status === 401) {
            console.log("Unauthenticated, logging out ...");
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);

export default instance;
