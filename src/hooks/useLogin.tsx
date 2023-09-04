import { useMutation } from "react-query";
import { loginUser } from "@/api/login";
import { UseFormReset, UseFormSetError } from "react-hook-form";
import { AxiosError } from "axios";

export const useLogin = (reset: UseFormReset<any>) => {
  return useMutation(loginUser,
      {
        onError: (error:AxiosError) => {
          if (error.response?.status == 401) {
            error.message = "Username or password is incorrect"
          } else {
            error.message = "Internal Server Error"
          }
        },
        onSuccess: () => {
          reset()
        }
      }
    )
}
