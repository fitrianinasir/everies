import { cn } from "@/lib/utils";
import ProductCard from "./product/ProductCard";
import ProductLayout from "@/components/layout.product";
import { useGetProducts } from "@/hooks/services/useGetProducts";
import { useRouter } from "next/router";
import { useState } from "react";
import { THomeProducts } from "@/services/response";
import { TProduct } from "@/lib/model";
const Products = () => {
  const router = useRouter();
  const { data: newArrival } = useGetProducts<TProduct[]>({
    newArrivals: true,
  });

  const { data: products } = useGetProducts<THomeProducts>({
    newArrivals: false,
  });
  return (
    <ProductLayout className="space-y-48">
      <div className="space-y-8">
        {" "}
        <div className="space-y-2">
          <h1 className={cn("font-bold text-2xl lg:text-4xl font-michroma")}>
            New Arrivals
          </h1>
          <p className="text-xs lg:text-base max-w-lg">
            New arrivals dropping now! Fresh styles for the fashion-forward
            woman.
          </p>
        </div>
        <div
          className={cn(
            (newArrival?.data || []).length > 1
              ? " [grid-template-columns:repeat(auto-fit,minmax(10rem,1fr))]"
              : "grid-cols-1 xs:grid-cols-2 sm:grid-cols-3",
            "w-full grid md:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4"
          )}
        >
          {newArrival?.data.map((product) => (
            <ProductCard data={product} key={product.id} />
          ))}
        </div>
      </div>

      {Object.keys(products?.data || []).map((category, list) => (
        <div className="flex flex-col gap-16">
          <h1
            className={cn(
              "font-bold text-center text-5xl text-everies-primary-10 tracking-widest cursor-pointer font-meddon hover:scale-110 transition-all"
            )}
            onClick={() => router.push(category)}
          >
            {category}
          </h1>
          <div
            className={cn(
              (products?.data[category as keyof THomeProducts] || []).length > 1
                ? " [grid-template-columns:repeat(auto-fit,minmax(10rem,1fr))]"
                : "grid-cols-1 xs:grid-cols-2 sm:grid-cols-3",
              "w-full grid md:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4"
            )}
          >
            {(products?.data[category as keyof THomeProducts] || []).map(
              (product) => (
                <ProductCard data={product} key={product.id} />
              )
            )}
          </div>
        </div>
      ))}
    </ProductLayout>
  );
};

export default Products;
