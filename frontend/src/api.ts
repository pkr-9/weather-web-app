import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE || "http://localhost:8000/api",
});

export const getWeather = (city: string) => api.get(`/weather/${city}`).then(res => res.data);
