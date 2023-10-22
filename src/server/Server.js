import axios from "axios";
import { BASE_URL } from "./Constants";

const server = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

export default server;
