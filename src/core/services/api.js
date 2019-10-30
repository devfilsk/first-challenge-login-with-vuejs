import axios from 'axios';

const api = axios.create({
    baseURL: "https://validacao.api.validacao.appfacilita.com/api/v1/",
    gs_api_token: "22a3803365a55b197a3b43bc64aacc11"
})

export default api;