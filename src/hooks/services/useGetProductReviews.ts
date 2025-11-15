import {
  getProductById,
  getProductReviews,
  getProducts,
} from "@/services/product";
import { useQuery } from "@tanstack/react-query";
import { TProductReviewResponse } from "@/lib/model";
import { TResponse } from "@/services/response";

export const initResponseReviews: TProductReviewResponse = {
  page: 0,
  avg_rate: 0,
  total_page: 0,
  total_reviews: 0,
  reviews: [],
};

type useGetProductReviewsProps = {
  productId: number;
  page: number;
};

export const useGetProductReviews = ({
  productId,
  page,
}: useGetProductReviewsProps) => {
  return useQuery<TResponse<TProductReviewResponse>, Error>({
    queryKey: ["product_reviews"],
    queryFn: () =>
      getProductReviews({
        productId,
        page,
      }),
  });
};
