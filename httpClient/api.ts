import axios from "axios";
import config from "../config";

const httpRequest = axios.create({
    baseURL: config.API_URL,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }, 
});

export default httpRequest;