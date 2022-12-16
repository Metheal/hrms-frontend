import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export default class Skillservice {
  getSkills() {
    return axios.get(API_URL + "/skills/getAll");
  }
  getSkills(id) {
    return axios.get(API_URL + "/skills/getById?id=" + id);
  }
  add(skill) {
    return axios.post(API_URL + "/skills/add", skill);
  }
}
