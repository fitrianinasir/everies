import { QueryClient } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";
export const queryClient = new QueryClient();
export const gateway = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
});
