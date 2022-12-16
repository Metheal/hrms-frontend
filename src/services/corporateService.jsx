import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export default class Corporateservice {
  getCorporates() {
    return axios.get(API_URL + "/corporates/getAll");
  }
  getCorporate(id) {
    return axios.get(API_URL + "/corporates/getById?id=" + id);
  }
  add(corporate) {
    return axios.post(API_URL + "/corporates/add", corporate);
  }
}
