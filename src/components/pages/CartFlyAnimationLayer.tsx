import { useEffect } from "react";
import { useCartFlyStore } from "@/store/useCartFlyStore";
import { motion } from "framer-motion";
import Image from "next/image";
import { toast } from "sonner";

export const CartFlyAnimationLayer = () => {
  const { flyPayload, clearFly } = useCartFlyStore();

  useEffect(() => {
    if (!flyPayload) return;
    const timer = setTimeout(() => {
      clearFly();
      //   toast.success("Added to cart");
    }, 1000);
    return () => clearTimeout(timer);
  }, [flyPayload, clearFly]);

  if (!flyPayload) return null;

  const { from, to, width, height, img } = flyPayload;
  const fromCenterX = from.left + from.width / 2;
  const fromCenterY = from.top + from.height / 2;

  const toCenterX = to.left + to.width / 2;
  const toCenterY = to.top + to.height / 2;

  const deltaX = toCenterX - fromCenterX;
  const deltaY = toCenterY - fromCenterY;

  console.log(to);
  return (
    <motion.div
      initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
      animate={{ x: deltaX, y: deltaY, scale: 0.1, opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      style={{
        position: "fixed",
        top: from.top,
        left: from.left,
        transform: "translate(-50%, -50%)",
        width,
        height,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    >
      <div style={{ filter: "brightness(1.2)", opacity: 0.8 }}>
        <Image
          src={img}
          alt="Product Image"
          className="w-full h-full object-cover"
          width={400}
          height={400}
        />
      </div>
    </motion.div>
  );
};
