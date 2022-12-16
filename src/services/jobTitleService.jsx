import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export default class jobTitleService {
  getJobTitles() {
    return axios.get(API_URL + "/jobTitles/getAll");
  }
  getJobTitle(id) {
    return axios.get(API_URL + "/jobTitles/getById?id=" + id);
  }
  add(jobTitle) {
    return axios.post(API_URL + "/jobTitles/add", jobTitle);
  }
}
