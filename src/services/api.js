import axios from "axios";

const api = axios.create({
  baseURL: "https://itinerario-cotia.herokuapp.com"
});

export default api;
