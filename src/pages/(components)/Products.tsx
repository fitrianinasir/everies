import { michroma } from "@/components/layout";
import { cn } from "@/lib/utils";
import React from "react";

const Products = () => {
  return (
    <div className="w-screen h-screen bg-white p-10">
      <div className="space-y-2">
        <h1 className={cn("font-bold text-2xl", michroma.className)}>
          New Arrivals
        </h1>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum velit
          incidunt iure laborum nesciunt. Non reiciendis, laudantium vel modi
          velit dolorem, nihil voluptatem quaerat adipisci numquam sunt
          quibusdam eos hic.
        </p>
      </div>
    </div>
  );
};

export default Products;
