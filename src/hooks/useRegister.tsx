import { useQuery, useMutation } from "react-query";
import axios, { AxiosError } from 'axios'

export interface RegistrationData {
  name: string
  username: string
  password: string
  email: string
}

const headers = {'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTI2MzEzMDgsImlzcyI6Ik1ZX0FQUExJQ0FUSU9OIiwiVXNlcm5hbWUiOiJzaGlmYXZlcm8iLCJFbWFpbCI6InNoaWZhQGdtYWlsLmNvbSJ9.w6myFx3aJVUd2qU2IjgKRVplI243G6vnA6sjTiP2FxA'}
export const registerUser = (registrationData: RegistrationData) => {
  return axios.post('http://localhost:8080/api/user-management/users', registrationData, {headers})
}

// interface useRegistrationProps {
//   onErrorCallback?: (error: AxiosError) => void | undefined;
// }

export const useRegistration = () => {
  return useMutation(registerUser,
      {
        onError: (error: AxiosError) => {
          console.error(error)
          // props?.onErrorCallback?.(error)          
        },
      }
    )
}