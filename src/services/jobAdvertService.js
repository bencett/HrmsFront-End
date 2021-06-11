import axios from "axios";

export default class JobAdvertService {
  getActiveAdverts() {
    return axios.get(
      "http://localhost:8080/api/jobadverts/getAllActiveAdverts"
    );
  }

  getById(id) {
    return axios.get("http://localhost:8080/api/jobadverts/getbyid?id=" + id);
  }
}
