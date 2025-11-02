import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { cn } from "@/lib/utils";
import Image from "next/image";
import ImageItem from "./BannerImage";
import { useProductStore } from "@/store/useProductStore";
import { IoIosArrowBack } from "react-icons/io";

const ImagesDetail = () => {
  const { activeImageIndex, setActiveImageIndex, product } = useProductStore(
    (state) => state
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <ImageItem id="add-to-bag-btn" />
      </DialogTrigger>
      <DialogContent className="flex w-full">
        <ImageItem className="w-96" />
        <div className="space-y-4">
          <h1>Annisa Blouse</h1>
          <div className="grid grid-cols-4 gap-2">
            {product?.detail?.images?.map((image, index) => (
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
    <div className="fixed inset-0 z-[99999] w-screen sm:p-6 text-white h-screen bg-black">
      <div className="fixed flex flex-col items-start justify-between gap-3 p-6">
        <p
          className="text-sm flex items-center gap-2 cursor-pointer"
          onClick={() => setMobileImagesPreview(false)}
        >
          <IoIosArrowBack /> <span>Back</span>
        </p>
      </div>
      <div className=" justify-center flex-col h-full flex">
        <Carousel>
          <CarouselContent
            highlight={activeImageIndex}
            setHighlight={setActiveImageIndex}
            className="flex flex-row gap-4"
          >
            {(product.detail.images || []).map((_, index) => (
              <CarouselItem key={index} className="w-full">
                <Image
                  src={(product.detail.images || [])[index]}
                  alt="Product Image"
                  className="w-full h-full object-cover rounded-2xl"
                  width={400}
                  height={400}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="p-3">
          <div className="px-1.5 py-1 bg-white/50 text-xs rounded-md w-fit">
            {activeImageIndex + 1}/{(product.detail.images || []).length}
          </div>
        </div>
        <Carousel className="">
          <CarouselContent className="gap-2" highlight={activeImageIndex}>
            {(product.detail.images || []).map((img, index) => (
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
      </div>
    </div>
  );
};
