import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5173",
});

// //responce if maybe 401 || 403
// api.interceptors.request.use((config) => {});
// api.interceptors.request.use((config) => {});
