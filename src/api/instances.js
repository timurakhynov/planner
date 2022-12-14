import axios from "axios";
import { plannerApiUrl } from "./apiUrl";

export const plannerInstace = axios.create({
    baseURL: plannerApiUrl
})