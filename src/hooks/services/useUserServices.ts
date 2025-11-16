import { TUserCart } from "@/lib/model";
import {
  createUserCart,
  getUserCart,
  UserCartResponse,
} from "@/services/checkout";
import { TResponse } from "@/services/response";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useCreateUserCart = () => {
  return useMutation<TResponse<TUserCart>, Error, TUserCart>({
    mutationFn: (data: TUserCart) => createUserCart(data),
  });
};

export const useGetUserCart = (userId: number) => {
  return useQuery<TResponse<UserCartResponse[]>, Error>({
    queryKey: [`cart userId-${userId}`],
    queryFn: () => getUserCart(userId),
  });
};
