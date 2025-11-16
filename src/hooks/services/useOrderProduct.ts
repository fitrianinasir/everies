import { TOrderData } from "@/lib/model";
import { placeOrder, PlaceOrderResponse } from "@/services/checkout";
import { TResponse } from "@/services/response";
import { useMutation } from "@tanstack/react-query";

export const usePlaceOrder = () => {
  return useMutation<TResponse<PlaceOrderResponse>, Error, TOrderData>({
    mutationFn: (data: TOrderData) => placeOrder(data),
  });
};
