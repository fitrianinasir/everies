import Layout from "@/components/layout";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import React, { useState } from "react";
import { dummyBag } from "@/lib/dummy";
import { FaTrash } from "react-icons/fa6";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import DrawerProduct from "@/components/pages/DrawerProduct";
const BagPage = () => {
  const data = dummyBag[0];
  const [count, setCount] = useState(0);
  return (
    <Layout backUrl="/" className="space-y-5">
      <div className="w-full grid grid-cols-2">
        <Checkbox label="Select All" />
        <Checkbox label="Delete" />
      </div>
      <div className="">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-start gap-2 justify-start">
            <Checkbox />
            <Image
              src={data.product.img[0] || ""}
              width={100}
              height={100}
              alt={data.product.name}
            />
            <div className="flex flex-col gap-1">
              <h1 className="text-xs font-semibold text-everies-primary-10">
                {data.product.name}
              </h1>
              <DrawerProduct
                product={data.product}
                triggerButton={<button>Size L | Variant White</button>}
                count={count}
                setCount={setCount}
              />
            </div>
          </div>
          <FaTrash />
        </div>
      </div>
    </Layout>
  );
};

export default BagPage;
