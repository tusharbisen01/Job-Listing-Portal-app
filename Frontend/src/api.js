import axios from "axios";

export default axios.create({
  baseURL: "http://YOUR_EC2_IP/api"
});
