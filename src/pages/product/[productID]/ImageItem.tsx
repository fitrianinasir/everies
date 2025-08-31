import { useProductStore } from "@/store/useProductStore";
import Image from "next/image";

interface ImageItemProps extends React.HTMLAttributes<HTMLDivElement> {}

const ImageItem = ({ ...props }: ImageItemProps) => {
  const { activeImageIndex, setActiveImageIndex, product } = useProductStore(
    (state) => state
  );
  return (
    <div className="" {...props}>
      <Image
        src={product.img?.[activeImageIndex]}
        alt="Product Image"
        className="w-full cursor-pointer h-auto object-cover rounded-2xl"
        width={500}
        height={500}
      />
    </div>
  );
};

export default ImageItem;
