import { useGetProductsWithDetail } from "@/hooks/services/useGetProducts";
import React from "react";

const Products = () => {
  const { data } = useGetProductsWithDetail();
  console.log("data", data);
  return <div>Products</div>;
};

export default Products;
