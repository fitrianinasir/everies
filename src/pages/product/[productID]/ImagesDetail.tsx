import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { cn, formatToRupiah } from "@/lib/utils";
import Image from "next/image";
import ImageItem from "./ImageItem";
import { useProductStore } from "@/store/useProductStore";
import { IoIosArrowBack } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { FaShoppingCart } from "react-icons/fa";

const ImagesDetail = () => {
  const { activeImageIndex, setActiveImageIndex, product } = useProductStore(
    (state) => state
  );
  return (
    <Dialog>
      <DialogTrigger asChild>
        <ImageItem />
      </DialogTrigger>
      <DialogContent className="flex w-full">
        <ImageItem />
        <div className="space-y-4">
          <h1>Annisa Blouse</h1>
          <div className="grid grid-cols-4 gap-2">
            {product?.img?.map((image, index) => (
              <Image
                aria-selected={index === activeImageIndex}
                key={index}
                src={image}
                alt="Product Image"
                className={cn(
                  "cursor-pointer aria-selected:outline-2 aria-selected:outline-amber-400"
                )}
                width={100}
                height={100}
                onClick={() => setActiveImageIndex(index)}
              />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImagesDetail;

export const ImagesDetailMobile = () => {
  const {
    activeImageIndex,
    setActiveImageIndex,
    product,
    setMobileImagesPreview,
  } = useProductStore((state) => state);

  return (
    <div className="absolute inset-0 z-50 flex flex-col justify-between w-screen sm:p-6 text-white h-screen bg-black">
      <div className="flex flex-col items-start justify-between gap-3 p-6">
        <p
          className="text-sm flex items-center gap-2 cursor-pointer"
          onClick={() => setMobileImagesPreview(false)}
        >
          <IoIosArrowBack /> <span>Back</span>
        </p>
        <Carousel>
          <CarouselContent
            highlight={activeImageIndex}
            setHighlight={setActiveImageIndex}
            className="flex flex-row gap-4"
          >
            {product?.img?.map((_, index) => (
              <CarouselItem key={index} className="w-full">
                <Image
                  src={product.img[index]}
                  alt="Product Image"
                  className="w-full h-full object-cover rounded-2xl"
                  width={400}
                  height={400}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <>
        <div className="p-3">
          <div className="px-1.5 py-1 bg-white/50 text-xs rounded-md w-fit">
            {activeImageIndex + 1}/{product.img.length}
          </div>
        </div>
        <Carousel className="">
          <CarouselContent className="gap-2" highlight={activeImageIndex}>
            {product?.img?.map((img, index) => (
              <CarouselItem
                key={index}
                aria-selected={index === activeImageIndex}
                className="basis-1/5 aria-selected:border-2 aria-selected:border-white"
                onClick={() => setActiveImageIndex(index)}
              >
                <Image src={img} alt="Product Image" width={100} height={100} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="flex justify-between mt-3 p-3 items-center bg-everies-primary-30">
          <div className="text-xs">
            <p>{product.name}</p>
            <p className="font-bold">{formatToRupiah(product.price)}</p>
          </div>
          <Button
            variant="outline"
            size="sm"
            leftNode={<FaShoppingCart className="size-3" />}
          >
            Add to Cart
          </Button>
        </div>
      </>
    </div>
  );
};
