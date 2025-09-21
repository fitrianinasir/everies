import { useGeneralStore } from "@/store/useGeneralStore";
import { toast } from "sonner";
const useAddToCartHandler = () => {
  const { setIsBagShaking, bagCounter, setBagCounter } = useGeneralStore(
    (state) => state
  );

  const handleAddToCart = () => {
    setBagCounter(bagCounter + 1);
    setIsBagShaking(true);
    toast.success("Successfully added to cart");
    // Reset shaking after it finishes
    setTimeout(() => {
      setIsBagShaking(false);
    }, 500); // Match this duration with the animation duration
  };

  return { handleAddToCart };
};

export default useAddToCartHandler;
