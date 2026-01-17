import GeneratedStars from "@/lib/generateStars";
import { TProduct } from "@/lib/model";
import { cn, formatToRupiah } from "@/lib/utils";
import { useWindowSize } from "@uidotdev/usehooks";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type TProductCard = {
  data: TProduct;
  newArrival?: boolean;
};
const ProductCard = ({ data, newArrival }: TProductCard) => {
  const { width } = useWindowSize();
  return (
    <Link href={`/product/${data.id}`} className="h-fit">
      {/* Card Detail Product */}
      <div
        className={cn(
          "sm:min-w-40 relative h-52 sm:h-60 lg:h-56 overflow-hidden group",
          newArrival ? "w-44" : "w-full"
        )}
      >
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-110"
          style={{ backgroundImage: `url(${data.preview_img})` }}
        />
        {newArrival && (
          <div className="absolute text-xs top-2 left-2 bg-everies-secondary-10 rounded-2xl px-3 py-0.5 text-everies-primary-10">
            New Arrival
          </div>
        )}
      </div>

      <div className="space-y-1 md:space-y-2 w-full xl:max-w-full bg-white rounded-sm p-2">
        <div>
          <h1 className="text-xs sm:text-sm font-semibold truncate">
            {data.name}
          </h1>
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
