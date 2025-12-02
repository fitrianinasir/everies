export type TResponse<T> = {
  status: number;
  data: T;
};

export type TUserToken = {
  token: string;
};
