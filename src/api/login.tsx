import { LoginData } from "@/models/login";
import axios from "axios";

export const loginUser = (loginData: LoginData) => {
  const  credentials = btoa(`${loginData.username}:${loginData.password}`);
  const headers = {'Authorization': `Basic ${credentials}`}
  return axios.post('http://localhost:8080/api/auth/signin', loginData, {headers})
}