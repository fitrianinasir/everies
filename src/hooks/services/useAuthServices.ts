import { TLoginUser, TRegisterUser } from "@/services/request";
import { TResponse, TUserToken } from "@/services/response";
import { loginUser, registerUser } from "@/services/user";
import { useMutation } from "@tanstack/react-query";

export const useRegisterUser = () => {
  return useMutation<TResponse<TRegisterUser>, Error, TRegisterUser>({
    mutationFn: (data: TRegisterUser) => registerUser(data),
  });
};

export const useLoginUser = () => {
  return useMutation<TResponse<TUserToken>, Error, TLoginUser>({
    mutationFn: (data: TLoginUser) => loginUser(data),
  });
};
