import { Card } from "@/components/ui/card";
import GeneratedStars from "@/lib/generateStars";
import { TProduct } from "@/lib/model";
import { formatToRupiah } from "@/lib/utils";
import { useWindowSize } from "@uidotdev/usehooks";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type TProductCard = {
  data: TProduct;
};
const ProductCard = ({ data }: TProductCard) => {
  const { width } = useWindowSize();
  return (
    <Link
      href={`/product/${data.id}`}
      className="shadow hover:shadow-xl"
      // className={`space-y-4 h-48 sm:h-72 flex justify-end items-center flex-col p-2 transition-all duration-300 bg-[length:175px_175px] sm:bg-[length:250px_250px] hover:sm:bg-[length:300px_300px] hover:bg-[length:192px_192px] bg-no-repeat bg-top`}
      // className="size-48 bg-cover"
      // style={{ backgroundImage: `url(${data.img[0]})` }}
    >
      {/* Card Detail Product */}
      <div className="w-full h-48 overflow-hidden group">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-110"
          style={{ backgroundImage: `url(${data.img[0]})` }}
        />
      </div>

      <div className="space-y-1 md:space-y-2 w-full xl:max-w-full bg-white rounded-sm p-2">
        <div>
          <h1 className="text-xs sm:text-sm font-semibold">{data.name}</h1>
          <p className="text-xs sm:text-sm">{formatToRupiah(data.price)}</p>
        </div>
        <div className="flex-row flex justify-between text-2xs sm:text-xs font-semibold items-start sm:items-center">
          <GeneratedStars
            stars={data.rate}
            size={width || 0 < 576 ? "small" : "default"}
          />

          <p className="">{data.sold} Sold</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
