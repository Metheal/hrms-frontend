import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export default class jobPostingService {
  getJobPostings() {
    return axios.get(API_URL + "/jobPostings/getAll");
  }
  getJobPosting(id) {
    return axios.get(API_URL + "/jobPostings/getById?id=" + id);
  }
  add(jobPosting) {
    return axios.post(API_URL + "/jobPostings/add", jobPosting);
  }
}
