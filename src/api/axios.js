import axios from "axios";

const instacia = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

export default instacia;
