import Axios from "axios";

const Instance = Axios.create({
  baseURL: "http://api.openweathermap.org/",
  timeout: 1000,
  headers: { Accept: "application/json, text/plain, */*" },
});

export default Instance;
