import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export default class ApplicantService {
  getResumes() {
    return axios.get(API_URL + "/resumes/getAll");
  }
  getResume(id) {
    return axios.get(API_URL + "/resumes/getById?id=" + id);
  }
  getResumesByApplicantId(id) {
    return axios.get(API_URL + "/resumes/getAllByApplicant_Id?id=" + id);
  }
  add(resume) {
    return axios.post(API_URL + "resumes/add", resume);
  }
}
