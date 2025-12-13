export type TResponse<T> = {
  status: number;
  data: T;
};

export type TUserToken = {
  role: string;
  token: string;
};
