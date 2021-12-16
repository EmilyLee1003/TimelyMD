import Axios from "axios";

const Instance = Axios.create({
  baseURL: "http://openweathermap.org/img/wn/",
  timeout: 1000,
  headers: { Accept: "application/json, text/plain, */*" },
});

export default Instance;
