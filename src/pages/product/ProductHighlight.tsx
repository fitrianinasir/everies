import { Button } from "@/components/ui/button";
import { TProduct } from "@/lib/model";
import { formatToRupiah } from "@/lib/utils";
import React from "react";

const ProductHighlight = ({ data }: { data: TProduct }) => {
  return (
    <div className="w-full relative h-full space-y-1">
      <h1 className="tracking-[10px] w-full absolute -top-10 left-2 text-everies-primary-30 lg:tracking-[17px] text-xl font-semibold font-bitcount text-center">
        MOST WANTED
      </h1>
      <div className="w-full rounded-lg relative h-full overflow-hidden group cursor-pointer">
        <div
          className="w-full h-96 md:h-[600px] bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-110"
          style={{ backgroundImage: `url(${data?.preview_img})` }}
        />
        <div className="absolute w-[calc(100%-24px)] h-fit left-3 right-3 bottom-3 flex justify-between backdrop-blur-sm p-4 rounded-lg">
          <h1 className="tracking-widest text-everies-secondary-30 uppercase font-semibold">
            {data?.name}
          </h1>
          <p className="text-sm text-everies-secondary-30">
            {formatToRupiah(data?.price)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductHighlight;
