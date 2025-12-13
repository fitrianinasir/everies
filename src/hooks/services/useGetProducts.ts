import {
  getProductById,
  getProducts,
  getProductsWithDetail,
} from "@/services/product";
import { useQuery } from "@tanstack/react-query";
import { TProduct } from "@/lib/model";
import { TResponse } from "@/services/response";

export const useGetProducts = () => {
  return useQuery<TResponse<TProduct[]>, Error>({
    queryKey: ["products"],
    queryFn: () => getProducts(),
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
