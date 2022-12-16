import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export default class ApplicantService {
  getApplicants() {
    return axios.get(API_URL + "/applicants/getAll");
  }
  getApplicant(id) {
    return axios.get(API_URL + "/applicants/getById?id=" + id);
  }
  add(applicant, picture) {
    return axios.post(API_URL + "/applicants/add", [applicant, picture]);
  }
}
