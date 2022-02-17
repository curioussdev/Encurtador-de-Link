import axios from 'axios';

export const key = "4f915ba59a9d50384c633ee773481f9758b41ef9";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api;