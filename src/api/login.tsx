import { LoginData } from "@/models/login";
import axios from "axios";

export const loginUser = (loginData: LoginData) => {
  const  credentials = btoa(`${loginData.username}:${loginData.password}`);
  const headers = {'Authorization': `Basic ${credentials}`}
  return axios.post(`http://${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/api/auth/signin`, loginData, {headers})
}