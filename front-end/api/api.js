import axios from "axios";

 const api = axios.create({
    baseURL:'http://192.168.15.6:5000',
    timeout: 3000,
    headers:{'X-Custom-Header': 'foobar'}
})

export default api