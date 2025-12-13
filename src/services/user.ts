import { gateway } from "./api";
import { TLoginUser, TRegisterUser } from "./request";
import { TResponse, TUserToken } from "./response";

export async function registerUser(data: TRegisterUser) {
  return gateway
    .post<TResponse<TRegisterUser>>("/auth/register", data)
    .then((res) => res.data)
    .catch((err) => err);
}

export async function loginUser(data: TLoginUser) {
  return gateway
    .post<TResponse<TUserToken>>("/auth/login", data)
    .then((res) => res.data)
    .catch((err) => err);
}
