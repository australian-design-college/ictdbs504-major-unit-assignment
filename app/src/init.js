import axios from "axios";

axios.defaults.baseURL = "http://localhost:2000/v1/";
axios.defaults.withCredentials = true;
axios.defaults.headers.post["Content-Type"] = "application/json";
