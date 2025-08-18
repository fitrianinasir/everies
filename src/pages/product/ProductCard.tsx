import { Card } from "@/components/ui/card";
import GeneratedStars from "@/lib/generateStars";
import { TProduct } from "@/lib/model";
import { formatToRupiah } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type TProductCard = {
  data: TProduct;
};
const ProductCard = ({ data }: TProductCard) => {
  return (
    <Link
      href={`/product/${data.id}`}
      className={`space-y-4 h-72 flex justify-end flex-col p-2 transition-all duration-300 bg-[length:250px_250px] hover:bg-[length:300px_300px] bg-no-repeat bg-top`}
      style={{ backgroundImage: `url(${data.img[0]})` }}
    >
      <div className="space-y-3 shadow bg-white rounded-sm p-2">
        <div>
          <h1 className="text-sm font-semibold">{data.name}</h1>
          <GeneratedStars stars={data.rate} />
        </div>
        <div className=" flex justify-between text-xs font-semibold items-center">
          <p>{formatToRupiah(data.price)}</p>
          <p className="">{data.sold} Sold</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
