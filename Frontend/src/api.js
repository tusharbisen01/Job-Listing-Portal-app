import axios from "axios";

const API = axios.create({
  baseURL: "http://54.206.92.43:5000/api"
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = token;
  return req;
});

export default API;
