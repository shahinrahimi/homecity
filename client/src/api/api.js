import axios from "axios";

const URL = process.env.NODE_ENV === "production" ? "/api" : "http://localhost:5000/api"

const api = axios.create({
    withCredentials: true,
    baseURL: URL,
})

export default api

