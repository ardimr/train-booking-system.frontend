import { useQuery, useMutation } from "react-query";
import axios from 'axios'

export interface LoginData {
  username: string
  password: string
}

export const loginUser = (loginData: LoginData) => {
  const  credentials = btoa(`${loginData.username}:${loginData.password}`);
  const headers = {'Authorization': `Basic ${credentials}`}
  return axios.post('http://localhost:8080/api/auth/signin', loginData, {headers})
}

export const useLogin = () => {
  return useMutation(loginUser,
      {
        onError: (error) => {
          console.log(error)
        },
      }
    )
}

// const loginFetcher = async (formData: IFormInput) => {
//   const  credentials = btoa(`${formData.username}:${formData.password}`);
//   const res = await fetch(
//     `http://localhost:8080/api/auth/signin`, {
//       method: 'POST',
//       body: JSON.stringify(formData),
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Basic ${credentials}`,
//       },
//     }
//   )
//   return res.json()
// }