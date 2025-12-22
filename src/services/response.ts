import { TProduct } from "@/lib/model";

export type TResponse<T> = {
  status: number;
  message: string;
  data: T;
};

export type TUserToken = {
  role: string;
  token: string;
};

export type THomeProducts = {
  clothes: TProduct[];
  jewellery: TProduct[];
  bags: TProduct[];
  shoes: TProduct[];
};
