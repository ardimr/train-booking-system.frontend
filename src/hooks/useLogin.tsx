import { useMutation } from "react-query";
import { loginUser } from "@/api/login";
import { UseFormReset, UseFormSetError } from "react-hook-form";
import { AxiosError, AxiosResponse } from "axios";
import { string } from "zod";


type loginResponse = {
  access_token :string
  refresh_token: string
}
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
        onSuccess: (data: AxiosResponse) => {
          sessionStorage.setItem('token', data.data.access_token)
          reset()
        }
      }
    )
}
