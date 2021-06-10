import axios from "axios";

export default class JobAdvertService{
    getActiveAdverts(){
        return axios.get("http://localhost:8080/api/jobadverts/getAllActiveAdverts")
    }
}