import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ImagesDetail, { ImagesDetailMobile } from "./ImagesSection/ImagesDetail";
import { useWindowSize } from "@uidotdev/usehooks";
import BannerImage from "./ImagesSection/BannerImage";
import { useProductStore } from "@/store/useProductStore";

interface ImagesSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

const ImagesSection = ({ className }: ImagesSectionProps) => {
  const { width } = useWindowSize();
  const {
    product,
    activeImageIndex,
    setActiveImageIndex,
    mobileImagesPreview,
    setMobileImagesPreview,
  } = useProductStore((state) => state);

  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollDir, setScrollDir] = useState<"left" | "right" | null>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (scrollDir && containerRef.current) {
      interval = setInterval(() => {
        containerRef.current!.scrollLeft += scrollDir === "right" ? 5 : -5;
      }, 16); // ~60fps
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [scrollDir]);

  useEffect(() => {
    if (mobileImagesPreview) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [mobileImagesPreview]);

  return (
    <div
      className={cn("grid grid-cols-1 gap-2 max-w-full md:max-w-sm", className)}
    >
      {width && width >= 576 ? (
        <ImagesDetail />
      ) : (
        <>
          <BannerImage onClick={() => setMobileImagesPreview(true)} />
          {mobileImagesPreview && <ImagesDetailMobile />}
        </>
      )}
      <div className="hidden relative sm:flex flex-row">
        <div
          className="absolute flex items-center justify-center text-white p-0.5 h-full hover:bg-black/30 bg-black/20 cursor-pointer"
          onMouseEnter={() => setScrollDir("left")}
          onMouseLeave={() => setScrollDir(null)}
        >
          <IoIosArrowBack />
        </div>
        <div
          ref={containerRef}
          className="scrollbar-hide overflow-auto flex flex-row flex-wrap"
        >
          <div className=" flex flex-row gap-3 px-4">
            {product?.img?.map((image, index) => (
              <Image
                aria-selected={index === activeImageIndex}
                src={image}
                alt="Product"
                width={100}
                height={100}
                onMouseEnter={() => setActiveImageIndex(index)}
                className={cn(
                  "rounded-md cursor-pointer aria-selected:outline-2 aria-selected:outline-amber-400"
                )}
              />
            ))}
          </div>
        </div>
        <div
          className="absolute flex items-center justify-center text-white p-0.5 h-full right-0 hover:bg-black/30 bg-black/20 cursor-pointer"
          onMouseEnter={() => setScrollDir("right")}
          onMouseLeave={() => setScrollDir(null)}
        >
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
};

export default ImagesSection;
