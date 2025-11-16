import { TProduct, TProductReviewResponse } from "@/lib/model";
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

export const getProductReviews = async ({
  product_id,
  page,
}: {
  product_id: number;
  page: number;
}) => {
  return gateway
    .get<TResponse<TProductReviewResponse>>(
      `/product/${product_id}/reviews?page=${page}`
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => err);
};
