import axios from "axios";
import url from "./url";
async function getWeather(name) {
  const res = await axios.get(url + "/" + name);
  return res.data;
}
const Services = { getWeather };
export default Services;
