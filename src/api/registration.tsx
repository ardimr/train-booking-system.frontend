import { RegistrationData } from "@/models/registration"
import axios from "axios"

// const headers = {'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTI2MzEzMDgsImlzcyI6Ik1ZX0FQUExJQ0FUSU9OIiwiVXNlcm5hbWUiOiJzaGlmYXZlcm8iLCJFbWFpbCI6InNoaWZhQGdtYWlsLmNvbSJ9.w6myFx3aJVUd2qU2IjgKRVplI243G6vnA6sjTiP2FxA'}
export const registerUser = (registrationData: RegistrationData) => {
  return axios.post('http://localhost:8080/api/auth/signup', registrationData)
}