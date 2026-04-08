import axios from "axios";

const API = axios.create({
  baseURL: "http:3.24.212.117//:5000/api"
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = token;
  return req;
});

export default API;
