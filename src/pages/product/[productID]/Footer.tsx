import { TVariationByColor, TVariationBySize } from "@/lib/model";
import { useProductStore } from "@/store/useProductStore";
import { Dispatch, HTMLAttributes, SetStateAction, useState } from "react";
import { Button } from "@/components/ui/button";
import DrawerProduct from "@/components/pages/DrawerProduct";
import { motion, useAnimation } from "framer-motion";
import { useCartFlyStore } from "@/store/useCartFlyStore";
import { toast } from "sonner";

type FooterProps = {
  variationByColor: TVariationByColor[];
  variationBySize: TVariationBySize[];
  buyNowHandler: () => void;
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
};

const AddToBagButton = ({
  className,
  ...props
}: React.ComponentProps<"button">) => (
  <button
    className="cursor-pointer text-everies-pink-20 flex justify-center items-center"
    {...props}
  >
    ADD TO BAG
  </button>
);

export const BuyNowButton = ({
  className,
  ...props
}: React.ComponentProps<"button">) => (
  <button
    className={`cursor-pointer bg-everies-pink-20 items-center flex justify-center ${
      className || ""
    }`}
    {...props}
  >
    BUY NOW
  </button>
);

const Footer = ({
  quantity,
  setQuantity,
  variationByColor,
  variationBySize,
  buyNowHandler,
}: FooterProps) => {
  const { selectedColor, selectedSize, product } = useProductStore(
    (state) => state
  );
  const [openDrawer1, setOpenDrawer1] = useState(false);
  const [openDrawer2, setOpenDrawer2] = useState(false);

  const { triggerFly, setFlyValue } = useCartFlyStore((s) => s);

  const handleClick = () => {
    const fromEl = document.getElementById("add-to-bag-btn");
    const toEl = document.getElementById("cart-icon");

    console.clear();
    console.log(fromEl, toEl);
    if (fromEl && toEl) {
      const fromRect = fromEl.getBoundingClientRect();
      const toRect = toEl.getBoundingClientRect();

      setFlyValue(product.detail.images[0]);
      triggerFly({
        from: fromRect,
        to: toRect,
        width: fromRect.width,
        height: fromRect.height,
        img: product.detail.images[0],
      });
    }
  };

  return (
    <div className=" fixed w-screen h-12 grid grid-cols-2 left-0 bottom-0 border-2 text-2xs font-bold text-white border-everies-pink-20 bg-white">
      {selectedColor && selectedSize && !openDrawer1 && !openDrawer2 ? (
        <>
          <AddToBagButton
            id="add-to-bag-btn"
            onClick={() => {
              console.log("add to bag", selectedColor, selectedSize);
              handleClick();
            }}
          />
          <BuyNowButton
            disabled={!selectedColor && !selectedSize}
            onClick={buyNowHandler}
          />
        </>
      ) : (
        <>
          <DrawerProduct
            open={openDrawer1}
            onOpenChange={setOpenDrawer1}
            product={product}
            triggerButton={<AddToBagButton />}
            quantity={quantity}
            setQuantity={setQuantity}
            variationByColor={variationByColor}
            variationBySize={variationBySize}
            footerButton={<Button>ADD TO BAG</Button>}
          />
          <DrawerProduct
            open={openDrawer2}
            onOpenChange={setOpenDrawer2}
            product={product}
            triggerButton={<BuyNowButton />}
            quantity={quantity}
            setQuantity={setQuantity}
            variationByColor={variationByColor}
            variationBySize={variationBySize}
            footerButton={
              <Button
                disabled={!selectedColor && !selectedSize}
                onClick={buyNowHandler}
              >
                BUY NOW
              </Button>
            }
          />
        </>
      )}
    </div>
  );
};

export default Footer;
