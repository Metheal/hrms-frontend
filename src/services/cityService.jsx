import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export default class Citieservice {
  getCities() {
    return axios.get(API_URL + "/cities/getAll");
  }
  getCity(id) {
    return axios.get(API_URL + "/cities/getById?id=" + id);
  }
  add(city) {
    return axios.post(API_URL + "/cities/add", city);
  }
}
