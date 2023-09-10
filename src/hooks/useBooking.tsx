import { useMutation } from "react-query";
import { AxiosError } from 'axios'
import { FieldValues, UseFormReset } from "react-hook-form";
import { IFormInput } from "@/components/RegistrationForm/RegistrationForm";
import { PostNewBooking } from "@/api/booking";

export const useNewBooking = (reset: UseFormReset<any>) => {
  return useMutation(PostNewBooking,
      {
        onError: (error: AxiosError) => {
          console.error(error)
          error.message = "Failed to creata booking"
          // props?.onErrorCallback?.(error)          
        },
        onSuccess: () => {
          reset()
        }
      }
    )
}