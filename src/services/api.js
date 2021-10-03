import axios from "axios";

const api = axios.create({
    /* baseURL: process.env.REACT_APP_API */
    baseURL: 'https://first-api-rafael.herokuapp.com'
})



export default api