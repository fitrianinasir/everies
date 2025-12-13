import { TProduct, TProductReviewResponse } from "@/lib/model";
import { gateway } from "./api";
import { TResponse } from "./response";
import { AxiosError } from "axios";
import Cookies from "js-cookie";

export const getProducts = async () => {
  return gateway
    .get<TResponse<TProduct[]>>("/product/all", {
      headers: {
        token: Cookies.get("token") ?? "",
      },
    })
    .then((res) => res.data)
    .catch((err) => {
      if (err.status === 401) {
        window.location.href = "/auth";
      } else {
        return err;
      }
    });
};

export const getProductsWithDetail = async () => {
  return await gateway
    .get<TResponse<TProduct[]>>("/product/all-details", {
      headers: {
        token: Cookies.get("token") ?? "",
      },
    })
    .then((res) => res.data.data)
    .catch((err) => {
      if (err.status === 401) {
        window.location.href = "/auth";
      } else {
        return err;
      }
    });
};

export const getProductById = async (id: number) => {
  return gateway
    .get<TResponse<TProduct>>(`/product/${id}`, {
      headers: {
        token: Cookies.get("token") ?? "",
      },
    })
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
      `/product/${product_id}/reviews?page=${page}`,
      {
        headers: {
          token: Cookies.get("token") ?? "",
        },
      }
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => err);
};
