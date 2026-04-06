import axios from "axios";

const API = axios.create({
  baseURL: "http://3.26.0.147:5000"
});

export default API;
