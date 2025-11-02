import { TVariationByColor, TVariationBySize } from "@/lib/model";
import { useProductStore } from "@/store/useProductStore";
import { HTMLAttributes, useState } from "react";
import { Button } from "@/components/ui/button";
import DrawerProduct from "@/components/pages/DrawerProduct";
import { motion, useAnimation } from "framer-motion";
import { useCartFlyStore } from "@/store/useCartFlyStore";
import { toast } from "sonner";

type FooterProps = {
  variationByColor: TVariationByColor[];
  variationBySize: TVariationBySize[];
};

const AddToBagButton = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className="cursor-pointer text-everies-pink-20 flex justify-center items-center"
    {...props}
  >
    ADD TO BAG
  </div>
);

const BuyNowButton = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className="cursor-pointer bg-everies-pink-20 items-center flex justify-center"
    {...props}
  >
    BUY NOW
  </div>
);

const Footer = ({ variationByColor, variationBySize }: FooterProps) => {
  const { selectedColor, selectedSize, product } = useProductStore(
    (state) => state
  );
  const [count, setCount] = useState(0);
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
            onClick={() => console.log("buy now", selectedColor, selectedSize)}
          />
        </>
      ) : (
        <>
          <DrawerProduct
            open={openDrawer1}
            onOpenChange={setOpenDrawer1}
            product={product}
            triggerButton={<AddToBagButton />}
            count={count}
            setCount={setCount}
            variationByColor={variationByColor}
            variationBySize={variationBySize}
            footerButton={<Button>ADD TO BAG</Button>}
          />
          <DrawerProduct
            open={openDrawer2}
            onOpenChange={setOpenDrawer2}
            product={product}
            triggerButton={<BuyNowButton />}
            count={count}
            setCount={setCount}
            variationByColor={variationByColor}
            variationBySize={variationBySize}
            footerButton={<Button>BUY NOW</Button>}
          />
        </>
      )}
    </div>
  );
};

export default Footer;
