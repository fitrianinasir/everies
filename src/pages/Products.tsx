import { michroma } from "@/components/layout";
import { cn } from "@/lib/utils";
import React, { useEffect } from "react";
import { DummyProducts } from "@/lib/dummy";
import ProductCard from "./product/ProductCard";
import ProductLayout from "@/components/layout.product";

const Products = () => {
  return (
    <ProductLayout className="space-y-8">
      <div className="space-y-2">
        <h1 className={cn("font-bold text-2xl", michroma.className)}>
          New Arrivals
        </h1>
        <p className="text-sm max-w-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum velit
          incidunt iure laborum nesciunt. Non reiciendis, laudantium vel modi
          velit dolorem, nihil voluptatem quaerat adipisci numquam sunt
          quibusdam eos hic.
        </p>
      </div>
      <div className="w-full grid [grid-template-columns:repeat(auto-fit,minmax(9rem,1fr))] lg:grid-cols-5 xl:grid-cols-6 gap-3 lg:gap-4">
        {DummyProducts.map((product) => (
          <ProductCard data={product} />
        ))}
      </div>
    </ProductLayout>
  );
};

export default Products;
