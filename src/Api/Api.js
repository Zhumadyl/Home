import axios from "axios";

const api = axios.create({
    baseURL: 'https://652d6a8bf9afa8ef4b276a1e.mockapi.io/Home'
})

const Api = {
    getTranslate: () => api.get()
}   
export default Api