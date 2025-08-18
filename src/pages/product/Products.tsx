import { michroma } from "@/components/layout";
import { cn } from "@/lib/utils";
import React, { useEffect } from "react";
import ProductLayout from "./layout";
import { DummyProducts } from "@/lib/dummy";
import ProductCard from "./ProductCard";

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
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
        {DummyProducts.map((product) => (
          <ProductCard data={product} />
        ))}
      </div>
    </ProductLayout>
  );
};

export default Products;
