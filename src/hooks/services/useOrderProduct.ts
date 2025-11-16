import { TOrderData } from "@/lib/model";
import {
  getOrderStatus,
  OrderStatusResponse,
  placeOrder,
  PlaceOrderResponse,
} from "@/services/checkout";
import { TResponse } from "@/services/response";
import { useMutation, useQuery } from "@tanstack/react-query";

export const usePlaceOrder = () => {
  return useMutation<TResponse<PlaceOrderResponse>, Error, TOrderData>({
    mutationFn: (data: TOrderData) => placeOrder(data),
  });
};

export const useGetOrderStatus = (id: number) => {
  return useQuery<TResponse<OrderStatusResponse>, Error>({
    queryKey: ["orderStatus", id],
    queryFn: () => getOrderStatus(id),
  });
};
