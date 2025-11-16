import { TOrderData, TProduct, TUserCart } from "@/lib/model";
import { gateway } from "./api";
import { TResponse } from "./response";

export const createUserCart = async (data: TUserCart) => {
  return gateway
    .post<TResponse<TUserCart>>("/user/cart", data)
    .then((res) => res.data)
    .catch((err) => err);
};

export type UserCartResponse = { id: number } & TUserCart & {
    product: TProduct;
  };
export const getUserCart = async (id: number) => {
  return gateway
    .get<TResponse<UserCartResponse[]>>(`/user/cart/${id}`)
    .then((res) => res.data)
    .catch((err) => err);
};

export type PlaceOrderResponse = { id: number } & TOrderData;
export const placeOrder = async (data: TOrderData) => {
  return gateway
    .post<TResponse<PlaceOrderResponse>>("/payment", data)
    .then((res) => res.data)
    .catch((err) => err);
};

export type OrderStatusResponse = {
  id: number;
  status: string;
  payment_type: string;
  total_payment: number;
};
export const getOrderStatus = async (id: number) => {
  return gateway
    .get<TResponse<OrderStatusResponse>>(`/payment/order/${id}`)
    .then((res) => res.data)
    .catch((err) => err);
};
