import { TProduct } from "@/lib/model";
import { gateway } from "./api";
import { TResponse } from "./response";

export const getProducts = async (): Promise<TResponse<TProduct[]>> => {
  const res = await gateway.get<TResponse<TProduct[]>>("/product/all");
  return res.data;
};

export const getProductById = async (id: number) => {
  return gateway
    .get<TResponse<TProduct>>(`/product/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => err);
};
