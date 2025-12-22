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
    <ProductLayout className="space-y-32 xl:space-y-64">
      <div className="space-y-8">
        {" "}
        <div className="space-y-2">
          <h1 className={cn("font-bold text-2xl font-michroma")}>
            New Arrivals
          </h1>
          <p className="text-sm max-w-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum velit
            incidunt iure laborum nesciunt. Non reiciendis, laudantium vel modi
            velit dolorem, nihil voluptatem quaerat adipisci numquam sunt
            quibusdam eos hic.
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

      <div className="flex flex-col gap-12 xl:flex-row">
        <div className="space-y-4">
          <h1
            className={cn(
              "font-bold text-center text-2xl cursor-pointer font-michroma hover:font-bold hover:text-everies-pink-20"
            )}
            onClick={() => router.push("/products/clothes")}
          >
            CLOTHES
          </h1>
          <div className="hidden xl:block bg-clothes w-64 h-[510px]"></div>
        </div>
        <div
          className={cn(
            (products?.data.clothes || []).length > 1
              ? " [grid-template-columns:repeat(auto-fit,minmax(10rem,1fr))]"
              : "grid-cols-1 xs:grid-cols-2 sm:grid-cols-3",
            "w-full grid md:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4"
          )}
        >
          {products?.data.clothes.map((product) => (
            <ProductCard data={product} key={product.id} />
          ))}
        </div>
      </div>

      <div className="flex flex-col-reverse gap-12 xl:flex-row">
        <div
          className={cn(
            (products?.data.jewellery || []).length > 1
              ? " [grid-template-columns:repeat(auto-fit,minmax(10rem,1fr))]"
              : "grid-cols-1 xs:grid-cols-2 sm:grid-cols-3",
            "w-full grid md:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4"
          )}
        >
          {products?.data.jewellery
            .filter((i) => i.category === "jewellery")
            .map((product) => (
              <ProductCard data={product} key={product.id} />
            ))}
        </div>
        <div className="space-y-4">
          <h1
            className={cn(
              "font-bold text-center text-2xl cursor-pointer font-michroma hover:font-bold hover:text-everies-pink-20"
            )}
            onClick={() => router.push("/products/jewelley")}
          >
            JEWELLERY
          </h1>
          <div className="hidden xl:block bg-clothes w-64 h-[510px]"></div>
        </div>
      </div>

      <div className="flex flex-col gap-12 xl:flex-row">
        <div className="space-y-4">
          <h1
            className={cn(
              "font-bold text-center text-2xl cursor-pointer font-michroma hover:font-bold hover:text-everies-pink-20"
            )}
            onClick={() => router.push("/products/clothes")}
          >
            BAGS
          </h1>
          <div className="hidden xl:block bg-clothes w-64 h-[510px]"></div>
        </div>
        <div
          className={cn(
            (products?.data.bags || []).length > 1
              ? " [grid-template-columns:repeat(auto-fit,minmax(10rem,1fr))]"
              : "grid-cols-1 xs:grid-cols-2 sm:grid-cols-3",
            "w-full grid md:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4"
          )}
        >
          {products?.data.bags.map((product) => (
            <ProductCard data={product} key={product.id} />
          ))}
        </div>
      </div>
    </ProductLayout>
  );
};

export default Products;
