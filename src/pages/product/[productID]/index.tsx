import Layout from "@/components/layout";
import React from "react";
import ImagesSection from "./ImagesSection";
import { DummyProduct } from "@/lib/dummy";
import GeneratedStars from "@/lib/generateStars";
import { formatToRupiah } from "@/lib/utils";

const ProductDetail = () => {
  const dummyData = DummyProduct; // Assuming you want to display the first product's details
  return (
    <Layout className="p-8 flex flex-col md:flex-row  gap-10">
      <ImagesSection className="w-full md:w-[35vw]" images={dummyData.img} />
      <div className="col-span-2 flex flex-col gap-4">
        <div className="">
          <h1 className="font-bold text-2xl">{dummyData.name}</h1>
          <div className="flex flex-row gap-2 items-center">
            <GeneratedStars stars={dummyData.rate} />
            <span className="text-sm font-semibold text-gray-500">
              {dummyData.sold} Sold
            </span>
          </div>
        </div>
        <h2 className="font-bold text-2xl">
          {formatToRupiah(dummyData.price)}
        </h2>
      </div>
    </Layout>
  );
};

export default ProductDetail;
