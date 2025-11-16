import { TOrderData } from "@/lib/model";
import { gateway } from "./api";
import { TResponse } from "./response";

export type PlaceOrderResponse = { id: number } & TOrderData;
export const placeOrder = async (data: TOrderData) => {
  return gateway
    .post<TResponse<PlaceOrderResponse>>("/payment", data)
    .then((res) => res.data)
    .catch((err) => err);
};
