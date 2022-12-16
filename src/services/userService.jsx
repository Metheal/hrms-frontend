import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export default class Userservice {
  getUsers() {
    return axios.get(API_URL + "/users/getAll");
  }
  getUsers(id) {
    return axios.get(API_URL + "/users/getById?id=" + id);
  }
  add(user) {
    return axios.post(API_URL + "/users/add", user);
  }
}
