import { useMutation } from "react-query";
import { loginUser } from "@/api/login";

export const useLogin = () => {
  return useMutation(loginUser,
      {
        onError: (error) => {
          console.log(error)
        },
      }
    )
}
