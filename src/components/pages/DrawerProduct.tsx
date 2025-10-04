import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { TProduct, TVariationByColor, TVariationBySize } from "@/lib/model";
import { formatToRupiah } from "@/lib/utils";
import Image from "next/image";
import { CounterSmall } from "./Counter";
import { VariationColor, VariationSize } from "./Variation";
import { Dispatch, SetStateAction } from "react";

type DrawerProductProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  triggerButton: React.ReactNode;
  footerButton?: React.ReactNode;
  product: TProduct;
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  variationByColor: TVariationByColor[];
  variationBySize: TVariationBySize[];
};
const DrawerProduct = ({
  open,
  onOpenChange,
  triggerButton,
  footerButton,
  product,
  count,
  setCount,
  variationByColor,
  variationBySize,
}: DrawerProductProps) => {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerTrigger asChild>{triggerButton}</DrawerTrigger>
      <DrawerContent className="space-y-4">
        <div className="grid grid-cols-5 gap-3">
          <div className="col-span-2">
            <Image
              src={product?.img?.[0]}
              width={100}
              height={100}
              alt={product.name}
              className="size-full cursor-pointer"
              // onClick={() => setMobileImagesPreview(true)}
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
          <DrawerClose asChild>{footerButton}</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerProduct;
