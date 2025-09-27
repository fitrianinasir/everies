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
import { VariationColor, VariationSize } from "./Variation";
import { TVariationByColor, TVariationBySize } from "@/lib/model";
import { ImageCarousel } from "./ImagesSection/ImagesDetail";
import Image from "next/image";
import { useProductStore } from "@/store/useProductStore";
import { formatToRupiah } from "@/lib/utils";
import { CounterSmall } from "@/components/pages/Counter";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import BannerImage from "./ImagesSection/BannerImage";

type FooterProps = {
  variationByColor: TVariationByColor[];
  variationBySize: TVariationBySize[];
};
const Footer = ({ variationByColor, variationBySize }: FooterProps) => {
  const { product, setMobileImagesPreview } = useProductStore((state) => state);
  const [count, setCount] = useState(0);
  const [openImages, setOpenImages] = useState(false);
  return (
    <div className=" fixed w-screen h-12 grid grid-cols-2 left-0 bottom-0 border-2 text-2xs font-bold text-white border-everies-pink-20 bg-white">
      <Drawer>
        <DrawerTrigger asChild>
          <button className="cursor-pointer text-everies-pink-20">
            ADD TO BAG
          </button>
        </DrawerTrigger>
        <DrawerContent className="space-y-4">
          <div className="grid grid-cols-5 gap-3">
            <div className="col-span-2">
              <Image
                src={product?.img?.[0]}
                width={100}
                height={100}
                alt={product.name}
                className="size-full cursor-pointer"
                onClick={() => setMobileImagesPreview(true)}
              />
            </div>
            <div className="col-span-3 flex flex-col text-sm justify-between text-everies-dark-30">
              <div className="">
                <p>{formatToRupiah(product.price)}</p>
                <span className="text-2xs text-everies-dark-10/50">
                  {product.sold} Sold
                </span>
              </div>
              <CounterSmall count={count} setCount={setCount} maxStock={100} />
            </div>
          </div>
          <VariationColor variation={variationByColor} />
          <VariationSize variation={variationBySize} />
          <DrawerFooter className="pt-4">
            <DrawerClose asChild>
              <Button>ADD TO BAG</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Drawer>
        <DrawerTrigger asChild>
          <button className="cursor-pointer bg-everies-pink-20">BUY NOW</button>
        </DrawerTrigger>
        <DrawerContent className="space-y-4">
          <div className="grid grid-cols-5 gap-3">
            <div className="col-span-2">
              <Image
                src={product?.img?.[0]}
                width={100}
                height={100}
                alt={product.name}
                className="size-full cursor-pointer"
                onClick={() => setMobileImagesPreview(true)}
              />
            </div>
            <div className="col-span-3 flex flex-col text-sm justify-between text-everies-dark-30">
              <div className="">
                <p>{formatToRupiah(product.price)}</p>
                <span className="text-2xs text-everies-dark-10/50">
                  {product.sold} Sold
                </span>
              </div>
              <CounterSmall count={count} setCount={setCount} maxStock={100} />
            </div>
          </div>
          <VariationColor variation={variationByColor} />
          <VariationSize variation={variationBySize} />
          <DrawerFooter className="pt-4">
            <DrawerClose asChild>
              <Button>BUY NOW</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Footer;
