export type TResponse<T> = {
  status: number;
  message: string;
  data: T;
};

export type TUserToken = {
  role: string;
  token: string;
};
