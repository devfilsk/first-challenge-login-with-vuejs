import axios from 'axios';

const api = axios.create({
    baseURL: "https://validacao.api.validacao.appfacilita.com/api/v1/",
    token_api: ""
})

export default api;