import { useMutation } from "react-query";
import { AxiosError } from 'axios'
import { registerUser } from "@/api/registration";
import { FieldValues, UseFormReset } from "react-hook-form";
import { IFormInput } from "@/components/RegistrationForm/RegistrationForm";

export const useRegistration = (reset: UseFormReset<IFormInput>) => {
  return useMutation(registerUser,
      {
        onError: (error: AxiosError) => {
          console.error(error)
          error.message = "Failed to register user"
          // props?.onErrorCallback?.(error)          
        },
        onSuccess: () => {
          reset()
        }
      }
    )
}