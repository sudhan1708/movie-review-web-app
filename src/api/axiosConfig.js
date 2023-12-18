import axios from "axios";

const api = axios.create({
  baseURL: "https://9a0b-106-51-253-114.ngrok-free.app",
  headers: { "ngrok-skip-browser-warning": "true" },
});

export default api;
