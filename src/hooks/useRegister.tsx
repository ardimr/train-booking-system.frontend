import { useMutation } from "react-query";
import { AxiosError } from 'axios'
import { registerUser } from "@/api/registration";

export const useRegistration = () => {
  return useMutation(registerUser,
      {
        onError: (error: AxiosError) => {
          console.error(error)
          error.message = "Failed to register user"
          // props?.onErrorCallback?.(error)          
        },
      }
    )
}