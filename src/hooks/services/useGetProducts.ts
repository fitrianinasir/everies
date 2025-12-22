import {
  getProductById,
  getProducts,
  getProductsWithDetail,
  TGetProductsParams,
} from "@/services/product";
import { useQuery } from "@tanstack/react-query";
import { TProduct } from "@/lib/model";
import { THomeProducts, TResponse } from "@/services/response";

export const useGetProducts = <T>(params: TGetProductsParams) => {
  return useQuery<TResponse<T>, Error>({
    queryKey: ["products", params.newArrivals],
    queryFn: () => getProducts(params),
  });
};

export const useGetProductsWithDetail = () => {
  return useQuery<TResponse<TProduct[]>, Error>({
    queryKey: ["products-detail"],
    queryFn: () => getProductsWithDetail(),
  });
};

export const useGetProductById = (id: number) => {
  return useQuery<TResponse<TProduct>, Error>({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
  });
};
