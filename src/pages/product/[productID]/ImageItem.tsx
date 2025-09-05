import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useProductStore } from "@/store/useProductStore";
import Image from "next/image";

interface ImageItemProps extends React.HTMLAttributes<HTMLDivElement> {}

const ImageItem = ({ ...props }: ImageItemProps) => {
  const { activeImageIndex, setActiveImageIndex, product } = useProductStore(
    (state) => state
  );
  return (
    <Carousel {...props}>
      <CarouselContent
        showLabel
        highlight={activeImageIndex}
        setHighlight={setActiveImageIndex}
        className="flex flex-row gap-4"
      >
        {product?.img?.map((_, index) => (
          <CarouselItem key={index} className="w-full">
            <Image
              src={product.img[index]}
              alt="Product Image"
              className="w-full h-full object-cover"
              width={400}
              height={400}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ImageItem;
